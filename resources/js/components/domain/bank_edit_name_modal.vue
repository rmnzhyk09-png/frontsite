<script setup lang="ts">
import { ref } from 'vue'
import BankBaseModal from '@/components/base/bank_base_modal.vue'
import BankBaseButton from '@/components/base/bank_base_button.vue'
import BankBaseIcon from '@/components/base/bank_base_icon.vue'

const props = defineProps<{
  open: boolean
  currentName: string
}>()

const emit = defineEmits<{
  close: []
  save: [name: string]
}>()

const name = ref(props.currentName)

function handleSave() {
  if (!name.value.trim()) return
  emit('save', name.value.trim())
  emit('close')
}
</script>

<template>
  <bank-base-modal :open="open" title="Modifica nome" @close="$emit('close')">
    <label class="field" for="modal-name">
      <span class="field__label">Nome</span>
      <input
        id="modal-name"
        v-model="name"
        type="text"
        class="field__input"
        placeholder="Marco Rossi"
        autocomplete="name"
      />
    </label>
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
</style>