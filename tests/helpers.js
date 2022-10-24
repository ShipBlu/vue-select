import { shallowMount } from '@vue/test-utils'
import ShipbluVueSelect from '../src/components/Select.vue'
import Vue from 'vue'

/**
 * Trigger a submit event on the search
 * input with a provided search text.
 *
 * @param Wrapper {Wrapper<Vue>}
 * @param searchText
 */
export const searchSubmit = async (Wrapper, searchText = false) => {
  const search = Wrapper.findComponent({ ref: 'search' })
  await search.trigger('focus')

  if (searchText) {
    Wrapper.vm.search = searchText
    await Wrapper.vm.$nextTick()
  }

  await search.trigger('keydown.enter')
  await Wrapper.vm.$nextTick()
}

/**
 * Focus the input, enter some search text, hit return.
 * @param Wrapper {Wrapper<Vue>}
 * @param searchText
 * @return {Promise<void>}
 */
export const selectTag = async (Wrapper, searchText) => {
  Wrapper.vm.$refs.search.focus()
  await Wrapper.vm.$nextTick()

  Wrapper.vm.search = searchText
  await Wrapper.vm.$nextTick()

  Wrapper.findComponent({ ref: 'search' }).trigger('keydown.enter')
  await Wrapper.vm.$nextTick()
}

/**
 * Create a new ShipbluVueSelect instance with
 * a provided set of props.
 * @param propsData
 * @returns {Wrapper<Vue>}
 */
export const selectWithProps = (propsData = {}) => {
  return shallowMount(ShipbluVueSelect, { propsData })
}

/**
 * Returns a Wrapper with a sb-vue-select component.
 * @param props
 * @param options
 * @return {Wrapper<Vue>}
 */
export const mountDefault = (props = {}, options = {}) => {
  return shallowMount(ShipbluVueSelect, {
    propsData: {
      options: ['one', 'two', 'three'],
      ...props,
    },
    ...options,
  })
}

/**
 * Returns a sb-vue-select component directly.
 * @param props
 * @param options
 * @return {Vue | Element | Vue[] | Element[]}
 */
export const mountWithoutTestUtils = (props = {}, options = {}) => {
  return new Vue({
    components: { ShipbluVueSelect },
    render: (createEl) =>
      createEl('shipblu-vue-select', {
        ref: 'select',
        props: { options: ['one', 'two', 'three'], ...props },
        ...options,
      }),
  }).$mount().$refs.select
}
