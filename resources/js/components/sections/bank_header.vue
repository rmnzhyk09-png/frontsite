<script setup lang="ts">
import type { NavItem, User, PageName } from '@/types'
import BankBaseIcon from '@/components/base/bank_base_icon.vue'
import BankBaseAvatar from '@/components/base/bank_base_avatar.vue'

defineProps<{
  user: User
  navItems: NavItem[]
  activePage: PageName
  notificationCount: number
}>()

defineEmits<{
  navigate: [page: PageName]
  assistenza: []
}>()
</script>

<template>
  <header class="header">
    <div class="header__top">
      <div class="header__inner">
        <div class="header__nav">
          <div class="header__logo">
            <div class="header__logo-icon">
              <bank-base-icon name="bank" :size="20" color="var(--text-brand)" />
            </div>
            <span class="header__logo-text">Avanti</span>
          </div>
          <nav class="header__menu" aria-label="Основная навигация">
            <button
              v-for="item in navItems"
              :key="item.id"
              :class="['header__nav-item', { 'header__nav-item--active': activePage === item.id }]"
              :aria-current="activePage === item.id ? 'page' : undefined"
              @click="$emit('navigate', item.id as PageName)"
            >
              <bank-base-icon :name="item.icon" :size="18" />
              <span>{{ item.label }}</span>
            </button>
          </nav>
        </div>
        <button class="header__assistenza" @click="$emit('assistenza')">
          <bank-base-icon name="message" :size="14" color="#ffffff" />
          <span class="header__assistenza-text">Assistenza</span>
          <span v-if="notificationCount > 0" class="header__badge">{{ notificationCount }}</span>
        </button>
      </div>
    </div>

    <div class="header__bottom">
      <div class="header__bottom-inner">
        <div class="header__profile">
          <bank-base-avatar :name="`${user.firstName} ${user.lastName}`" :avatar="user.avatar" size="md" />
          <div class="header__profile-info">
            <span class="header__profile-name">{{ user.firstName }} {{ user.lastName }}</span>
            <span class="header__profile-email">{{ user.email }}</span>
          </div>
        </div>
        <div class="header__breadcrumb">
          <span class="header__breadcrumb-item">Piattaforma</span>
          <span class="header__breadcrumb-sep">/</span>
          <span class="header__breadcrumb-current">
            {{ navItems.find(n => n.id === activePage)?.label || 'Home' }}
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid var(--border-default);
}

.header__top {
  background: var(--bg-card);
  border-bottom: 1px solid var(--border-default);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px;
  height: 111px;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 52px;
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header__logo-icon {
  width: 32px;
  height: 32px;
}

.header__logo-text {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-black);
}

.header__menu {
  display: flex;
  gap: 12px;
}

.header__nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: var(--radius-button);
  background: var(--bg-page);
  border: 1px solid transparent;
  cursor: pointer;
  font-family: var(--font-main);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  transition: all 0.2s;
}

.header__nav-item:hover {
  background-color: var(--bg-brand-light);
  border-color: var(--bg-brand-light);
}

.header__nav-item--active {
  background-color: var(--bg-brand-light);
  color: var(--text-brand);
  border-color: var(--bg-brand-light);
  font-weight: 600;
}

.header__nav-item:focus-visible {
  outline: 2px solid var(--bg-brand);
  outline-offset: 2px;
}

.header__assistenza {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: var(--radius-button);
  background: var(--bg-brand);
  border: none;
  cursor: pointer;
  font-family: var(--font-main);
  font-size: 16px;
  font-weight: 600;
  color: var(--text-white);
  transition: background-color 0.2s;
  position: relative;
}

.header__assistenza:hover { background-color: var(--bg-brand-dark); }
.header__assistenza:focus-visible { outline: 2px solid var(--text-primary); outline-offset: 2px; }

.header__badge {
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 22px;
  height: 22px;
  padding: 0 6px;
  border-radius: 11px;
  background-color: var(--bg-danger);
  color: var(--text-white);
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--bg-card);
}

.header__bottom {
  background: var(--bg-card);
}

.header__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 10px 72px;
}

.header__profile {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header__profile-info {
  display: flex;
  flex-direction: column;
}

.header__profile-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.header__profile-email {
  font-size: 12px;
  font-weight: 400;
  color: var(--text-secondary);
}

.header__breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header__breadcrumb-item {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
}

.header__breadcrumb-sep {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-disabled);
}

.header__breadcrumb-current {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

@media (max-width: 767px) {
  .header__inner {
    padding: 0 16px;
    height: 62px;
  }

  .header__menu { display: none; }
  .header__assistenza-text { display: none; }

  .header__assistenza {
    width: 38px;
    height: 38px;
    padding: 0;
    border-radius: 6.33px;
    justify-content: center;
  }

  .header__bottom { display: none; }

  .header__logo-text {
    font-size: 22px;
    letter-spacing: -1.1px;
  }
}
</style>
