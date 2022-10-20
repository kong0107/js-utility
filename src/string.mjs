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
 *  Convert an array of non-nested objects to a `text/csv` string with a header record.
 * @param {Array.<Object>} dataArray - properties with keys not present in `fieldNames` would not be converted.
 * @param {Array.<string>} fieldNames - Only fields listed here would be in the result.
 * @param {string} [eol = \r\n] - end of line, also appended to the returned string
 * @returns {string}
 *
 * @example /// returns 'a,b\r\n3,4\r\nx,"y\nz"\r\n'
    toCSV([
        {a: 3, b: 4, c: 5},
        {a: 'x', b: 'y\nz'}
    ], ['a', 'b'])
 */
export function toCSV(dataArray, fieldNames, eol = '\r\n') {
    return dataArray.reduce((acc, record) =>
        acc + fieldNames.map(field => csvEscape(record[field])).join(',') + eol
    , fieldNames.map(csvEscape).join(',') + eol);
}
function csvEscape(text) {
    if(!/[\x0a\x0d\x22\x2c]/.test(text)) return text;
    text = text.replaceAll('"', '""');
    return `"${text}"`;
}


/**
 * @func parseCSV
 * @desc Parse valid MIME type `text/csv` string to array or object. Empty records are ignored.
 * @param {string} csv
 * @param {boolean} [hasHeader=true] If truthy, an array of objects with property names assigned by the first record is returned; if falsy, an array of arrays is returned.
 * @returns {Array}
 *
 * @example /// returns [{a: '3', b: '4'}, {a: '7,', b: '9"'}]
    parseCSV('"a",b\r\n"3",4\r\n"7,","9"""\r\n')
 *
 * @example /// returns [['3', '4'], ['7,', '9"']]
    parseCSV('"3",4\r\r\n\n"7,","9"""\r\n', false)
 */
export function parseCSV(csv, hasHeader = true) {
    let quotes = 0, pos = 0, record = [];
    const allRecords = [];
    csv += '\n'; // make sure the last record will be pushed
    for(let i = 0; i < csv.length; ++i) {
        const char = csv.charAt(i);
        if(char === '"') ++quotes;
        if(quotes % 2) continue;
        if(['\n', '\r', ','].includes(char)) {
            let value = csv.substring(pos, i);
            if(value.startsWith('"')) value = value.slice(1, -1);
            value = value.replaceAll('""', '"');
            pos = i + 1;

            if(char === ',') record.push(value);
            else if(record.length) {
                record.push(value);
                allRecords.push(record);
                record = [];
            }
        }
    }
    if(!hasHeader) return allRecords;

    const fields = allRecords.shift();
    return allRecords.map(array =>
        fields.reduce((obj, name, index) => Object.assign(obj, {[name]: array[index]}), {})
    );
}


Object.assign(utilString, {
    parseChineseNumber,
    compareVersionNumbers,
    toCSV, parseCSV
});

export default utilString;
