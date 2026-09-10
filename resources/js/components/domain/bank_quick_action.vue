<script setup lang="ts">
import type { QuickAction } from '@/types'
import BankBaseIcon from '@/components/base/bank_base_icon.vue'

defineProps<{
  action: QuickAction
}>()

defineEmits<{
  click: [action: QuickAction]
}>()
</script>

<template>
  <button
    class="quick-action"
    :aria-label="action.label"
    @click="$emit('click', action)"
  >
    <div class="quick-action__icon" :style="{ backgroundColor: action.color }">
      <bank-base-icon :name="action.icon" :size="22" color="var(--c-primary)" />
    </div>
    <span class="quick-action__label">{{ action.label }}</span>
  </button>
</template>

<style scoped>
.quick-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: var(--radius-md);
  transition: transform 0.2s;
  flex: 1;
  min-width: 0;
}

.quick-action:hover {
  transform: translateY(-2px);
}

.quick-action:focus-visible {
  outline: 2px solid var(--c-primary);
  outline-offset: 2px;
}

.quick-action__icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s;
}

.quick-action:hover .quick-action__icon {
  box-shadow: var(--shadow-md);
}

.quick-action__label {
  font-size: 12px;
  font-weight: 500;
  color: var(--c-text-secondary);
  text-align: center;
}

@media (min-width: 768px) {
  .quick-action__icon {
    width: 56px;
    height: 56px;
  }

  .quick-action__label {
    font-size: 13px;
  }
}
</style>
