## Right to Left

Vue Select supports RTL using the standard HTML API using the `dir` prop.

```html
<sb-vue-select dir="rtl"></sb-vue-select>
```

The `dir` prop accepts the same values as the [HTML spec](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir): 

  - `rtl`
  - `ltr`
  - `auto`

## Component Text

All of the text within the component has been wrapped within [slots](https://vuejs.org/v2/guide/components.html#Content-Distribution-with-Slots) and can be replaced in your app.

### Loading Spinner
*Slot Definition:*
```html
<slot name="spinner">
	<div class="spinner" v-show="mutableLoading">Loading...</div>
</slot>
```
*Implementation:*
```html
<sb-vue-select>
	<i slot="spinner" class="icon icon-spinner"></i>
</sb-vue-select>
```

### No Options Text
*Slot Definition:*
```html
<slot name="no-options">Sorry, no matching options.</slot>
```
*Implementation:*
```html
<sb-vue-select>
	<div slot="no-options">No Options Here!</div>
</sb-vue-select>
```

For a full list of component slots, view the [slots API docs](../api/slots.md).
