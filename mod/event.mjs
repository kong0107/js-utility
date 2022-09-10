/**
 * @module utilEvent
 */
import kongUtil from "./core.mjs";

/**
 * @func listen
 * @desc Shortcut to `EventTarget.addEventListner`.
 * @param {EventTarget} target
 * @param  {...any} args - arguments for `addEventListener`
 * @returns {undefined}
 */
export const listen = (target, ...args) => target.addEventListener(...args);

/**
 * @func unlisten
 * @desc Shortcut to `EventTarget.removeEventListener`
 * @param {EventTarget} target
 * @param  {...any} args - arguments for `removeEventListener`
 * @returns {undefined}
 */
export const unlisten = (target, ...args) => target.removeEventListener(...args);

/**
 * @func waitForEvent
 * @desc Resolves to the event, or rejects if `timeLimit` milliseconds passed.
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
        const listener = event => {
            if(options.preventDefault) event.preventDefault();
            if(options.stopPropagation) event.stopPropagation();
            if(options.stopImmediatePropagation) event.stopImmediatePropagation();
            resolve();
        };
        listen(target, type, listener, options);
        if(timeLimit > 0) setTimeout(() => {
            unlisten(target, listener, options);
            reject(reason);
        }, timeLimit);
    });
};

/**
 * @func extendEventTargetPrototype
 * @desc Add above methods to `EventTarget` class.
 */
export const extendEventTargetPrototype = () =>
    Object.assign(EventTarget.prototype, {
        listen: EventTarget.prototype.addEventListener,
        unlisten: EventTarget.prototype.removeEventListener,
        waitFor: function(...args) { return waitForEvent(this, ...args); }
    })
;


Object.assign(kongUtil, {
    listen, waitForEvent,
    extendEventTargetPrototype
});

export default kongUtil;
