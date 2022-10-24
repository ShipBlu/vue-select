<template>
  <sb-vue-select :options="options"></sb-vue-select>
</template>

<script>
import countryCodes from '../data/countryCodes'

export default {
  name: 'CountrySelect',
  data: () => ({
    options: countryCodes,
  }),
}
</script>

<style scoped></style>
