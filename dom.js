/**
 * Alias of `querySelector`.
 * @param {string | string[]} selectors
 * @param {Element | Document} [base = document]
 * @returns {Element | null}
 */
const $ = (s, b = document) => b.querySelector(s);

/**
 * Alias of `querySelectorAll` but returns an array.
 * @param {string | string[]} selectors
 * @param {Element | Document} [base = document]
 * @returns {Element[]}
 */
const $$ = (s, b = document) => [...b.querySelectorAll(s)];

/**
 * @func parseHTML
 * @desc Parse HTML into DOM
 * @param {string} html
 * @param {boolean} [lastChildOfBody = true]
 * @returns {Node | null} node
 *
 * If `lastChildOfBody` is `false`, the whole `HTMLDocument` is returned.
 * In this case, their would exist `<html>`, `<head>`, and `<body>`
 * even `html` string contains no such things.
 *
 * If `lastChildOfBody` is `true`, the last child (may be a text node) in `<body>` would be returned.
 *
 * @example
    // returns an `Element` whose `tagName` is "em" and has string "hi" as its text content.
    parseHTML("<EM>hi!</em>");

 * @example
    // returns a `HTMLDocument` which could be represented by "<html><head></head><body><em>HI</em></body></html>".
    parseHTML("<EM>hi!</em>", false);

 * @example
    // returns a `HTMLDocument` which could be represented by "<html><head><title>title</title></head><body><p>paragraph</p></body></html>".
    parseHTML("<title>title</title><p>paragraph</p>", false);

 * @example
    // returns `null` because `<title>` is automatically inserted into `<head>` and thus nothing in `<body>`.
    parseHTML("<title>my title</title>");

 * @example
    // returns a text node "QQ" because `<tr>` is not allowed to exist outsied `<table>`.
    parseHTML("<tr><td>QQ</td></tr>");

 * @example
    // returns a text node " " because there exist a space at the end of `html` string.
    parseHTML("<p>first</p><p>second</p> ");

 * @example
    // returns what you may want in the previous example.
    parseHTML("<div><p>first</p><p>second</p> </div>");
 *
 */
const parseHTML = (() => {
    if(typeof DOMParser === "undefined") return;
    let domParser;
    return (html, lastChildOfBody = true) => {
        if(!domParser) domParser = new DOMParser();
        const doc = domParser.parseFromString(html, "text/html");
        return lastChildOfBody ? doc.body.lastChild : doc;
    }
})();
