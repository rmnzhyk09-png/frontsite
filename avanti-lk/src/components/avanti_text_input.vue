<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:value'])
const showPassword = ref(false)

const passwordAriaLabel = computed(() =>
  showPassword.value ? 'Hide password' : 'Show password'
)

function onInput(event) {
  emit('update:value', event.target.value)
}

function togglePassword() {
  showPassword.value = !showPassword.value
}

function getInputType() {
  if (type === 'password') {
    return showPassword.value ? 'text' : 'password'
  }
  return type
}
</script>

<template>
  <div class="avanti-text-input">
    <label v-if="label" :for="id" class="avanti-text-input__label">
      {{ label }}
    </label>
    <div class="avanti-text-input__wrap">
      <input
        :id="id"
        :value="value"
        :type="getInputType()"
        :placeholder="placeholder"
        :disabled="disabled"
        class="avanti-text-input__field"
        @input="onInput"
      />
      <button
        v-if="type === 'password'"
        type="button"
        class="avanti-text-input__eye"
        :aria-label="passwordAriaLabel"
        @click="togglePassword"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.avanti-text-input {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.avanti-text-input__label {
  font-size: 14px;
  font-weight: 400;
  color: var(--avanti-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.avanti-text-input__wrap {
  position: relative;
}

.avanti-text-input__field {
  width: 100%;
  height: 50px;
  padding: 12px 14px;
  background-color: var(--avanti-white);
  border: 1px solid var(--avanti-border-input);
  border-radius: var(--avanti-radius-btn);
  font-size: 15px;
  color: var(--avanti-text-dark);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.avanti-text-input__field:focus {
  outline: none;
  border-color: var(--avanti-primary);
  box-shadow: 0 0 0 3px rgba(36, 145, 170, 0.15);
}

.avanti-text-input__field:disabled {
  background-color: var(--avanti-disabled-bg);
  cursor: not-allowed;
}

.avanti-text-input__eye {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: var(--avanti-muted);
}

.avanti-text-input__eye:hover {
  color: var(--avanti-primary);
}
</style>