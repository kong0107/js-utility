# ChangeLog of kong-util

## 0.7.12 (240902)
* Add `kongUtilAsync.waitUntilTrue()`
  which keeps calling specified function until it resolves to non-false value.

## 0.7.10 (240522)
* Add `kongUtilWeb.createFormData()`
  whitch creates a new `FormData` from an object.

## 0.7.9 (231003)
* Update `kongUtilDom.createElementFromTemplate()`
  whiche now clones only the first element for `<template>`.

## 0.7.8 (231003)
* Add `kongUtilArray.shuffle()`
  which randomizes the array in place.
* Add `kongUtilDom.createElementFromTemplate()`
  which clones a `<template>` or other `Node`.

## 0.7.7 (230602)
* Add `kongUtilDom.downloadURL()`
  which makes the browser download the given URL to a file.
* Add `kongUtilDom.downloadData()`
  which makes the browser download the given data to a file.

## 0.7.5 (230531)
* Add `kongUtilEvent.listens()`
  which register listener to multiple events on multiple targets.
* Update `kongUtilImage.readImage()`
  to support `options` argument of `fetch()`.

## 0.7.4 (230519)
* Fix `kongUtilArray.forEachAsync()`
  which did not call callback function.

## 0.7.3 (230509)
* Update `kongUtilEvent`
  to make `target` argument able to be a string, which makes `listen('body', ...)` meaningfule.
  Before, one should use `listen($('body'), ...)` to make the function works.

## 0.7.2 (230324)
* Update `kongUtilImage.resizeImage()`
  to make `settings.fit = 'scaleDown'` work on only one given dimension size.

## 0.7.1 (230324)
* Add `kongUtilImage`.
* Move `resizeImage()` from `kongUtilWeb` to `kongUtilImage`.
* Update `kongUtilImage.resizeImage()`
  to support different `fit` method (like CSS propterty `object-fit`) if both `width` and `height` are set.
* Add `kongUtilImage.readImage()`
  which like `createImageBitmap()` but also supports URLs such as HTTP and data URL.
* Add `kongUtilImage.canvasTo()`
  which converts `HTMLCanvasElement` to different types in a promise way.

## 0.7.0 (230321)
* Add `kongUtilString.base64ToBlob()`
  which also supports data URL as input.
* Add `kongUtilWeb.readFile()`
  which promisifies `FileReader.readAs*`.
* Add `kongUtilWeb.resizeImage()`
  which supports different input types and return types.

## 0.6.8 (230226)
* Fix `kongUtilDom.createElementFromJsonML()`
  which occurred error if `className` given as an empty string.

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
* Deprecate `kongUtilDom.clearElement()`.
  Users shall use `Element.clearChildren()` instead.
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
