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
 * @param {Element | Document} [base = document]
 * @returns {null | Element | Array | Object} element
 *
 *  If `selectors` is a string, this function works exactly as `querySelector()`.
 *
 *  If `selectors` is an array, this returns
 *  an array with each element corresponding to the input element, or null if no such ones.
 *
 *  If `selectors` is an object, this returns
 *  an object with the same keys but values are the corresponding first found element.
 *
 *  Nested arrays and objects are supported by recursion.
 *
 * @example /// get the first button by a string
    $("button, [type=button], [type=submit]");
 *
 * @example /// assign more than one element to variables by an array
    let [myForm, myTable, myTextArea] = $("#myForm", ".myTable", "textarea")
 *
 * @example /// object

 */
export const $ = (s, b = document) => {
    if(typeof s === "string") return b.querySelector(s);
    else if(s instanceof Array) return s.map(ss => $(ss, b));
    const r = {};
    for(let name in s) result[name] = $(s[name], b);
    return r;
};


/**
 * @func $$
 * @desc Shortcut to `querySelectorAll` but returns an array instead of `NodeList`; different if not giving a string, like `$` does.
 * @param {string | Array | Object} selectors - one or more CSS selector string
 * @param {Element | Document} [base = document]
 * @returns {Array | Object}
 *
 * @example /// returns all trimmed values of <input>'s in `.myForm`.
    $$(".myForm input").map(input => input.value.trim());
 */
export const $$ = (s, b = document) => {
   if(typeof s === "string") return [...b.querySelectorAll(s)];
   else if(s instanceof Array) return s.map(ss => $$(ss, b));
   const r = {};
   for(let name in s) result[name] = $$(s[name], b);
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
 *  may cause browsers not creating elements but the text nodes within them.
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
export const parseHTML = (() => {
    let parser;
    return (html, selectors = "body > *") => {
        if(typeof DOMParser === "undefined") throw ReferenceError("DOMParser is not defined");
        if(!parser) parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        if(typeof selectors === "string" || selectors instanceof Array)
            return $(selectors, doc);
        return doc;
    }
})();


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
};

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
 * @desc Use an JS object to create an `Element`
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
    createElement,
    clearElement,
    extendElementPrototype
});

export default utilDom;
