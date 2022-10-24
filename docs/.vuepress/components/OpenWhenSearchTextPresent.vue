<template>
  <sb-vue-select
    v-model="country"
    :options="countries"
    :dropdown-should-open="dropdownShouldOpen"
  />
</template>

<script>
import countries from '../data/countries.js'

export default {
  data() {
    return {
      countries,
      country: null,
    }
  },
  methods: {
    dropdownShouldOpen(ShipbluVueSelect) {
      if (this.country !== null) {
        return ShipbluVueSelect.open
      }

      return ShipbluVueSelect.search.length !== 0 && ShipbluVueSelect.open
    },
  },
}
</script>
