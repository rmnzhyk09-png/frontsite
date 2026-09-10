export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  avatar: string | null
  role: string
}

export interface Step {
  id: number
  label: string
  status: 'completed' | 'current' | 'pending'
}

export interface PersonalData {
  cognome: string
  nome: string
  email: string
  importoApprovato: string
  tipoDocumento: string
  numeroDocumento: string
  iban: string
}

export interface NavItem {
  id: string
  label: string
  icon: string
  route: string
}

export interface ChecklistItem {
  id: number
  title: string
  status: 'completed' | 'current' | 'pending'
  label: string
}

export type PageName = 'home' | 'documents' | 'profile'
