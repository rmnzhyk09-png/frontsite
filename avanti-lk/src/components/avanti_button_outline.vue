<script setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'button',
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md'].includes(value),
  },
})
</script>

<template>
  <button
    :type="type"
    class="avanti-button-outline"
    :class="`avanti-button-outline--${size}`"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<style scoped>
.avanti-button-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: var(--avanti-primary);
  border: 1px solid var(--avanti-primary);
  border-radius: var(--avanti-radius-btn);
  font-weight: 600;
  white-space: nowrap;
  transition: background-color 0.2s ease;
}

.avanti-button-outline--sm {
  padding: 8px 16px;
  font-size: 13px;
}

.avanti-button-outline--md {
  padding: 12px 16px;
  font-size: 13px;
}

.avanti-button-outline:hover {
  background-color: var(--avanti-info-bg);
}
</style>