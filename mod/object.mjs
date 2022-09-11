/**
 * @module utilObject
 */
import kongUtil from "./core.mjs";

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


Object.assign(kongUtil, {
    emulateArray, objectReduce, objectReduceAsync
});

export default kongUtil;
