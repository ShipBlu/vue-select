<template>
  <sb-vue-select v-model="selected" :options="books" label="title">
    <template #selected-option="{ title, author }">
      <div style="display: flex; align-items: baseline">
        <strong>{{ title }}</strong>
        <em style="margin-left: 0.5rem"
          >by {{ author.firstName }} {{ author.lastName }}</em
        >
      </div>
    </template>
  </sb-vue-select>
</template>

<script>
const book = {
  title: "Old Man's War",
  author: {
    firstName: 'John',
    lastName: 'Scalzi',
  },
}
export default {
  data: () => ({
    books: [book],
    selected: book,
  }),
}
</script>
