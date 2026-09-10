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
  disabled: {
    type: Boolean,
    default: false,
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
    :disabled="disabled"
    class="avanti-button-outline"
    :class="`avanti-button-outline--${size}`"
  >
    <slot name="icon" />
    <slot>{{ text }}</slot>
    <slot name="after" />
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

.avanti-button-outline:hover:not(:disabled) {
  background-color: var(--avanti-info-bg);
}

.avanti-button-outline:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>