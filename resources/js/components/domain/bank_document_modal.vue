<script setup lang="ts">
import { ref } from 'vue'
import BankBaseIcon from '@/components/base/bank_base_icon.vue'
import bankLogo from '@/assets/logo.png'

const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  close: []
  submit: [iban: string]
}>()

const iban = ref('')

function handleClose() {
  iban.value = ''
  emit('close')
}

function handleSubmit() {
  const value = iban.value.trim().toUpperCase()
  if (value.length < 5) return
  emit('submit', value)
  iban.value = ''
  emit('close')
}
</script>

<template>
  <teleport to="body">
    <div v-if="props.open" class="modal" role="dialog" aria-modal="true" aria-label="IBAN">
      <div class="modal__backdrop" @click="handleClose"></div>
      <section class="modal__card">
        <header class="modal__header">
          <button class="modal__close" type="button" aria-label="Закрыть" @click="handleClose">
            <bank-base-icon name="close" :size="18" color="#2491aa" />
          </button>
          <div class="modal__logo">
            <img class="modal__logo-mark" :src="bankLogo" width="48" height="38" alt="" />
            <span class="modal__logo-text">Avanti</span>
          </div>
          <h2 class="modal__title">IBAN per l’accredito</h2>
          <p class="modal__subtitle">
            Su questo conto la banca partner versa l’importo del credito.
            Compare nel contratto al posto della riga vuota.
          </p>
        </header>

        <div class="modal__tabs" role="tablist" aria-label="Форма">
          <button class="modal__tab modal__tab--active" type="button" role="tab" aria-selected="true">
            1 Conto
          </button>
          <button class="modal__tab" type="button" role="tab" aria-selected="false" disabled>
            2 Verifica
          </button>
        </div>

        <form class="modal__form" @submit.prevent="handleSubmit">
          <label class="modal__label" for="iban-input">IBAN</label>
          <input
            id="iban-input"
            v-model="iban"
            class="modal__input"
            type="text"
            inputmode="text"
            autocomplete="off"
            placeholder="IT00 0000 0000 0000 0000 0000 000"
          />

          <p class="modal__note">
            <span class="modal__note-icon" aria-hidden="true">i</span>
            <span>
              Lettere e cifre. Il campo si ferma alla lunghezza del paese: 27 per l’Italia.
              Del numero conserviamo solo l’inizio e la fine: il resto resta nascosto.
            </span>
          </p>

          <button class="modal__submit" type="submit" :disabled="iban.trim().length < 5">
            Continua
          </button>
        </form>
      </section>
    </div>
  </teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.modal__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(9, 9, 11, 0.4);
}

.modal__card {
  position: relative;
  width: 524px;
  max-width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 32px 24px 24px;
}

.modal__close {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-default);
  border-radius: 8px;
  background: none;
  cursor: pointer;
  color: var(--text-brand);
}

.modal__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.modal__logo {
  display: flex;
  align-items: center;
  gap: 6px;
}

.modal__logo-mark {
  width: 48px;
  height: auto;
}

.modal__logo-text {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -1.6px;
  color: var(--text-black);
}

.modal__title {
  font-size: 26px;
  font-weight: 600;
  letter-spacing: -0.6px;
  text-transform: uppercase;
  color: var(--text-black);
}

.modal__subtitle {
  font-size: 14px;
  line-height: 1.5;
  color: var(--text-secondary);
  text-align: center;
}

.modal__tabs {
  display: flex;
  width: 100%;
}

.modal__tab {
  flex: 1;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.modal__tab--active {
  background: var(--bg-brand);
  color: var(--text-white);
}

.modal__tab:not(.modal__tab--active) {
  background: var(--bg-card);
  border: 1px solid var(--border-brand);
  color: var(--text-brand);
  opacity: 0.6;
}

.modal__form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.modal__label {
  font-size: 14px;
  font-weight: 400;
  color: var(--text-secondary);
}

.modal__input {
  height: 60px;
  padding: 12px 16px;
  font-size: 16px;
  font-family: var(--font-main);
  color: var(--text-primary);
  background: var(--bg-card);
  border: 1px solid var(--border-input);
  border-radius: 8px;
}

.modal__input:focus-visible {
  outline: 2px solid var(--bg-brand);
  outline-offset: 2px;
}

.modal__note {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.56px;
  color: var(--text-secondary);
}

.modal__note-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-brand);
  border: 1px solid var(--border-brand);
  border-radius: 50%;
}

.modal__submit {
  height: 50px;
  background: var(--bg-brand);
  border-radius: 8px;
  border: none;
  color: var(--text-white);
  font-size: 16px;
  font-weight: 500;
}

.modal__submit:disabled {
  opacity: 0.5;
}

@media (max-width: 767px) {
  .modal__card {
    width: 334px;
    padding: 12px;
  }
}
</style>