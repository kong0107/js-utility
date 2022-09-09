/**
 * @func fetchStrict
 * @desc 改寫 `fetch()`，使 HTTP 錯誤的情形（例如`404`）也會 reject 。
 * @param {...*} args 與 `fetch()` 相同。
 * @returns {Promise.<Response>}
 */
const fetchStrict = (...args) => fetch(...args).then(response => {
    if(response.ok) return response;
    throw new ReferenceError(response.statusText);
});

/**
 * @func fetchJSON
 * @desc 抓取 JSON 文字檔並反序列化成物件。
 * @param {...*} args 與 `fetch()` 相同。
 * @returns {Promise.<Object>}
 */
const fetchJSON = (...args) => fetchStrict(...args).then(res => res.json());

/**
 * @func fetchText
 * @desc 抓取文字檔。
 * @param {...*} args 與 `fetch()` 相同。
 * @returns {Promise.<string>}
 */
const fetchText = (...args) => fetchStrict(...args).then(res => res.text());

/**
 * @func fetchDOM
 * @desc 抓取 HTML 文字檔並解析為 DOM 文件。
 * @param {...*} args 與 `fetch()` 相同。
 * @returns {Promise.<HTMLDocument>}
 */
const fetchDOM = (...args) => fetchText(...args).then(parseHTML);


export default {
    fetchStrict,
    fetchJSON,
    fetchText,
    fetchDOM
};
