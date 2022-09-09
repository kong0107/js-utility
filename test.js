/**
 * To work in CommonJS, async function `import()` must be used,
 * instead of `import` statement or function `require()`,
 * and top-level await is not supported (at least to Node.js v18.9).
 * See also [Node.js documentation](https://nodejs.org/api/esm.html#top-level-await).
 */
import("./mod/all.mjs")
.then(kongUtil => kongUtil.wait(500))
.then(() => console.log("It works in CommonJS."));
