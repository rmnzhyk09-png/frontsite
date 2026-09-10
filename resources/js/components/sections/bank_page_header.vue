<script setup lang="ts">
import type { User } from '@/types'
import BankBaseIcon from '@/components/base/bank_base_icon.vue'
import BankBaseAvatar from '@/components/base/bank_base_avatar.vue'

defineProps<{
  user: User
  notificationCount?: number
}>()

defineEmits<{
  notifications: []
  profile: []
  menu: []
}>()

function getGreeting(): string {
  const h = new Date().getHours()
  if (h < 6) return 'Доброй ночи'
  if (h < 12) return 'Доброе утро'
  if (h < 18) return 'Добрый день'
  return 'Добрый вечер'
}
</script>

<template>
  <header class="header">
    <div class="header__left">
      <button class="header__menu-btn" aria-label="Меню" @click="$emit('menu')">
        <bank-base-icon name="menu" :size="22" />
      </button>
      <div class="header__greeting">
        <span class="header__hello">{{ getGreeting() }},</span>
        <span class="header__name">{{ user.name }}</span>
      </div>
    </div>
    <div class="header__right">
      <button
        class="header__icon-btn"
        aria-label="Уведомления"
        @click="$emit('notifications')"
      >
        <bank-base-icon name="bell" :size="20" />
        <span
          v-if="notificationCount && notificationCount > 0"
          class="header__badge"
        >
          {{ notificationCount > 9 ? '9+' : notificationCount }}
        </span>
      </button>
      <button class="header__avatar-btn" aria-label="Профиль" @click="$emit('profile')">
        <bank-base-avatar :name="user.name" :avatar="user.avatar" size="md" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: var(--c-surface);
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid var(--c-border);
}

.header__left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header__menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  background: var(--c-gray-100);
  border: none;
  cursor: pointer;
  color: var(--c-text);
  transition: background-color 0.2s;
}

.header__menu-btn:hover {
  background-color: var(--c-gray-200);
}

.header__menu-btn:focus-visible {
  outline: 2px solid var(--c-primary);
  outline-offset: 2px;
}

.header__greeting {
  display: flex;
  flex-direction: column;
}

.header__hello {
  font-size: 12px;
  color: var(--c-text-tertiary);
}

.header__name {
  font-size: 16px;
  font-weight: 700;
  color: var(--c-text);
}

.header__right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header__icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: var(--c-gray-100);
  border: none;
  cursor: pointer;
  color: var(--c-text-secondary);
  transition: background-color 0.2s;
  position: relative;
}

.header__icon-btn:hover {
  background-color: var(--c-gray-200);
}

.header__icon-btn:focus-visible {
  outline: 2px solid var(--c-primary);
  outline-offset: 2px;
}

.header__badge {
  position: absolute;
  top: 4px;
  right: 4px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--c-error);
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__avatar-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  border-radius: 50%;
  transition: box-shadow 0.2s;
}

.header__avatar-btn:hover {
  box-shadow: 0 0 0 2px var(--c-primary);
}

.header__avatar-btn:focus-visible {
  outline: 2px solid var(--c-primary);
  outline-offset: 2px;
}

@media (min-width: 768px) {
  .header {
    padding: 16px 24px;
  }

  .header__menu-btn {
    display: none;
  }
}
</style>
