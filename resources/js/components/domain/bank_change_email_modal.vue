<script setup lang="ts">
import { ref } from 'vue'
import BankBaseModal from '@/components/base/bank_base_modal.vue'
import BankBaseButton from '@/components/base/bank_base_button.vue'
import BankBaseIcon from '@/components/base/bank_base_icon.vue'

defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  close: []
  save: [email: string]
}>()

const email = ref('')
const error = ref('')

function handleSave() {
  const value = email.value.trim()
  if (!value || !value.includes('@')) {
    error.value = 'Inserisci un indirizzo email valido'
    return
  }
  error.value = ''
  emit('save', value)
  emit('close')
  email.value = ''
}
</script>

<template>
  <bank-base-modal :open="open" title="Cambia email" @close="$emit('close')">
    <label class="field" for="modal-email">
      <span class="field__label">Nuova email</span>
      <input
        id="modal-email"
        v-model="email"
        type="email"
        class="field__input"
        placeholder="esempio@email.com"
        autocomplete="email"
      />
    </label>
    <p v-if="error" class="field__error" role="alert">{{ error }}</p>
    <bank-base-button variant="primary" size="md" full-width @click="handleSave">
      <bank-base-icon name="check" :size="14" color="#ffffff" />
      Salva
    </bank-base-button>
  </bank-base-modal>
</template>

<style scoped>
.field { display: flex; flex-direction: column; gap: 6px; }
.field__label { font-size: 12px; font-weight: 500; color: var(--text-secondary); }
.field__input {
  width: 100%;
  padding: 10px 14px;
  background: var(--bg-page);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-button);
  font-size: 14px;
  color: var(--text-primary);
  outline: none;
}
.field__input:focus {
  border-color: var(--bg-brand);
}
.field__error { font-size: 12px; color: var(--bg-danger); }
</style>