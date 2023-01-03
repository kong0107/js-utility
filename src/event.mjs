/**
 * @module kongUtilEvent
 */
import utilEvent from "./core.mjs";

export * from "./core.mjs";

/**
 * @func listen
 * @desc Shortcut to `EventTarget.addEventListner`.
 * @param {EventTarget} target
 * @param  {...any} args - arguments for `addEventListener`
 * @returns {void}
 */
export function listen(target, ...args) {
    target.addEventListener(...args);
};

/**
 * @func unlisten
 * @desc Shortcut to `EventTarget.removeEventListener`
 * @param {EventTarget} target
 * @param  {...any} args - arguments for `removeEventListener`
 * @returns {void}
 */
export function unlisten(target, ...args) {
    target.removeEventListener(...args);
};

/**
 * @func waitForEvent
 * @desc Resolves to the event, or rejects if `timeout` milliseconds passed.
 * @param {EventTarget} target
 * @param {string} type
 * @param {number | string | boolean | Object} [options]
 *  If omitted or being a non-positive number, the promise would never reject.
 *  If it's a positive number or a numeric string, the value is treated as the timeout.
 *  If it's a boolean, the value is used as `useCapture` for `EventTarget.addEventListener`.
 *  If it's an object, the property except the followings are used as `options` for `EventTarget.addEventListener`.
 * @param {number | string} [options.timeout] - timeout in milliseconds
 * @param {boolean} [options.preventDefault] - wheather to call `Event.preventDefault`
 * @param {boolean} [options.stopPropagation] - wheather to call `Event.stopPropagation`
 * @param {boolean} [options.stopImmediatePropagation] - wheather to call `Event.stopImmediatePropagation`
 *
 * @returns {Promise.<Event>}
 *
 * @example /// rejects if no click to `document.body` in 1 second
    waitForEvent(document.body, "click", 1000)
    .then(() => console.log("a click event in 1 second is detected"));
 *
 */
export function waitForEvent(target, type, options) {
    let timeout;
    switch(typeof options) {
        case "undefined":   timeout = 0;                options = {};   break;
        case "number":      timeout = options;          options = {};   break;
        case "string":      timeout = parseInt(options);options = {};   break;
        case "boolean":     timeout = 0;                options = {capture: options}; break;
        case "object":      timeout = options.timeout;                  break;
        default: throw TypeError();
    }
    options.once = true;
    return new Promise((resolve, reject) => {
        const listener = event => {
            if(options.preventDefault) event.preventDefault();
            if(options.stopPropagation) event.stopPropagation();
            if(options.stopImmediatePropagation) event.stopImmediatePropagation();
            resolve();
        };
        listen(target, type, listener, options);
        if(timeout > 0) setTimeout(() => {
            unlisten(target, listener, options);
            const event = new Event("abort");
            target.dispatchEvent(event);
            reject(event);
        }, timeout);
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


Object.assign(utilEvent, {
    listen, waitForEvent,
    extendEventTargetPrototype
});

export default utilEvent;
