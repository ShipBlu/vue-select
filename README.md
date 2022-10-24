# shipblu-vue-select 

> **Everything you wish the HTML `<select>` element could do, wrapped up into a lightweight, zero
> dependency, extensible Vue component.**

Vue Select is a feature rich select/dropdown/typeahead component. It provides a default
template that fits most use cases for a filterable select dropdown. The component is designed to be as
lightweight as possible, while maintaining high standards for accessibility,
developer experience, and customization.

- Tagging
- Filtering / Searching
- Vuex Support
- AJAX Support
- SSR Support
- Accessible
- ~20kb Total / ~5kb CSS / ~15kb JS
- Select Single/Multiple Options
- Customizable with slots and SCSS variables
- Zero dependencies

## Documentation

Complete documentation and examples available at https://shipblu-vue-select.org.

- **[API Documentation](https://shipblu-vue-select.org)**
- **[CodePen Template](http://codepen.io/sagalbot/pen/NpwrQO)**

## Sponsors :tada:

It takes a lot of effort to maintain this project. If it has saved you development time, please consider [sponsoring the project](https://github.com/sponsors/sagalbot)
with GitHub sponsors!

Huge thanks to the [sponsors](https://github.com/sponsors/sagalbot) and [contributors](https://github.com/sagalbot/shipblu-vue-select/graphs/contributors) that make Vue Select possible!

## Install

> Vue 3 support is on the `beta` channel: `shipblu-vue-select@beta`, and will become the new default when `v4` is released. See [#1579](https://github.com/sagalbot/shipblu-vue-select/issues/1597) for more details!



**Vue 2 / Vue Select 3.x**
```bash
# use npm

npm install shipblu-vue-select
```

Then, import and register the component:

```js
import Vue from "vue";
import vSelect from "shipblu-vue-select";

Vue.component("V-select", vSelect);
```

The component itself does not include any CSS. You'll need to include it separately:

```js
import "shipblu-vue-select/dist/shipblu-vue-select.css";
```

You can also include shipblu-vue-select directly in the browser. Check out the
[documentation for loading from CDN.](https://shipblu-vue-select.org/guide/install.html#in-the-browser).

## License

[MIT](https://github.com/sagalbot/shipblu-vue-select/blob/master/LICENSE.md)
