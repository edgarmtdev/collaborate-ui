import React, { createContext, useContext } from 'react'

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
  currentStep: number
  handleNextStep: () => void
  handlePrevStep: () => void
  totalSteps: number
}

export const RegisterContext = createContext<RegisterContextType | null>(null)

export const RegisterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [registerData, setRegisterData] = React.useState({
    email: '',
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const [currentStep, setCurrentStep] = React.useState(1)
  const totalSteps = 3

  const handleNextStep = () => {
    if (currentStep === 1 && !registerData.email) {
      alert('Por favor, introduce tu correo electrónico.')
      return
    }
    if (currentStep === 2 && (!registerData.name || !registerData.username)) {
      alert('Por favor, introduce tu nombre y nombre de usuario.')
      return
    }

    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1)
    }
  }

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
