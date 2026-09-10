<script setup lang="ts">
import BankBaseIcon from '@/components/base/bank_base_icon.vue'
import BankBaseButton from '@/components/base/bank_base_button.vue'
import BankBaseBadge from '@/components/base/bank_base_badge.vue'

defineProps<{
  emailVerified: boolean
}>()

defineEmits<{
  changePassword: []
  changeEmail: []
  sendVerification: []
}>()
</script>

<template>
  <div class="security">
    <div class="security__header">
      <div class="security__icon">
        <bank-base-icon name="shield" :size="20" color="var(--text-brand)" />
      </div>
      <h3 class="security__title">Sicurezza</h3>
    </div>

    <div class="security__divider"></div>

    <div class="security__row">
      <span class="security__desc">Cambia la password per proteggere il tuo account</span>
      <bank-base-button variant="outline-brand" size="sm" @click="$emit('changePassword')">
        Cambia password
      </bank-base-button>
    </div>

    <div class="security__divider"></div>

    <div class="security__row">
      <span class="security__desc">Cambia l'indirizzo email associato al tuo account</span>
      <bank-base-button variant="outline-brand" size="sm" @click="$emit('changeEmail')">
        Cambia email
      </bank-base-button>
    </div>

    <div class="security__divider"></div>

    <div class="security__verify">
      <div class="security__verify-header">
        <div class="security__verify-icon">
          <bank-base-icon name="user" :size="14" color="var(--text-primary)" />
        </div>
        <span class="security__verify-title">Verifica email</span>
        <bank-base-badge
          :text="emailVerified ? 'Verificata' : 'Non verificata'"
          :variant="emailVerified ? 'success' : 'neutral'"
          size="sm"
        />
      </div>
      <p class="security__verify-desc">
        Verifica il tuo indirizzo email per ricevere notifiche importanti
      </p>
      <bank-base-button
        v-if="!emailVerified"
        variant="primary"
        size="sm"
        @click="$emit('sendVerification')"
      >
        Invia codice
      </bank-base-button>
    </div>
  </div>
</template>

<style scoped>
.security {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-card);
  gap: 16px;
}

.security__header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.security__icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: var(--bg-brand-light);
  display: flex;
  align-items: center;
  justify-content: center;
}

.security__title {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
}

.security__divider {
  height: 1px;
  background-color: var(--border-default);
}

.security__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.security__desc {
  font-size: 13px;
  font-weight: 400;
  color: var(--text-secondary);
  flex: 1;
}

.security__verify {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background-color: var(--bg-brand-light);
  border-radius: 10px;
}

.security__verify-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.security__verify-icon {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: var(--bg-card);
  display: flex;
  align-items: center;
  justify-content: center;
}

.security__verify-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}

.security__verify-desc {
  font-size: 13px;
  font-weight: 400;
  color: var(--text-secondary);
  margin: 0;
}

@media (max-width: 767px) {
  .security {
    padding: 16px;
    gap: 16px;
  }

  .security__row {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
}
</style>
