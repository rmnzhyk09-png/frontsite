<script setup>
defineProps({
  initials: {
    type: String,
    default: 'MR',
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value),
  },
  variant: {
    type: String,
    default: 'solid',
    validator: (value) => ['solid', 'outline', 'muted'].includes(value),
  },
})
</script>

<template>
  <div
    class="avanti-avatar"
    :class="[
      `avanti-avatar--${size}`,
      `avanti-avatar--${variant}`,
    ]"
  >
    <span class="avanti-avatar__initials">{{ initials }}</span>
  </div>
</template>

<style scoped>
.avanti-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  font-weight: 600;
  user-select: none;
  line-height: 1;
}

.avanti-avatar__initials {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.avanti-avatar--sm {
  width: 24px;
  height: 24px;
  font-size: 10px;
}

.avanti-avatar--md {
  width: 32px;
  height: 32px;
  font-size: 13px;
}

.avanti-avatar--lg {
  width: 36px;
  height: 36px;
  font-size: 14px;
}

.avanti-avatar--xl {
  width: 60px;
  height: 60px;
  font-size: 22px;
}

.avanti-avatar--solid {
  background-color: var(--avanti-primary);
  color: var(--avanti-white);
  border: 1px solid transparent;
}

.avanti-avatar--outline {
  background-color: var(--avanti-white);
  color: var(--avanti-primary);
  border: 1px solid var(--avanti-primary);
}

.avanti-avatar--muted {
  background-color: var(--avanti-disabled-bg);
  color: var(--avanti-muted);
  border: 1px solid transparent;
}
</style>