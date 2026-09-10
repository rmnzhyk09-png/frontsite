<script setup lang="ts">
import { computed, ref } from 'vue'
import BankBaseIcon from '@/components/base/bank_base_icon.vue'

const props = defineProps<{
  totalBalance: number
  currency: string
}>()

const hidden = ref(false)

const formatted = computed(() => {
  return props.totalBalance.toLocaleString('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
})

const displayValue = computed(() => {
  return hidden.value ? '•••••••' : `${formatted.value}`
})

function toggleVisibility() {
  hidden.value = !hidden.value
}
</script>

<template>
  <div class="balance-card">
    <div class="balance-card__header">
      <span class="balance-card__label">Общий баланс</span>
      <button
        class="balance-card__toggle"
        :aria-label="hidden ? 'Показать баланс' : 'Скрыть баланс'"
        @click="toggleVisibility"
      >
        <bank-base-icon :name="hidden ? 'eye-off' : 'eye'" :size="18" color="#ffffff" />
      </button>
    </div>
    <div class="balance-card__amount">
      {{ displayValue }}
      <span v-if="!hidden" class="balance-card__currency">{{ currency }}</span>
    </div>
    <div class="balance-card__footer">
      <span class="balance-card__hint">По всем счетам и картам</span>
    </div>
  </div>
</template>

<style scoped>
.balance-card {
  background: linear-gradient(135deg, var(--c-navy), var(--c-navy-dark));
  border-radius: var(--radius-xl);
  padding: 24px;
  color: #ffffff;
}

.balance-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.balance-card__label {
  font-size: 14px;
  font-weight: 500;
  opacity: 0.7;
}

.balance-card__toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.balance-card__toggle:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.balance-card__toggle:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}

.balance-card__amount {
  font-size: 36px;
  font-weight: 800;
  margin: 16px 0 8px;
  letter-spacing: -0.5px;
}

.balance-card__currency {
  font-size: 18px;
  font-weight: 500;
  opacity: 0.7;
}

.balance-card__footer {
  margin-top: 4px;
}

.balance-card__hint {
  font-size: 12px;
  opacity: 0.5;
}

@media (min-width: 768px) {
  .balance-card {
    padding: 28px 32px;
  }

  .balance-card__amount {
    font-size: 42px;
  }
}
</style>
