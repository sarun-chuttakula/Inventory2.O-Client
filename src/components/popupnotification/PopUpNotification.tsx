// NotificationContext.tsx
import React, { createContext, useContext, ReactNode } from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface NotificationContextProps {
  notifySuccess: (message: string) => void
  notifyError: (message: string) => void
  notifyInfo: (message: string) => void
}

interface NotificationProviderProps {
  children: ReactNode
}

const NotificationContext = createContext<NotificationContextProps | undefined>(
  undefined,
)

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const notifySuccess = (message: string) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 5000,
      transition: Slide,
    })
  }

  const notifyError = (message: string) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: false,
      transition: Slide,
    })
  }

  const notifyInfo = (message: string) => {
    toast.info(message, {
      position: 'top-right',
      autoClose: 3000,
      transition: Slide,
    })
  }

  return (
    <NotificationContext.Provider
      value={{ notifySuccess, notifyError, notifyInfo }}
    >
      {children}
      <ToastContainer />
    </NotificationContext.Provider>
  )
}

export const useNotification = (): NotificationContextProps => {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error(
      'useNotification must be used within a NotificationProvider',
    )
  }
  return context
}
