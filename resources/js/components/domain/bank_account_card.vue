<script setup lang="ts">
import { computed } from 'vue'
import type { Account } from '@/types'
import BankBaseIcon from '@/components/base/bank_base_icon.vue'

const props = defineProps<{
  account: Account
}>()

defineEmits<{
  click: [account: Account]
}>()

const formattedBalance = computed(() => {
  return props.account.balance.toLocaleString('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
})

const typeLabel = computed(() => {
  const labels: Record<string, string> = {
    debit: 'Дебетовая',
    credit: 'Кредитная',
    savings: 'Накопительный',
  }
  return labels[props.account.type] || props.account.type
})

const maskedNumber = computed(() => {
  const num = props.account.number
  return `**** ${num.slice(-4)}`
})
</script>

<template>
  <button
    class="account-card"
    :style="{ '--card-color': account.color }"
    :aria-label="`Счёт ${account.name}, баланс ${formattedBalance} ${account.currency}`"
    @click="$emit('click', account)"
  >
    <div class="account-card__top">
      <div class="account-card__icon">
        <bank-base-icon :name="account.icon" :size="20" color="#ffffff" />
      </div>
      <span class="account-card__type">{{ typeLabel }}</span>
    </div>
    <div class="account-card__name">{{ account.name }}</div>
    <div class="account-card__number">{{ maskedNumber }}</div>
    <div class="account-card__balance">
      {{ formattedBalance }}
      <span class="account-card__currency">{{ account.currency }}</span>
    </div>
  </button>
</template>

<style scoped>
.account-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--card-color), color-mix(in srgb, var(--card-color) 80%, #000));
  color: #ffffff;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: transform 0.2s, box-shadow 0.2s;
  min-width: 240px;
  flex-shrink: 0;
}

.account-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.account-card:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}

.account-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.account-card__icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.account-card__type {
  font-size: 11px;
  font-weight: 500;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.account-card__name {
  font-size: 16px;
  font-weight: 600;
  margin-top: 8px;
}

.account-card__number {
  font-size: 13px;
  opacity: 0.7;
  font-family: 'Inter', monospace;
}

.account-card__balance {
  font-size: 24px;
  font-weight: 800;
  margin-top: 4px;
}

.account-card__currency {
  font-size: 14px;
  font-weight: 500;
  opacity: 0.7;
}

@media (min-width: 768px) {
  .account-card {
    min-width: 260px;
  }
}
</style>
