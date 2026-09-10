<script setup lang="ts">
import type { ChecklistItem } from '@/types'
import BankBaseIcon from '@/components/base/bank_base_icon.vue'

defineProps<{
  items: ChecklistItem[]
}>()

defineEmits<{
  action: [item: ChecklistItem]
}>()

function getStatusColor(status: string): string {
  if (status === 'completed') return 'var(--bg-brand)'
  if (status === 'current') return 'var(--bg-card)'
  return 'var(--bg-pending)'
}

function getStatusBorder(status: string): string {
  if (status === 'completed') return 'none'
  if (status === 'current') return '2px solid var(--border-brand)'
  return '1.5px solid var(--border-inactive)'
}
</script>

<template>
  <div class="checklist">
    <div class="checklist__header">
      <div class="checklist__title-col">
        <span class="checklist__eyebrow">Completa tutti gli step</span>
        <span class="checklist__heading">Per il prelievo dei fondi, completa tutti gli step</span>
      </div>
      <button class="checklist__collapse" aria-label="Свернуть">
        <bank-base-icon name="chevron-down" :size="14" color="var(--text-secondary)" />
      </button>
    </div>

    <div class="checklist__items">
      <div
        v-for="item in items"
        :key="item.id"
        :class="['checklist__row', `checklist__row--${item.status}`]"
      >
        <div
          class="checklist__icon"
          :style="{
            backgroundColor: getStatusColor(item.status),
            border: getStatusBorder(item.status),
          }"
        >
          <bank-base-icon
            v-if="item.status === 'completed'"
            name="check"
            :size="16"
            color="#ffffff"
          />
          <span v-else-if="item.status === 'current'" class="checklist__num">{{ item.id }}</span>
          <span v-else class="checklist__num checklist__num--muted">{{ item.id }}</span>
        </div>
        <div class="checklist__text">
          <span :class="['checklist__item-title', `checklist__item-title--${item.status}`]">
            {{ item.title }}
          </span>
          <span :class="['checklist__item-label', `checklist__item-label--${item.status}`]">
            {{ item.label }}
          </span>
        </div>
        <button
          v-if="item.status === 'current'"
          class="checklist__action"
          aria-label="Перейти"
          @click="$emit('action', item)"
        >
          <bank-base-icon name="chevron-right" :size="16" color="#ffffff" />
        </button>
        <div
          v-else-if="item.status === 'completed'"
          class="checklist__status-check"
        >
          <bank-base-icon name="check" :size="14" color="#ffffff" />
        </div>
      </div>
    </div>

    <div class="checklist__progress">
      <div
        v-for="(_, i) in items"
        :key="i"
        :class="[
          'checklist__segment',
          { 'checklist__segment--filled': items[i]?.status === 'completed' },
          { 'checklist__segment--empty': items[i]?.status === 'current' },
        ]"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.checklist {
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-card);
  overflow: hidden;
}

.checklist__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
}

.checklist__title-col {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.checklist__eyebrow {
  font-size: 11px;
  font-weight: 700;
  color: var(--text-brand);
  letter-spacing: 0.55px;
}

.checklist__heading {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}

.checklist__collapse {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-button);
  background: var(--bg-page);
  border: 1px solid var(--border-default);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.checklist__collapse:hover { background-color: var(--border-default); }
.checklist__collapse:focus-visible { outline: 2px solid var(--bg-brand); outline-offset: 2px; }

.checklist__items {
  display: flex;
  flex-direction: column;
}

.checklist__row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
}

.checklist__row--current {
  background-color: var(--bg-brand-light);
}

.checklist__icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-circle);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.checklist__num {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-brand);
}

.checklist__num--muted {
  color: var(--text-disabled);
}

.checklist__text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.checklist__item-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.checklist__item-title--current { font-weight: 700; }
.checklist__item-title--pending { font-weight: 500; color: var(--text-secondary); }

.checklist__item-label {
  font-size: 11px;
  font-weight: 500;
}

.checklist__item-label--completed { color: var(--text-brand); }
.checklist__item-label--current { color: var(--text-brand); font-weight: 600; }
.checklist__item-label--pending { color: var(--text-disabled); font-weight: 400; }

.checklist__action {
  width: 32px;
  height: 32px;
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

.checklist__action:hover { background-color: var(--bg-brand-dark); }
.checklist__action:focus-visible { outline: 2px solid var(--text-primary); outline-offset: 2px; }

.checklist__status-check {
  width: 28px;
  height: 28px;
  border-radius: var(--radius-circle);
  background-color: var(--bg-brand);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.checklist__progress {
  display: flex;
  gap: 4px;
  padding: 0 24px 16px;
}

.checklist__segment {
  flex: 1;
  height: 4px;
  border-radius: var(--radius-pill);
  background-color: var(--border-default);
}

.checklist__segment--filled {
  background-color: var(--bg-brand);
}

.checklist__segment--empty {
  background-color: transparent;
}

@media (max-width: 767px) {
  .checklist__header { padding: 16px; }
  .checklist__row { padding: 16px; gap: 12px; }

  .checklist__icon {
    width: 36px;
    height: 36px;
  }

  .checklist__action {
    width: 28px;
    height: 28px;
  }

  .checklist__progress {
    padding: 0 16px 16px;
  }
}
</style>
