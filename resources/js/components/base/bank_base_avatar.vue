<script setup lang="ts">
defineProps<{
  name: string
  avatar?: string | null
  size?: 'sm' | 'md'
}>()

const initials = (name: string) => name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
</script>

<template>
  <div :class="['avatar', `avatar--${size || 'md'}`]" :aria-label="`Аватар ${name}`">
    <img v-if="avatar" :src="avatar" :alt="name" class="avatar__img" />
    <span v-else class="avatar__initials">{{ initials(name) }}</span>
  </div>
</template>

<style scoped>
.avatar {
  border-radius: var(--radius-circle);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-brand-light);
  border: 1px solid var(--border-default);
  flex-shrink: 0;
  overflow: hidden;
}
.avatar--sm { width: 32px; height: 32px; }
.avatar--md { width: 40px; height: 40px; }
.avatar__img { width: 100%; height: 100%; object-fit: cover; }
.avatar__initials {
  color: var(--text-primary);
  font-family: var(--font-main);
  font-weight: 600;
  user-select: none;
}
.avatar--sm .avatar__initials { font-size: 12px; }
.avatar--md .avatar__initials { font-size: 14px; }
</style>
