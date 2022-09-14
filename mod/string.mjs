/**
 * @module kongUtilString
 */
import utilString from "./core.mjs";
import cpi from "chinese-parseint";

export * from "./core.mjs";

/**
 * @func parseChineseNumber
 * @param {string} str
 * @returns {number|BigInt}
 */
export function parseChineseNumber(str)  {
    const parts = str.split(/[點点奌]/g);
    if(parts.length > 2) throw new TypeError("Not a numeric string", str);
    let result = parts[0].length ? cpi(parts[0]) : 0;
    if(parts.length === 2) {
        if(typeof result === "bigint") {
            let temp = Number(result);
            if(result !== BigInt(temp)) throw new RangeError("exceeds supported range");
            result = temp;
        }
        let below = 0;
        for(let d = 0; d < parts[1].length; ++d)
            below += cpi(parts[1].charAt(d)) * 10 ** (-d - 1);
        if(result >= 0) result += below;
        else result -= below;
    }
    return result;
};


Object.assign(utilString, {
    parseChineseNumber
});

export default utilString;
