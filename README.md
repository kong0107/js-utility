# kong-util

Here are some codes I usually use.
Some runs in any environment that supports JavaScript (ES6 and later);
but some is usable only in browsers.

Also see [demo](https://kong0107.github.io/kong-util/demo.html), [API documentation](https://kong0107.github.io/kong-util/doc/), and [changelog](changelog.md).

## in browsers

### traditional way

```html
<script src="https://cdn.jsdelivr.net/npm/kong-util/dist/all.js"></script>
<script>
    kongUtil.wait(100).then(() => console.log("tradition mode works"));

    kongUtil.use();
    $("body").append("this text will be appended to the bottom of the page.");
</script>
```

### module way

```html
<script type="module">
    import kongUtil from "https://cdn.jsdelivr.net/npm/kong-util/mod/all.mjs";

    kongUtil.$("body").append("this text will be appended to the bottom of the page.");

    kongUtil.use();
    wait(100).then(() => console.log("module mode works"));
</script>
```


## in Node.js

### install
```bash
npm install --save kong-util
```

### use
```js
// ES module
import kongUtil from "kong-util";

// both in ES module and CommonJS
import("kong-util").then(kongUtil => {
    // codes here
});
```
