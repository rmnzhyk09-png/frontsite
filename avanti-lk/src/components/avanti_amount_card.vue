<script setup>
import AvantiButton from '@/components/avanti_button.vue'

defineProps({
  amount: {
    type: String,
    default: '€ 12 000',
  },
  caption: {
    type: String,
    default: '100% del totale disponibile',
  },
  ctaLabel: {
    type: String,
    default: 'Preleva i fondi',
  },
})

const emit = defineEmits(['cta'])

function onClick() {
  emit('cta')
}
</script>

<template>
  <div class="avanti-amount-card">
    <div class="avanti-amount-card__sum">
      <span class="avanti-amount-card__value">{{ amount }}</span>
      <span class="avanti-amount-card__caption">{{ caption }}</span>
    </div>

    <avanti-button class="avanti-amount-card__cta" block @click="onClick">
      <template #icon>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round"
             stroke-linejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      </template>
      {{ ctaLabel }}
      <template #after>
        <span class="avanti-amount-card__arrow">→</span>
      </template>
    </avanti-button>
  </div>
</template>

<style scoped>
.avanti-amount-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  border-radius: var(--avanti-radius-card);
  background-image: linear-gradient(180deg, var(--avanti-gradient-start), var(--avanti-gradient-end));
  box-shadow: var(--avanti-shadow-card-teal);
}

.avanti-amount-card__sum {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.avanti-amount-card__value {
  font-size: 52px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.8px;
  color: var(--avanti-white);
}

.avanti-amount-card__caption {
  font-size: 14px;
  color: var(--avanti-info-bg);
}

.avanti-amount-card__cta {
  background-color: var(--avanti-bg);
  color: var(--avanti-primary);
  border: 1px solid var(--avanti-primary);
}

.avanti-amount-card__cta:hover:not(:disabled) {
  background-color: #eef5f7;
}

.avanti-amount-card__arrow {
  font-size: 18px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .avanti-amount-card {
    padding: 16px;
  }

  .avanti-amount-card__value {
    font-size: 44px;
  }
}
</style>