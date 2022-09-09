/**
 * Shortcut for `EventTarget.addEventListner`.
 * @param {EventTarget} target
 * @param  {string} eventType
 * @param  {Function} listener
 * @param  {Object | boolean} options
 * @returns {undefined}
 */
export const listen = (target, ...args) => target.addEventListener(...args);

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
    waitForEvent("click", document.body, null, 1000)
    .then(() => console.log("a click event in 1 second is detected"))
    .catch(() => console.log("timeout"));
 *
 */
export function waitForEvent(type, target, options, timeLimit, reason = new Error("timeout")) {
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


const output = {
    listen, waitForEvent
};

if(typeof window === "object" && window === globalThis)
    Object.assign(window, output);

export default output;