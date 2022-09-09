/**
 * Simulate `util.promisify` of `Node.js`.
 * @param {Function} func - a function taking an error-first callback as its final argument in all cases.
 * @param {boolean} [moreThanOneData=false] - wheather callback has more than one arguments having data.
 * @returns {Function} a function returns promise
 */
function promisify(func, moreThanOneData = false) {
    return (...args) => {
        return new Promise((resolve, reject) =>
            func(...args, (err, ...data) => {
                if(err) return reject(err);
                resolve(moreThanOneData ? data : data[0]);
            })
        );
    };
}

/**
 * Shortcut for `EventTarget.addEventListner`.
 * @param {EventTarget} target
 * @param  {string} eventType
 * @param  {Function} listener
 * @param  {Object | boolean} options
 * @returns {undefined}
 */
const listen = (target, ...args) => target.addEventListener(...args);

/**
 * Resolves after `ms` milliseconds.
 * @param {integer} ms
 * @returns {Promise} never rejects
 */
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Resolves until the callback runs or the promise resolve, or rejects until `timeLimit` milliseconds passed. Also an alias of `waitForEvent`.
 * @param {Promise | Function | Object} sth - if neither a promise nor a function, then `waitForEvent` is used.
 * @param {number | string} [timeLimit] non-positive number and NaN would cause the promise never reject
 * @param {*} [reason = new Error("timeout")] rejected reason
 * @returns {Promise}
 *
 * @example /// rejects if `fetch()` does not resolves in 1 second.
    await waitFor(fetch(myURL), 1000);
 *
 * @example /// similar to "promisify and run", but callbacks could be not error-first
    waitFor(cb => chrome.runtime.sendMessage(myMessage, cb))
    .then(response => doSomething(response));
 *
 */
function waitFor(sth, timeLimit, reason = new Error("timeout")) {
    let exe;
    if(sth instanceof Promise) exe = r => sth.then(r);
    else if(sth instanceof Function) exe = r => sth(r);
    else {
        if(typeof sth === "string") return waitForEvent(...arguments);
        const {type, target, ...options} = sth;
        return waitForEvent(type, target, options, timeLimit, reason);
    }
    return new Promise((resolve, reject) => {
        exe(resolve);
        if(timeLimit > 0) setTimeout(reject, timeLimit, reason);
    });
}

/**
 * Resolves to the event dispatched to `target`, or rejects if `timeLimit` milliseconds passed.
 * @param {string} type
 * @param {EventTarget} target
 * @param {Object} options - used in `EventTarget.addEventListener()`
 * @param {number | string} [timeLimit] non-positive number and NaN would cause the promise never reject
 * @param {*} [reason = new Error("timeout")] rejected reason
 * @returns {Promise.<Event>}
 *
 * @example /// rejects if no click to `document.body` in 1 second
    waitForEvent({type: "click", target: document.body}, 1000)
    .then(() => console.log("a click event in 1 second is detected"));
    .catch(() => console.log("timeout"));

 * @example /// same as above
    waitFor("click", document.body, null, 1000)
    .then(() => console.log("a click event in 1 second is detected"))
    .catch(() => console.log("timeout"));
 *
 */
function waitForEvent(type, target, options, timeLimit, reason = new Error("timeout")) {
    let controller;
    if(typeof options !== object) options = {capture: !!options};
    options = Object.assign({}, options, {once: true}); // don't modify the origin object
    if(timeLimit > 0 && !(options.signal instanceof AbortSignal)) {
        controller = new AbortController();
        options.signal = controller.signal;
    }
    return new Promise((resolve, reject) => {
        listen(target, type, resolve, options);
        if(timeLimit > 0) setTimeout(() => {
            reject(reason);
            if(controller) controller.abort(reason);
        }, timeLimit);
    });
}


/**
 * Convert an async function by appending an argument represents time limit.
 * @param {Function} asyncFunc - a function returns a promise
 * @param {number} timeLimit - in milliseconds
 * @param {*} [reason = new Error("timeout")] - rejected reason
 * @returns {Function} receiving same arguments as the origin, but the returned promise would auto-reject after `timeLimit` milliseconds
 *
 * @example /// convert `fetch()` to auto-reject after 3 seconds.
    const fetchAutoReject = addTimeLimit(fetch, 3000);
 *
 */
function addTimeLimit(asyncFunc, timeLimit, reason) {
    return function(...args) {
        const promise = asyncFunc(...args);
        return waitFor(promise, timeLimit, reason);
    };
}

export default {
    promisify, listen,
    wait, waitFor, waitForEvent,
    addTimeLimit
};
