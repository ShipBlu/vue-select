<template>
  <sb-vue-select>
    <template #search="{ attributes, events }">
      <input
        maxlength="1"
        class="vs__search"
        v-bind="attributes"
        v-on="events"
      />
    </template>
  </sb-vue-select>
</template>
