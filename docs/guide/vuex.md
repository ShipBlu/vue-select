### Using the `input` Event with Vuex

`shipblu-vue-select` emits the `input` event any time the internal `value` is changed. 
This is the same event that allow the for the `v-model` syntax. When using
Vuex for state management, you can use the `input` event to dispatch an
action, or trigger a mutation.

```html
<sb-vue-select 
    @input="myAction" 
    :options="$store.state.options"
    :value="$store.state.selected"
  ></sb-vue-select>
``` 

<CodePen url="aJQJyp" height="350"/>
