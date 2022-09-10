const fs = require("fs");
const path = require("path");

const entries = fs.readdirSync("./mod")
    .filter(file => file.endsWith(".mjs"))
    .reduce((acc, file) => {
        const mod = file.substring(0, file.lastIndexOf("."));
        return Object.assign(acc, {[mod]: `./mod/${file}`});
    }, {})
;

module.exports = {
    mode: "production",
    entry: entries,
    output: {
        path: path.resolve(__dirname, "dist"),
        library: "kongUtil"
    },
    watch: true
};
