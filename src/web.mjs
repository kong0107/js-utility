/**
 * @module kongUtilWeb
 */
import utilWeb from "./core.mjs";
import {parseCSV} from "./string.mjs";
import {parseHTML} from "./dom.mjs";

export * from "./core.mjs";

/**
 * @func fetchStrict
 * @desc Similar to `fetch()` but
 *  1. rejects if HTTP error (e.g "404 not found").
 *  2. if `body` is a normal object (such as those created by `{}`), convert it into `URLSearchParams`.
 *  3. if `method` is set to 'GET' explicitly,
 *     and `body` is `URLSearchParams` or a normal object,
 *     convert the request into an URL with search param.
 *  4. if `body` exists without setting `method`, warn and request with POST method.
 * @param {string | URL | Request} resource
 * @param {Object} options
 * @returns {Promise.<Response>}
 */
export async function fetchStrict(resource, options) {
    let body = resource.body || options?.body;
    if (body) {
        if (body.constructor === Object) {
            body = new URLSearchParams(body);
            if (resource.body) resource = new Request(resource, {body});
            if (options.body) options.body = body;
        }

        const method = resource.method || options?.method;
        switch (method) {
            case 'GET': {
                if (body instanceof URLSearchParams) {
                    let url = resource.url ?? (resource + '');
                    try {
                        url = new URL(url); // full url
                    }
                    catch (err) { // path only
                        if (url.startsWith('/')) { // abs path
                            url = (new URL(document.baseURI)).origin + url;
                        }
                        else { // relative path
                            const pos = document.baseURI.lastIndexOf('/');
                            url = document.baseURI.slice(0, pos + 1) + url;
                        }
                        url = new URL(url);
                    }
                    // const url = new URL(resource.url ?? (resource + ''));
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
            default: {
                console.warn(
                    'While using `fetch()` with `body`, `method` shall be set to "POST" or "PUT".'
                    + ` You've wrongly set it to "${method}".`
                );
                if (resource.url) resource = new Request(resource, {method: 'POST'});
                if (typeof options === 'object') options.method = 'POST';
            }
        }
    }

    const response = await fetch(resource, options);
    if (response.ok) return response;
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
    fetchStrict, fetchJSON, fetchText, fetchDOM, fetchCSV,
    readFile, createFormData
});

export default utilWeb;
