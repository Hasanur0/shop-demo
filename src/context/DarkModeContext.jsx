import { createContext, useContext, useEffect } from 'react'
import { useLocalStorageState } from '../hooks/useLocalStorageState'

const DarkModeContext = createContext()

function DarkModeProvider({ children }) {
  // Get initial value from localStorage or system preference
  const getInitialDarkMode = () => {
    const stored = localStorage.getItem('isDarkMode')
    if (stored !== null) {
      return JSON.parse(stored)
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const [darkMode, setDarkMode] = useLocalStorageState(
    getInitialDarkMode(),
    'isDarkMode'
  )

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  useEffect(() => {
    // Apply dark mode class whenever darkMode changes
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Set initial state on mount to prevent flash
  useEffect(() => {
    const initialDark = getInitialDarkMode()
    if (initialDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

function useDarkMode() {
  const context = useContext(DarkModeContext)

  if (context === undefined)
    throw new Error('DarkModeContext was used outside of DarkModeProvider')
  return context
}

export { useDarkMode, DarkModeProvider }
