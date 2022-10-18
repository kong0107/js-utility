/**
 * @module kongUtilObject
 */
import utilObject from "./core.mjs";

export * from "./core.mjs";

/**
 * @func emulateArray
 * @desc Emulate functions of Array class.
 * @param {string} method - name of the corresponding method of Array class.
 * @param {*} callback
 * @param {*} [target=this] - useful to assign this to prototype, though not recommended.
 * @returns {*} depends on `method`
 *
 * @example /// returns [4, 9]
    emulateArray("map", x => x*x, {a: 2, b: 3});
 *
 */
export function emulateArray(method, callback, target = this) {
    const keys = Object.keys(target);
    return keys[method](key => callback(target[key], key, target));
}

export function objectReduce(callback, initial, target = this) {
    const keys = Object.keys(target);
    return keys.reduce(
        (acc, key) => callback(acc, target[key], key, target),
        initial
    );
}

export async function objectReduceAsync(callback, initial, target = this) {
    const keys = Object.keys(target);
    return keys.reduce(
        async(acc, key) => await callback(acc, target[key], key, target),
        initial
    );
}


Object.assign(utilObject, {
    emulateArray, objectReduce, objectReduceAsync
});

export default utilObject;
