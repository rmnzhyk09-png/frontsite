<script setup>
import AvantiFormRow from '@/components/avanti_form_row.vue'
import AvantiButtonOutline from '@/components/avanti_button_outline.vue'
import AvantiCard from '@/components/avanti_card.vue'

defineProps({
  title: {
    type: String,
    default: 'Dati personali',
  },
  editLabel: {
    type: String,
    default: 'Modifica nome',
  },
  rows: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['edit'])

function onEdit() {
  emit('edit')
}
</script>

<template>
  <avanti-card class="avanti-profile-card">
    <div class="avanti-profile-card__head">
      <h2 class="avanti-profile-card__title">{{ title }}</h2>
      <avanti-button-outline size="sm" :text="editLabel" @click="onEdit" />
    </div>
    <div class="avanti-profile-card__body">
      <avanti-form-row
        v-for="row in rows"
        :key="row.label"
        :label="row.label"
        :value="row.value"
        :strong="row.strong"
      />
    </div>
    <slot name="extra" />
  </avanti-card>
</template>

<style scoped>
.avanti-profile-card {
  width: 100%;
}

.avanti-profile-card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
}

.avanti-profile-card__title {
  font-size: 15px;
  font-weight: 600;
  color: var(--avanti-text-dark);
}

.avanti-profile-card__body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media (max-width: 768px) {
  .avanti-profile-card {
    padding: 16px;
  }
}
</style>