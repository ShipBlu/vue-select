<template>
  <div>
    <sb-vue-select
      class="style-chooser"
      placeholder="Choose a Styling Option"
      :options="['Components', 'CSS / Variables', 'Slots']"
    />
  </div>
</template>

<style>
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: #dfe5fb;
  border: none;
  color: #394066;
  text-transform: lowercase;
  font-variant: small-caps;
}

.first-label {
  color: #000000 !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  line-height: 2 !important;
}
.second-label {
  color: #626262 !important;
  font-size: 13px !important;
}
li.shipblu-option:hover p {
  color: white !important;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #394066;
}
</style>
