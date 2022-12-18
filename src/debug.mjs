/**
 * @module kongUtilDebug
 */
import utilDebug from "./core.mjs";

export * from "./core.mjs";

/**
 * Shortcut to `() => alert(msg)`
 * @param {string} msg
 *
 * @example /// alert later
    setTimeout(alerter("wow"), 1000);
    setTimeout(() => alert("wow"), 1000); //< old way
 *
 */
export function alerter(msg) {
    return () => {
        alert(msg);
        return msg;
    };
}

/**
 * Shortcut to `() => console.debug(...)` but returns the function again
 * @param  {...any} - arguments to `console.debug`
 * @returns {Function} - a function call `console.debug` and returns its arguments
 *
 * @example /// useful for promise which resolves nothing
    fsPromises.unlink(someFileToDelete)
    .then(logger("success"))
    .catch(logger("failure"));
 *
 * @example /// pass throught some promise resolves
    fetch(someURL)
    .then(logger("fetch result")) // simply comment this line if you don't want it.
    .then(resp => {
        console.debug("fetch result", resp); // old way
        // handle the response
    });
 *
 */
export function logger() {
    return (...args) => {
        console.debug(...arguments, ...args);
        return (args.length < 2) ? args[0] : args;
    };
}


Object.assign(utilDebug, {
    alerter, logger
});

export default utilDebug;
