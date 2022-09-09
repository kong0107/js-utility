import * as kongUtil from "../src/all.js";

export const x = 4;
export default 3;

const m = await import("../src/dom.js");

export const all = m;

console.log(m, kongUtil, kongUtil.default);
