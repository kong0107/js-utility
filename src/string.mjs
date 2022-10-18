/**
 * @module kongUtilString
 */
import utilString from "./core.mjs";
import cpi from "chinese-parseint";

export * from "./core.mjs";

/**
 * @func parseChineseNumber
 * @desc
 *  Both traditional and simplified chinese numbers are supported.
 *  Not guaranteed to validate the string.
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

/**
 * @func compareVersionNumbers
 * @desc
 *  This only compares dot-separated-integer strings.
 *  For more complicated cases, use `semver` or `compare-versions`.
 * @param {string} a
 * @param {string} b
 * @returns {integer}
 */
export function compareVersionNumbers(a, b) {
    [a, b] = [a, b].map(str => str.split("."));
    for(let d in a) {
        if(typeof b[d] === "undefined") return 1;
        const ad = parseInt(a[d], 10), bd = parseInt(b[d], 10);
        if(ad > bd) return 1;
        if(ad < bd) return -1;
    }
    if(a.length < b.length) return -1;
    return 0;
}


/**
 * @func toCSV
 * @desc
 *  Convert an array of non-nested objects to a CSV string
 *  with field names as the first line, and `CRLF` as end of lines and the string.
 * @param {Array.<Object>} dataArray - properties with keys not present in `fieldNames` would not be converted.
 * @param {Array.<string>} fieldNames - Only fields listed here would be in the result.
 * @returns {string}
 *
 * @example /// returns 'a,b\r\n3,4\r\nx,"y\\x0Az"\r\n'
    toCSV([
        {a: 3, b: 4, c: 5},
        {a: 'x', b: 'y\nz'}
    ], ['a', 'b'])
 */
export function toCSV(dataArray, fieldNames) {
    return dataArray.reduce((acc, record) =>
        acc + fieldNames.map(field => csvEscape(record[field])).join(',') + '\r\n'
    , fieldNames.map(csvEscape).join(',') + '\r\n');
}
function csvEscape(text) {
    if(!/[\x00-\x1f\x22\x2c]/.test(text)) return text;
    text = text
        .replaceAll('"', '""')
        .replaceAll(/[\x00-\x1f]/g, m => '\x5cx' + m[0].charCodeAt(0).toString(16).toUpperCase().padStart(2, '0'))
    ;
    return `"${text}"`;
}


Object.assign(utilString, {
    parseChineseNumber,
    compareVersionNumbers,
    toCSV
});

export default utilString;
