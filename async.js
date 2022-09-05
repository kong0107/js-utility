/**
 * Resolves after `ms` milliseconds.
 * @param {integer} ms
 * @returns {Promise} never rejects
 */
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Resolves until an `eventType` event is dispatched to `target`, or reject until `timeLimit` milliseconds has passed.
 * @param {string} eventType
 * @param {EventTarget} target
 * @param {number} [timeLimit] non-positive number and NaN would cause the promise never reject
 * @returns {Promise.<Event>}
 *
 */
function waitFor(eventType, target, timeLimit) {
    return new Promise((resolve, reject) => {
        target.addEventListener(eventType, resolve, {once: true});
        if(timeLimit > 0) {
            const timeoutID = setTimeout(reject, timeLimit, new Error("timeout"));
            target.addEventListener(eventType, () => clearTimeout(timeoutID), {once: true});
            /**
             * [MDN](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#return_value) says:
             * > It is guaranteed that a timeoutID value will never be reused by a subsequent call to setTimeout() or setInterval() on the same object (a window or a worker).
             *
             * Therefore it's OK to leave this listener to be triggered even after reject.
             */
        }
    });
}
