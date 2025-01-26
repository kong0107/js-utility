/**
 * @module kongUtilObject
 */
import utilObject from "./core.mjs";

export * from "./core.mjs";

/**
 * @func emulateArray
 * @desc Emulate functions of Array class.
 * @param {string} method - name of the corresponding method of Array class.
 * @param {Function} callback
 * @param {Object} [target=this] - useful to assign this to prototype, though not recommended.
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


/**
 * @func objectMap
 * @param {Function} callback
 * @param {Object} [target=this]
 * @returns {Object.<*>}
 */
export function objectMap(callback, target = this) {
    const r = {};
    Object.keys(target).forEach(key => {
        r[key] = callback(target[key], key, target);
    });
    return r;
}

/**
 * @func objectMapAsync
 * @param {Function} callback
 * @param {Object} [target=this]
 * @param {boolean} [skipReturn=false]
 * @returns {Promise.<Object|undefined>}
 */
export async function objectMapAsync(callback, target = this, skipReturn = false) {
    const results = {};
    const keys = Object.keys(target);
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        const r = await callback(target[key], key, target);
        if (! skipReturn) results[key] = r;
    }
    if (! skipReturn) return results;
}


/**
 * @func objectReduce
 * @desc Emulate `Array.prototype.reduce`.
 * @param {Function} callback
 * @param {*} initial
 * @param {Object} [target=this]
 * @returns {*} depends on `callback`
 */
export function objectReduce(callback, initial, target = this) {
    const keys = Object.keys(target);
    return keys.reduce(
        (acc, key) => callback(acc, target[key], key, target),
        initial
    );
}


/**
 * @func objectReduceAsync
 * @desc Emulate `Array.prototype.reduce` in async way.
 * @param {Function} callback
 * @param {*} initial
 * @param {Object} [target=this]
 * @returns {*} depends on `callback`
 */
export async function objectReduceAsync(callback, initial, target = this) {
    let acc = await initial;
    const keys = Object.keys(target);
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        acc = await callback(acc, target[key], key, target);
    }
    return acc;
}


Object.assign(utilObject, {
    emulateArray,
    objectMap, objectMapAsync,
    objectReduce, objectReduceAsync
});

export default utilObject;
