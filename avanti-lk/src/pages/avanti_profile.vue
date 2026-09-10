<script setup>
import { ref, computed } from 'vue'
import AvantiProgressStepper from '@/components/avanti_progress_stepper.vue'
import AvantiProfileCard from '@/components/avanti_profile_card.vue'
import AvantiSecurityCard from '@/components/avanti_security_card.vue'
import AvantiInfoPanel from '@/components/avanti_info_panel.vue'
import AvantiTextInput from '@/components/avanti_text_input.vue'
import AvantiEditModal from '@/components/avanti_edit_modal.vue'
import AvantiSmsToast from '@/components/avanti_sms_toast.vue'
import { useResponsive } from '@/composables/avanti_useResponsive'
import { useProfile } from '@/composables/avanti_useProfile'

const { isMobile } = useResponsive()
const { profile, doVerifyEmail } = useProfile()

const editModal = ref(null)
const toast = ref('')

const steps = [
  { label: 'Simul.' },
  { label: 'Approv.' },
  { label: 'Account' },
  { label: 'Docum.' },
  { label: 'Firma' },
]

const profileRows = computed(() => [
  { label: 'Cognome', value: profile.value ? profile.value.cognome : 'Rossi', strong: true },
  { label: 'Nome', value: profile.value ? profile.value.nome : 'Marco', strong: true },
  { label: 'Email', value: profile.value ? profile.value.email : 'ikoei@09gmail.com' },
  { label: 'Importo approvato', value: profile.value ? `${profile.value.amount} ₽` : '12 000 ₽', strong: true },
  { label: 'Tipo di documento', value: 'Passaporto' },
  { label: 'Numero documento', value: 'AB1234567' },
])

const infoPanelItems = [
  { label: 'Simulazione', status: 'Completata', initials: 'SI' },
  { label: 'Approvazione', status: 'Completata', initials: 'AP' },
  { label: 'Account', status: 'Completato', initials: 'AC' },
  { label: 'Documenti', status: 'In corso', initials: 'DO' },
  { label: 'Firma', status: 'Prossimo', initials: 'FI', disabled: true },
]

function openEdit(action) {
  editModal.value = action
}

function onEditSaved() {
  editModal.value = null
  toast.value = 'Profilo aggiornato correttamente.'
}

async function onVerifyEmail() {
  const ok = await doVerifyEmail()
  toast.value = ok
    ? 'Email verificata. Grazie!'
    : 'Impossibile verificare email. Riprova.'
}
</script>

<template>
  <div class="avanti-profile">
    <div class="avanti-profile__content">
      <div class="avanti-profile__main">
        <avanti-progress-stepper :steps="steps" :current="3" />

        <avanti-profile-card
          title="Dati personali"
          edit-label="Modifica nome"
          :rows="profileRows"
          @edit="openEdit('name')"
        >
          <template v-if="isMobile" #extra>
            <div class="avanti-profile__iban">
              <avanti-text-input
                id="iban"
                label="IBAN"
                placeholder="IT60 X054 2811 1010 0000 0123 456"
              />
            </div>
          </template>
        </avanti-profile-card>

        <avanti-security-card
          @change-password="openEdit('password')"
          @change-email="openEdit('email')"
          @verify-email="onVerifyEmail"
        />
      </div>

      <aside class="avanti-profile__sidebar">
        <avanti-info-panel
          name="Marco Rossi"
          email="ikoei@09gmail.com"
          :items="infoPanelItems"
        />
      </aside>
    </div>

    <avanti-edit-modal
      :open="editModal !== null"
      :action="editModal || 'email'"
      @close="editModal = null"
      @saved="onEditSaved"
    />

    <avanti-sms-toast v-if="toast" :message="toast" @close="toast = ''" />
  </div>
</template>

<style scoped>
.avanti-profile {
  width: 100%;
  padding: 40px;
  max-width: var(--avanti-content-max);
  margin: 0 auto;
}

.avanti-profile__content {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.avanti-profile__main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-width: 0;
}

.avanti-profile__sidebar {
  width: 464px;
  flex-shrink: 0;
}

.avanti-profile__iban {
  margin-top: 16px;
}

.avanti-profile :deep(.avanti-security-card) {
  height: 100%;
}

.avanti-profile__sidebar :deep(.avanti-info-panel) {
  width: 100%;
}

@media (max-width: 1024px) {
  .avanti-profile {
    padding: 24px;
  }

  .avanti-profile__content {
    gap: 24px;
  }

  .avanti-profile__sidebar {
    width: 360px;
  }
}

@media (max-width: 768px) {
  .avanti-profile {
    padding: 20px 16px;
  }

  .avanti-profile__content {
    flex-direction: column;
    gap: 20px;
  }

  .avanti-profile__sidebar {
    width: 100%;
  }
}
</style>