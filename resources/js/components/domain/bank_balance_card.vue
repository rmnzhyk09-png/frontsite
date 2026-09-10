<script setup lang="ts">
import BankBaseIcon from '@/components/base/bank_base_icon.vue'
import BankBaseBadge from '@/components/base/bank_base_badge.vue'

defineProps<{
  amount: string
  subtitle: string
}>()

defineEmits<{
  withdraw: []
}>()
</script>

<template>
  <div class="balance-card">
    <div class="balance-card__meta">
      <span class="balance-card__saldo">Il tuo saldo</span>
      <bank-base-badge text="Completa i passaggi" variant="white" size="sm" />
    </div>
    <p class="balance-card__subtitle">{{ subtitle }}</p>
    <div class="balance-card__amount">{{ amount }}</div>
    <p class="balance-card__info">Prestito personale • TAN 3,8%</p>
    <button class="balance-card__cta" type="button" aria-label="Preleva i fondi" @click="$emit('withdraw')">
      <bank-base-icon name="bank" :size="23" color="var(--text-brand)" />
      <span class="balance-card__cta-text">Preleva i fondi</span>
      <span class="balance-card__cta-arrow" aria-hidden="true">→</span>
    </button>
    <div class="balance-card__footer">
      <div class="balance-card__line"></div>
      <p class="balance-card__note">Fondi disponibili dopo l'approvazione dei documenti</p>
    </div>
  </div>
</template>

<style scoped>
.balance-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px;
  border-radius: var(--radius-lg);
  background: var(--gradient-brand);
  color: var(--text-white);
}

.balance-card__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.balance-card__saldo {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.13px;
  color: var(--bg-brand-light);
}

.balance-card__subtitle {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.16px;
  color: var(--bg-brand-light);
  text-align: center;
}

.balance-card__amount {
  font-size: 52px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.78px;
}

.balance-card__info {
  font-size: 14px;
  font-weight: 400;
  color: var(--bg-brand-light);
}

.balance-card__cta {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 16px 24px;
  background-color: var(--bg-page);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background-color 0.2s;
}

.balance-card__cta:hover {
  background-color: var(--border-default);
}

.balance-card__cta-text {
  flex: 1;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.036px;
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  text-align: left;
}

.balance-card__cta-arrow {
  font-size: 18px;
  font-weight: 500;
  color: var(--text-primary);
}

.balance-card__footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
}

.balance-card__line {
  width: 100px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
}

.balance-card__note {
  font-size: 12px;
  font-weight: 400;
  color: var(--bg-brand-light);
  text-align: center;
  opacity: 0.8;
}

@media (max-width: 767px) {
  .balance-card {
    padding: 20px;
    gap: 8px;
  }

  .balance-card__amount {
    font-size: 36px;
    letter-spacing: -0.54px;
  }

  .balance-card__subtitle {
    font-size: 10px;
  }

  .balance-card__info {
    font-size: 12px;
  }

  .balance-card__cta {
    padding: 12px 16px;
    border-radius: 9px;
  }

  .balance-card__cta-text {
    font-size: 16px;
  }
}
</style>