# ChangeLog of kong-util

## 0.6.7 (230113)
* Fix `kongUtilString.parseChineseNumber()`
  which had wrong results for strings match `/\d{2,}/`.

## 0.6.6 (230105)
* Fix `kongUtilDom.createElementFromJsonML()`
  which occurred error after v0.6.3 if used as the callback of `Array.map()`.

## 0.6.5 (230104)
* Update `kongUtilString.parseChineseNumber()`.
  Remove dependency to `chinese-parseint`.

## 0.6.4 (230103)
* Deprecate `kongUtilDom.clearElement()`. Users shall use `Element.clearChildren()` instead.
* Add string `kongUtil.version`.

## 0.6.3 (230102)
* Update `kongUtilDom.createElementFromJsonML()` to support `SVGElement` and creating elements by given namespace.

## 0.6.2 (221222)
* Fix `kongUtilDom.createElementFromJsonML()`
  which failed to receive `style` and `dataset` as objects.

## 0.6.1 (221222)
* Remove `kongUtilDom.createElement()` and things about [JSML](https://github.com/kong0107/jsml).
* Add `kongUtilString.camelize()`.

## 0.6.0 (221218)
* Add `kongUtilDom.createElementFromJsonML()` by implementing [JsonML](http://www.jsonml.org/).
