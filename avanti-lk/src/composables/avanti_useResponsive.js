import { ref, onMounted, onUnmounted, computed } from 'vue'

const MOBILE_BREAKPOINT = 768

function useResponsive() {
  const width = ref(typeof window !== 'undefined' ? window.innerWidth : 1440)
  const isMobile = computed(() => width.value <= MOBILE_BREAKPOINT)
  const isDesktop = computed(() => width.value > MOBILE_BREAKPOINT)

  function handleResize() {
    width.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return { width, isMobile, isDesktop }
}

export { useResponsive, MOBILE_BREAKPOINT }