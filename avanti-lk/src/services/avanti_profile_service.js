import { apiClient } from '@/api/avanti_api_client'

export const PROFILE_STORAGE_KEY = 'avanti_profile'

export const DEFAULT_PROFILE = {
  cognome: 'Rossi',
  nome: 'Marco',
  email: 'ikoei@09gmail.com',
  emailVerified: false,
  amount: '12 000',
  iban: '',
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function readStore() {
  const raw = localStorage.getItem(PROFILE_STORAGE_KEY)
  return raw ? JSON.parse(raw) : null
}

function writeStore(profile) {
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile))
  return profile
}

function currentProfile() {
  return readStore() || { ...DEFAULT_PROFILE }
}

async function withFallback(realCall, fallback) {
  try {
    return await realCall()
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn(`[avanti] API недоступен (${error.message}), использую локальный fallback`)
    }
    return fallback()
  }
}

export async function fetchProfile() {
  return withFallback(
    () => apiClient.get('/profile'),
    async () => {
      await delay(300)
      return currentProfile()
    },
  )
}

export async function updateEmail(email) {
  return withFallback(
    () => apiClient.patch('/profile/email', { email }),
    async () => {
      await delay(400)
      return writeStore({ ...currentProfile(), email })
    },
  )
}

export async function updateName(nome) {
  return withFallback(
    () => apiClient.patch('/profile/name', { nome }),
    async () => {
      await delay(400)
      return writeStore({ ...currentProfile(), nome })
    },
  )
}

export async function verifyEmail() {
  return withFallback(
    () => apiClient.post('/profile/email/verify'),
    async () => {
      await delay(700)
      return writeStore({ ...currentProfile(), emailVerified: true })
    },
  )
}

export async function updatePassword(currentPassword, newPassword) {
  return withFallback(
    () => apiClient.patch('/profile/password', { currentPassword, newPassword }),
    async () => {
      await delay(400)
      return currentProfile()
    },
  )
}

export async function saveIban(iban) {
  return withFallback(
    () => apiClient.post('/profile/iban', { iban }),
    async () => {
      await delay(500)
      return writeStore({ ...currentProfile(), iban })
    },
  )
}