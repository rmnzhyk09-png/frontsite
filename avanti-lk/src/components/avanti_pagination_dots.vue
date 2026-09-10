<script setup>
defineProps({
  total: {
    type: Number,
    default: 5,
  },
  active: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div class="avanti-pagination" role="tablist" :aria-label="`Page ${active + 1} of ${total}`">
    <span
      v-for="index in total"
      :key="index"
      class="avanti-pagination__dot"
      :class="{
        'avanti-pagination__dot--active': index - 1 === active,
        'avanti-pagination__dot--inactive': index - 1 > active,
      }"
    />
  </div>
</template>

<style scoped>
.avanti-pagination {
  display: flex;
  align-items: center;
  gap: 4px;
}

.avanti-pagination__dot {
  width: 62px;
  height: 4px;
  border-radius: var(--avanti-radius-pill);
  background-color: var(--avanti-primary);
}

.avanti-pagination__dot--inactive {
  background-color: var(--avanti-border);
}
</style>