<script setup lang="ts">
import { computed } from 'vue'
import type { Step } from '@/types'
import BankBaseIcon from '@/components/base/bank_base_icon.vue'

const props = defineProps<{
  steps: Step[]
  currentStep: number
  totalSteps: number
}>()

const completedCount = computed(() => props.steps.filter(s => s.status === 'completed').length)
</script>

<template>
  <div class="steps">
    <div class="steps__header">
      <span class="steps__count">Passo {{ currentStep }} di {{ totalSteps }}</span>
      <span class="steps__done">{{ completedCount }} / {{ totalSteps }} completati</span>
    </div>
    <div class="steps__track">
      <div
        v-for="(step, i) in steps"
        :key="step.id"
        class="steps__item"
      >
        <div
          :class="[
            'steps__circle',
            `steps__circle--${step.status}`,
          ]"
        >
          <bank-base-icon
            v-if="step.status === 'completed'"
            name="check"
            :size="16"
            color="#ffffff"
          />
          <span v-else class="steps__number">{{ i + 1 }}</span>
        </div>
        <span
          :class="[
            'steps__label',
            `steps__label--${step.status}`,
          ]"
        >
          {{ step.label }}
        </span>
        <div
          v-if="i < steps.length - 1"
          :class="[
            'steps__line',
            { 'steps__line--filled': step.status === 'completed' },
          ]"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.steps {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px 24px;
  background: var(--bg-card);
  border: 1px solid var(--border-steps);
  border-radius: var(--radius-card);
}

.steps__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.steps__count {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-primary);
}

.steps__done {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
}

.steps__track {
  display: flex;
  align-items: flex-start;
  position: relative;
}

.steps__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 1;
}

.steps__circle {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-circle);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  flex-shrink: 0;
}

.steps__circle--completed {
  background-color: var(--bg-brand);
}

.steps__circle--current {
  background-color: var(--bg-brand-light);
  border: 2px solid var(--border-brand);
}

.steps__circle--pending {
  background-color: var(--bg-pending);
  border: 1.5px solid var(--border-inactive);
}

.steps__number {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-secondary);
}

.steps__circle--current .steps__number {
  color: var(--text-brand);
}

.steps__circle--pending .steps__number {
  color: var(--text-disabled);
}

.steps__label {
  font-size: 11px;
  font-weight: 600;
  text-align: center;
}

.steps__label--completed { color: var(--text-brand); }
.steps__label--current { color: var(--text-brand); font-weight: 700; }
.steps__label--pending { color: var(--text-disabled); font-weight: 500; }

.steps__line {
  position: absolute;
  top: 18px;
  left: calc(50% + 18px);
  right: calc(-50% + 18px);
  height: 2px;
  background-color: var(--border-inactive);
  z-index: 0;
}

.steps__line--filled {
  background-color: var(--bg-brand);
}

@media (max-width: 767px) {
  .steps {
    padding: 16px;
    gap: 12px;
  }

  .steps__count { font-size: 10px; }
  .steps__done { font-size: 10px; }

  .steps__circle {
    width: 20px;
    height: 20px;
  }

  .steps__circle svg { width: 10px; height: 10px; }

  .steps__number { font-size: 9px; }
  .steps__label { font-size: 0; }

  .steps__line {
    top: 10px;
    left: calc(50% + 10px);
    right: calc(-50% + 10px);
  }
}
</style>
