<script setup lang="ts">
defineProps<{
  open: boolean
  title: string
}>()

const emit = defineEmits<{
  close: []
}>()

function onBackdropClick(e: MouseEvent) {
  if (e.target === e.currentTarget) emit('close')
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="modal"
      role="dialog"
      aria-modal="true"
      :aria-label="title"
      @click="onBackdropClick"
    >
      <div class="modal__panel">
        <header class="modal__header">
          <h3 class="modal__title">{{ title }}</h3>
          <button class="modal__close" type="button" aria-label="Закрыть" @click="$emit('close')">
            ×
          </button>
        </header>
        <div class="modal__body">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(26, 35, 50, 0.5);
}

.modal__panel {
  width: 100%;
  max-width: 420px;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 24px;
}

.modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.modal__title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
}

.modal__close {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-button);
  border: 1px solid var(--border-default);
  background: var(--bg-page);
  font-size: 18px;
  line-height: 1;
  color: var(--text-secondary);
  cursor: pointer;
}

.modal__close:hover {
  background-color: var(--border-default);
}

.modal__body {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>