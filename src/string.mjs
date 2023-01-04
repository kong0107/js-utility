/**
 * @module kongUtilString
 */
import utilString from "./core.mjs";

export * from "./core.mjs";

/**
 * @func camelize
 * @desc Convert kebab-case string into camelCase.
 * @param {string} kebab
 * @returns {string}
 */
export function camelize(kebab) {
    return kebab.replace(
        /-([a-z]\w+)/g,
        m => m[1].toUpperCase() + m.slice(2)
    );
}


/**
 * @func parseChineseNumber
 * @desc
 *  Both traditional and simplified chinese numbers are supported.
 *  Not guaranteed to validate the string.
 *  Returns string if the number reaches `Number.MAX_SAFE_INTEGER` or `forceString` is given true.
 * @param {string} string
 * @param {boolean} [forceString = false]
 * @returns {number|string|NaN}
 */
export function parseChineseNumber(string, forceString = false) {
    let signed = '';
    let str = string.toString()
        .replaceAll(/\s/g, '')
        .replace(/[點点奌]/, '.')
    ;
    if('負负'.includes(str.charAt(0))) signed = '-';
    else if(str.startsWith('正')) signed = '+';

    if(signed) str = str.substring(1);
    digitRegExps.forEach((re, d) => {
        str = str.replaceAll(re, d.toString());
    });

    if(/^\d+(\.\d+)$/.test(str)) str = signed + str;
    else {
        let error = false, isFraction = false;
        let reverse = [], integer = [], fraction = [];
        let digit = null;
        str.split('').forEach(c => {
            if(isFraction) return fraction.unshift(c);

            if('0123456789'.includes(c)) return digit = c;

            const ten = ['十拾什', '百佰', '千仟'].findIndex(ts => ts.includes(c)) + 1;
            if(ten) {
                integer[ten] = digit ?? '1';
                return digit = null;
            }

            const wan = ['萬万', '億亿', '兆', '京經经', '垓', '秭杼', '穰壤', '溝沟', '澗涧', '正', '載', '極']
                .findIndex(ws => ws.includes(c)) + 1;
            if(wan || c === '.') {
                integer[0] = digit;
                for(let i = 0; i < integer.length; ++i)
                    reverse[i + wan * 4] = integer[i];
                digit = null;
            }
            if(wan) return integer = [];
            if(c === '.') return isFraction = true;

            error = true;
        });
        if(error) return NaN;

        if(isFraction) reverse.unshift(...fraction, '.');
        else {
            integer[0] = digit;
            for(let i = 0; i < integer.length; ++i) reverse[i] = integer[i];
        }

        for(let i = 0; i < reverse.length; ++i) // `Array.forEach()` and `Array.map()` do not iterate empty elements.
            if(!reverse[i]) reverse[i] = '0';
        str = signed + reverse.reverse().join('');
    }

    if(forceString) return str;
    return Number.isSafeInteger(parseInt(str)) ? parseFloat(str) : str;
    // MDN: JavaScript does not have the distinction of "floating point numbers" and "integers" on the language level.
}
const digitRegExps = [
    "０零○〇洞",
    "１一壹ㄧ弌么",
    "２二貳贰弍兩两",
    "３三參叁弎参叄",
    "４四肆䦉刀",
    "５五伍",
    "６六陸陆",
    "７七柒拐",
    "８八捌杯",
    "９九玖勾"
].map(d => new RegExp(`[${d}]`, 'g'));


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
    camelize,
    parseChineseNumber,
    compareVersionNumbers,
    toCSV, parseCSV
});

export default utilString;
