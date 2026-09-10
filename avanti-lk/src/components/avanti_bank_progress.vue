<script setup>
import AvantiCircularProgress from '@/components/avanti_circular_progress.vue'

defineProps({
  percent: {
    type: Number,
    default: 0,
  },
  countLabel: {
    type: String,
    default: '0 / 12',
  },
  statusRows: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="avanti-bank-progress">
    <div class="avanti-bank-progress__status">
      <div
        v-for="row in statusRows"
        :key="row.label"
        class="avanti-bank-progress__row"
      >
        <span
          class="avanti-bank-progress__label"
          :class="{ 'avanti-bank-progress__label--soft': !row.label.includes('Invio') }"
        >
          {{ row.label }}
        </span>
        <span class="avanti-bank-progress__value">{{ row.status }}</span>
      </div>
    </div>

    <div class="avanti-bank-progress__bar">
      <avanti-circular-progress :value="percent" :label="String(percent)" />
      <div class="avanti-bank-progress__info">
        <p class="avanti-bank-progress__count">{{ countLabel }}</p>
        <div class="avanti-bank-progress__track">
          <span
            class="avanti-bank-progress__fill"
            :style="{ width: `${percent}%` }"
          />
        </div>
        <p class="avanti-bank-progress__hint">Ancora qualche secondo…</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.avanti-bank-progress {
  padding: 24px;
  background-color: var(--avanti-white);
  border: 1px solid var(--avanti-border);
  border-radius: var(--avanti-radius-card);
  margin-bottom: 32px;
}

.avanti-bank-progress__status {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.avanti-bank-progress__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.avanti-bank-progress__row + .avanti-bank-progress__row {
  padding-top: 12px;
  border-top: 1px solid var(--avanti-divider);
}

.avanti-bank-progress__label {
  font-size: 18px;
  font-weight: 500;
  color: #393939;
}

.avanti-bank-progress__label--soft {
  font-weight: 400;
  color: var(--avanti-muted-3);
}

.avanti-bank-progress__value {
  font-size: 16px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: var(--avanti-muted);
}

.avanti-bank-progress__bar {
  display: flex;
  align-items: center;
  gap: 28px;
}

.avanti-bank-progress__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.avanti-bank-progress__count {
  font-size: 18px;
  font-weight: 600;
  color: var(--avanti-near-black);
  text-transform: uppercase;
}

.avanti-bank-progress__track {
  height: 8px;
  border-radius: 999px;
  background-color: var(--avanti-track);
  overflow: hidden;
}

.avanti-bank-progress__fill {
  display: block;
  height: 100%;
  border-radius: 999px;
  background-color: var(--avanti-primary);
  transition: width 0.8s ease;
}

.avanti-bank-progress__hint {
  font-size: 16px;
  letter-spacing: 0.8px;
  color: var(--avanti-muted-3);
}

@media (max-width: 768px) {
  .avanti-bank-progress {
    padding: 16px;
    margin-bottom: 20px;
  }

  .avanti-bank-progress__label {
    font-size: 14px;
  }

  .avanti-bank-progress__value {
    font-size: 13px;
  }

  .avanti-bank-progress__bar {
    gap: 16px;
  }
}
</style>