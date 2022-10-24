<template>
  <!-- eslint-disable vue/no-unused-vars  -->
  <sb-vue-select :options="books" label="title">
    <template
      #selected-option-container="{ option, deselect, multiple, disabled }"
    >
      <div class="vs__selected">{{ option.title }}</div>
    </template>
  </sb-vue-select>
</template>

<script>
export default {
  data: () => ({
    books: [
      {
        title: "Old Man's War",
        author: {
          firstName: 'John',
          lastName: 'Scalzi',
        },
      },
    ],
  }),
}
</script>
