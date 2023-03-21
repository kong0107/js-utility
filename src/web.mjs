/**
 * @module kongUtilWeb
 */
import utilWeb from "./core.mjs";
import {parseCSV, base64ToBlob} from "./string.mjs";
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

/**
 * @func resizeImage
 * @desc Load and resize an image to specified format.
 * @param {*} source - see `createImageBitmap()` of Web API
 * @param {Object} settings
 * @param {number} [settings.scale] - conflicts with `width` and `height`
 * @param {number} [settings.width] - conflicts with `scale`
 * @param {number} [settings.height] - conflicts with `scale`
 * @param {string} [settings.format=image/png] - MIME
 * @param {number} [settings.quality] - between `0` and `1`
 * @param {string} [settings.returnType=canvas] - `canvas`, `blob`, or `dataURL`
 * @returns {Promise.<*>} depends on `settings.returnType`
 *
 * @example /// resize the chosen file and then show it
    resizeImage($('[type=file]').files[0], {scale: .5, returnType: 'dataURL'})
    .then(url => location = url);
 *
 */
export async function resizeImage(source, settings) {
    if(typeof source === 'string') {
        if(source.startsWith('data:image/')) source = base64ToBlob(source);
        else if(source.startsWith('http'))
            source = await fetchStrict(source).then(res => res.blob());
        else throw new TypeError('unsupported source format');
    }
    const bitmap = await createImageBitmap(source);
    const source_ratio = bitmap.width / bitmap.height;
    let width, height;

    if(settings.scale > 0) {
        width = bitmap.width * settings.scale;
        height = bitmap.height * settings.scale;
    }
    else if(!settings.width || settings.width < 0) {
        width = settings.height * source_ratio;
        height = settings.height;
    }
    else if(!settings.height || settings.height < 0) {
        width = settings.width;
        height = settings.width / source_ratio;
    }
    else if(settings.width / settings.height > source_ratio) {
        width = settings.height * source_ratio;
        height = settings.height;
    }
    else {
        width = settings.width;
        height = settings.width / source_ratio;
    }
    width = Math.round(width);
    height = Math.round(height);

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');
    context.drawImage(bitmap, 0, 0, width, height);

    let format = settings.format ?? 'png';
    if(!format.startsWith('image/')) format = ('image/' + format).toLowerCase();

    switch(settings.returnType ?? 'canvas') {
        case 'canvas': return canvas;
        case 'dataURL': return canvas.toDataURL(format, settings.quality);
        case 'blob': {
            return new Promise(resolve => {
                canvas.toBlob(resolve, format, settings.quality);
            });
        }
        default: throw new TypeError('unknown returnType');
    }
}


Object.assign(utilWeb, {
    fetchStrict, fetchJSON, fetchText, fetchDOM, fetchCSV,
    readFile, resizeImage
});

export default utilWeb;
