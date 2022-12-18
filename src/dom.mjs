/**
 * @module kongUtilDom
 */
import utilDom from "./core.mjs";
import jsmlCreateElement from "jsml-parser/createElement.js";

export * from "./core.mjs";

/**
 * @func $
 * @desc Shortcut to `querySelector`, but different if not giving a string.
 * @param {string | Array | Object} selectors - one or more CSS selector string
 * @param {Element | Document} [base = document] - if not an object having `querySelector` method, then it's ignored and `document` is used. This is useful if you wanna pass this function as the argument in `Array.map`.
 * @returns {null | Element | Array | Object} element
 *
 *  If `selectors` is a string, this function works exactly as `querySelector()`.
 *
 *  If `selectors` is an array of strings, this returns
 *  an array with one element or null corresponding to each input selector.
 *
 *  If `selectors` is an object, this returns
 *  an object with the same keys but values are the corresponding first found element.
 *
 *  Nested arrays and objects are supported by recursion.
 *
 * @example /// get the first button by a string
    $("button, [type=button], [type=submit]");
 *
 * @example /// assign elements by respective selectors
    const [myForm, myTable, myTextArea] = $(["#myForm", ".myTable", "textarea"]);
 *
 * @example /// safe to use in `Array.map()`
    const [myForm, myTable, myTextArea] = ["#myForm", ".myTable", "textarea"].map($);
 *
 * @example /// nested object
    $({form: 'form', inputs: {text: '[type=text]', password: '[type=password]'}});
 *
 */
export function $(s, b = document) {
    if(!b?.querySelector) b = document;
    if(typeof s === "string") return b.querySelector(s);
    else if(s instanceof Array) return s.map(ss => $(ss, b));
    const r = {};
    for(let name in s) r[name] = $(s[name], b);
    return r;
}


/**
 * @func $$
 * @desc
 *  Shortcut to `querySelectorAll` but returns an array instead of `NodeList`.
 *  Different if not giving a string, like `$` differs from `querySelector`;
 *  however, for selectors have no matches, empty array is returned instead of null.
 * @param {string | Array | Object} selectors - one or more CSS selector string
 * @param {Element | Document} [base = document] - if not an object having `querySelector` method, then it's ignored and `document` is used.
 * @returns {Array | Object}
 *
 * @example /// returns all trimmed values of <input>'s in `.myForm`.
    $$(".myForm input").map(input => input.value.trim());
 *
 */
export function $$(s, b = document) {
    if(!b?.querySelectorAll) b = document;
    if(typeof s === "string") return [...b.querySelectorAll(s)];
    else if(s instanceof Array) return s.map(ss => $$(ss, b));
    const r = {};
    for(let name in s) r[name] = $$(s[name], b);
    return r;
}


/**
 * @func parseHTML
 * @desc Shortcut to `DOMParser.parseFromString` but returns the first element in `HTMLBodyElement` by default.
 * @param {string} html
 * @param {*} [selectors = body > *] -
 *  If given but not a string or array of strings, the whole `HTMLDocument` is returned.
 *  Otherwise, the first element in the DOM tree matching `selectors` is returned; if no such elements, `null` is returned.
 *  Defaults to return the first element in `document.body`.
 * @returns {HTMLDocument | Element | null} node
 *
 *  Incomplete HTML string may lead to unexpected result.
 *  Browsers may unexpectedly add essential tags such as `<html>`, `<head>`, and `<body>`,
 *  even given `html` string contains no such tags.
 *
 *  It may also omit tags if the structure is not complete.
 *  For example, `<tr>` as the root node of the `html` string
 *  may cause browsers not creating elements but only the text nodes within them.
 *
 * @example
    /// returns an `Element` whose `tagName` is "em" and has string "hi!" as its text content.
    parseHTML("<EM>hi!</em>");

 * @example
    /// returns an `HTMLDocument` which could be represented by "<html><head></head><body><em>HI</em></body></html>".
    parseHTML("<EM>hi!</em>", null);

 * @example
    /// returns an `HTMLDocument` which could be represented by "<html><head><title>title</title></head><body><p>paragraph</p></body></html>".
    parseHTML("<title>title</title><p>paragraph</p>", {});

 * @example
    /// returns null because `<title>` is automatically inserted into `<head>` and thus nothing in `<body>`.
    parseHTML("<title>my title</title>");

 * @example
    /// returns null because `<tr>` is not allowed to exist outsied `<table>` and thus there is only a text node (which isn't an `Element`) in `<body>`.
    parseHTML("<tr><td>QQ</td></tr>");
 *
 */
let parser;
export function parseHTML(html, selectors = "body > *") {
    if(typeof DOMParser === "undefined") throw ReferenceError("DOMParser is not defined");
    if(!parser) parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return (typeof selectors === "string") ? $(selectors, doc) : doc;
}


/**
 * @func getNodes
 * @desc Get nodes within the specified node.
 * @param {string | string[] | Function} [accept = ()=>true] - fit nodes are included
 * @param {string | string[] | Function} [reject = ()=>false] - fit nodes are excluded
 * @param {Element | Document} [base = document] - root of the DOM tree to travere
 * @returns {Node[]} nodes which fit `accept` but not within those fit `reject`
 */
