<script setup lang="ts">
import { computed } from 'vue'
import type { Transaction } from '@/types'
import BankBaseIcon from '@/components/base/bank_base_icon.vue'
import BankBaseBadge from '@/components/base/bank_base_badge.vue'

const props = defineProps<{
  transaction: Transaction
}>()

defineEmits<{
  click: [transaction: Transaction]
}>()

const formattedAmount = computed(() => {
  const abs = Math.abs(props.transaction.amount).toLocaleString('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  const sign = props.transaction.type === 'income' ? '+' : props.transaction.type === 'expense' ? '-' : ''
  return `${sign}${abs}`
})

const amountClass = computed(() => {
  if (props.transaction.type === 'income') return 'transaction-row__amount--income'
  if (props.transaction.type === 'expense') return 'transaction-row__amount--expense'
  return 'transaction-row__amount--transfer'
})

const statusVariant = computed(() => {
  const map: Record<string, 'success' | 'error' | 'warning'> = {
    completed: 'success',
    pending: 'warning',
    failed: 'error',
  }
  return map[props.transaction.status] || 'neutral'
})

const statusText = computed(() => {
  const map: Record<string, string> = {
    completed: 'Выполнено',
    pending: 'В обработке',
    failed: 'Ошибка',
  }
  return map[props.transaction.status] || props.transaction.status
})

const formattedDate = computed(() => {
  const d = new Date(props.transaction.date)
  return d.toLocaleDateString('ru-RU', { day: '2-digit', month: 'short' })
})
</script>

<template>
  <button
    class="transaction-row"
    :aria-label="`${transaction.title}, ${formattedAmount} ${transaction.currency}`"
    @click="$emit('click', transaction)"
  >
    <div class="transaction-row__icon">
      <bank-base-icon :name="transaction.icon" :size="20" :color="transaction.type === 'income' ? 'var(--c-success)' : 'var(--c-text-secondary)'" />
    </div>
    <div class="transaction-row__info">
      <span class="transaction-row__title">{{ transaction.title }}</span>
      <span class="transaction-row__desc">{{ transaction.description }}</span>
    </div>
    <div class="transaction-row__right">
      <span :class="['transaction-row__amount', amountClass]">{{ formattedAmount }} {{ transaction.currency }}</span>
      <div class="transaction-row__meta">
        <bank-base-badge :text="statusText" :variant="statusVariant" size="sm" />
        <span class="transaction-row__date">{{ formattedDate }}</span>
      </div>
    </div>
  </button>
</template>

<style scoped>
.transaction-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  text-align: left;
}

.transaction-row:hover {
  border-color: var(--c-primary);
  box-shadow: var(--shadow-sm);
}

.transaction-row:focus-visible {
  outline: 2px solid var(--c-primary);
  outline-offset: 2px;
}

.transaction-row__icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: var(--c-gray-100);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.transaction-row__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.transaction-row__title {
  font-size: 14px;
  font-weight: 600;
  color: var(--c-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.transaction-row__desc {
  font-size: 12px;
  color: var(--c-text-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.transaction-row__right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  flex-shrink: 0;
}

.transaction-row__amount {
  font-size: 14px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  white-space: nowrap;
}

.transaction-row__amount--income {
  color: var(--c-success);
}

.transaction-row__amount--expense {
  color: var(--c-text);
}

.transaction-row__amount--transfer {
  color: var(--c-info);
}

.transaction-row__meta {
  display: flex;
  align-items: center;
  gap: 8px;
}

.transaction-row__date {
  font-size: 11px;
  color: var(--c-text-tertiary);
}

@media (min-width: 768px) {
  .transaction-row {
    padding: 16px 20px;
  }
}
</style>
