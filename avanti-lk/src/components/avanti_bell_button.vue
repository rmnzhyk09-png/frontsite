<script setup>
defineProps({
  badge: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <button type="button" class="avanti-bell" aria-label="Notifications">
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
    <span v-if="badge" class="avanti-bell__badge" />
  </button>
</template>

<style scoped>
.avanti-bell {
  position: relative;
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--avanti-info-bg);
  border: none;
  border-radius: 6.33px;
  color: var(--avanti-primary);
  transition: background-color 0.2s ease;
  flex-shrink: 0;
}

.avanti-bell:hover {
  background-color: var(--avanti-info-border);
}

.avanti-bell__badge {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--avanti-danger);
  border: 1.5px solid var(--avanti-white);
}
</style>