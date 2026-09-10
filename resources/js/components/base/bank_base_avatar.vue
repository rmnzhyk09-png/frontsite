<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name: string
  avatar?: string | null
  size?: 'sm' | 'md' | 'lg'
}>()

const initials = computed(() => {
  return props.name
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})

const sizeClass = computed(() => `avatar--${props.size || 'md'}`)
</script>

<template>
  <div :class="['avatar', sizeClass]" :aria-label="`Аватар ${name}`">
    <img
      v-if="avatar"
      :src="avatar"
      :alt="name"
      class="avatar__img"
    />
    <span v-else class="avatar__initials">{{ initials }}</span>
  </div>
</template>

<style scoped>
.avatar {
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--c-primary), var(--c-primary-dark));
  flex-shrink: 0;
  overflow: hidden;
}

.avatar--sm {
  width: 32px;
  height: 32px;
}

.avatar--md {
  width: 40px;
  height: 40px;
}

.avatar--lg {
  width: 56px;
  height: 56px;
}

.avatar__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar__initials {
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  user-select: none;
}

.avatar--sm .avatar__initials {
  font-size: 12px;
}

.avatar--md .avatar__initials {
  font-size: 14px;
}

.avatar--lg .avatar__initials {
  font-size: 20px;
}
</style>
