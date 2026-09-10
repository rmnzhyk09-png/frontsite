import { ref, computed, onScopeDispose } from 'vue'

const BANK_NAMES = [
  'BNP Paribas',
  'Société Générale',
  'Crédit Agricole',
  'Santander',
  'HSBC',
  'Revolut',
  'ING',
  'BBVA',
  'UniCredit',
  'Intesa Sanpaolo',
  'Commerzbank',
  'Barclays',
]

const INITIAL = [
  { name: BANK_NAMES[0], status: 'Verificata' },
  { name: BANK_NAMES[1], status: 'Verificata' },
  { name: BANK_NAMES[2], status: 'Verificata' },
  { name: BANK_NAMES[3], status: 'Verificata' },
  { name: BANK_NAMES[4], status: 'Verificata' },
  { name: BANK_NAMES[5], status: 'Verificata' },
  { name: BANK_NAMES[6], status: 'Verifica in corso' },
  { name: BANK_NAMES[7], status: 'In attesa' },
  { name: BANK_NAMES[8], status: 'In attesa' },
  { name: BANK_NAMES[9], status: 'In attesa' },
  { name: BANK_NAMES[10], status: 'In attesa' },
  { name: BANK_NAMES[11], status: 'In attesa' },
]

let timer = null
let runningId = 0

function stopTimer() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

function clone() {
  return INITIAL.map((bank) => ({ ...bank }))
}

export function useBankLoading() {
  const instanceId = ++runningId

  function isOwner() {
    return timer !== null && timer._owner === instanceId
  }

  const banks = ref(clone())
  const running = ref(true)

  const tray = computed(() => {
    const done = banks.value.filter((b) => b.status.includes('Verificat')).length
    const middle = banks.value.filter((b) => b.status === 'Verifica in corso').length
    return { done, middle }
  })

  const percent = computed(() => {
    if (!banks.value.length) return 0
    return Math.round((tray.value.done / banks.value.length) * 100)
  })

  const countLabel = computed(() => `${tray.value.done} / ${banks.value.length}`)

  const finished = computed(() => tray.value.done === banks.value.length)

  const statusRows = computed(() => [
    { label: 'Invio della richiesta', status: 'Verificata' },
    {
      label: 'Scoring invisibile',
      status: finished.value ? 'Verificata' : 'In attesa',
    },
  ])

  function advance() {
    const list = banks.value.map((bank) => ({ ...bank }))
    const current = list.findIndex((b) => b.status === 'Verifica in corso')
    const pending = list.findIndex((b) => b.status === 'In attesa')
    let changed = false

    if (current !== -1) {
      list[current].status = 'Verificata'
      changed = true
    }
    if (pending !== -1) {
      list[pending].status = 'Verifica in corso'
      changed = true
    }

    if (!changed) {
      running.value = false
      stopTimer()
      return
    }
    banks.value = list
  }

  function start() {
    if (timer) return
    running.value = true
    timer = setInterval(advance, 1100)
    timer._owner = instanceId
  }

  function reset() {
    stopTimer()
    banks.value = clone()
    running.value = true
  }

  onScopeDispose(() => {
    if (isOwner()) stopTimer()
  })

  return {
    banks,
    running,
    percent,
    countLabel,
    finished,
    statusRows,
    start,
    reset,
  }
}