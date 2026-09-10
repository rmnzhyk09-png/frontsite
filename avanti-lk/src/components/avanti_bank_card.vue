<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'verifica in corso',
  },
})

function normalize(status) {
  return String(status).toLowerCase().replace(/\s+/g, '-')
}

function isDone(status) {
  return String(status).toLowerCase().includes('verif')
}
</script>

<template>
  <div class="avanti-bank-card">
    <span class="avanti-bank-card__logo" aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 15h.01" />
      </svg>
    </span>
    <div class="avanti-bank-card__info">
      <span class="avanti-bank-card__name">{{ name }}</span>
      <span class="avanti-bank-card__status" :class="`avanti-bank-card__status--${normalize(status)}`">
        <svg
          v-if="isDone(status)"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        {{ status }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.avanti-bank-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px;
  background-color: var(--avanti-white);
  border: 1px solid var(--avanti-border);
  border-radius: 12px;
}

.avanti-bank-card__logo {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: var(--avanti-bg);
  color: var(--avanti-primary);
  flex-shrink: 0;
}

.avanti-bank-card__info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.avanti-bank-card__name {
  font-size: 14px;
  font-weight: 500;
  color: var(--avanti-bank-name);
  text-transform: uppercase;
  letter-spacing: 0.2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.avanti-bank-card__status {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: var(--avanti-text-muted);
}
</style>