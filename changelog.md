# ChangeLog of kong-util

## future (0.9.0 expected)
* Assign old `kongDom.createElement` to `createElementFromJsonML` instead of showing warning message only.
* Remove `kongDom.clearElement`, `kongDom.setAria`.

## 0.8.7 (250204)
* Update `kongDom.setAttributes()`
  which now removes the specified attribute if `undefined` is assigned.
  This affects `createElementFromJsonML`.
* Improve documentation.
  Add `@typedef JsonML` and `@typedef NullLike` into `kongDom`.

## 0.8.6 (250204)
* Update `kongDom.createElementFromJsonML()`
  which now treats `null`, `undefined`, and `boolean` as empty string
  and merge adjacent text nodes.

## 0.8.5 (250202)
* Add `kongString.modifyURLBySearchParams()`
  which sets `searchParams` of a `URL` or URL string.

## 0.8.4 (250130)
* Extend `Element`'s native methods which have strings or nodes as arguments
  to support JsonML inputs after calling `extendElementPrototype()`.

## 0.8.3 (250130)
* Add `kongWeb.fetchEx()`
  which is made from `fetchSrict()` but resolves even in HTTP error.
  `body` of the request could be an `HTMLFormElement`.
  This affects `fetchStrict()`.

## 0.8.2 (250129)
* Update `kongWeb.fetchStrict()`
  which now supports a normal object to be request's `body`,
  and GET is allowed to have `body` in some cases.
* Rename `kongEvent.listens()` and `kongEvent.unlistens()`
  into `listenMulti()` and `unlistenMulti()` respectively.
* Update `kongDom.setAttributesInElement()`
  which now treats boolean values into `setAttribute(attr, '')` or `removeAttribute(attr)`.
  This affects `setAttributes` and `createElementFromJsonML`.

## 0.8.1 (250126)
* Update `README.md`
* Add `kongObject.objectMap()` and `kongObject.objectMapAsync()`
  which call functions to each properties in an object.
* Fix `kongObject.objectReduceAsync()`
  which did not wait for callback's resolution.
* Fix `findIndexAsync`, `findLastIndexAsync`, `someAsync` in `kongArray`
  which did not work in extended way.

## 0.8.0 (250125)
* Add `kongUtilString.kebabize()`
  which converts a camelCase string into kebab-case style.
* Add `kongUtilDom.setText()` and `Element::setText()`
  which set `textContent` of the specified Element.
* Add `kongUtilDom.setAria()` and `Element::setAria()`
  which set ARIA attributes of the specified Element.
* Add `kongUtilDom.setAttributes()` and `Element::set()`
  which set attributes by an object as a map.

## 0.7.12 (240902)
* Add `kongUtilAsync.waitUntilTrue()`
  which keeps calling specified function until it resolves to non-false value.

## 0.7.10 (240522)
* Add `kongUtilWeb.createFormData()`
  whitch creates a new `FormData` from an object.

## 0.7.9 (231003)
* Update `kongUtilDom.createElementFromTemplate()`
  whiche now clones only the first element for `<template>` input.

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
