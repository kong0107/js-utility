/**
 * @module utilCore
 */
const kongUtil = {};

/**
 * @func use
 * @desc set specified `methods` of kongUtil to global
 * @param {...string} [methods] - if empty, all methods would be added to `globalThis`.
 */
export function use(...methods) {
    if(methods[0] instanceof Array) methods = methods[0];
    for(let meth in kongUtil) {
        if(meth === "use") continue;
        if(!methods.length || methods.includes(meth))
            globalThis[meth] = kongUtil[meth];
    }
};


Object.assign(kongUtil, {use});
export default kongUtil;
