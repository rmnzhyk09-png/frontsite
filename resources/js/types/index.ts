export interface User {
  id: number
  name: string
  email: string
  phone: string
  avatar: string | null
}

export interface Account {
  id: number
  name: string
  number: string
  balance: number
  currency: string
  type: 'debit' | 'credit' | 'savings'
  color: string
  icon: string
}

export interface Transaction {
  id: number
  title: string
  description: string
  amount: number
  currency: string
  type: 'income' | 'expense' | 'transfer'
  status: 'completed' | 'pending' | 'failed'
  date: string
  category: string
  icon: string
  merchant?: string
}

export interface QuickAction {
  id: string
  label: string
  icon: string
  color: string
  route: string
}

export interface Notification {
  id: number
  title: string
  message: string
  read: boolean
  date: string
  type: 'info' | 'warning' | 'success' | 'error'
}

export interface DashboardPageProps {
  user: User
  accounts: Account[]
  transactions: Transaction[]
  quickActions: QuickAction[]
  notifications: Notification[]
  totalBalance: number
  currency: string
}

export type TransactionStatus = 'completed' | 'pending' | 'failed'
export type ToastType = 'success' | 'error' | 'info' | 'warning'
