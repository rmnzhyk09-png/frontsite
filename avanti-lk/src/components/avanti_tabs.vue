<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
})

const emit = defineEmits(['update:modelValue'])

function onSelect(value) {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="avanti-tabs" role="tablist">
    <button
      v-for="item in items"
      :key="item.value"
      type="button"
      role="tab"
      :aria-selected="modelValue === item.value"
      class="avanti-tabs__tab"
      :class="{ 'avanti-tabs__tab--active': modelValue === item.value }"
      @click="onSelect(item.value)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<style scoped>
.avanti-tabs {
  display: flex;
  width: 100%;
  border-radius: var(--avanti-radius-btn);
  overflow: hidden;
}

.avanti-tabs__tab {
  flex: 1;
  padding: 13px 16px;
  font-size: 16px;
  font-weight: 500;
  background-color: var(--avanti-bg);
  color: var(--avanti-primary);
  border: 1px solid var(--avanti-primary);
  transition: background-color 0.2s ease, color 0.2s ease;
}

.avanti-tabs__tab + .avanti-tabs__tab {
  border-left: none;
}

.avanti-tabs__tab--active {
  background-color: var(--avanti-primary);
  color: var(--avanti-text-light);
}
</style>