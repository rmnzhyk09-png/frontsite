<script setup>
defineProps({
  theme: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value),
  },
})
</script>

<template>
  <hr class="avanti-divider" :class="`avanti-divider--${theme}`" />
</template>

<style scoped>
.avanti-divider {
  width: 100%;
  height: 1px;
  border: none;
  background-color: var(--avanti-divider);
}

.avanti-divider--dark {
  background-color: var(--avanti-border);
}
</style>