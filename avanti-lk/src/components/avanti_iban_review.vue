<script setup>
import AvantiButton from '@/components/avanti_button.vue'
import AvantiButtonOutline from '@/components/avanti_button_outline.vue'

defineProps({
  iban: {
    type: String,
    default: '',
  },
  owner: {
    type: String,
    default: '',
  },
  saving: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['modifica', 'salva'])

function onModifica() {
  emit('modifica')
}

function onSalva() {
  emit('salva')
}
</script>

<template>
  <div class="avanti-iban-review">
    <div class="avanti-iban-review__rows">
      <div class="avanti-iban-review__row">
        <span class="avanti-iban-review__label">IBAN</span>
        <span class="avanti-iban-review__value">{{ iban }}</span>
      </div>
      <div class="avanti-iban-review__row">
        <span class="avanti-iban-review__label">Titolare del conto</span>
        <span class="avanti-iban-review__value">{{ owner }}</span>
      </div>
    </div>

    <div class="avanti-iban-review__warning">
      <span class="avanti-iban-review__info">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
             stroke-linejoin="round">
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </span>
      <p>
        Un numero errato manda i fondi su un altro conto:
        la banca non può annullare il bonifico.
      </p>
    </div>

    <div class="avanti-iban-review__actions">
      <avanti-button-outline block @click="onModifica">
        Modifica
      </avanti-button-outline>
      <avanti-button block :disabled="saving" @click="onSalva">
        Salva Iban
      </avanti-button>
    </div>
  </div>
</template>

<style scoped>
.avanti-iban-review {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
}

.avanti-iban-review__rows {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.avanti-iban-review__row {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 14px;
  background-color: var(--avanti-info-bg);
  border: 1px solid var(--avanti-border-input);
  border-radius: var(--avanti-radius-btn);
}

.avanti-iban-review__label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--avanti-muted-2);
}

.avanti-iban-review__value {
  font-size: 15px;
  font-weight: 600;
  color: var(--avanti-text-dark);
  word-break: break-all;
}

.avanti-iban-review__warning {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 12px;
  background-color: var(--avanti-bg);
  border: 1px solid var(--avanti-info-border);
  border-radius: 12px;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  color: var(--avanti-muted-3);
}

.avanti-iban-review__info {
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid var(--avanti-info-border);
  border-radius: 50%;
  color: var(--avanti-primary);
}

.avanti-iban-review__actions {
  display: flex;
  gap: 12px;
}

.avanti-iban-review__actions :deep(.avanti-button-outline),
.avanti-iban-review__actions :deep(.avanti-button) {
  flex: 1;
}
</style>