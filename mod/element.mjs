/**
 * @module utilElement
 */
import kongUtil from "./core.mjs";

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


Object.assign(kongUtil, {
    clearElement,
    extendElementPrototype
});

export default kongUtil;
