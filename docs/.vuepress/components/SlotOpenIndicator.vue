<template>
  <sb-vue-select>
    <template #open-indicator="{ attributes }">
      <span v-bind="attributes">🔽</span>
    </template>
  </sb-vue-select>
</template>
