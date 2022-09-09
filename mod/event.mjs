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
 * @param {EventTarget} target
 * @param {string} type
 * @param {Object | boolean} [options] - used in `EventTarget.addEventListener()`
 * @param {number | string} [timeLimit] - non-positive number and NaN would cause the promise never reject
 * @param {*} [reason = new Error("timeout")] - rejected reason; meaningless if `timeLimit` is invalid
 * @returns {Promise.<Event>}
 *
 * @example /// rejects if no click to `document.body` in 1 second
    waitForEvent(document.body, "click", 1000)
    .then(() => console.log("a click event in 1 second is detected"));
 *
 */
export function waitForEvent(target, type, ...rest) {
    let options, timeLimit, reason;
    if(rest.length && isNaN(rest[0])) {
        options = (typeof rest[0] === "object")
            ? Object.assign({}, rest[0])
            : {capture: !!rest[0]}
        ;
        rest.splice(0, 1);
    }
    else options = {capture: false};
    options.once = true;
    timeLimit = rest[0] || 0;
    reason = rest[1] || new Error("timeout");

    return new Promise((resolve, reject) => {
        listen(target, type, resolve, options);
        if(timeLimit > 0) setTimeout(reject, timeLimit, reason);
    });
}


const output = {
    listen, waitForEvent
};

if(typeof window === "object" && window === globalThis)
    Object.assign(window, output);

export default output;