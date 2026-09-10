<script setup lang="ts">
import type { NavItem, User, PageName } from '@/types'
import bankLogo from '@/assets/logo.png'
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
            <img class="header__logo-mark" :src="bankLogo" width="48" height="37.6" alt="Avanti" />
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
        <button class="header__assistenza" type="button" @click="$emit('assistenza')">
          <bank-base-icon name="message" :size="14" color="#ffffff" />
          <span class="header__assistenza-text">Assistenza</span>
          <span v-if="notificationCount > 0" class="header__badge">{{ notificationCount }}</span>
        </button>
        <div class="header__actions">
          <button class="header__bell" type="button" aria-label="Уведомления" @click="$emit('assistenza')">
            <bank-base-icon name="bell" :size="16" />
            <span v-if="notificationCount > 0" class="header__bell-count">{{ notificationCount }}</span>
          </button>
          <div class="header__avatar-wrap" :aria-label="`Аватар ${user.firstName}`">
            <bank-base-avatar :name="`${user.firstName} ${user.lastName}`" :avatar="user.avatar" size="md" />
          </div>
        </div>
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
  padding: 16px 32px 0;
  height: 111px;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 49px;
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 7px;
}

.header__logo-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 37.6px;
}

.header__logo-text {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -1.6px;
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
  padding: 10px 16px;
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
}

.header__nav-item--active {
  background-color: var(--bg-brand-light);
  color: var(--text-brand);
  border-color: var(--bg-brand-light);
  font-weight: 600;
}

.header__assistenza {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 156px;
  height: 39px;
  border-radius: var(--radius-button);
  background: var(--bg-brand);
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  font-family: var(--font-main);
  font-size: 16px;
  font-weight: 600;
  color: var(--text-white);
  transition: background-color 0.2s, box-shadow 0.2s;
  position: relative;
}

.header__assistenza:hover {
  background-color: var(--bg-brand-dark);
  box-shadow: 0 0 12px rgba(36, 145, 170, 0.6);
  border: 1px solid var(--text-white);
}

.header__badge {
  position: absolute;
  top: -10px;
  right: -11px;
  width: 22px;
  height: 22px;
  border-radius: 11px;
  background-color: var(--bg-danger);
  color: var(--text-white);
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--text-white);
}

.header__actions {
  display: none;
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

.header__profile { display: flex; align-items: center; gap: 20px; }
.header__profile-info { display: flex; flex-direction: column; }
.header__profile-name { font-size: 14px; font-weight: 600; color: var(--text-primary); }
.header__profile-email { font-size: 12px; font-weight: 400; color: var(--text-secondary); }

.header__breadcrumb { display: flex; align-items: center; gap: 8px; }
.header__breadcrumb-item { font-size: 14px; font-weight: 500; color: var(--text-secondary); }
.header__breadcrumb-sep { font-size: 14px; font-weight: 500; color: var(--text-disabled); }
.header__breadcrumb-current { font-size: 14px; font-weight: 600; color: var(--text-primary); }

@media (max-width: 767px) {
  .header__inner { padding: 0 16px; height: 62px; }
  .header__menu { display: none; }
  .header__logo-mark { width: 30px; height: 24px; }
  .header__logo-text { font-size: 22px; letter-spacing: -1.1px; }
  .header__actions { display: flex; align-items: center; gap: 10px; }

  .header__bell {
    position: relative;
    width: 38px;
    height: 38px;
    border-radius: 6.33px;
    background: var(--bg-brand-light);
    border: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-brand);
  }

  .header__bell:hover {
    border: 1px solid var(--border-brand);
    box-shadow: 0 0 12px rgba(36, 145, 170, 0.35);
  }

  .header__bell-count {
    position: absolute;
    top: -4px;
    right: -4px;
    width: 13px;
    height: 13px;
    border-radius: 6.33px;
    background-color: var(--bg-danger);
    color: var(--text-white);
    font-size: 8px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--bg-card);
  }

  .header__avatar-wrap {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid var(--bg-brand);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-brand-light);
    color: var(--text-brand);
    font-size: 12px;
    font-weight: 600;
  }

  .header__assistenza { display: none; }
  .header__bottom { display: none; }
}
</style>