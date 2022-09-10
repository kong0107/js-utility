/**
 * Top-level-await is still experimental in webpack, due to [its doc](https://webpack.js.org/configuration/experiments/).
 * Therefore here we cannot import dynamically.
 *
 * And [it seems](https://stackoverflow.com/a/57580866/1998874) that
 * `export * from ...` does not re-export the default one,
 * so I have to import each sub-module once more
 * to have this module having its default export to everything.
 *
 * Well, maybe this file itself shall be dynamically created instead of manually maintained.
 */
import utilArray from "./array.mjs";
import utilAsync from "./async.mjs";
import utilDom from "./dom.mjs";
import utilWeb from "./web.mjs";
import utilEvent from "./event.mjs";

export * from "./array.mjs";
export * from "./async.mjs";
export * from "./dom.mjs";
export * from "./web.mjs";
export * from "./event.mjs";

/**
 * @func extendPrototype
 * @desc Add methods to native classes.
 */
export const extendPrototype = () => {
    utilArray.extendArrayPrototype()
    utilEvent.extendEventTargetPrototype();
};


const output = {extendPrototype};

if(typeof window === "object" && window === globalThis)
    Object.assign(window, output);

Object.assign(output, utilArray, utilAsync, utilDom, utilWeb, utilEvent);

export default output;
