<script setup>
import AvantiHeader from '@/components/avanti_header.vue'
import AvantiBottomNav from '@/components/avanti_bottom_nav.vue'
</script>

<template>
  <div class="avanti-app">
    <avanti-header />
    <main class="avanti-app__main">
      <router-view />
    </main>
    <avanti-bottom-nav />
  </div>
</template>

<style scoped>
.avanti-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--avanti-bg);
}

.avanti-app__main {
  flex: 1;
}

@media (max-width: 768px) {
  .avanti-app {
    padding-bottom: 62px;
  }
}
</style>