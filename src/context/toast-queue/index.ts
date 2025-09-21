import { createContext } from 'react'

interface ToastQueueContextType {
  showToast: (message: string, type?: 'success' | 'error') => void
}

export const ToastQueueContext = createContext<ToastQueueContextType | undefined>(undefined)
