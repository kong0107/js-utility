/**
 * Functions in this file could be assigned to `Array.prototype`,
 * and then you can use from an array.
 * Assign what you want by yourself or call `addToArrayPrototype()` which is declared at the end of this file.
 *
 * @example
    // sequentially fetch resources and then resolves to responses.
    Array.prototype.mapAsync = mapAsync; // run once
    [url1, url2].mapAsync(fetch);

 * If you don't like to change prototype, the using these function directly is also possible.
 * @example
    // same as above
    mapAsync(fetch, [url1, url2])
 *
 * These functions are designed to run sequentially.
 * If you want to run severy async functions at the same time,
 * consider static methods of `Promise`, such as `all`, `any`, `race`, and `allSettled`.
 *
 */

export async function everyAsync(callback, target = this) {
    return (await mapAsync(callback, target)).every(x => x);
}

export async function filterAsync(callback, target = this) {
    const results = [];
    for(let i = 0; i < target.length; ++i)
        if(await callback(target[i], i, target))
            results.push(target[i]);
    return results;
}

export async function findAsync(callback, target = this, returnIndex) {
    for(let i = 0; i < target.length; ++i)
        if(await callback(target[i], i, target))
            return returnIndex ? i : target[i];
    return returnIndex ? -1 : undefined;
}
export const findIndexAsync = (c, t) => findAsync(c, t, true);

export async function findLastAsync(callback, target = this, returnIndex) {
    for(let i = target.length - 1; i >= 0; --i)
        if(await callback(target[i], i, target))
            return returnIndex ? i : target[i];
    return returnIndex ? -1 : undefined;
}
export const findLastIndexAsync = (c, t) => findLastAsync(c, t, true);

export async function forEachAsync(callback, target = this) {
    for(let i = 0; i < target.length; ++i)
        await callback(target[i], i, target);
}

export async function mapAsync(callback, target = this) {
    const results = [];
    for(let i = 0; i < target.length; ++i)
        results.push(await callback(target[i], i, target));
    return results;
}

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

export const someAsync = (c, t) => findIndexAsync(c, t).then(r => r !== -1);


const arrayPrototypeExtended = {
    everyAsync, filterAsync,
    findAsync, findIndexAsync, findLastAsync, findLastIndexAsync,
    forEachAsync, mapAsync, reduceAsync, reduceRightAsync,
    someAsync
};
export const extendArrayPrototype = () => Object.assign(Array.prototype, arrayPrototypeExtended);

const output = Object.assign({extendArrayPrototype}, arrayPrototypeExtended);

if(typeof window === "object" && window === globalThis)
    Object.assign(window, output);

export default output;
