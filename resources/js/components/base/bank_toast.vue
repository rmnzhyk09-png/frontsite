<script setup lang="ts">
import BankBaseIcon from '@/components/base/bank_base_icon.vue'

defineProps<{
  message: string
}>()
</script>

<template>
  <Teleport to="body">
    <div class="toast" role="status">
      <span class="toast__icon">
        <bank-base-icon name="check" :size="14" color="#ffffff" />
      </span>
      <span class="toast__message">{{ message }}</span>
    </div>
  </Teleport>
</template>

<style scoped>
.toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1001;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: var(--text-primary);
  color: var(--text-white);
  border-radius: var(--radius-md);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  max-width: calc(100vw - 32px);
  animation: toast-in 0.2s ease;
}

.toast__icon {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: var(--bg-brand);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.toast__message {
  font-size: 14px;
  font-weight: 500;
}

@keyframes toast-in {
  from { opacity: 0; transform: translateX(-50%) translateY(8px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}
</style>