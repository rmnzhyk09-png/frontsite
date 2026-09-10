<script setup>
import AvantiProgressStepper from '@/components/avanti_progress_stepper.vue'
import AvantiProfileCard from '@/components/avanti_profile_card.vue'
import AvantiSecurityCard from '@/components/avanti_security_card.vue'
import AvantiInfoPanel from '@/components/avanti_info_panel.vue'
import AvantiTextInput from '@/components/avanti_text_input.vue'
import { useResponsive } from '@/composables/avanti_useResponsive'

const { isMobile } = useResponsive()

const steps = [
  { label: 'Simul.' },
  { label: 'Approv.' },
  { label: 'Account' },
  { label: 'Docum.' },
  { label: 'Firma' },
]

const profileRows = [
  { label: 'Cognome', value: 'Rossi', strong: true },
  { label: 'Nome', value: 'Marco', strong: true },
  { label: 'Email', value: 'ikoei@09gmail.com' },
  { label: 'Importo approvato', value: '12 000 ₽', strong: true },
  { label: 'Tipo di documento', value: 'Passaporto' },
  { label: 'Numero documento', value: 'AB1234567' },
]

const infoPanelItems = [
  { label: 'Simulazione', status: 'Completata', initials: 'SI' },
  { label: 'Approvazione', status: 'Completata', initials: 'AP' },
  { label: 'Account', status: 'Completato', initials: 'AC' },
  { label: 'Documenti', status: 'In corso', initials: 'DO' },
  { label: 'Firma', status: 'Prossimo', initials: 'FI', disabled: true },
]

function onEdit() {
  alert('Modifica nome')
}

function onChangePassword() {
  alert('Cambia password')
}

function onChangeEmail() {
  alert('Cambia email')
}

function onVerifyEmail() {
  alert('Verifica email')
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
          @edit="onEdit"
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
          @change-password="onChangePassword"
          @change-email="onChangeEmail"
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