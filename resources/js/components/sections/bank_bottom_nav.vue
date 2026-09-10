<script setup lang="ts">
import type { NavItem, PageName } from '@/types'
import BankBaseIcon from '@/components/base/bank_base_icon.vue'

defineProps<{
  navItems: NavItem[]
  activePage: PageName
}>()

defineEmits<{
  navigate: [page: PageName]
}>()
</script>

<template>
  <nav class="bottom-nav" aria-label="Мобильная навигация">
    <button
      v-for="item in navItems"
      :key="item.id"
      :class="['bottom-nav__item', { 'bottom-nav__item--active': activePage === item.id }]"
      :aria-label="item.label"
      :aria-current="activePage === item.id ? 'page' : undefined"
      @click="$emit('navigate', item.id as PageName)"
    >
      <bank-base-icon :name="item.icon" :size="18" />
      <span class="bottom-nav__label">{{ item.label }}</span>
    </button>
  </nav>
</template>

<style scoped>
.bottom-nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 62px;
  background: var(--bg-card);
  border-top: 3px solid var(--bg-brand);
  padding: 0 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.bottom-nav__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border-radius: var(--radius-button);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  font-family: var(--font-main);
  transition: all 0.2s;
}

.bottom-nav__item:hover {
  color: var(--text-primary);
}

.bottom-nav__item:focus-visible {
  outline: 2px solid var(--bg-brand);
  outline-offset: 2px;
}

.bottom-nav__item--active {
  background-color: var(--bg-brand-light);
  color: var(--text-brand);
  font-weight: 600;
}

.bottom-nav__label {
  font-size: 10px;
  font-weight: 600;
}
</style>
