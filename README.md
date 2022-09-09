# kong-util

Here are some codes I usually use.
Some runs in any environment that supports JavaScript (ES6 and later);
but some is usable only in browsers.

<!-- ## in Node.js

```bash
npm install --save kong-util
```

```js
// CommonJS
const kongUtil = require("kong-util");

// ES module (not done yet)
import kongUtil from "kong-util";
``` -->

## in browsers
```html
<script src="https://cdn.jsdelivr.net/gh/kong0107/kong-util/dist/all.js"></script>
```

```html
<button>A</button>
<button>B</button>
<button>C</button>
<script>
    $$("button").forEach(button => {
        listen(button, "click", () => alert("hoho"));
    });
</script>
```

## going to support:

- [ ] Node.js: CommnJS
- [ ] Node.js: ES module
- [x] browser: `<script src>`
- [ ] browser: `<script type="module">`