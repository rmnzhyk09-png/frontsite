<script setup>
import { onMounted, onUnmounted } from 'vue'

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['close'])

function onClose() {
  emit('close')
}

function onOverlayKeydown(event) {
  if (event.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('keydown', onOverlayKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onOverlayKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="avanti-modal">
      <div v-if="open" class="avanti-modal" @click.self="onClose">
        <div class="avanti-modal__dialog" role="dialog" aria-modal="true">
          <header class="avanti-modal__head">
            <button
              type="button"
              class="avanti-modal__close"
              aria-label="Close"
              @click="onClose"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round"
                   stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <slot name="logo" />
            <h2 v-if="title" class="avanti-modal__title">{{ title }}</h2>
            <p v-if="subtitle" class="avanti-modal__subtitle">{{ subtitle }}</p>
          </header>
          <div class="avanti-modal__body">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.avanti-modal {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: var(--avanti-dark);
}

.avanti-modal__dialog {
  width: 100%;
  max-width: 524px;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  background-color: var(--avanti-white);
  border-radius: 23px;
  box-shadow: var(--avanti-shadow-md);
}

.avanti-modal__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px 24px 24px;
  position: relative;
  text-align: center;
}

.avanti-modal__close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--avanti-white);
  border: none;
  border-radius: 8px;
  color: var(--avanti-muted);
}

.avanti-modal__close:hover {
  color: var(--avanti-primary);
}

.avanti-modal__title {
  font-size: 26px;
  font-weight: 600;
  letter-spacing: -0.6px;
  color: var(--avanti-near-black);
  margin-top: 8px;
}

.avanti-modal__subtitle {
  font-size: 14px;
  color: var(--avanti-text-muted);
}

.avanti-modal__body {
  padding: 24px;
}

.avanti-modal-enter-active,
.avanti-modal-leave-active {
  transition: opacity 0.25s ease;
}

.avanti-modal-enter-from,
.avanti-modal-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .avanti-modal {
    align-items: flex-end;
    padding: 0;
  }

  .avanti-modal__dialog {
    max-width: 100%;
    max-height: 92vh;
    border-radius: 23px 23px 0 0;
  }
}
</style>