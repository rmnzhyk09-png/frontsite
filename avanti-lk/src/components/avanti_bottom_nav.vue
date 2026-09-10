<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  {
    key: 'home',
    label: 'Home',
    path: '/',
    icon: 'home',
  },
  {
    key: 'documents',
    label: 'Documenti',
    path: '/documenti',
    icon: 'doc',
  },
  {
    key: 'profile',
    label: 'Profilo',
    path: '/profile',
    icon: 'user',
  },
]

function isActive(item) {
  return route.path === item.path
}
</script>

<template>
  <nav class="avanti-bottom-nav" aria-label="Main navigation">
    <router-link
      v-for="item in navItems"
      :key="item.key"
      :to="item.path"
      class="avanti-bottom-nav__item"
      :class="{ 'avanti-bottom-nav__item--active': isActive(item) }"
    >
      <svg class="avanti-bottom-nav__icon" width="20" height="20" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round">
        <path v-if="item.icon === 'home'" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <rect v-if="item.icon === 'doc'" x="2" y="3" width="20" height="18" rx="2" />
        <path v-if="item.icon === 'doc'" d="M12 3v6l3-2 3 2V3" />
        <path v-if="item.icon === 'user'" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle v-if="item.icon === 'user'" cx="12" cy="7" r="4" />
      </svg>
      <span class="avanti-bottom-nav__label">{{ item.label }}</span>
    </router-link>

    <button type="button" class="avanti-bottom-nav__cta">
      <svg class="avanti-bottom-nav__icon" width="16" height="16" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      <span class="avanti-bottom-nav__cta-label">Assistenza</span>
    </button>
  </nav>
</template>

<style scoped>
.avanti-bottom-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 8px 12px;
  background-color: var(--avanti-white);
  border-top: 1px solid var(--avanti-border);
}

.avanti-bottom-nav__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex: 1;
  padding: 8px;
  border-radius: 8px;
  color: var(--avanti-text-dark);
  font-size: 11px;
  font-weight: 500;
}

.avanti-bottom-nav__item--active {
  background-color: var(--avanti-info-bg);
  color: var(--avanti-primary);
  font-weight: 600;
}

.avanti-bottom-nav__icon {
  display: block;
}

.avanti-bottom-nav__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 12px 14px;
  background-color: var(--avanti-primary);
  color: var(--avanti-white);
  border: none;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  flex-shrink: 0;
}

.avanti-bottom-nav__label {
  white-space: nowrap;
}

.avanti-bottom-nav__cta-label {
  white-space: nowrap;
}

@media (min-width: 769px) {
  .avanti-bottom-nav {
    display: none;
  }
}
</style>