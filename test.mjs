import * as kongUtil from "./mod/all.mjs";
kongUtil.wait(500, "works.")
.then(kongUtil.logger("ES module mode"));

console.assert(kongUtil.parseChineseNumber("正三十七點五") === 37.5);
