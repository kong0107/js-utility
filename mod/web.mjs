import {parseHTML} from "./dom.mjs";

/**
 * @func fetchStrict
 * @desc 改寫 `fetch()`，使 HTTP 錯誤的情形（例如`404`）也會 reject 。
 * @param {string | URL | Request} resource
 * @param {Object} options 與 `fetch()` 相同。
 * @returns {Promise.<Response>}
 */
export const fetchStrict = (...args) => fetch(...args).then(response => {
    if(response.ok) return response;
    throw new ReferenceError(response.statusText);
});

/**
 * @func fetchJSON
 * @desc 抓取 JSON 文字檔並反序列化成物件。
 * @param {...*} args 與 `fetch()` 相同。
 * @returns {Promise.<Object>}
 */
export const fetchJSON = (...args) => fetchStrict(...args).then(res => res.json());

/**
 * @func fetchText
 * @desc 抓取文字檔。
 * @param {...*} args 與 `fetch()` 相同。
 * @returns {Promise.<string>}
 */
export const fetchText = (...args) => fetchStrict(...args).then(res => res.text());

/**
 * @func fetchDOM
 * @desc 抓取 HTML 文字檔並解析為 DOM 文件。
 * @param {...*} args 與 `fetch()` 相同。
 * @returns {Promise.<HTMLDocument>}
 */
export const fetchDOM = (...args) => fetchText(...args).then(parseHTML);


const output = {
    fetchStrict,
    fetchJSON,
    fetchText,
    fetchDOM
};

if(typeof window === "object" && window === globalThis)
    Object.assign(window, output);

export default output;