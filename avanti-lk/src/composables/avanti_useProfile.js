import { ref, onMounted } from 'vue'
import {
  fetchProfile,
  updateEmail,
  updateName,
  verifyEmail,
  updatePassword,
  saveIban,
} from '@/services/avanti_profile_service'

const profile = ref(null)
const loading = ref(false)
const saving = ref(false)
const error = ref('')
let loaded = false

async function load() {
  loading.value = true
  error.value = ''
  try {
    profile.value = await fetchProfile()
    loaded = true
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

async function changeEmail(email) {
  return runSaving(() => updateEmail(email))
}

async function changeName(nome) {
  return runSaving(() => updateName(nome))
}

async function doVerifyEmail() {
  return runSaving(() => verifyEmail())
}

async function changePassword(currentPassword, newPassword) {
  return runSaving(() => updatePassword(currentPassword, newPassword))
}

async function setIban(iban) {
  return runSaving(() => saveIban(iban))
}

async function runSaving(task) {
  saving.value = true
  error.value = ''
  try {
    profile.value = await task()
    return true
  } catch (err) {
    error.value = err.message
    return false
  } finally {
    saving.value = false
  }
}

export function useProfile() {
  onMounted(() => {
    if (!loaded) {
      load()
    }
  })

  return {
    profile,
    loading,
    saving,
    error,
    load,
    changeEmail,
    changeName,
    doVerifyEmail,
    changePassword,
    setIban,
  }
}