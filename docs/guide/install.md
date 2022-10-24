## Yarn / NPM

Install with yarn or npm:

```bash
# vue 2
yarn add shipblu-vue-select

# vue 3
yarn add shipblu-vue-select@beta

# or, using NPM
npm install shipblu-vue-select
```

Then, import and register the component:

```js
import Vue from 'vue'
import vSelect from 'shipblu-vue-select'

Vue.component('sb-vue-select', vSelect)
```

The component itself does not include any CSS. You'll need to include it separately:

```js
import 'shipblu-vue-select/dist/shipblu-vue-select.css';
```

## In the Browser

shipblu-vue-select ships as an UMD module that is accessible in the browser. When loaded
in the browser, you can access the component through the `ShipbluVueSelect.ShipbluVueSelect` 
global variable. You'll need to load Vue.js, shipblu-vue-select JS & shipblu-vue-select CSS.

```html
<!-- include VueJS first -->
<script src="https://unpkg.com/vue@latest"></script>

<!-- use the latest shipblu-vue-select release -->
<script src="https://unpkg.com/shipblu-vue-select@latest"></script>
<link rel="stylesheet" href="https://unpkg.com/shipblu-vue-select@latest/dist/shipblu-vue-select.css">

<!-- or point to a specific shipblu-vue-select release -->
<script src="https://unpkg.com/shipblu-vue-select@3.0.0"></script>
<link rel="stylesheet" href="https://unpkg.com/shipblu-vue-select@3.0.0/dist/shipblu-vue-select.css">
```
Then register the component in your javascript:

```js
Vue.component('sb-vue-select', ShipbluVueSelect.ShipbluVueSelect);
```

<CodePen url="dJjzeP" />

## Vue Compatibility

- Vue `2.x`, use shipblu-vue-select `3.x`. 
- Vue `3.x`, use shipblu-vue-select `3.x@beta`.  
