import * as kongUtil from "./mod/all.mjs";
kongUtil.wait(500, "works.")
.then(kongUtil.logger("ES module mode"));

console.assert(kongUtil.parseChineseNumber("235") === 235);
console.assert(kongUtil.parseChineseNumber("負四百零五億零九百十七萬點一二零零三零") === -40509170000.12003);
console.assert(kongUtil.camelize('abc-def-ghi') === 'abcDefGhi');
