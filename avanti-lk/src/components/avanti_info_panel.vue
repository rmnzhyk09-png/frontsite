<script setup>
import { ref } from 'vue'
import AvantiCard from '@/components/avanti_card.vue'
import AvantiDivider from '@/components/avanti_divider.vue'
import AvantiPaginationDots from '@/components/avanti_pagination_dots.vue'
import AvantiAvatar from '@/components/avanti_avatar.vue'

defineProps({
  name: {
    type: String,
    default: 'Marco Rossi',
  },
  email: {
    type: String,
    default: 'ikoei@09gmail.com',
  },
  items: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['edit'])
const activeIndex = ref(0)

function onEdit() {
  emit('edit')
}

function avatarVariant(item, index) {
  if (index === activeIndex.value) return 'outline'
  if (item.disabled) return 'muted'
  return 'solid'
}
</script>

<template>
  <avanti-card class="avanti-info-panel">
    <div class="avanti-info-panel__head">
      <div class="avanti-info-panel__identity">
        <p class="avanti-info-panel__name">{{ name }}</p>
        <p class="avanti-info-panel__email">{{ email }}</p>
      </div>
      <button type="button" class="avanti-info-panel__edit" aria-label="Modifica" @click="onEdit">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round"
             stroke-linejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      </button>
    </div>
    <avanti-divider />

    <div class="avanti-info-panel__list">
      <div
        v-for="(item, index) in items"
        :key="item.label"
        class="avanti-info-panel__item"
        :class="{
          'avanti-info-panel__item--active': index === activeIndex,
          'avanti-info-panel__item--disabled': item.disabled,
        }"
      >
        <avanti-avatar
          :initials="item.initials"
          size="lg"
          :variant="avatarVariant(item, index)"
        />
        <div class="avanti-info-panel__item-text">
          <p class="avanti-info-panel__item-label">{{ item.label }}</p>
          <p class="avanti-info-panel__item-status">{{ item.status }}</p>
        </div>
        <span
          v-if="index === activeIndex"
          class="avanti-info-panel__check"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="3" stroke-linecap="round"
               stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        <span v-else-if="item.disabled" class="avanti-info-panel__badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round">
            <path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" />
            <line x1="12" y1="11" x2="12" y2="15" />
            <line x1="9" y1="13" x2="15" y2="13" />
          </svg>
        </span>
      </div>
    </div>

    <avanti-divider />
    <div class="avanti-info-panel__footer">
      <avanti-pagination-dots :total="items.length" :active="activeIndex" />
    </div>
  </avanti-card>
</template>

<style scoped>
.avanti-info-panel {
  display: flex;
  flex-direction: column;
}

.avanti-info-panel__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 20px 24px;
}

.avanti-info-panel__identity {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.avanti-info-panel__name {
  font-size: 20px;
  font-weight: 600;
  color: var(--avanti-text-dark);
}

.avanti-info-panel__email {
  font-size: 14px;
  color: var(--avanti-text-muted);
}

.avanti-info-panel__edit {
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid var(--avanti-border);
  border-radius: 5px;
  color: var(--avanti-muted);
}

.avanti-info-panel__list {
  display: flex;
  flex-direction: column;
}

.avanti-info-panel__item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
}

.avanti-info-panel__item--active {
  background-color: var(--avanti-info-bg);
}

.avanti-info-panel__item--disabled {
  opacity: 0.6;
}

.avanti-info-panel__item-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.avanti-info-panel__item-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--avanti-text-dark);
}

.avanti-info-panel__item-status {
  font-size: 12px;
  color: var(--avanti-text-muted);
}

.avanti-info-panel__check {
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background-color: var(--avanti-primary);
  color: var(--avanti-white);
  flex-shrink: 0;
}

.avanti-info-panel__badge {
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background-color: var(--avanti-disabled-bg);
  color: var(--avanti-muted);
  flex-shrink: 0;
}

.avanti-info-panel__footer {
  display: flex;
  align-items: center;
  padding: 20px 24px;
}
</style>