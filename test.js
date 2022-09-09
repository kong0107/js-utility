import("./mod/all.mjs")
.then(kongUtil => kongUtil.wait(500))
.then(() => console.log("to work in CommonJS, `import()` must be used and I fail to use top-level await here."));
