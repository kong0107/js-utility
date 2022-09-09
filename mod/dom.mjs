/**
 * Alias of `querySelector`.
 * @param {string | string[]} selectors
 * @param {Element | Document} [base = document]
 * @returns {Element | null}
 *
 * @example /// equivalent to document.querySelector("button")
    $("button");
 */
export const $ = (s, b = document) => b.querySelector(s);

/**
 * Calls `querySelectorAll` and convert the result to an array.
 * @param {string | string[]} selectors
 * @param {Element | Document} [base = document]
 * @returns {Element[]}
 *
 * @example /// returns all trimmed values of <input>'s in `.myForm`.
    $$(".myForm input").map(input => input.value.trim());
 */
export const $$ = (s, b = document) => [...b.querySelectorAll(s)];

/**
 * @func parseHTML
 * @desc shortcut to `DOMParser.parseFromString`
 * @param {string} html -
 * @param {boolean} [lastChildOfBody = false] -
 *    if true, only the `document.body.lastChild` is returned, but it may be `null`;
 *    if false, the whole `HTMLDocument` is returned.
 * @returns {Node | null} node
 *
 * Incomplete HTML string may lead to unexpected result.
 * Browsers may unexpectedly add essential tags such as `<html>`, `<head>`, and `<body>`,
 * even given `html` string contains no such tags.
 *
 * Another example of this phenomenon: `<tr>` as the root node of the `html` string,
 * may cause browsers not creating elements but the text nodes within them.
 *
 * @example
    /// returns an `Element` whose `tagName` is "em" and has string "hi" as its text content.
    parseHTML("<EM>hi!</em>");

 * @example
    /// returns a `HTMLDocument` which could be represented by "<html><head></head><body><em>HI</em></body></html>".
    parseHTML("<EM>hi!</em>", false);

 * @example
    /// returns a `HTMLDocument` which could be represented by "<html><head><title>title</title></head><body><p>paragraph</p></body></html>".
    parseHTML("<title>title</title><p>paragraph</p>", false);

 * @example
    /// returns `null` because `<title>` is automatically inserted into `<head>` and thus nothing in `<body>`.
    parseHTML("<title>my title</title>");

 * @example
    /// returns a text node "QQ" because `<tr>` is not allowed to exist outsied `<table>`.
    parseHTML("<tr><td>QQ</td></tr>");

 * @example
    /// returns a text node " " because there exist a space at the end of `html` string.
    parseHTML("<p>first</p><p>second</p> ");

 * @example
    /// returns what you may want in the previous example.
    parseHTML("<div><p>first</p><p>second</p> </div>");
 *
 */
export const parseHTML = (() => {
    let parser;
    return (html, lastChildOfBody = false) => {
        if(typeof DOMParser === "undefined") throw ReferenceError("DOMParser is not defined");
        if(!parser) parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        return lastChildOfBody ? doc.body.lastChild : doc;
    }
})();


const output = {
    $, $$, parseHTML
};

if(typeof window === "object" && window === globalThis)
    Object.assign(window, output);

export default output;
