/**
 * @module kongUtilCore
 */
const utilCore = {};

/**
 * @func use
 * @desc set specified `methods` of kongUtil to global
 * @param {...string} [methods] - if empty, all methods would be added to `globalThis`.
 */
export const use = (function(...methods) {
    if(methods[0] instanceof Array) methods = methods[0];
    for(let meth in this) {
        if(meth === "use") continue;
        if(!methods.length || methods.includes(meth))
            globalThis[meth] = this[meth];
    }
}).bind(utilCore);


Object.assign(utilCore, {use});
export default utilCore;
