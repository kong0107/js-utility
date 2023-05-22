/**
 * @module kongUtilArray
 * @desc
 *  Functions in this file could be assigned to `Array.prototype`,
 *  and then you can use them as methods of an array.
 *  Assign what you want by yourself or call `extendArrayPrototype()`
 *  to add them all.
 *
 *  These functions are designed to run sequentially.
 *  If you want to run every async functions at the same time,
 *  consider static methods of `Promise`, such as `all`, `any`, `race`, and `allSettled`.
 *
 *  Note: to make `this` work, don't use arrow functions here.
 *
 * @example
    // sequentially fetch resources and then resolves to responses.
    Array.prototype.mapAsync = kongUtilArray.mapAsync; // run once
    [url1, url2].mapAsync(fetch);
 *
 * @example
    // same as above
    kongUtilArray.mapAsync(fetch, [url1, url2])
 *
 */
import utilArray from "./core.mjs";

export * from "./core.mjs";

/**
 * @func everyAsync
 * @returns {Promise.<boolean>}
 */
export async function everyAsync(callback, target = this) {
    return (await mapAsync(callback, target)).every(x => x);
}

/**
 * @func filterAsync
 * @returns {Promise.<Array>}
 */
export async function filterAsync(callback, target = this) {
    const results = [];
    for(let i = 0; i < target.length; ++i)
        if(await callback(target[i], i, target))
            results.push(target[i]);
    return results;
}

/**
 * @func findAsync
 * @returns {Promise.<*>}
 */
export async function findAsync(callback, target = this, returnIndex) {
    for(let i = 0; i < target.length; ++i)
        if(await callback(target[i], i, target))
            return returnIndex ? i : target[i];
    return returnIndex ? -1 : undefined;
}

/**
 * @func findIndexAsync
 * @returns {Promise.<integer>}
 */
export function findIndexAsync(cb, t) {
    return findAsync(cb, t, true);
}

/**
 * @func findLastAsync
 * @returns {Promise.<*>}
 */
export async function findLastAsync(callback, target = this, returnIndex) {
    for(let i = target.length - 1; i >= 0; --i)
        if(await callback(target[i], i, target))
            return returnIndex ? i : target[i];
    return returnIndex ? -1 : undefined;
}

/**
 * @func findLastIndexAsync
 * @returns {Promise.<integer>}
 */
export function findLastIndexAsync(cb, t) {
    return findLastAsync(cb, t, true);
}

/**
 * @func forEachAsync
 * @returns {Promise.<undefined>}
 */
export async function forEachAsync(callback, target = this) {
    return mapAsync(callback, target, true);
}

/**
 * @func mapAsync
 * @returns {Promise.<Array>}
 */
export async function mapAsync(callback, target = this, skipReturn) {
    const results = skipReturn ? undefined : [];
    for(let i = 0; i < target.length; ++i) {
        const r = await callback(target[i], i, target);
        results?.push(r);
    }
    return results;
}

/**
 * @func reduceAsync
 * @returns {Promise.<*>}
 */
export async function reduceAsync(callback, initial, target = this) {
    let acc = initial, startingIndex = 0;
    if(typeof initial === "undefined") {
        if(!target.length) throw new TypeError("Reduce of empty array with no initial value");
        acc = target[0];
        startingIndex = 1;
    }
    for(let i = startingIndex; i < target.length; ++i)
        acc = await callback(acc, target[i], i, target);
    return acc;
}

/**
 * @func reduceRightAsync
 * @returns {Promise.<*>}
 */
export async function reduceRightAsync(callback, initial, target = this) {
    let acc = initial, startingIndex = target.length - 1;
    if(typeof initial === "undefined") {
        if(!target.length) throw new TypeError("Reduce of empty array with no initial value");
        acc = target[startingIndex];
        --startingIndex;
    }
    for(let i = startingIndex; i >= 0; --i)
        acc = await callback(acc, target[i], i, target);
    return acc;
}

/** @func someAsync */
export function someAsync(cb, t) {
    return findIndexAsync(cb, t).then(r => r !== -1);
}

/**
 * @func mapToObject
 * @param {Function} callback
 * @param {Array} target
 * @returns {Object} keys are the values of the array; values are what callback returns on each element.
 */
export function mapToObject(callback, target = this) {
    const result = {};
    target.forEach((v, i) =>
        result[v] = callback(v, i, target)
    );
    return result;
}

/**
 * @func extendArrayPrototype
 * @desc Add methods in this file to `Array` class.
 */
const arrayPrototypeExtended = {
    everyAsync, filterAsync,
    findAsync, findIndexAsync, findLastAsync, findLastIndexAsync,
    forEachAsync, mapAsync, reduceAsync, reduceRightAsync,
    someAsync,
    mapToObject
};
export const extendArrayPrototype = () => Object.assign(Array.prototype, arrayPrototypeExtended);


Object.assign(utilArray,
    arrayPrototypeExtended,
    {extendArrayPrototype}
);

export default utilArray;
