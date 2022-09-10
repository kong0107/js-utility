/**
 * @func $
 * @desc Alias of `querySelector`.
 * @param {string | string[]} selectors - one or more CSS selector string
 * @param {Element | Document} [base = document]
 * @returns {Element | null}
 *
 * @example /// equivalent to document.querySelector("button")
    $("button");
 */
export const $ = (s, b = document) => b.querySelector(s);

/**
 * @func $$
 * @desc Shortcut to `querySelectorAll` but returns array instead of `NodeList`,
 * @param {string | string[]} selectors - one or more CSS selector string
 * @param {Element | Document} [base = document]
 * @returns {Element[]}
 *
 * @example /// returns all trimmed values of <input>'s in `.myForm`.
    $$(".myForm input").map(input => input.value.trim());
 */
export const $$ = (s, b = document) => [...b.querySelectorAll(s)];

/**
 * @func parseHTML
 * @desc Shortcut to `DOMParser.parseFromString` but returns the first element in `HTMLBodyElement` by default.
 * @param {string} html
 * @param {*} [selectors = body > *] -
 *    If given but not a string or array of strings, the whole `HTMLDocument` is returned.
 *    Otherwise, the first element in the DOM tree matching `selectors` is returned; if no such elements, `null` is returned.
 *    Defaults to return the first element in `document.body`.
 * @returns {HTMLDocument | Element | null} node
 *
 * Incomplete HTML string may lead to unexpected result.
 * Browsers may unexpectedly add essential tags such as `<html>`, `<head>`, and `<body>`,
 * even given `html` string contains no such tags.
 *
 * It may also omit tags if the structure is not complete.
 * For example, `<tr>` as the root node of the `html` string
 * may cause browsers not creating elements but the text nodes within them.
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


const output = {
    $, $$, parseHTML
};

if(typeof window === "object" && window === globalThis)
    Object.assign(window, output);

export default output;
