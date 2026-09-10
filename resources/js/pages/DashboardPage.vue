<script setup lang="ts">
import { ref } from 'vue'
import type { DashboardPageProps, Transaction, Account, QuickAction } from '@/types'
import BankPageHeader from '@/components/sections/bank_page_header.vue'
import BankSidebar from '@/components/sections/bank_sidebar.vue'
import BankMobileNav from '@/components/sections/bank_mobile_nav.vue'
import BankBalanceCard from '@/components/domain/bank_balance_card.vue'
import BankAccountCard from '@/components/domain/bank_account_card.vue'
import BankQuickAction from '@/components/domain/bank_quick_action.vue'
import BankTransactionList from '@/components/sections/bank_transaction_list.vue'

const props: DashboardPageProps = {
  user: {
    id: 1,
    name: 'Алексей Петров',
    email: 'alexey@mail.ru',
    phone: '+7 (903) 123-45-67',
    avatar: null,
  },
  accounts: [
    {
      id: 1,
      name: 'Дебетовая карта',
      number: '4567890123456789',
      balance: 145230.50,
      currency: '₽',
      type: 'debit',
      color: '#00a761',
      icon: 'card',
    },
    {
      id: 2,
      name: 'Накопительный',
      number: '4567890123451111',
      balance: 328750.00,
      currency: '₽',
      type: 'savings',
      color: '#2196f3',
      icon: 'banknotes',
    },
    {
      id: 3,
      name: 'Кредитная карта',
      number: '4567890123452222',
      balance: -12500.00,
      currency: '₽',
      type: 'credit',
      color: '#9c27b0',
      icon: 'card',
    },
  ],
  transactions: [
    {
      id: 1,
      title: 'Перевод от Ивана',
      description: 'Перевод средств',
      amount: 15000,
      currency: '₽',
      type: 'income',
      status: 'completed',
      date: '2026-09-10T14:30:00',
      category: 'transfer',
      icon: 'arrow-down',
    },
    {
      id: 2,
      title: 'Яндекс Маркет',
      description: 'Покупка в интернет-магазине',
      amount: -4290,
      currency: '₽',
      type: 'expense',
      status: 'completed',
      date: '2026-09-09T18:15:00',
      category: 'shopping',
      icon: 'receipt',
    },
    {
      id: 3,
      title: 'Зарплата',
      description: 'ООО "Технологии"',
      amount: 95000,
      currency: '₽',
      type: 'income',
      status: 'completed',
      date: '2026-09-05T10:00:00',
      category: 'salary',
      icon: 'banknotes',
    },
    {
      id: 4,
      title: 'Коммунальные услуги',
      description: 'Оплата ЖКХ',
      amount: -8450,
      currency: '₽',
      type: 'expense',
      status: 'completed',
      date: '2026-09-04T12:00:00',
      category: 'bills',
      icon: 'receipt',
    },
    {
      id: 5,
      title: 'Перевод себе',
      description: 'Между своими счетами',
      amount: 25000,
      currency: '₽',
      type: 'transfer',
      status: 'pending',
      date: '2026-09-10T16:45:00',
      category: 'transfer',
      icon: 'transfer',
    },
    {
      id: 6,
      title: 'Связной',
      description: 'Мобильная связь',
      amount: -890,
      currency: '₽',
      type: 'expense',
      status: 'failed',
      date: '2026-09-08T09:20:00',
      category: 'telecom',
      icon: 'phone',
    },
  ],
  quickActions: [
    { id: 'transfer', label: 'Перевод', icon: 'send', color: '#e8f5e9', route: '/transfer' },
    { id: 'pay', label: 'Оплатить', icon: 'receipt', color: '#e3f2fd', route: '/pay' },
    { id: 'topup', label: 'Пополнить', icon: 'plus', color: '#fff3e0', route: '/topup' },
    { id: 'phone', label: 'Связь', icon: 'phone', color: '#f3e5f5', route: '/phone' },
  ],
  notifications: [],
  totalBalance: 461480.50,
  currency: '₽',
}

const user = ref(props.user)
const accounts = ref(props.accounts)
const transactions = ref(props.transactions)
const quickActions = ref(props.quickActions)
const totalBalance = ref(props.totalBalance)
const currency = ref(props.currency)

function handleNotifications() {
  // In real Inertia app: router.visit('/notifications')
}

function handleProfile() {
  // In real Inertia app: router.visit('/profile')
}

function handleMenu() {
  // Toggle mobile sidebar
}

function handleLogout() {
  // In real Inertia app: router.post('/logout')
}

function handleAccountClick(account: Account) {
  // In real Inertia app: router.visit(`/accounts/${account.id}`)
}

function handleQuickAction(action: QuickAction) {
  // In real Inertia app: router.visit(action.route)
}

function handleViewAllTransactions() {
  // In real Inertia app: router.visit('/history')
}

function handleTransactionClick(transaction: Transaction) {
  // In real Inertia app: router.visit(`/transactions/${transaction.id}`)
}

function handleNavigate(route: string) {
  // In real Inertia app: router.visit(route)
}
</script>

<template>
  <div class="app-layout">
    <div class="app-sidebar">
      <bank-sidebar
        :user="user"
        @navigate="handleNavigate"
        @logout="handleLogout"
      />
    </div>

    <main class="app-main">
      <bank-page-header
        :user="user"
        :notification-count="3"
        @notifications="handleNotifications"
        @profile="handleProfile"
        @menu="handleMenu"
      />

      <div class="dashboard">
        <div class="dashboard__content">
          <bank-balance-card
            :total-balance="totalBalance"
            :currency="currency"
          />

          <section class="dashboard__accounts" aria-label="Счета и карты">
            <h2 class="dashboard__section-title">Мои счета</h2>
            <div class="dashboard__accounts-scroll">
              <bank-account-card
                v-for="account in accounts"
                :key="account.id"
                :account="account"
                @click="handleAccountClick"
              />
            </div>
          </section>

          <section class="dashboard__actions" aria-label="Быстрые действия">
            <h2 class="dashboard__section-title">Быстрые действия</h2>
            <div class="dashboard__actions-grid">
              <bank-quick-action
                v-for="action in quickActions"
                :key="action.id"
                :action="action"
                @click="handleQuickAction"
              />
            </div>
          </section>

          <bank-transaction-list
            :transactions="transactions"
            @view-all="handleViewAllTransactions"
            @click-transaction="handleTransactionClick"
          />
        </div>
      </div>
    </main>

    <div class="app-mobile-nav">
      <bank-mobile-nav @navigate="handleNavigate" />
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 20px 16px;
}

.dashboard__content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 800px;
}

.dashboard__section-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--c-text);
  margin-bottom: 12px;
}

.dashboard__accounts {
  display: flex;
  flex-direction: column;
}

.dashboard__accounts-scroll {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 4px 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.dashboard__accounts-scroll::-webkit-scrollbar {
  display: none;
}

.dashboard__actions-grid {
  display: flex;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .dashboard {
    padding: 28px 32px;
  }

  .dashboard__content {
    max-width: 1000px;
  }

  .dashboard__accounts-scroll {
    gap: 16px;
  }
}

@media (min-width: 1024px) {
  .dashboard {
    padding: 32px 40px;
  }
}
</style>
