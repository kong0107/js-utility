import utilArray from "./array";
import utilAsync from "./async";
import utilDom from "./dom";
import utilWeb from "./web";

const kongUtil = {};
[utilArray, utilAsync, utilDom, utilWeb]
.forEach(util => Object.assign(kongUtil, util));

if(typeof window === "object" && window === globalThis)
    Object.assign(window, kongUtil);
if(typeof module && module.exports)
    module.exports = kongUtil;//Object.assign(module.exports, kongUtil);

export default kongUtil;
