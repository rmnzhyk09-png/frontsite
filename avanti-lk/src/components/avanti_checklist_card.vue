<script setup>
const props = defineProps({
  steps: {
    type: Array,
    required: true,
  },
  current: {
    type: Number,
    default: 3,
  },
  title: {
    type: String,
    default: 'Completa tutti gli step',
  },
  subtitle: {
    type: String,
    default: 'Per il prelievo dei fondi, completa tutti gli step',
  },
})

function stateOf(index) {
  if (index < props.current) return 'done'
  if (index === props.current) return 'current'
  return 'pending'
}

function subtitleOf(index) {
  const state = stateOf(index)
  if (state === 'done') return 'Completato'
  if (state === 'current') return 'Step attuale • Azione richiesta'
  return 'In attesa'
}
</script>

<template>
  <div class="avanti-checklist">
    <header class="avanti-checklist__head">
      <span class="avanti-checklist__eyebrow">{{ title }}</span>
      <p class="avanti-checklist__subtitle">{{ subtitle }}</p>
    </header>

    <ul class="avanti-checklist__list">
      <li
        v-for="(step, index) in steps"
        :key="step.label"
        class="avanti-checklist__item"
        :class="`avanti-checklist__item--${stateOf(index)}`"
      >
        <span class="avanti-checklist__icon">
          <svg
            v-if="stateOf(index) === 'done'"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span v-else>{{ index + 1 }}</span>
        </span>
        <div class="avanti-checklist__text">
          <p class="avanti-checklist__label" :class="`avanti-checklist__label--${stateOf(index)}`">
            {{ step.label }}
          </p>
          <p class="avanti-checklist__meta" :class="`avanti-checklist__meta--${stateOf(index)}`">
            {{ subtitleOf(index) }}
          </p>
        </div>
        <span
          v-if="stateOf(index) === 'done'"
          class="avanti-checklist__tick"
          aria-hidden="true"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="3" stroke-linecap="round"
               stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
      </li>
    </ul>

    <div class="avanti-checklist__progress">
      <span
        v-for="(step, index) in steps"
        :key="step.label"
        class="avanti-checklist__segment"
        :class="{ 'avanti-checklist__segment--done': index <= current }"
      />
    </div>
  </div>
</template>

<style scoped>
.avanti-checklist {
  background-color: var(--avanti-white);
  border: 1px solid var(--avanti-border);
  border-radius: var(--avanti-radius-card);
}

.avanti-checklist__head {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
}

.avanti-checklist__eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.55px;
  text-transform: uppercase;
  color: var(--avanti-primary);
}

.avanti-checklist__subtitle {
  font-size: 13px;
  font-weight: 600;
  color: var(--avanti-text-dark);
}

.avanti-checklist__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.avanti-checklist__item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
}

.avanti-checklist__item + .avanti-checklist__item {
  border-top: 1px solid var(--avanti-divider);
}

.avanti-checklist__item--current {
  border-left: 2px solid var(--avanti-primary);
}

.avanti-checklist__icon {
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--avanti-primary);
  color: var(--avanti-white);
  font-size: 13px;
  font-weight: 600;
  flex-shrink: 0;
}

.avanti-checklist__item--pending .avanti-checklist__icon {
  background-color: var(--avanti-disabled-bg);
  color: var(--avanti-muted);
}

.avanti-checklist__text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.avanti-checklist__label {
  font-size: 13px;
  font-weight: 600;
  color: var(--avanti-text-dark);
}

.avanti-checklist__label--current {
  font-weight: 700;
}

.avanti-checklist__label--pending {
  color: var(--avanti-muted);
}

.avanti-checklist__meta {
  font-size: 11px;
  font-weight: 500;
  color: var(--avanti-primary);
}

.avanti-checklist__meta--pending {
  color: var(--avanti-muted);
}

.avanti-checklist__tick {
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--avanti-primary);
  color: var(--avanti-white);
  flex-shrink: 0;
}

.avanti-checklist__progress {
  display: flex;
  gap: 4px;
  padding: 12px 16px;
}

.avanti-checklist__segment {
  flex: 1;
  height: 4px;
  border-radius: 999px;
  background-color: var(--avanti-border);
}

.avanti-checklist__segment--done {
  background-color: var(--avanti-primary);
}
</style>