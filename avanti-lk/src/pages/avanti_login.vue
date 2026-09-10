<script setup>
import { ref, computed } from 'vue'
import AvantiModal from '@/components/avanti_modal.vue'
import AvantiTabs from '@/components/avanti_tabs.vue'
import AvantiTextInput from '@/components/avanti_text_input.vue'
import AvantiButton from '@/components/avanti_button.vue'
import AvantiApprovalCard from '@/components/avanti_approval_card.vue'

const open = ref(true)
const activeTab = ref('login')

const tabItems = [
  { label: 'Accedi', value: 'login' },
  { label: 'Crea account', value: 'register' },
]

const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const submitLabel = computed(() =>
  activeTab.value === 'login' ? 'Accedi →' : 'Crea account e accedi →'
)

function onToggle(tab) {
  activeTab.value = tab
  password.value = ''
  confirmPassword.value = ''
}

function onOpen() {
  open.value = true
}

function onClose() {
  open.value = false
}

function onSubmit() {
  open.value = false
}
</script>

<template>
  <div class="avanti-login">
    <div class="avanti-login__hero">
      <router-link to="/" class="avanti-login__logo">
        <span class="avanti-login__logo-mark">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2 2 22h20L12 2zm0 6 6 12H6l6-12z" />
          </svg>
        </span>
        <span class="avanti-login__logo-text">Avanti</span>
      </router-link>

      <avanti-approval-card />

      <avanti-button
        size="lg"
        text="Finalizza la mia richiesta"
        @click="onOpen"
      />
    </div>

    <avanti-modal
      :open="open"
      title="Crea il tuo account per gestire la tua pratica di credito."
      subtitle="Spazio personale sicuro via SSL"
      @close="onClose"
    >
      <avanti-tabs :items="tabItems" v-model="activeTab" @update:modelValue="onToggle" />

      <form class="avanti-login__form" @submit.prevent="onSubmit">
        <avanti-text-input
          id="login-email"
          v-model:value="email"
          label="Indirizzo email"
          type="email"
          placeholder="nome@email.com"
          required
        />
        <avanti-text-input
          id="login-password"
          v-model:value="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          required
        />
        <avanti-text-input
          v-if="activeTab === 'register'"
          id="login-confirm"
          v-model:value="confirmPassword"
          label="Conferma password"
          type="password"
          placeholder="••••••••"
          required
        />
        <avanti-button
          type="submit"
          block
          :text="submitLabel"
        />
      </form>

      <p class="avanti-login__footer">
        I tuoi dati sono protetti con crittografia
      </p>
    </avanti-modal>
  </div>
</template>

<style scoped>
.avanti-login {
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 40px;
  max-width: var(--avanti-content-max);
  margin: 0 auto;
}

.avanti-login__hero {
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.avanti-login__logo {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--avanti-text-dark);
}

.avanti-login__logo-mark {
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: var(--avanti-primary);
  color: var(--avanti-white);
}

.avanti-login__logo-text {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -1.6px;
}

.avanti-login__form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.avanti-login__footer {
  margin-top: 16px;
  font-size: 14px;
  text-align: center;
  color: var(--avanti-near-black);
}

@media (max-width: 768px) {
  .avanti-login {
    padding: 24px 16px;
  }

  .avanti-login__logo-text {
    font-size: 26px;
  }
}
</style>