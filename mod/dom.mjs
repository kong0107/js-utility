/**
 * @module kongUtilDom
 */
import utilDom from "./core.mjs";

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


Object.assign(utilDom, {
    $, $$, parseHTML
});

export default utilDom;
