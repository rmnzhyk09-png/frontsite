<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { User, Step, PersonalData, ChecklistItem, NavItem, PageName } from '@/types'
import BankHeader from '@/components/sections/bank_header.vue'
import BankBottomNav from '@/components/sections/bank_bottom_nav.vue'
import BankStepsIndicator from '@/components/domain/bank_steps_indicator.vue'
import BankBalanceCard from '@/components/domain/bank_balance_card.vue'
import BankProgressBanner from '@/components/domain/bank_progress_banner.vue'
import BankVerificationChecklist from '@/components/domain/bank_verification_checklist.vue'
import BankPersonalDataCard from '@/components/sections/bank_personal_data_card.vue'

const router = useRouter()
const route = useRoute()

const activePage = computed<PageName>(() => (route.path === '/profile' ? 'profile' : 'home'))

const user: User = {
  id: 1,
  firstName: 'Marco',
  lastName: 'Rossi',
  email: 'ikoei@09gmail.com',
  phone: '+39 333 123 4567',
  avatar: null,
  role: 'Borrower',
}

const steps: Step[] = [
  { id: 1, label: 'Simul.', status: 'completed' },
  { id: 2, label: 'Approv.', status: 'completed' },
  { id: 3, label: 'Account', status: 'completed' },
  { id: 4, label: 'Docum.', status: 'current' },
  { id: 5, label: 'Firma', status: 'pending' },
]

const personalData: PersonalData = {
  cognome: 'Intesa Sanpaolo S.p.A.',
  nome: 'Marco Rossi',
  email: 'ikoei@09gmail.com',
  importoApprovato: '12 000 €',
  tipoDocumento: 'Passaporto',
  numeroDocumento: 'AB1234567',
  iban: '',
}

const checklistItems: ChecklistItem[] = [
  { id: 1, title: 'Simulazione completata', status: 'completed', label: 'Completato' },
  { id: 2, title: 'Credito approvato', status: 'completed', label: 'Completato' },
  { id: 3, title: 'Account creato', status: 'completed', label: 'Completato' },
  { id: 4, title: 'Documenti caricati', status: 'current', label: 'Step attuale • Azione richiesta' },
  { id: 5, title: 'Contratto firmato', status: 'pending', label: 'In attesa' },
]

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: 'home', route: '/' },
  { id: 'documents', label: 'Documenti', icon: 'document', route: '/documents' },
  { id: 'profile', label: 'Profilo', icon: 'user', route: '/profile' },
]

const REAL_PAGES: PageName[] = ['home', 'profile']

function handleNavigate(page: PageName) {
  if (!REAL_PAGES.includes(page)) return
  router.push({ path: page === 'home' ? '/' : `/${page}` })
}

function handleAssistenza() {}
function handleWithdraw() {}
function handleChecklistAction() {}
</script>

<template>
  <div class="page">
    <bank-header
      :user="user"
      :nav-items="navItems"
      :active-page="activePage"
      :notification-count="4"
      @navigate="handleNavigate"
      @assistenza="handleAssistenza"
    />

    <div class="page__content">
      <div class="page__columns">
        <div class="page__left">
          <bank-steps-indicator
            :steps="steps"
            :current-step="4"
            :total-steps="5"
          />

          <bank-balance-card
            amount="€ 12 000"
            subtitle="Importo approvato dai nostri partner"
            @withdraw="handleWithdraw"
          />

          <bank-progress-banner
            :completed-count="3"
            :total-count="5"
            :missing-steps="['Documenti', 'Firma']"
            @navigate="handleChecklistAction"
          />
        </div>

        <div class="page__right">
          <bank-personal-data-card
            :data="personalData"
            @edit="() => {}"
          />

          <bank-verification-checklist
            :items="checklistItems"
            @action="handleChecklistAction"
          />
        </div>
      </div>
    </div>

    <bank-bottom-nav
      :nav-items="navItems"
      :active-page="activePage"
      @navigate="handleNavigate"
    />
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background: var(--bg-page);
}

.page__content {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 72px 40px;
}

.page__columns {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.page__left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 792px;
}

.page__right {
  width: 464px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex-shrink: 0;
}

@media (max-width: 1279px) {
  .page__content { padding: 0 32px 40px; }
}

@media (max-width: 767px) {
  .page__content {
    padding: 16px 16px 80px;
  }

  .page__columns {
    flex-direction: column;
    gap: 20px;
  }

  .page__right {
    width: 100%;
  }
}
</style>
