<script setup>
import { ref, computed, watch } from 'vue'
import AvantiModal from '@/components/avanti_modal.vue'
import AvantiTextInput from '@/components/avanti_text_input.vue'
import AvantiButton from '@/components/avanti_button.vue'
import { useProfile } from '@/composables/avanti_useProfile'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  action: {
    type: String,
    default: 'email',
    validator: (value) => ['name', 'email', 'password'].includes(value),
  },
})

const emit = defineEmits(['close', 'saved'])

const { profile, saving, error, changeName, changeEmail, changePassword, doVerifyEmail } =
  useProfile()

const nome = ref('')
const email = ref('')
const currentPassword = ref('')
const newPassword = ref('')

const isName = computed(() => props.action === 'name')
const isEmail = computed(() => props.action === 'email')
const isPassword = computed(() => props.action === 'password')

const title = computed(() => {
  if (isName.value) return 'Modifica nome'
  if (isEmail.value) return 'Cambia email'
  return 'Cambia password'
})

const subtitle = computed(() => {
  if (isName.value) return 'Aggiorna il tuo nome sul profilo.'
  if (isEmail.value) return 'Riceverai un link di verifica sulla nuova email.'
  return 'Scegli una nuova password per il tuo account.'
})

const submitLabel = computed(() => {
  if (isName.value) return 'Salva nome'
  if (isEmail.value) return 'Aggiorna email'
  return 'Aggiorna password'
})

const canSubmit = computed(() => {
  if (isName.value) return nome.value.trim().length > 0
  if (isEmail.value) return email.value.trim().length > 0
  return currentPassword.value.length > 0 && newPassword.value.length >= 8
})

watch(
  () => props.open,
  (isOpen) => {
    if (!isOpen) return
    nome.value = profile.value?.nome || ''
    email.value = profile.value?.email || ''
    currentPassword.value = ''
    newPassword.value = ''
  }
)

function onClose() {
  emit('close')
}

async function onSubmit() {
  let ok = false
  if (isName.value) ok = await changeName(nome.value.trim())
  if (isEmail.value) ok = await changeEmail(email.value.trim())
  if (isPassword.value) ok = await changePassword(currentPassword.value, newPassword.value)
  if (ok) emit('saved')
}
</script>

<template>
  <avanti-modal :open="open" :title="title" :subtitle="subtitle" @close="onClose">
    <form class="avanti-edit-modal" @submit.prevent="onSubmit">
      <avanti-text-input
        v-if="isName"
        id="edit-name"
        label="Nome"
        :value="nome"
        placeholder="Marco"
        @update:value="nome = $event"
      />

      <template v-if="isEmail">
        <avanti-text-input
          id="edit-email"
          label="Email"
          :value="email"
          placeholder="ikoei@09gmail.com"
          @update:value="email = $event"
        />
        <button type="button" class="avanti-edit-modal__verify" @click="doVerifyEmail">
          Re-invia verifica email
        </button>
      </template>

      <template v-if="isPassword">
        <avanti-text-input
          id="edit-current-password"
          label="Password attuale"
          type="password"
          :value="currentPassword"
          placeholder="••••••••"
          @update:value="currentPassword = $event"
        />
        <avanti-text-input
          id="edit-new-password"
          label="Nuova password"
          type="password"
          :value="newPassword"
          placeholder="Minimo 8 caratteri"
          @update:value="newPassword = $event"
        />
      </template>

      <p v-if="error" class="avanti-edit-modal__error">{{ error }}</p>

      <avanti-button type="submit" block :disabled="!canSubmit || saving">
        {{ submitLabel }}
      </avanti-button>
    </form>
  </avanti-modal>
</template>

<style scoped>
.avanti-edit-modal {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.avanti-edit-modal__verify {
  align-self: flex-start;
  background: none;
  border: none;
  padding: 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--avanti-primary);
  cursor: pointer;
}

.avanti-edit-modal__verify:hover {
  text-decoration: underline;
}

.avanti-edit-modal__error {
  font-size: 13px;
  color: var(--avanti-danger);
}
</style>