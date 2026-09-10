<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: '',
  },
  strong: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="avanti-form-row">
    <span class="avanti-form-row__label">{{ label }}</span>
    <span class="avanti-form-row__value" :class="{ 'avanti-form-row__value--strong': strong }">
      <slot>{{ value }}</slot>
    </span>
  </div>
</template>

<style scoped>
.avanti-form-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
}

.avanti-form-row__label {
  font-size: 13px;
  font-weight: 400;
  color: var(--avanti-text-muted);
  flex-shrink: 0;
}

.avanti-form-row__value {
  font-size: 13px;
  font-weight: 400;
  color: var(--avanti-text-dark);
  text-align: right;
  word-break: break-word;
}

.avanti-form-row__value--strong {
  font-weight: 600;
}
</style>