/**
 * @module kongUtilWeb
 */
import utilWeb from "./core.mjs";
import {parseHTML} from "./dom.mjs";
import {parseCSV} from "./string.mjs";

export * from "./core.mjs";

/**
 * @func fetchStrict
 * @desc Same as `fetch()` but rejects if HTTP error (e.g "404 not found")
 * @param {string | URL | Request} resource
 * @param {Object} options - same as `fetch()`
 * @returns {Promise.<Response>}
 */
export const fetchStrict = (...args) => fetch(...args).then(response => {
    if(response.ok) return response;
    throw new ReferenceError(response.statusText);
});

/**
 * @func fetchJSON
 * @desc Download an JSON file and deserialize it.
 * @param {...any} args - same as `fetch()`
 * @returns {Promise.<Object>}
 */
export const fetchJSON = (...args) => fetchStrict(...args).then(res => res.json());

/**
 * @func fetchText
 * @desc Download an plain text file and read it.
 * @param {...any} args - same as `fetch()`
 * @returns {Promise.<string>}
 */
export const fetchText = (...args) => fetchStrict(...args).then(res => res.text());

/**
 * @func fetchDOM
 * @desc Download an HTML file and parse it to `HTMLDocument`
 * @param {...any} args - same as `fetch()`
 * @returns {Promise.<HTMLDocument>}
 */
export const fetchDOM = (...args) => fetchText(...args).then(html => parseHTML(html, 0));

/**
 * @func fetchCSV
 * @desc Download a CSV file and parse it to an array of objects
 * @param {...any} args - same as `fetch()`
 * @returns {Promise.<Object>}
 */
export const fetchCSV = (...args) => fetchText(...args).then(csv => parseCSV(csv));


Object.assign(utilWeb, {
    fetchStrict, fetchJSON, fetchText, fetchDOM, fetchCSV
});

export default utilWeb;
