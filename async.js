/**
 * Resolves after `ms` milliseconds.
 * @param {integer} ms
 * @returns {Promise} never rejects
 */
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Resolves until `sth` returns, or reject until `timeLimit` milliseconds has passed.
 * @param {Promise | Function | ListenerInfo} sth
 * @param {number} [timeLimit] non-positive number and NaN would cause the promise never reject
 * @param {any} [reason = new Error("timeout")] rejected reason
 * @returns {Promise.<Event>}
 */
function waitFor(sth, timeLimit, reason = new Error("timeout")) {
    let exe;
    if(sth instanceof Promise) exe = r => sth.then(r);
    else if(sth instanceof Function) exe = r => sth(r);
    else {
        const {type, target, capture = false, useCapture = false} = sth;
        console.assert(typeof type === "string");
        console.assert(target instanceof EventTarget);
        exe = r => target.addEventListener(type, r, {once: true, capture}, useCapture);
    }
    return new Promise((resolve, reject) => {
        exe(resolve);
        if(timeLimit > 0) setTimeout(reject, timeLimit, reason);
    });
}


/**
 * @typedef ListenerInfo
 * @property {string} type
 * @property {EventTarget} target
 * @property {boolean} [capture = false]
 * @property {boolean} [useCapture = false]
 */
