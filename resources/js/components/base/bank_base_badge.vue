<script setup lang="ts">
defineProps<{
  text: string
  variant?: 'brand' | 'success' | 'error' | 'neutral' | 'white'
  size?: 'sm' | 'md'
}>()
</script>

<template>
  <span :class="['badge', `badge--${variant || 'neutral'}`, `badge--${size || 'md'}`]" role="status">
    {{ text }}
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-main);
  font-weight: 700;
  border-radius: var(--radius-pill);
  white-space: nowrap;
}
.badge--sm { padding: 2px 8px; font-size: 11px; }
.badge--md { padding: 4px 12px; font-size: 12px; }
.badge--brand { background-color: var(--bg-brand); color: var(--text-white); }
.badge--success { background-color: var(--bg-brand); color: var(--text-white); }
.badge--error { background-color: var(--bg-danger); color: var(--text-white); }
.badge--neutral { background-color: var(--bg-pending); color: var(--text-secondary); }
.badge--white { background-color: var(--bg-card); color: var(--text-primary); }
</style>
