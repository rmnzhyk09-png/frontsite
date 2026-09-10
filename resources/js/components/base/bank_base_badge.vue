<script setup lang="ts">
defineProps<{
  text: string
  variant?: 'success' | 'error' | 'warning' | 'info' | 'neutral'
  size?: 'sm' | 'md'
}>()

function getColor(type: string): string {
  const map: Record<string, string> = {
    success: 'badge--success',
    error: 'badge--error',
    warning: 'badge--warning',
    info: 'badge--info',
    neutral: 'badge--neutral',
  }
  return map[type] || 'badge--neutral'
}
</script>

<template>
  <span :class="['badge', getColor(variant || 'neutral'), `badge--${size || 'md'}`]" role="status">
    {{ text }}
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  border-radius: 20px;
  white-space: nowrap;
}

.badge--sm {
  padding: 2px 8px;
  font-size: 11px;
}

.badge--md {
  padding: 4px 12px;
  font-size: 12px;
}

.badge--success {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.badge--error {
  background-color: #ffebee;
  color: #c62828;
}

.badge--warning {
  background-color: #fff3e0;
  color: #e65100;
}

.badge--info {
  background-color: #e3f2fd;
  color: #1565c0;
}

.badge--neutral {
  background-color: var(--c-gray-100);
  color: var(--c-text-secondary);
}
</style>
