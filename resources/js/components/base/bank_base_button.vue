<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'navy'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  ariaLabel?: string
  active?: boolean
}>()

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<template>
  <button
    :class="[
      'base-btn',
      `base-btn--${variant || 'primary'}`,
      `base-btn--${size || 'md'}`,
      {
        'base-btn--full': fullWidth,
        'base-btn--loading': loading,
        'base-btn--active': active,
      },
    ]"
    :disabled="disabled || loading"
    :aria-label="ariaLabel"
    type="button"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="base-btn__spinner" aria-hidden="true"></span>
    <span class="base-btn__content" :class="{ 'base-btn__content--hidden': loading }">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.base-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: var(--radius-md);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  white-space: nowrap;
}

.base-btn:focus-visible {
  outline: 2px solid var(--c-primary);
  outline-offset: 2px;
}

.base-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.base-btn--primary {
  background-color: var(--c-primary);
  color: #ffffff;
}

.base-btn--primary:hover:not(:disabled) {
  background-color: var(--c-primary-dark);
}

.base-btn--primary:active:not(:disabled) {
  transform: scale(0.98);
}

.base-btn--secondary {
  background-color: var(--c-gray-100);
  color: var(--c-text);
}

.base-btn--secondary:hover:not(:disabled) {
  background-color: var(--c-gray-200);
}

.base-btn--ghost {
  background-color: transparent;
  color: var(--c-text-secondary);
}

.base-btn--ghost:hover:not(:disabled) {
  background-color: var(--c-gray-100);
}

.base-btn--navy {
  background-color: var(--c-navy);
  color: #ffffff;
}

.base-btn--navy:hover:not(:disabled) {
  background-color: var(--c-navy-light);
}

.base-btn--danger {
  background-color: var(--c-error);
  color: #ffffff;
}

.base-btn--sm {
  height: 36px;
  padding: 0 14px;
  font-size: 13px;
  border-radius: var(--radius-sm);
}

.base-btn--md {
  height: 44px;
  padding: 0 20px;
  font-size: 14px;
}

.base-btn--lg {
  height: 52px;
  padding: 0 28px;
  font-size: 16px;
  border-radius: var(--radius-lg);
}

.base-btn--full {
  width: 100%;
}

.base-btn__spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

.base-btn__content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.base-btn__content--hidden {
  visibility: hidden;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
