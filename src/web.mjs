/**
 * @module kongUtilWeb
 */
import utilWeb from "./core.mjs";
import {parseCSV} from "./string.mjs";
import {parseHTML} from "./dom.mjs";

export * from "./core.mjs";

/**
 * @func fetchEx
 * @desc Similar to `fetch()` but works different if `body` exists.
 *  1. if `body` is a normal object (such as those created by `{}`), construct a `URLSearchParams` from it.
 *  2. if `body` is an `HTMLFormElement`, construct a `FormData` from it.
 *  3. if `body` is a normal object or a `URLSearchParams`,
 *     and `method` is set to 'GET' explicitly,
 *     convert the request into a URL with search param without,
 *     and then make the request without body.
 *  4. if `body` exists without setting `method`, warn and request with POST method.
 * @param {string | URL | Request} resource
 * @param {RequestInit} [options]
 */
export async function fetchEx(resource, options) {
    let body = resource.body || options?.body;
    if (body) {
        let newBody;
        if (body.constructor === HTMLFormElement) newBody = new FormData(body);
        else if (body.constructor === Object) newBody = new URLSearchParams(body);
        if (newBody) {
            body = newBody;
            if (resource.body) resource = new Request(resource, {body});
            if (options?.body) options.body = body;
        }

        switch (resource.method || options?.method) {
            case 'GET': {
                if (body instanceof URLSearchParams) {
                    const url = new URL(
                        resource.url ?? (resource + ''),
                        document?.baseURI
                    );
                    for (const [key, value] of body.entries())
                        url.searchParams.set(key, value);
                    resource = resource.url ? (new Request(resource, {url, body: undefined})) : url;
                    if (options?.body) delete options.body;
                }
                break;
            }
            case 'POST':
            case 'PUT': {
                break;
            }
            case '': {
                console.warn('While using `fetch()` with `body`, `method` shall be set to "POST" or "PUT".');
                if (resource.url) resource = new Request(resource, {method: 'POST'});
                if (typeof options === 'object') options.method = 'POST';
            }
            default: {}
        }
    }
    return await fetch(resource, options);
}

/**
 * @func fetchStrict
 * @desc Similar to `fetchEx()` but rejects if HTTP error (e.g "404 not found").
 * @param {any[]} args - same as `fetchEx()`
 * @returns {Promise.<Response>}
 */
export async function fetchStrict(...args) {
    const response = await fetchEx(...args);
    if (response.ok) return response;
    throw new ReferenceError(response.statusText);
}

/**
 * @func fetchJSON
 * @desc Download a JSON file and deserialize it.
 * @param {...any} args - same as `fetchEx()`
 * @returns {Promise.<Object>}
 */
export function fetchJSON(...args) {
    return fetchStrict(...args).then(res => res.json());
}

/**
 * @func fetchText
 * @desc Download a plain text file and read it.
 * @param {...any} args - same as `fetchEx()`
 * @returns {Promise.<string>}
 */
export function fetchText(...args) {
    return fetchStrict(...args).then(res => res.text());
}

/**
 * @func fetchDOM
 * @desc Download an HTML file and parse it to `HTMLDocument`
 * @param {...any} args - same as `fetchEx()`
 * @returns {Promise.<HTMLDocument>}
 */
export function fetchDOM(...args) {
    return fetchText(...args).then(html => parseHTML(html, 0));
}

/**
 * @func fetchCSV
 * @desc Download a CSV file and parse it to an array of objects
 * @param {...any} args - same as `fetchEx()`
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

/**
 * @func createFormData
 * @desc Creates a new `FormData` from an object
 * @param {Object | URLSearchParams} object
 * @returns FormData
 */
export function createFormData(object) {
    const fd = new FormData();
    if (object instanceof URLSearchParams) {
        for (const [key, value] of object.entries())
            fd.append(key, value);
    }
    else for (const key in object) fd.append(key, object[key]);
    return fd;
}


Object.assign(utilWeb, {
    fetchEx, fetchStrict,
    fetchJSON, fetchText, fetchDOM, fetchCSV,
    readFile, createFormData
});

export default utilWeb;
