<script setup>
import { useRouter } from 'vue-router'
import AvantiHeader from '@/components/avanti_header.vue'
import AvantiBottomNav from '@/components/avanti_bottom_nav.vue'
import AvantiAlertBanner from '@/components/avanti_alert_banner.vue'
import AvantiAmountCard from '@/components/avanti_amount_card.vue'
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
    <avanti-header />

    <div class="avanti-home__content">
      <div class="avanti-home__main">
        <div class="avanti-home__section">
          <h2 class="avanti-home__section-title">Benvenuto, Marco Rossi!</h2>
        </div>

        <avanti-amount-card
          amount="€ 12 000"
          caption="100% del totale disponibile"
          cta-label="Preleva i fondi"
          @cta="goToBankLoading"
        />

        <avanti-alert-banner
          title="La tua pratica è in fase di approvazione finale"
          description="Il tuo documento è stato inviato. La consulente ti contatterà entro 24 ore."
        >
          <template #action>
            <avanti-button size="sm" text="Finalizza la mia richiesta" @click="goToBankLoading" />
          </template>
        </avanti-alert-banner>

        <div class="avanti-home__section">
          <h2 class="avanti-home__section-title">Le tue pratiche</h2>
        </div>

        <avanti-info-panel
          name="Marco Rossi"
          email="ikoei@09gmail.com"
          :items="infoPanelItems"
        />
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
      </aside>

      <aside v-else class="avanti-home__sidebar">
        <avanti-profile-card
          title="Dati personali"
          :rows="profileRows"
          edit-label="Modifica"
          @edit="goToProfile"
        />
      </aside>
    </div>

    <avanti-bottom-nav />
  </div>
</template>

<style scoped>
.avanti-home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--avanti-bg);
}

.avanti-home__content {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  flex: 1;
}

.avanti-home__main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-width: 0;
  padding: 40px;
}

.avanti-home__sidebar {
  width: 464px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex-shrink: 0;
}

.avanti-home__section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avanti-home__section-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--avanti-text-dark);
}

.avanti-home__iban {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--avanti-border);
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
  .avanti-home__content {
    gap: 24px;
  }

  .avanti-home__main {
    padding: 24px;
  }

  .avanti-home__sidebar {
    width: 360px;
  }
}

@media (max-width: 768px) {
  .avanti-home {
    padding-bottom: 62px;
  }

  .avanti-home__content {
    flex-direction: column;
    gap: 20px;
  }

  .avanti-home__main {
    padding: 16px;
    gap: 20px;
  }

  .avanti-home__sidebar {
    width: 100%;
    gap: 20px;
  }

  .avanti-home__section-title {
    font-size: 18px;
  }
}
</style>
