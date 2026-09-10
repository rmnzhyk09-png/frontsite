<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline-brand' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  ariaLabel?: string
}>()

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<template>
  <button
    :class="[
      'btn',
      `btn--${variant || 'primary'}`,
      `btn--${size || 'md'}`,
      { 'btn--full': fullWidth, 'btn--loading': loading },
    ]"
    :disabled="disabled || loading"
    :aria-label="ariaLabel"
    type="button"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="btn__spinner" aria-hidden="true"></span>
    <span class="btn__content" :class="{ 'btn__content--hidden': loading }">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: none;
  border-radius: var(--radius-button);
  font-family: var(--font-main);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  white-space: nowrap;
}
.btn:focus-visible { outline: 2px solid var(--bg-brand); outline-offset: 2px; }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }

.btn--primary {
  background-color: var(--bg-brand);
  color: var(--text-white);
}
.btn--primary:hover:not(:disabled) { background-color: var(--bg-brand-dark); }

.btn--dark {
  background-color: var(--text-black);
  color: var(--text-white);
  border: 1px solid var(--border-brand);
}
.btn--dark:hover:not(:disabled) { background-color: #222; }

.btn--outline-brand {
  background-color: var(--bg-card);
  color: var(--text-brand);
  border: 1.5px solid var(--border-brand);
}
.btn--outline-brand:hover:not(:disabled) { background-color: var(--bg-brand-light); }

.btn--secondary {
  background-color: var(--bg-page);
  color: var(--text-secondary);
}
.btn--ghost {
  background-color: transparent;
  color: var(--text-brand);
}
.btn--ghost:hover:not(:disabled) { background-color: var(--bg-brand-light); }

.btn--sm { height: 31px; padding: 0 12px; font-size: 12px; border-radius: var(--radius-button); }
.btn--md { height: 37px; padding: 0 12px; font-size: 13px; }
.btn--lg { height: 64px; padding: 0 24px; font-size: 18px; border-radius: var(--radius-md); }
.btn--full { width: 100%; }

.btn__spinner {
  width: 16px; height: 16px;
  border: 2px solid rgba(0,0,0,0.2);
  border-top-color: var(--text-primary);
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
.btn__content { display: flex; align-items: center; gap: 12px; }
.btn__content--hidden { visibility: hidden; }

@keyframes spin { to { transform: rotate(360deg); } }
</style>
