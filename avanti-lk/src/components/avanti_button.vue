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
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  block: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="avanti-button"
    :class="[`avanti-button--${size}`, { 'avanti-button--block': block }]"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<style scoped>
.avanti-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--avanti-primary);
  color: var(--avanti-text-light);
  border: 1px solid transparent;
  border-radius: var(--avanti-radius-btn);
  font-weight: 600;
  line-height: 1.2;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.avanti-button--block {
  width: 100%;
}

.avanti-button--sm {
  padding: 10px 20px;
  font-size: 13px;
  border-radius: var(--avanti-radius-btn);
}

.avanti-button--md {
  padding: 14px 24px;
  font-size: 16px;
  border-radius: 16px;
}

.avanti-button--lg {
  padding: 18px 32px;
  font-size: 24px;
  border-radius: 16px;
}

.avanti-button:hover:not(:disabled) {
  background-color: var(--avanti-primary-dark);
}

.avanti-button:active:not(:disabled) {
  transform: scale(0.98);
}

.avanti-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>