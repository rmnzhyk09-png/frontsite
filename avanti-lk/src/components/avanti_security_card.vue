<script setup>
import AvantiCard from '@/components/avanti_card.vue'
import AvantiDivider from '@/components/avanti_divider.vue'
import AvantiButton from '@/components/avanti_button.vue'
import AvantiButtonOutline from '@/components/avanti_button_outline.vue'
import AvantiAlertBanner from '@/components/avanti_alert_banner.vue'

const emit = defineEmits(['changePassword', 'changeEmail', 'verifyEmail'])

function onPassword() {
  emit('changePassword')
}

function onEmail() {
  emit('changeEmail')
}

function onVerify() {
  emit('verifyEmail')
}
</script>

<template>
  <avanti-card class="avanti-security-card">
    <div class="avanti-security-card__head">
      <span class="avanti-security-card__icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round"
             stroke-linejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </span>
      <h2 class="avanti-security-card__title">Sicurezza</h2>
    </div>
    <avanti-divider theme="dark" />

    <div class="avanti-security-card__row">
      <p class="avanti-security-card__desc">
        Cambia la password del tuo account.
      </p>
      <avanti-button-outline size="sm" text="Cambia password" @click="onPassword" />
    </div>
    <avanti-divider theme="dark" />

    <div class="avanti-security-card__row">
      <p class="avanti-security-card__desc">
        Cambia l'indirizzo email del tuo account.
      </p>
      <avanti-button-outline size="sm" text="Cambia email" @click="onEmail" />
    </div>
    <avanti-divider theme="dark" />

    <avanti-alert-banner
      title="Indirizzo email non verificato"
      description="Verifica il tuo indirizzo email per proteggere il tuo account."
      accent
    >
      <template #action>
        <avanti-button size="sm" text="Verifica email" @click="onVerify" />
      </template>
    </avanti-alert-banner>
  </avanti-card>
</template>

<style scoped>
.avanti-security-card {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.avanti-security-card__head {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px;
  padding-bottom: 12px;
}

.avanti-security-card__icon {
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--avanti-white);
  border-radius: 8px;
  color: var(--avanti-primary);
}

.avanti-security-card__title {
  font-size: 15px;
  font-weight: 600;
  color: var(--avanti-text-dark);
}

.avanti-security-card__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
}

.avanti-security-card__desc {
  font-size: 13px;
  line-height: 1.4;
  color: var(--avanti-text-muted);
}

.avanti-security-card :deep(.avanti-alert-banner) {
  margin: 16px;
}

@media (max-width: 768px) {
  .avanti-security-card__row {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>