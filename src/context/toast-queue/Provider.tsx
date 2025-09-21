'use client'

import { Toast } from '@/components/ui'
import { useContext, useState } from 'react'
import { ToastQueueContext } from '.'

export function ToastQueueProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Array<{ message: string; type: 'success' | 'error' }>>([])

  const showToast = (message: string, type?: 'success' | 'error') => {
    setToasts((prev) => [...prev, { message, type: type || 'error' }])
  }

  const handleToastClose = (index: number) => {
    setToasts((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <ToastQueueContext.Provider value={{ showToast }}>
      {children}
      <Toast.Provider>
        {toasts.map((toast, index) => (
          <Toast.Root
            key={index}
            title={toast.message}
            open={true}
            onOpenChange={() => { }}
            onClose={() => handleToastClose(index)}
            type={toast.type}
            duration={3000}
          />
        ))}
      </Toast.Provider>
    </ToastQueueContext.Provider>
  )
}

export function useToastQueue() {
  const context = useContext(ToastQueueContext)
  if (!context) {
    throw new Error('useToastQueue must be used within a ToastQueueProvider')
  }
  return context
}
