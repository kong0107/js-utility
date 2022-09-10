/**
 * @module utilElement
 */

/**
 * @func clearElement
 * @desc remove all children (including text nodes) of the element
 * @param {Element} elem
 */
export function clearElement(elem = this) {
    let child;
    while(child = elem.lastChild) elem.removeChild(node);
}


/**
 * @func extendElementPrototype
 * @desc Add above methods to `Element` class.
 */
export const extendElementPrototype = () =>
    Object.assign(Element.prototype, {
        clear: clearElement
    })
;

const output = {
    clearElement,
    extendElementPrototype
};

if(typeof window === "object" && window === globalThis)
    Object.assign(window, output);

export default output;
