/**
 * @module kongUtilWeb
 */
import utilWeb from "./core.mjs";
import {parseCSV} from "./string.mjs";
import {parseHTML} from "./dom.mjs";

export * from "./core.mjs";

/**
 * @func fetchStrict
 * @desc Same as `fetch()` but rejects if HTTP error (e.g "404 not found")
 * @param {string | URL | Request} resource
 * @param {Object} options - same as `fetch()`
 * @returns {Promise.<Response>}
 */
export async function fetchStrict(...args) {
    const response = await fetch(...args);
    if(response.ok) return response;
    throw new ReferenceError(response.statusText);
}

/**
 * @func fetchJSON
 * @desc Download an JSON file and deserialize it.
 * @param {...any} args - same as `fetch()`
 * @returns {Promise.<Object>}
 */
export function fetchJSON(...args) {
    return fetchStrict(...args).then(res => res.json());
}

/**
 * @func fetchText
 * @desc Download an plain text file and read it.
 * @param {...any} args - same as `fetch()`
 * @returns {Promise.<string>}
 */
export function fetchText(...args) {
    return fetchStrict(...args).then(res => res.text());
}

/**
 * @func fetchDOM
 * @desc Download an HTML file and parse it to `HTMLDocument`
 * @param {...any} args - same as `fetch()`
 * @returns {Promise.<HTMLDocument>}
 */
export function fetchDOM(...args) {
    return fetchText(...args).then(html => parseHTML(html, 0));
}

/**
 * @func fetchCSV
 * @desc Download a CSV file and parse it to an array of objects
 * @param {...any} args - same as `fetch()`
 * @returns {Promise.<Object>}
 */
export function fetchCSV(...args) {
    return fetchText(...args).then(csv => parseCSV(csv));
}

/**
 * @func readFile
 * @desc Promise version of `FileReader`.
 * @param {Blob} blob
 * @param {string} type - `arrayBuffer`, `binaryString`, `dataURL`, or `text`
 * @returns {Promise.<any>}
 */
export function readFile(blob, type) {
    const method = 'readAs' + type.charAt(0).toUpperCase() + type.slice(1);
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.addEventListener('load', () => resolve(reader.result));
        reader.addEventListener('error', () => reject(reader.error));
        reader[method](blob);
    });
}


Object.assign(utilWeb, {
    fetchStrict, fetchJSON, fetchText, fetchDOM, fetchCSV,
    readFile
});

export default utilWeb;
