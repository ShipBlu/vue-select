<template>
  <sb-vue-select :options="books" label="title">
    <template #option="{ title, author }">
      <h3 style="margin: 0">{{ title }}</h3>
      <em>{{ author.firstName }} {{ author.lastName }}</em>
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