export function getNodes(
    accept = () => true,
    reject = () => false,
    base = document
) {
    /**
     * If none of selector is function, then only elements are considered and text nodes are ignored.
     * In this case, use `Element.querySelectorAll()`; otherwise, `TreeWalker` is the option.
     * `NodeIterator` is not considered here since it does not support `FILTER_REJECT`.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter }
     * @see {@link https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html }
     */
    if(typeof accept !== "function" && typeof reject !== "function") {
        if(accept instanceof Array) accept = accept.join(",");
        if(reject instanceof Array) reject = reject.join(",");
        return $$(accept, base).filter(elem => !$$(reject, base).includes(elem));
    }
    accept = createNodeSelector(accept, base);
    reject = createNodeSelector(reject, base);
    const filter = {
        acceptNode: node => {
            if(reject(node)) return NodeFilter.FILTER_REJECT;
            if(accept(node)) return NodeFilter.FILTER_ACCEPT;
            return NodeFilter.FILTER_SKIP;
        }
    };
    const walker = document.createTreeWalker(base, NodeFilter.SHOW_ALL, filter);

    let node, result = [];
    while(node = walker.nextNode()) result.push(node);
    return result;
}

/**
 * @private
 * @func createNodeSelector
 * @desc used in `getNodes`
 * @param {string | string[] | Function} filterRule
 * @param {Element | Document} base
 * @returns {Function} tests a node and returns a boolean
 */
function createNodeSelector(filterRule, base) {
    if(typeof filterRule === "function") return filterRule;
    if(typeof filterRule === "string") {
        const elements = $$(filterRule, base);
        return node => elements.includes(node);
    }
    if(filterRule instanceof Array) {
        filterRule = filterRule.map(tag => tag.toUpperCase());
        return node => filterRule.includes(node.tagName);
    }
    throw new TypeError("selector shall be a function, a CSS selector string, or an array of strings representing HTML tags.");
}


/**
 * @func createElement
 * @desc Use an JS object to create an `Element`, supporting having listeners and descendants.
 * @see [JSML]{@link https://kong0107.github.io/jsml/} for demo
 * @param {JsonElement} jsml
 * @param {HTMLDocument} [document=window.document] - you can alternatively use JSDOM
 * @returns {Element}
 *
 * @example /// create a <p> tag containing some nodes
    const jsml =
    {p: {
        class: "myClass myClass2",
        style: "margin: .5em 0; padding: 0.5em;",
        $: [
            "JSML means ",
            {a: {
                href: "https://www.json.org/",
                text: "JSON",
                onClick: () => console.log("with listener support")
            }},
            " that represents ",
            {em: "HTML"}
        ]
    }};
    const elem = JSML.createElement(jsml);
    document.body.append(elem, elem.outerHTML);
 *
 */
export const createElement = jsmlCreateElement;


/**
 * @func createElementFromJsonML
 * @desc Use JsonML to create an HTML element.
 * @see {@link http://www.jsonml.org/ }
 * @param {Object} jsonml
 * @returns {Element}
 */
export function createElementFromJsonML(jsonml) {
    if(typeof jsonml === 'string') return document.createTextNode(jsonml);
    if(jsonml instanceof Node) return jsonml.cloneNode(true);

    let [tag, attributes, ...children] = jsonml;
    if(typeof jsonml[1] === 'string' || jsonml[1] instanceof Array) {
        attributes = {};
        [tag, ...children] = jsonml;
    }

    const elem = document.createElement(tag);
    for(let name in attributes) {
        const value = attributes[name];
        name = name.toLowerCase();
        if(name.startsWith('on')) {
            listen(elem, name.substring(2), value);
            continue;
        }
        switch(name) {
            case 'class':
            case 'classname': {
                elem.className = value;
                break;
            }
            case 'css':
            case 'style': {
                if(typeof value === 'string') elem.style.cssText = value;
                else for(let sp in value) elem.style[camelize(sp)] = value[sp];
                break;
            }
            case 'data':
            case 'dataset': {
                for(let ds in value) elem.dataset[camelize(ds)] = value[ds];
                break;
            }
            default: elem.setAttribute(name, attributes[name]);
        }
    }
    elem.append(...children.map(createElementFromJsonML));
    return elem;
}


/**
 * @func clearElement
 * @desc
 *  Remove all children (including text nodes) of the element.
 *  Could be assign to `Element.prototype`.
 * @param {Element} [elem=this]
 */
export function clearElement(elem = this) {
    let child;
    while(child = elem.lastChild) elem.removeChild(child);
}


/**
 * @func isEventInElement
 * @desc
 *  Check wheather a mouse event happens inside an element, even its target is not the element.
 *  Could be assign to `Element.prototype`.
 * @param {MouseEvent} event
 * @param {Element} [elem=this]
 * @returns {boolean}
 */
export function isEventInElement(event, elem = this) {
    const {clientX: x, clientY: y} = event;
    return [...elem.getClientRects()].some(r =>
        x >= r.left && x <= r.right && y >= r.top && y <= r.bottom
    );
}


/**
 * @func extendElementPrototype
 * @desc Add some of above methods to `Element` class.
 */
export const extendElementPrototype = () =>
    Object.assign(Element.prototype, {
        clear: clearElement,
        hasEventIn: isEventInElement
    })
;


Object.assign(utilDom, {
    $, $$, parseHTML, getNodes,
    createElement, createElementFromJsonML,
    clearElement,
    isEventInElement,
    extendElementPrototype
});

export default utilDom;
