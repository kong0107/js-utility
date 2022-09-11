/**
 * @module kongUtil
 */
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
import kongUtil from "./core.mjs";
import utilArray from "./array.mjs";
import utilAsync from "./async.mjs";
import utilDebug from "./debug.mjs";
import utilDom from "./dom.mjs";
import utilElement from "./element.mjs";
import utilEvent from "./event.mjs";
import utilObject from "./object.mjs";
import utilWeb from "./web.mjs";

export * from "./core.mjs";
export * from "./array.mjs";
export * from "./async.mjs";
export * from "./dom.mjs";
export * from "./debug.mjs";
export * from "./element.mjs";
export * from "./event.mjs";
export * from "./object.mjs";
export * from "./web.mjs";

/**
 * @func extendPrototype
 * @desc Add methods to native classes.
 */
export const extendPrototype = () => {
    utilArray.extendArrayPrototype();
    utilElement.extendElementPrototype();
    utilEvent.extendEventTargetPrototype();
};


Object.assign(kongUtil,
    utilArray,
    utilAsync,
    utilDom,
    utilDebug,
    utilElement,
    utilEvent,
    utilObject,
    utilWeb,
    {extendPrototype}
);

export default kongUtil;
