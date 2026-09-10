<script setup>
defineProps({
  amount: {
    type: String,
    default: '12 000₽',
  },
  details: {
    type: String,
    default: 'Rata mensile: 147,65 ₽ • Durata: 62 mesi • Tasso fisso al 3,8%',
  },
  note: {
    type: String,
    default: "L'offerta resta riservata per 24 ore.",
  },
})
</script>

<template>
  <div class="avanti-approval-card">
    <div class="avanti-approval-card__content">
      <h2 class="avanti-approval-card__title">Il tuo credito è approvato</h2>
      <p class="avanti-approval-card__subtitle">
        Le banche partner hanno confermato
      </p>

      <div class="avanti-approval-card__amount-box">
        <p class="avanti-approval-card__amount-label">Importo approvato</p>
        <p class="avanti-approval-card__amount">{{ amount }}</p>
        <p class="avanti-approval-card__details">{{ details }}</p>
      </div>

      <div class="avanti-approval-card__note">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round"
             stroke-linejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span>{{ note }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.avanti-approval-card {
  width: 100%;
  background-color: var(--avanti-white);
  border: 1px solid var(--avanti-border);
  border-radius: var(--avanti-radius-card);
}

.avanti-approval-card__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px;
}

.avanti-approval-card__title {
  font-size: 24px;
  font-weight: 600;
  color: var(--avanti-near-black);
  text-align: center;
}

.avanti-approval-card__subtitle {
  font-size: 16px;
  font-weight: 600;
  color: var(--avanti-primary);
  text-align: center;
}

.avanti-approval-card__amount-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 32px 24px;
  background-color: var(--avanti-amount-bg);
  border: 1px solid var(--avanti-primary);
  border-radius: var(--avanti-radius-large);
}

.avanti-approval-card__amount-label {
  font-size: 14px;
  font-weight: 300;
  color: var(--avanti-primary);
}

.avanti-approval-card__amount {
  font-size: 56px;
  font-weight: 700;
  line-height: 1.1;
  color: var(--avanti-primary);
}

.avanti-approval-card__details {
  font-size: 14px;
  font-weight: 300;
  color: var(--avanti-info-text);
  text-align: center;
}

.avanti-approval-card__note {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 300;
  color: var(--avanti-text-gray);
}

.avanti-approval-card__note svg {
  flex-shrink: 0;
  color: var(--avanti-primary);
}

@media (max-width: 768px) {
  .avanti-approval-card__content {
    padding: 20px;
  }

  .avanti-approval-card__title {
    font-size: 20px;
  }

  .avanti-approval-card__amount {
    font-size: 42px;
  }
}
</style>