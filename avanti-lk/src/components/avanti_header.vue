<script setup>
import { useRouter } from 'vue-router'
import AvantiAvatar from '@/components/avanti_avatar.vue'
import AvantiBell from '@/components/avanti_bell_button.vue'

const router = useRouter()

const crumbs = [
  { label: 'Piattaforma', path: '/' },
  { label: 'Home', path: '/' },
]
</script>

<template>
  <header class="avanti-header">
    <div class="avanti-header__top">
      <router-link to="/" class="avanti-header__logo">
        <span class="avanti-header__logo-mark">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2 2 22h20L12 2zm0 6 6 12H6l6-12z" />
          </svg>
        </span>
        <span class="avanti-header__logo-text">Avanti</span>
      </router-link>

      <div class="avanti-header__actions">
        <avanti-bell />
        <router-link to="/profile" class="avanti-header__user">
          <avanti-avatar :initials="'MR'" size="md" variant="outline" />
          <span class="avanti-header__user-info">
            <span class="avanti-header__user-name">Marco Rossi</span>
            <span class="avanti-header__user-email">ikoei@09gmail.com</span>
          </span>
        </router-link>
      </div>
    </div>

    <nav class="avanti-header__nav" aria-label="Breadcrumb">
      <ol class="avanti-header__crumbs">
        <li v-for="(crumb, index) in crumbs" :key="index" class="avanti-header__crumb">
          <router-link
            v-if="index < crumbs.length - 1"
            :to="crumb.path"
            class="avanti-header__crumb-link"
          >
            {{ crumb.label }}
          </router-link>
          <span v-else class="avanti-header__crumb-current">{{ crumb.label }}</span>
          <span v-if="index < crumbs.length - 1" class="avanti-header__crumb-sep">/</span>
        </li>
      </ol>
    </nav>
  </header>
</template>

<style scoped>
.avanti-header {
  width: 100%;
  background-color: var(--avanti-white);
  border-bottom: 1px solid var(--avanti-border);
}

.avanti-header__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  gap: 16px;
}

.avanti-header__logo {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--avanti-text-dark);
}

.avanti-header__logo-mark {
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: var(--avanti-primary);
  color: var(--avanti-white);
}

.avanti-header__logo-text {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -1.1px;
}

.avanti-header__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avanti-header__user {
  display: flex;
  align-items: center;
  gap: 6px;
}

.avanti-header__user-info {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.avanti-header__user-name {
  font-size: 12px;
  font-weight: 600;
  color: var(--avanti-text-dark);
}

.avanti-header__user-email {
  font-size: 10px;
  color: var(--avanti-text-muted);
}

.avanti-header__nav {
  padding: 10px 40px;
  border-top: 1px solid var(--avanti-divider);
}

.avanti-header__crumbs {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 8px;
}

.avanti-header__crumb {
  display: flex;
  align-items: center;
  gap: 8px;
}

.avanti-header__crumb-link {
  font-size: 14px;
  font-weight: 500;
  color: var(--avanti-text-muted);
}

.avanti-header__crumb-sep {
  font-size: 14px;
  font-weight: 500;
  color: var(--avanti-muted-light);
}

.avanti-header__crumb-current {
  font-size: 14px;
  font-weight: 600;
  color: var(--avanti-text-dark);
}

@media (max-width: 768px) {
  .avanti-header__top {
    padding: 14px 16px;
  }

  .avanti-header__nav {
    padding: 10px 16px;
  }

  .avanti-header__user-info {
    display: none;
  }
}
</style>