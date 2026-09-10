<script setup lang="ts">
import BankBaseIcon from '@/components/base/bank_base_icon.vue'
import BankBaseBadge from '@/components/base/bank_base_badge.vue'

defineProps<{
  completedCount: number
  totalCount: number
  missingSteps: string[]
}>()

defineEmits<{
  navigate: []
}>()
</script>

<template>
  <div class="progress-banner">
    <div class="progress-banner__icon">
      <bank-base-icon name="lock" :size="20" color="#ffffff" />
    </div>
    <div class="progress-banner__content">
      <div class="progress-banner__title-row">
        <span class="progress-banner__title">Per il prelievo dei fondi, completa tutti gli step</span>
        <bank-base-badge :text="`${completedCount} / ${totalCount} Completati`" variant="brand" size="sm" />
      </div>
      <span class="progress-banner__subtitle">Step ancora da completare</span>
      <div class="progress-banner__checks">
        <label
          v-for="step in missingSteps"
          :key="step"
          class="progress-banner__check"
        >
          <span class="progress-banner__checkbox"></span>
          <span class="progress-banner__check-label">{{ step }}</span>
        </label>
      </div>
    </div>
    <button
      class="progress-banner__arrow"
      aria-label="Перейти к шагам"
      @click="$emit('navigate')"
    >
      <bank-base-icon name="chevron-right" :size="16" color="#ffffff" />
    </button>
  </div>
</template>

<style scoped>
.progress-banner {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 16px;
  background-color: var(--bg-brand-light);
  border: 1px solid var(--border-brand);
  border-radius: var(--radius-card);
}

.progress-banner__icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-circle);
  background-color: var(--bg-brand);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.progress-banner__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.progress-banner__title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.progress-banner__title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}

.progress-banner__subtitle {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-secondary);
}

.progress-banner__checks {
  display: flex;
  gap: 16px;
  margin-top: 4px;
}

.progress-banner__check {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.progress-banner__checkbox {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid var(--border-brand);
  background-color: var(--bg-card);
  flex-shrink: 0;
}

.progress-banner__check-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
}

.progress-banner__arrow {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-circle);
  background-color: var(--bg-brand);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.2s;
}

.progress-banner__arrow:hover {
  background-color: var(--bg-brand-dark);
}

.progress-banner__arrow:focus-visible {
  outline: 2px solid var(--text-primary);
  outline-offset: 2px;
}

@media (max-width: 767px) {
  .progress-banner {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 12px;
  }

  .progress-banner__icon {
    width: 32px;
    height: 32px;
  }

  .progress-banner__icon svg {
    width: 14px;
    height: 14px;
  }

  .progress-banner__title {
    font-size: 13px;
  }

  .progress-banner__arrow {
    align-self: flex-end;
  }
}
</style>
