<script setup>
defineProps({
  steps: {
    type: Array,
    required: true,
  },
  current: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: 'Passo',
  },
  completedTitle: {
    type: String,
    default: 'completati',
  },
})

function stateOf(index) {
  if (index < current) return 'done'
  if (index === current) return 'active'
  return 'pending'
}
</script>

<template>
  <div class="avanti-stepper">
    <div class="avanti-stepper__head">
      <span class="avanti-stepper__title">
        {{ title }} {{ current + 1 }} di {{ steps.length }}
      </span>
      <span class="avanti-stepper__count">
        {{ current }} / {{ steps.length }} {{ completedTitle }}
      </span>
    </div>

    <div class="avanti-stepper__track">
      <template v-for="(step, index) in steps" :key="step.label">
        <div class="avanti-stepper__step">
          <span
            class="avanti-stepper__dot"
            :class="`avanti-stepper__dot--${stateOf(index)}`"
          >
            <svg
              v-if="stateOf(index) === 'done'"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <span class="avanti-stepper__label" :class="`avanti-stepper__label--${stateOf(index)}`">
            {{ step.label }}
          </span>
        </div>
        <span
          v-if="index < steps.length - 1"
          class="avanti-stepper__line"
          :class="{ 'avanti-stepper__line--done': index < current }"
        />
      </template>
    </div>
  </div>
</template>

<style scoped>
.avanti-stepper {
  padding: 16px;
  background-color: var(--avanti-white);
  border: 1px solid var(--avanti-border-alt);
  border-radius: var(--avanti-radius-card);
}

.avanti-stepper__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.avanti-stepper__title {
  font-size: 10px;
  font-weight: 700;
  color: var(--avanti-text-dark);
}

.avanti-stepper__count {
  font-size: 10px;
  font-weight: 500;
  color: var(--avanti-text-muted);
}

.avanti-stepper__track {
  display: flex;
  align-items: center;
}

.avanti-stepper__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.avanti-stepper__dot {
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.avanti-stepper__dot--done {
  background-color: var(--avanti-primary);
  color: var(--avanti-white);
}

.avanti-stepper__dot--active {
  background-color: var(--avanti-info-bg);
  border: 1px solid var(--avanti-primary);
  color: var(--avanti-primary);
  font-size: 10px;
  font-weight: 700;
}

.avanti-stepper__dot--pending {
  background-color: var(--avanti-disabled-bg);
  border: 1px solid var(--avanti-disabled-border);
}

.avanti-stepper__label {
  font-size: 10px;
  font-weight: 500;
  text-align: center;
}

.avanti-stepper__label--active {
  color: var(--avanti-text-dark);
  font-weight: 700;
}

.avanti-stepper__label--pending {
  color: var(--avanti-muted-light);
}

.avanti-stepper__label--done {
  color: var(--avanti-text-muted);
}

.avanti-stepper__line {
  flex: 1;
  height: 2px;
  background-color: var(--avanti-border);
  margin: 0 4px;
  min-width: 12px;
}

.avanti-stepper__line--done {
  background-color: var(--avanti-primary);
}
</style>