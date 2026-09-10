<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  closable: {
    type: Boolean,
    default: false,
  },
  accent: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])

function onClose() {
  emit('close')
}
</script>

<template>
  <div
    class="avanti-alert-banner"
    :class="{ 'avanti-alert-banner--accent': accent }"
  >
    <div class="avanti-alert-banner__text">
      <slot name="icon">
        <span class="avanti-alert-banner__check">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="3" stroke-linecap="round"
               stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
      </slot>
      <div class="avanti-alert-banner__content">
        <p v-if="title" class="avanti-alert-banner__title">{{ title }}</p>
        <p v-if="description" class="avanti-alert-banner__desc">{{ description }}</p>
      </div>
    </div>

    <div class="avanti-alert-banner__actions">
      <slot name="action" />
      <button
        v-if="closable"
        type="button"
        class="avanti-alert-banner__close"
        aria-label="Close"
        @click="onClose"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round"
             stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.avanti-alert-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
  background-color: var(--avanti-info-bg);
  border: 1px solid var(--avanti-info-border);
  border-radius: 10px;
}

.avanti-alert-banner--accent {
  background-color: var(--avanti-info-bg);
  border: 1px solid var(--avanti-primary);
}

.avanti-alert-banner__text {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.avanti-alert-banner__check {
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 18px;
  background-color: var(--avanti-primary);
  color: var(--avanti-white);
}

.avanti-alert-banner__content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.avanti-alert-banner__title {
  font-size: 13px;
  font-weight: 600;
  color: var(--avanti-text-dark);
}

.avanti-alert-banner__desc {
  font-size: 13px;
  color: var(--avanti-text-muted);
  line-height: 1.4;
}

.avanti-alert-banner__actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.avanti-alert-banner__close {
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: var(--avanti-muted);
}

.avanti-alert-banner__close:hover {
  background-color: var(--avanti-white);
}

@media (max-width: 768px) {
  .avanti-alert-banner {
    flex-direction: column;
    align-items: stretch;
  }

  .avanti-alert-banner__actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>