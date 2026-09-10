<script setup>
import { ref, computed } from 'vue'
import AvantiHeader from '@/components/avanti_header.vue'
import AvantiProgressStepper from '@/components/avanti_progress_stepper.vue'
import AvantiAmountCard from '@/components/avanti_amount_card.vue'
import AvantiProfileCard from '@/components/avanti_profile_card.vue'
import AvantiChecklistCard from '@/components/avanti_checklist_card.vue'
import AvantiIbanForm from '@/components/avanti_iban_form.vue'
import AvantiSmsToast from '@/components/avanti_sms_toast.vue'
import { useProfile } from '@/composables/avanti_useProfile'
import { useResponsive } from '@/composables/avanti_useResponsive'

const { profile } = useProfile()
const { isMobile } = useResponsive()

const ibanOpen = ref(false)
const toast = ref('')

const steps = [
  { label: 'Simul.' },
  { label: 'Approv.' },
  { label: 'Account' },
  { label: 'Docum.' },
  { label: 'Firma' },
]

const checklistSteps = [
  { label: 'Simulazione' },
  { label: 'Approvazione' },
  { label: 'Account' },
  { label: 'Caricamento documenti' },
  { label: 'Firma del contratto' },
]

const amountLabel = computed(() => (profile.value ? `€ ${profile.value.amount}` : '€ 12 000'))

const personalRows = computed(() => [
  { label: 'Cognome', value: profile.value ? profile.value.cognome : 'Rossi', strong: true },
  { label: 'Nome', value: profile.value ? profile.value.nome : 'Marco', strong: true },
])

function openIban() {
  ibanOpen.value = true
}

function onIbanSaved() {
  ibanOpen.value = false
  toast.value = 'IBAN salvato correttamente.'
}
</script>

<template>
  <div class="avanti-iban">
    <avanti-header />

    <main class="avanti-iban__main">
      <section class="avanti-iban__content">
        <avanti-progress-stepper :steps="steps" :current="3" />

        <avanti-amount-card :amount="amountLabel" @cta="openIban" />

        <avanti-profile-card v-if="isMobile" :rows="personalRows" />
      </section>

      <aside class="avanti-iban__aside">
        <avanti-profile-card v-if="!isMobile" :rows="personalRows" />
        <avanti-checklist-card :steps="checklistSteps" :current="3" />
      </aside>
    </main>

    <avanti-iban-form :open="ibanOpen" @close="ibanOpen = false" @saved="onIbanSaved" />

    <avanti-sms-toast v-if="toast" :message="toast" @close="toast = ''" />
  </div>
</template>

<style scoped>
.avanti-iban {
  min-height: 100vh;
  background-color: var(--avanti-bg);
}

.avanti-iban__main {
  width: 100%;
  max-width: var(--avanti-content-max);
  margin: 0 auto;
  padding: 40px 48px;
  display: flex;
  align-items: flex-start;
  gap: 40px;
}

.avanti-iban__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-width: 0;
}

.avanti-iban__aside {
  width: 464px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

@media (max-width: 1024px) {
  .avanti-iban__main {
    padding: 28px 24px;
    gap: 24px;
  }

  .avanti-iban__aside {
    width: 360px;
  }
}

@media (max-width: 768px) {
  .avanti-iban__main {
    flex-direction: column;
    padding: 20px 16px;
    gap: 20px;
  }

  .avanti-iban__content {
    gap: 20px;
  }

  .avanti-iban__aside {
    width: 100%;
    gap: 20px;
  }
}
</style>