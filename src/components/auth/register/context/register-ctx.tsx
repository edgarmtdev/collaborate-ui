import React, { createContext, use, useContext, useEffect, useState } from 'react'

type RegisterData = {
  email: string
  name: string
  username: string
  password: string
  confirmPassword: string
}

export type RegisterContextType = {
  registerData: RegisterData,
  setRegisterData: React.Dispatch<React.SetStateAction<RegisterData>>,
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error: string | null
  loading: boolean
  currentStep: number
  handleNextStep: () => void
  handlePrevStep: () => void
  totalSteps: number
}

export const RegisterContext = createContext<RegisterContextType | null>(null)

export const RegisterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [registerData, setRegisterData] = useState({
    email: '',
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleNextStep = () => {
    if (currentStep === 1 && !registerData.email) {
      setError('Please, enter your email.')
      return
    }
    if (currentStep === 2 && (!registerData.name || !registerData.username)) {
      setError('Please, enter your name and username.')
      return
    }

    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null)
      }, 1500)
    }
  }, [error])

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('🚀 handleSubmit ejecutado en el paso:', currentStep)

    if (currentStep < totalSteps) {
      console.log('⛔ Bloqueando envío, aún no estamos en el último paso.')
      return
    }

    console.log('✅ Formulario enviado:', registerData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRegisterData((prev) => ({ ...prev, [name]: value }))
  }

  const value = {
    registerData,
    setRegisterData,
    handleSubmit,
    handleChange,
    error,
    loading,
    currentStep,
    handleNextStep,
    handlePrevStep,
    totalSteps
  }

  return (
    <RegisterContext.Provider value={value}>
      {children}
    </RegisterContext.Provider>
  )
}

export const useRegisterContext = () => {
  const context = useContext(RegisterContext)
  if (!context) {
    throw new Error('useRegisterContext must be used within a RegisterProvider')
  }
  return context
}
