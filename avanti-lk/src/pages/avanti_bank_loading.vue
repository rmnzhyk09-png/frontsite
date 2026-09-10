<script setup>
import { useRouter } from 'vue-router'
import AvantiBankProgress from '@/components/avanti_bank_progress.vue'
import AvantiBankCard from '@/components/avanti_bank_card.vue'
import AvantiButton from '@/components/avanti_button.vue'
import AvantiButtonOutline from '@/components/avanti_button_outline.vue'
import { useBankLoading } from '@/composables/avanti_useBankLoading'

const router = useRouter()
const { banks, percent, countLabel, finished, statusRows, start } = useBankLoading()

start()

function goBack() {
  router.push('/')
}

function goNext() {
  router.push('/iban')
}
</script>

<template>
  <div class="avanti-loading">
    <header class="avanti-loading__brand">
      <span class="avanti-loading__logo" aria-hidden="true">
        <svg width="28" height="32" viewBox="0 0 24 27" fill="none">
          <path d="M12 1 4 26h3.6L12 12.4 16.4 26H20L12 1Z" fill="var(--avanti-primary)" />
        </svg>
      </span>
      <span class="avanti-loading__word">Avanti</span>
    </header>

    <main class="avanti-loading__body">
      <section class="avanti-loading__title">
        <p class="avanti-loading__eyebrow">Analisi in corso</p>
        <h1 class="avanti-loading__heading">Confronto con le banche partner</h1>
        <p class="avanti-loading__sub">Scoring invisibile: nessuna traccia nella tua storia creditizia.</p>
      </section>

      <avanti-bank-progress
        :percent="percent"
        :count-label="countLabel"
        :status-rows="statusRows"
      />

      <section class="avanti-loading__grid">
        <avanti-bank-card
          v-for="bank in banks"
          :key="bank.name"
          :name="bank.name"
          :status="bank.status"
        />
      </section>

      <footer class="avanti-loading__footer">
        <avanti-button-outline size="lg" class="avanti-loading__back" @click="goBack">
          <template #icon>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </template>
          Indietro
        </avanti-button-outline>
        <avanti-button
          size="lg"
          class="avanti-loading__next"
          :disabled="!finished"
          @click="goNext"
        >
          Avvia la verifica
          <template #after>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </template>
        </avanti-button>
      </footer>
    </main>
  </div>
</template>

<style scoped>
.avanti-loading {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--avanti-bg);
}

.avanti-loading__brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 29px 0;
  background-color: var(--avanti-white);
  border-bottom: 1px solid rgba(36, 145, 170, 0.4);
  flex-shrink: 0;
}

.avanti-loading__word {
  font-size: 44px;
  font-weight: 700;
  letter-spacing: -2.2px;
  color: var(--avanti-near-black);
  transform: translateY(-8px);
}

.avanti-loading__logo {
  display: inline-flex;
  align-items: center;
}

.avanti-loading__body {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 100px 0 100px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.avanti-loading__title {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
}

.avanti-loading__eyebrow {
  font-size: 20px;
  color: var(--avanti-muted-3);
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

.avanti-loading__heading {
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--avanti-near-black);
}

.avanti-loading__sub {
  font-size: 20px;
  letter-spacing: 0.8px;
  color: var(--avanti-muted-3);
}

.avanti-loading__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 12px;
}

.avanti-loading__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  padding: 40px 0 48px;
  margin-top: auto;
}

.avanti-loading__back,
.avanti-loading__next {
  width: 294px;
}

@media (max-width: 1024px) {
  .avanti-loading__body {
    padding: 40px 48px 0 48px;
  }

  .avanti-loading__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .avanti-loading__brand {
    padding: 18px 16px;
    justify-content: flex-start;
  }

  .avanti-loading__word {
    font-size: 28px;
    transform: translateY(-5px);
  }

  .avanti-loading__logo svg {
    width: 20px;
    height: 24px;
  }

  .avanti-loading__body {
    padding: 24px 16px 16px 16px;
  }

  .avanti-loading__title {
    gap: 8px;
    margin-bottom: 24px;
  }

  .avanti-loading__eyebrow,
  .avanti-loading__sub {
    font-size: 14px;
    letter-spacing: 0.5px;
  }

  .avanti-loading__heading {
    font-size: 20px;
  }

  .avanti-loading__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .avanti-loading__footer {
    flex-direction: column-reverse;
    gap: 12px;
    padding: 24px 0 32px;
  }

  .avanti-loading__back,
  .avanti-loading__next {
    width: 100%;
  }
}
</style>