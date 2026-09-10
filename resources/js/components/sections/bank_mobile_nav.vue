<script setup lang="ts">
import { ref } from 'vue'
import BankBaseIcon from '@/components/base/bank_base_icon.vue'

defineProps<{
  activeRoute?: string
}>()

defineEmits<{
  navigate: [route: string]
}>()

const items = [
  { id: 'dashboard', label: 'Главная', icon: 'home', route: '/' },
  { id: 'accounts', label: 'Счета', icon: 'wallet', route: '/accounts' },
  { id: 'transfer', label: 'Перевод', icon: 'send', route: '/transfers' },
  { id: 'history', label: 'История', icon: 'history', route: '/history' },
  { id: 'more', label: 'Ещё', icon: 'menu', route: '/more' },
]

const active = ref('dashboard')

function handleNav(route: string, id: string) {
  active.value = id
}
</script>

<template>
  <nav class="mobile-nav" aria-label="Мобильная навигация">
    <button
      v-for="item in items"
      :key="item.id"
      :class="['mobile-nav__item', { 'mobile-nav__item--active': active === item.id }]"
      :aria-label="item.label"
      :aria-current="active === item.id ? 'page' : undefined"
      @click="handleNav(item.route, item.id)"
    >
      <bank-base-icon :name="item.icon" :size="22" />
      <span class="mobile-nav__label">{{ item.label }}</span>
    </button>
  </nav>
</template>

<style scoped>
.mobile-nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}

.mobile-nav__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px 12px;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: var(--radius-sm);
  color: var(--c-text-tertiary);
  font-family: 'Inter', sans-serif;
  transition: color 0.2s;
  min-width: 0;
}

.mobile-nav__item:hover {
  color: var(--c-text-secondary);
}

.mobile-nav__item--active {
  color: var(--c-primary);
}

.mobile-nav__label {
  font-size: 10px;
  font-weight: 500;
}
</style>
