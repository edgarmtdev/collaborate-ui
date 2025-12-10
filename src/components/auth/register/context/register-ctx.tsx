import { registerService } from '@/services/auth'
import { useRouter } from 'next/router'
import React, { createContext, useContext, useEffect, useState } from 'react'

type RegisterData = {
  email: string
  name: string
  lastname: string
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
  success?: boolean
  message?: string | null
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
    lastname: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3

  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean>(false)
  const [message, setMessage] = useState<string | null>(null)
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

    if (currentStep === 3 && (!registerData.password || !registerData.confirmPassword || registerData.password !== registerData.confirmPassword)) {
      setError('Please, enter your password and confirm it correctly.')
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (currentStep < totalSteps) {
      return
    }

    if (currentStep === 3 && (registerData.password !== registerData.confirmPassword)) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)

    try {
      const signUpData = {
        email: registerData.email,
        name: registerData.name,
        lastname: registerData.lastname,
        username: registerData.username,
        password: registerData.password
      }

      const response = await registerService(signUpData)
      console.log("🚀 ~ handleSubmit ~ response:", response)

      if (!response.success) {
        setError(response.message || 'Registration failed. Please try again.')
        setLoading(false)
        return
      }

      setSuccess(true)
      setMessage(response.message || 'Registration successful! Please check your email to verify your account.')
    } catch (error) {
      const errorMessage = error instanceof Error ? JSON.parse(error.message) : null
      if (errorMessage && errorMessage.message) {
        setError(errorMessage.message)
      } else {
        setError('Registration failed. Please try again later.')
      }
    } finally {
      setLoading(false)
    }
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
    success,
    message,
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
