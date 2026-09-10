<script setup>
defineProps({
  spacing: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  hoverable: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="avanti-card" :class="[`avanti-card--${spacing}`, { 'avanti-card--hoverable': hoverable }]">
    <slot />
  </div>
</template>

<style scoped>
.avanti-card {
  background-color: var(--avanti-white);
  border: 1px solid var(--avanti-border);
  border-radius: var(--avanti-radius-card);
}

.avanti-card--sm {
  padding: 12px;
}

.avanti-card--md {
  padding: 16px;
}

.avanti-card--lg {
  padding: 24px;
}

.avanti-card--hoverable {
  transition: box-shadow 0.2s ease;
}

.avanti-card--hoverable:hover {
  box-shadow: var(--avanti-shadow-md);
}
</style>