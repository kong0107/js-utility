/**
 * Alias of `querySelector`.
 * @param {string | string[]} selectors
 * @param {Element | Document} [base = document]
 * @returns {Element | null}
 */
const $ = (s, b = document) => b.querySelector(s);

/**
 * Alias of `querySelectorAll` but returns array.
 * @param {string | string[]} selectors
 * @param {Element | Document} [base = document]
 * @returns {Element[]}
 */
const $$ = (s, b = document) => [...b.querySelectorAll(s)];

/**
 * @func parseHTML
 * @desc Parse HTML into DOM
 * @param {string} html
 * @param {boolean} [onlyChildInBody = true]
 * @returns {Node | null} node
 *
 * If `onlyChildInBody` is `false`, the whole `HTMLDocument` is returned.
 * In this case, their would exist `<html>`, `<head>`, and `<body>`
 * even `html` string contains no such things.
 *
 * If `onlyChildInBody` is `true`, the only child in `<body>` would be returned.
 * If there are more than one node in `html` string, only the last ndoe (text nodes considered) would be returned.
 *
 * @example
    // returns an `Element` whose `tagName` is "em" and has string "hi" as its text content
    parseHTML("<EM>hi!</em>");

 * @example
    // returns a `HTMLDocument` whose content is "<html><head></head><body><em>HI</em></body></html>"
    parseHTML("<EM>hi!</em>", false);

 * @example
    // returns a `HTMLDocument` whose content is "<html><head><title>title</title></head><body><p>paragraph</p></body></html>"
    parseHTML("<title>title</title><p>paragraph</p>", false);

 * @example
    // returns `null` because `<title>` is automatically inserted into `<head>`.
    parseHTML("<title>my title</title>");

 * @example
    // returns a text node "QQ" because `<tr>` is not allowed to exist outsied `<table>`.
    parseHTML("<tr><td>QQ</td></tr>");

 * @example
    // returns a text node " " because there exist a space at the end of `html` string.
    parseHTML("<p>first</p><p>second</p> ");

 * @exampl
    // returns what you may want in the previous example.
    parseHTML("<div><p>first</p><p>second</p> </div>");
 *
 */
const parseHTML = (() => {
    if(typeof DOMParser === "undefined") return;
    let domParser;
    return (html, onlyChildInBody = true) => {
        if(!domParser) domParser = new DOMParser();
        const doc = domParser.parseFromString(html, "text/html");
        return onlyChildInBody ? doc.body.lastChild : doc;
    }
})();
