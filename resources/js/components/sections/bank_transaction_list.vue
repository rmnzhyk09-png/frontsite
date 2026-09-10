<script setup lang="ts">
import type { Transaction } from '@/types'
import BankTransactionRow from '@/components/domain/bank_transaction_row.vue'
import BankBaseButton from '@/components/base/bank_base_button.vue'

defineProps<{
  transactions: Transaction[]
}>()

defineEmits<{
  viewAll: []
  clickTransaction: [transaction: Transaction]
}>()
</script>

<template>
  <section class="transaction-list" aria-label="Последние операции">
    <div class="transaction-list__header">
      <h2 class="transaction-list__title">Последние операции</h2>
      <bank-base-button variant="ghost" size="sm" @click="$emit('viewAll')">
        Все операции →
      </bank-base-button>
    </div>
    <div class="transaction-list__items">
      <bank-transaction-row
        v-for="tx in transactions"
        :key="tx.id"
        :transaction="tx"
        @click="$emit('clickTransaction', tx)"
      />
    </div>
  </section>
</template>

<style scoped>
.transaction-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.transaction-list__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.transaction-list__title {
  font-size: 18px;
  font-weight: 700;
  color: var(--c-text);
}

.transaction-list__items {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
