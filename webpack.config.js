const fs = require("fs");
const path = require("path");

const entries = fs.readdirSync("./src")
    .filter(file => file.endsWith(".mjs"))
    .reduce((acc, file) => {
        if(["all.mjs", "core.mjs"].includes(file)) return acc;
        const mod = file.charAt(0).toUpperCase() + file.slice(1, file.lastIndexOf("."));
        return Object.assign(acc, {[mod]: `./src/${file}`});
    }, {})
;

module.exports = [
    {
        mode: "production",
        entry: {all: "./src/all.mjs"},
        output: {
            path: path.resolve(__dirname, "dist"),
            library: "kongUtil"
        }
    },
    {
        mode: "production",
        entry: entries,
        output: {
            clean: true,
            filename: pathData => (pathData.chunk.name.toLowerCase() + ".js"),
            path: path.resolve(__dirname, "dist"),
            library: "kongUtil[name]"
        }
    },
    {
        mode: "production",
        entry: Object.assign({All: "./src/all.mjs"}, entries),
        output: {
            clean: true,
            filename: pathData => (pathData.chunk.name.toLowerCase() + ".mjs"),
            path: path.resolve(__dirname, "mod"),
            library: {type: "module"}
        },
        experiments: {
            outputModule: true
        }
    }
];
