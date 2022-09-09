const path = require("path");

module.exports = {
    mode: "production",
    entry: {
        array: "./src/array.js",
        async: "./src/async.js",
        dom: "./src/dom.js",
        web: "./src/web.js",
        all: "./src/all.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        // publicPath: "./"
    },
    // watch: true
};
