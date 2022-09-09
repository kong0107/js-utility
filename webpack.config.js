const path = require("path");

const entries =
    ["array", "async", "dom", "web", "event", "all"]
    .reduce(
        (acc, cur) => Object.assign(acc, {[cur]: `./src/${cur}.js`}),
        {}
    )
;

module.exports = {
    mode: "production",
    entry: entries,
    output: {
        path: path.resolve(__dirname, "dist"),
        // publicPath: "./"
    },
    // watch: true
};
