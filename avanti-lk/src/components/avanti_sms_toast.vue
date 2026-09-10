<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  message: {
    type: String,
    default: '',
  },
  sender: {
    type: String,
    default: '',
  },
  duration: {
    type: Number,
    default: 5000,
  },
})

const emit = defineEmits(['close'])
const visible = ref(false)

onMounted(() => {
  visible.value = true
  setTimeout(() => {
    visible.value = false
    emit('close')
  }, props.duration)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="avanti-toast">
      <div v-if="visible" class="avanti-toast" role="status">
        <div class="avanti-toast__avatar">
          <span class="avanti-toast__avatar-img">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z" />
            </svg>
          </span>
          <span class="avanti-toast__dot" />
        </div>
        <div class="avanti-toast__text">
          <p v-if="sender" class="avanti-toast__sender">{{ sender }}</p>
          <p class="avanti-toast__message">{{ message }}</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.avanti-toast {
  display: flex;
  align-items: center;
  gap: 10px;
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 300;
  width: 280px;
  padding: 16px;
  background-color: var(--avanti-primary);
  border-radius: 16px;
  box-shadow: var(--avanti-shadow-md);
  color: var(--avanti-white);
}

.avanti-toast__avatar {
  position: relative;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
}

.avanti-toast__avatar-img {
  width: 60px;
  height: 60px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.15);
  color: var(--avanti-white);
}

.avanti-toast__dot {
  position: absolute;
  right: 2px;
  bottom: 2px;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: var(--avanti-primary);
  border: 2px solid var(--avanti-white);
}

.avanti-toast__text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.avanti-toast__sender {
  font-size: 14px;
  font-weight: 600;
}

.avanti-toast__message {
  font-size: 14px;
  line-height: 1.4;
}

.avanti-toast-enter-active,
.avanti-toast-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.avanti-toast-enter-from,
.avanti-toast-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>