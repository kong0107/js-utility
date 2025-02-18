/**
 * @module kongUtilAsync
 */
import utilAsync from "./core.mjs";
import {waitForEvent} from "./event.mjs";

export * from "./core.mjs";

/**
 * Simulate `util.promisify` of `Node.js`.
 * @param {Function} func - a function taking an error-first callback as its final argument in all cases.
 * @param {boolean} [moreThanOneData=false] - wheather callback has more than one arguments having data.
 * @returns {Function} a function returns promise
 */
export function promisify(func, moreThanOneData = false) {
    return (...args) => {
        return new Promise((resolve, reject) =>
            func(...args, (err, ...data) => {
                if (err) return reject(err);
                resolve(moreThanOneData ? data : data[0]);
            })
        );
    };
}

/**
 * Resolves after `ms` milliseconds.
 * @param {integer} ms
 * @param {*} [fulfill] - what to be resolved
 * @returns {Promise} never rejects
 */
export function wait(ms, fulfill) {
    return new Promise(resolve => setTimeout(resolve, ms, fulfill));
}

/**
 * Resolves until the callback runs or the promise resolve, or rejects with an abort event until `timeout` milliseconds passed. Also a shortcut to `waitForEvent`.
 * @param {Promise | Function | Object} sth - if neither a promise nor a function, then `waitForEvent` is used.
 * @param {number | string} [timeout] non-positive number and NaN would cause the promise never reject
 * @returns {Promise}
 *
 * @example /// rejects if `fetch()` does not resolves in 1 second.
    waitFor(fetch(myURL), 1000)
    .then(resp => console.log("success"), err => console.error(err));
 *
 * @example /// similar to "promisify and run", but callbacks could be not error-first
    waitFor(cb => chrome.runtime.sendMessage(myMessage, cb))
    .then(resp => doSomething(resp));
 *
 * @example /// rejects if no click to `document.body` in 1 second
    waitFor({target: document.body, type: "click"}, 1000)
    .then(() => console.log("a click event in 1 second is detected"));
 *
 * @example /// same as above
    waitForEvent(document.body, "click", 1000)
    .then(() => console.log("a click event in 1 second is detected"));
 *
 */
export function waitFor(sth, timeout) {
    let exe;
    if (sth instanceof Promise) exe = r => sth.then(r);
    else if (sth instanceof Function) exe = r => sth(r);
    else {
        if (sth instanceof EventTarget) return waitForEvent(...arguments);
        const {target, type, ...options} = sth;
        options.timeout = timeout;
        return waitForEvent(target, type, options);
    }
    if (exe) return new Promise((resolve, reject) => {
        setTimeout(exe, 0, resolve);
        if (timeout > 0) setTimeout(reject, timeout, new Event("abort"));
    });
}

/**
 * Keeps calling `asyncFunc` until it returns true to resolve; or timeout to reject.
 * @param {Function} asyncFunc - a function returns a promise
 * @param {number} checkInterval - in milliseconds
 * @param {number} timeout - in milliseconds; non-positive means forever.
 */
export async function waitUntilTrue(asyncFunc, checkInterval = 100, timeout = 0) {
    return new Promise(async (resolve, reject) => {
        let result;
        if (result = await asyncFunc()) return resolve(result);

        let timeoutID;
        const wrapper = async function () {
            if (result = await asyncFunc()) return resolve(result);
            timeoutID = setTimeout(wrapper, checkInterval);
        };
        timeoutID = setTimeout(wrapper, checkInterval);

        if (timeout > 0) {
            setTimeout(() => {
                clearTimeout(timeoutID);
                reject();
            }, timeout);
        }
    });
}

/**
 * Convert an async function by appending an argument represents time limit.
 * @param {Function} asyncFunc - a function returns a promise
 * @param {number} timeout - in milliseconds
 * @returns {Function} receiving same arguments as the origin, but the returned promise would auto-reject after `timeout` milliseconds
 *
 * @example /// convert `fetch()` to auto-reject after 3 seconds.
    const fetchAutoReject = addTimeLimit(fetch, 3000);
 *
 */
export function addTimeLimit(asyncFunc, timeout) {
    return function(...args) {
        const promise = asyncFunc(...args);
        return waitFor(promise, timeout);
    };
}


Object.assign(utilAsync, {
    promisify, wait, waitFor, waitUntilTrue, addTimeLimit
});

export default utilAsync;
