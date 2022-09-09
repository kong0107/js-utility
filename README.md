# kong-util

Here are some codes I usually use.
Some runs in any environment that supports JavaScript (ES6 and later);
but some is usable only in browsers.

## in browsers

### traditional way

```html
<script src="https://cdn.jsdelivr.net/npm/kong-util/dist/all.js"></script>
<script>
    $("body").append("this text will be appended to the bottom of the page.");
</script>
```

### module way

```html
<script type="module">
    import kongUtil from "https://cdn.jsdelivr.net/npm/kong-util/mod/all.mjs";

    kongUtil.wait(1000).then(() => console.log("module mode works"));
</script>
```


## in Node.js

Has not publish to npm yet; download to your workplace manually.

```bash
npm install --save kong-util
```

```js
// ES module
import kongUtil from "kong-util";

// both in ES module and CommonJS
import("kong-util").then(kongUtil => {
    // codes here
});
```