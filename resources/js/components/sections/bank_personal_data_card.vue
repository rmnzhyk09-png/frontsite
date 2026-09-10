<script setup lang="ts">
import type { PersonalData } from '@/types'
import BankBaseButton from '@/components/base/bank_base_button.vue'
import BankBaseIcon from '@/components/base/bank_base_icon.vue'

defineProps<{
  data: PersonalData
  compact?: boolean
}>()

defineEmits<{
  edit: []
}>()

const fields = [
  { key: 'cognome', label: 'Cognome' },
  { key: 'nome', label: 'Nome' },
  { key: 'email', label: 'Email' },
  { key: 'importoApprovato', label: 'Importo approvato' },
  { key: 'tipoDocumento', label: 'Tipo di documento' },
  { key: 'numeroDocumento', label: 'Numero documento' },
] as const
</script>

<template>
  <div class="personal-data">
    <div class="personal-data__header">
      <h3 class="personal-data__title">Dati personali</h3>
      <bank-base-button variant="dark" size="sm" @click="$emit('edit')">
        <bank-base-icon name="user" :size="14" color="#ffffff" />
        Modifica nome
      </bank-base-button>
    </div>
    <div class="personal-data__fields">
      <div
        v-for="field in fields"
        :key="field.key"
        class="personal-data__row"
      >
        <span class="personal-data__label">{{ field.label }}</span>
        <span class="personal-data__value">{{ data[field.key] }}</span>
      </div>
      <div class="personal-data__row">
        <span class="personal-data__label">IBAN</span>
        <div class="personal-data__iban">
          <span class="personal-data__value">{{ data.iban || '-' }}</span>
          <button class="personal-data__copy" aria-label="Копировать IBAN">
            <bank-base-icon name="copy" :size="14" color="var(--text-secondary)" />
          </button>
        </div>
      </div>
    </div>
    <div v-if="!compact" class="personal-data__iban-field">
      <input
        type="text"
        class="personal-data__iban-input"
        placeholder="Inserisci IBAN"
        :value="data.iban"
        readonly
      />
    </div>
  </div>
</template>

<style scoped>
.personal-data {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-card);
}

.personal-data__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.personal-data__title {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
}

.personal-data__fields {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.personal-data__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.personal-data__label {
  font-size: 12px;
  font-weight: 400;
  color: var(--text-secondary);
}

.personal-data__value {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}

.personal-data__iban {
  display: flex;
  align-items: center;
  gap: 8px;
}

.personal-data__copy {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: var(--bg-page);
  border: 1px solid var(--border-default);
  cursor: pointer;
  transition: background-color 0.2s;
}

.personal-data__copy:hover { background-color: var(--border-default); }
.personal-data__copy:focus-visible { outline: 2px solid var(--bg-brand); outline-offset: 2px; }

.personal-data__iban-field {
  margin-top: 8px;
}

.personal-data__iban-input {
  width: 100%;
  padding: 10px 14px;
  background: var(--bg-page);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-button);
  font-size: 13px;
  color: var(--text-primary);
  outline: none;
}

.personal-data__iban-input:focus {
  border-color: var(--bg-brand);
}

@media (max-width: 767px) {
  .personal-data {
    padding: 16px;
    gap: 12px;
  }

  .personal-data__row {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
}
</style>
