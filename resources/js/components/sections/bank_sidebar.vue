<script setup lang="ts">
import { ref } from 'vue'
import BankBaseIcon from '@/components/base/bank_base_icon.vue'
import BankBaseAvatar from '@/components/base/bank_base_avatar.vue'
import type { User } from '@/types'

defineProps<{
  user: User
  activeRoute?: string
}>()

defineEmits<{
  navigate: [route: string]
  logout: []
}>()

const navItems = [
  { id: 'dashboard', label: 'Главная', icon: 'home', route: '/' },
  { id: 'accounts', label: 'Счета', icon: 'wallet', route: '/accounts' },
  { id: 'cards', label: 'Карты', icon: 'card', route: '/cards' },
  { id: 'transfers', label: 'Переводы', icon: 'transfer', route: '/transfers' },
  { id: 'history', label: 'История', icon: 'history', route: '/history' },
  { id: 'settings', label: 'Настройки', icon: 'settings', route: '/settings' },
]

const active = ref('dashboard')

function handleNav(route: string, id: string) {
  active.value = id
}
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__logo">
      <div class="sidebar__logo-icon">
        <bank-base-icon name="banknotes" :size="24" color="#ffffff" />
      </div>
      <span class="sidebar__logo-text">Банк</span>
    </div>

    <nav class="sidebar__nav" aria-label="Основная навигация">
      <button
        v-for="item in navItems"
        :key="item.id"
        :class="['sidebar__link', { 'sidebar__link--active': active === item.id }]"
        :aria-label="item.label"
        :aria-current="active === item.id ? 'page' : undefined"
        @click="handleNav(item.route, item.id)"
      >
        <bank-base-icon :name="item.icon" :size="20" />
        <span class="sidebar__link-label">{{ item.label }}</span>
      </button>
    </nav>

    <div class="sidebar__footer">
      <div class="sidebar__user">
        <bank-base-avatar :name="user.name" :avatar="user.avatar" size="sm" />
        <div class="sidebar__user-info">
          <span class="sidebar__user-name">{{ user.name }}</span>
          <span class="sidebar__user-email">{{ user.email }}</span>
        </div>
      </div>
      <button class="sidebar__logout" aria-label="Выйти" @click="$emit('logout')">
        <bank-base-icon name="logout" :size="18" />
      </button>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px 16px;
}

.sidebar__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 8px;
  margin-bottom: 32px;
}

.sidebar__logo-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--c-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar__logo-text {
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
}

.sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.sidebar__link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: var(--radius-md);
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  text-align: left;
  width: 100%;
}

.sidebar__link:hover {
  background-color: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

.sidebar__link--active {
  background-color: var(--c-primary);
  color: #ffffff;
}

.sidebar__link:focus-visible {
  outline: 2px solid var(--c-primary);
  outline-offset: 2px;
}

.sidebar__link-label {
  white-space: nowrap;
}

.sidebar__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: auto;
}

.sidebar__user {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.sidebar__user-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.sidebar__user-name {
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sidebar__user-email {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.4);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sidebar__logout {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.2s;
  flex-shrink: 0;
}

.sidebar__logout:hover {
  background-color: rgba(229, 57, 53, 0.2);
  color: var(--c-error);
}

.sidebar__logout:focus-visible {
  outline: 2px solid var(--c-primary);
  outline-offset: 2px;
}
</style>
