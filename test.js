/**
 * To work in CommonJS, async function `import()` must be used,
 * instead of `import` statement or function `require()`,
 * and top-level await is not supported (at least to Node.js v18.9).
 * See also [Node.js documentation](https://nodejs.org/api/esm.html#top-level-await).
 */
import("./mod/all.mjs")
.then(kongUtil => {
    kongUtil.wait(500, "works.")
    .then(kongUtil.logger("CommonJS mode"));

    console.assert(kongUtil.parseChineseNumber("235") === 235);
    console.assert(kongUtil.parseChineseNumber("負四百零五億零九百十七萬點一二零零三零") === -40509170000.12003);
    console.assert(kongUtil.camelize('abc-def-ghi') === 'abcDefGhi');
})
