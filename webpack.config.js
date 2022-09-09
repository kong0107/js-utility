const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "all.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "./"
    }
};
