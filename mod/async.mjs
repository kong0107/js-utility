import {waitForEvent} from "./event.mjs";

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
                if(err) return reject(err);
                resolve(moreThanOneData ? data : data[0]);
            })
        );
    };
}

/**
 * Resolves after `ms` milliseconds.
 * @param {integer} ms
 * @returns {Promise} never rejects
 */
export function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Resolves until the callback runs or the promise resolve, or rejects until `timeLimit` milliseconds passed. Also a shortcut to `waitForEvent`.
 * @param {Promise | Function | Object} sth - if neither a promise nor a function, then `waitForEvent` is used.
 * @param {number | string} [timeLimit] non-positive number and NaN would cause the promise never reject
 * @param {*} [reason = new Error("timeout")] rejected reason
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
export function waitFor(sth, timeLimit, reason = new Error("timeout")) {
    let exe;
    if(sth instanceof Promise) exe = r => sth.then(r);
    else if(sth instanceof Function) exe = r => sth(r);
    else {
        if(sth instanceof EventTarget) return waitForEvent(...arguments);
        const {target, type, ...options} = sth;
        return waitForEvent(target, type, options, timeLimit, reason);
    }
    if(exe) return new Promise((resolve, reject) => {
        exe(resolve);
        if(timeLimit > 0) setTimeout(reject, timeLimit, reason);
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
export function addTimeLimit(asyncFunc, timeLimit, reason) {
    return function(...args) {
        const promise = asyncFunc(...args);
        return waitFor(promise, timeLimit, reason);
    };
}


const output = {
    promisify, wait, waitFor, addTimeLimit
};

if(typeof window === "object" && window === globalThis)
    Object.assign(window, output);

export default output;
