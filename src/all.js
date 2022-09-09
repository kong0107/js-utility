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
export * from "./array.js";
export * from "./async.js";
export * from "./dom.js";
export * from "./web.js";
export * from "./event.js";

import utilArray from "./array.js";
import utilAsync from "./async.js";
import utilDom from "./dom.js";
import utilWeb from "./web.js";
import utilEvent from "./event.js";

export default Object.assign({},
    utilArray, utilAsync, utilDom, utilWeb, utilEvent
);
