<script setup>
import { useRouter } from 'vue-router'
import AvantiCard from '@/components/avanti_card.vue'
import AvantiProgressStepper from '@/components/avanti_progress_stepper.vue'
import AvantiApprovalCard from '@/components/avanti_approval_card.vue'
import AvantiAlertBanner from '@/components/avanti_alert_banner.vue'
import AvantiProfileCard from '@/components/avanti_profile_card.vue'
import AvantiInfoPanel from '@/components/avanti_info_panel.vue'
import AvantiButton from '@/components/avanti_button.vue'
import { useResponsive } from '@/composables/avanti_useResponsive'

const router = useRouter()
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
]

const infoPanelItems = [
  { label: 'Simulazione', status: 'Completata', initials: 'SI' },
  { label: 'Approvazione', status: 'Completata', initials: 'AP' },
  { label: 'Account', status: 'Completato', initials: 'AC' },
  { label: 'Documenti', status: 'In corso', initials: 'DO' },
  { label: 'Firma', status: 'Prossimo', initials: 'FI', disabled: true },
]

function goToProfile() {
  router.push({ name: 'profile' })
}

function goToBankLoading() {
  router.push({ name: 'bankLoading' })
}
</script>

<template>
  <div class="avanti-home">
    <div class="avanti-home__content">
      <div class="avanti-home__main">
        <avanti-progress-stepper :steps="steps" :current="3" />

        <avanti-approval-card />

        <avanti-alert-banner
          title="La tua pratica è in fase di approvazione finale"
          description="Il tuo documento è stato inviato. La consulente ti contatterà entro 24 ore."
        >
          <template #action>
            <avanti-button size="sm" text="Finalizza la mia richiesta" @click="goToBankLoading" />
          </template>
        </avanti-alert-banner>
      </div>

      <aside v-if="isMobile" class="avanti-home__sidebar">
        <avanti-profile-card :rows="profileRows">
          <template #extra>
            <div class="avanti-home__iban">
              <span class="avanti-home__iban-label">IBAN</span>
              <span class="avanti-home__iban-value">IT60 X054 2811 1010 0000 0123 456</span>
            </div>
          </template>
        </avanti-profile-card>

        <avanti-info-panel
          name="Marco Rossi"
          email="ikoei@09gmail.com"
          :items="infoPanelItems"
        />
      </aside>

      <aside v-else class="avanti-home__sidebar">
        <avanti-profile-card
          title="Dati personali"
          :rows="profileRows"
          edit-label="Modifica"
          @edit="goToProfile"
        />

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
.avanti-home {
  width: 100%;
  padding: 40px;
  max-width: var(--avanti-content-max);
  margin: 0 auto;
}

.avanti-home__content {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.avanti-home__main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-width: 0;
}

.avanti-home__sidebar {
  width: 464px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex-shrink: 0;
}

.avanti-home__iban {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 12px;
}

.avanti-home__iban-label {
  font-size: 13px;
  color: var(--avanti-text-muted);
}

.avanti-home__iban-value {
  font-size: 13px;
  font-weight: 600;
  color: var(--avanti-text-dark);
}

@media (max-width: 1024px) {
  .avanti-home {
    padding: 24px;
  }

  .avanti-home__content {
    gap: 24px;
  }

  .avanti-home__sidebar {
    width: 360px;
  }
}

@media (max-width: 768px) {
  .avanti-home {
    padding: 20px 16px;
  }

  .avanti-home__content {
    flex-direction: column;
    gap: 20px;
  }

  .avanti-home__sidebar {
    width: 100%;
    gap: 20px;
  }
}
</style>