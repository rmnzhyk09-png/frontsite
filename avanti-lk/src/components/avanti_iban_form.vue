<script setup>
import { ref, computed, watch } from 'vue'
import AvantiModal from '@/components/avanti_modal.vue'
import AvantiTextInput from '@/components/avanti_text_input.vue'
import AvantiButton from '@/components/avanti_button.vue'
import AvantiIbanReview from '@/components/avanti_iban_review.vue'
import { useProfile } from '@/composables/avanti_useProfile'

const ITALY_IBAN_LENGTH = 27

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close', 'saved'])

const { profile, saving, setIban } = useProfile()

const tab = ref(0)
const iban = ref('')
const owner = ref('')

const cleanIban = computed(() => iban.value.replace(/\s+/g, '').toUpperCase())

const missingChars = computed(() =>
  Math.max(0, ITALY_IBAN_LENGTH - cleanIban.value.length)
)

const isComplete = computed(() => cleanIban.value.length === ITALY_IBAN_LENGTH)

const canContinue = computed(() => isComplete.value && owner.value.trim().length > 0)

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      tab.value = 0
      iban.value = profile.value?.iban || ''
      owner.value =
        profile.value?.nome && profile.value?.cognome
          ? `${profile.value.nome} ${profile.value.cognome}`
          : ''
    }
  }
)

function onIbanInput(event) {
  iban.value = event.target.value.toUpperCase()
}

function onOwnerInput(event) {
  owner.value = event.target.value
}

function goNext() {
  tab.value = 1
}

function goBack() {
  tab.value = 0
}

function onClose() {
  emit('close')
}

async function onSave() {
  const ok = await setIban(cleanIban.value)
  if (ok) {
    emit('saved')
  }
}
</script>

<template>
  <avanti-modal :open="open" @close="onClose">
    <template #logo>
      <span class="avanti-iban-form__logo">
        <svg width="48" height="38" viewBox="0 0 24 27" fill="none">
          <path d="M12 1 4 26h3.6L12 12.4 16.4 26H20L12 1Z" fill="var(--avanti-primary)" />
        </svg>
        <span class="avanti-iban-form__word">Avanti</span>
      </span>
    </template>

    <h2 class="avanti-iban-form__title">IBAN per l'accredito</h2>
    <p class="avanti-iban-form__desc">
      Su questo conto la banca partner versa l'importo del credito.
      Compare nel contratto al posto della riga vuota.
    </p>

    <div class="avanti-iban-form__tabs">
      <button
        type="button"
        class="avanti-iban-form__tab"
        :class="{ 'avanti-iban-form__tab--active': tab === 0 }"
        @click="tab = 0"
      >
        1 Conto
      </button>
      <button
        type="button"
        class="avanti-iban-form__tab"
        :class="{ 'avanti-iban-form__tab--active': tab === 1 }"
        @click="tab = 1"
      >
        2 Verifica
      </button>
    </div>

    <form v-if="tab === 0" class="avanti-iban-form__step" @submit.prevent="goNext">
      <avanti-text-input
        id="iban-input"
        label="IBAN"
        :value="iban"
        placeholder="IT60 X054 2811 1010 0000 0123 456"
        @update:value="onIbanInput"
      />

      <avanti-text-input
        id="iban-owner"
        label="Titolare del conto"
        :value="owner"
        placeholder="Marco Rossi"
        @update:value="onOwnerInput"
      />

      <div class="avanti-iban-form__note">
        <span class="avanti-iban-form__info">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
               stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </span>
        <p>
          Lettere e cifre. Il campo si ferma alla lunghezza del paese: 27 per l'Italia.
          Del numero conserviamo solo l'inizio e la fine: il resto resta nascosto.
        </p>
      </div>

      <p v-if="missingChars > 0" class="avanti-iban-form__hint">
        Caratteri mancanti: {{ missingChars }}
      </p>

      <avanti-button type="submit" block :disabled="!canContinue">
        Continua
      </avanti-button>
    </form>

    <avanti-iban-review
      v-else
      :iban="cleanIban"
      :owner="owner"
      :saving="saving"
      @modifica="goBack"
      @salva="onSave"
    />
  </avanti-modal>
</template>

<style scoped>
.avanti-iban-form__logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.avanti-iban-form__word {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -1.6px;
  color: var(--avanti-near-black);
  transform: translateY(-4px);
}

.avanti-iban-form__title {
  font-size: 26px;
  font-weight: 600;
  letter-spacing: -0.6px;
  text-transform: uppercase;
  color: var(--avanti-near-black);
}

.avanti-iban-form__desc {
  font-size: 14px;
  line-height: 20px;
  color: var(--avanti-muted-2);
}

.avanti-iban-form__tabs {
  display: flex;
  margin-top: 16px;
  border: 1px solid var(--avanti-border);
  border-radius: 12px;
  overflow: hidden;
}

.avanti-iban-form__tab {
  flex: 1;
  padding: 14px 0;
  background-color: var(--avanti-white);
  border: none;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--avanti-primary);
  cursor: pointer;
}

.avanti-iban-form__tab + .avanti-iban-form__tab {
  border-left: 1px solid var(--avanti-border);
}

.avanti-iban-form__tab--active {
  background-color: var(--avanti-primary);
  color: var(--avanti-text-light);
}

.avanti-iban-form__step {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
}

.avanti-iban-form__note {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  color: var(--avanti-muted-3);
}

.avanti-iban-form__info {
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid var(--avanti-primary);
  border-radius: 50%;
  color: var(--avanti-primary);
}

.avanti-iban-form__hint {
  font-size: 13px;
  font-weight: 600;
  color: var(--avanti-primary);
}
</style>