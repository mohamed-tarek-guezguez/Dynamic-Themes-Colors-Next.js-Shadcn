'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useTheme, type ThemeProviderProps } from 'next-themes'

import { ThemeColors, ThemeColorStateParams, ThemeRadius } from '@/types/theme'
import setGlobalColorTheme from '@/lib/global-color-theme'
import { useMounted } from '@/hooks/use-mounted'
import { getSavedThemeColor } from '@/lib/get-saved-theme-color'
import { getSavedThemeRadius } from '@/lib/get-saved-theme-radius'

const ThemeContext = createContext<ThemeColorStateParams>(
  {} as ThemeColorStateParams,
)

export default function ColorsThemeProvider({ children }: ThemeProviderProps) {
  const isMounted = useMounted()
  const { resolvedTheme: theme } = useTheme()

  const [themeColor, setThemeColor] =
    useState<ThemeColors>(getSavedThemeColor())
  const [themeRadius, setThemeRadius] = useState<ThemeRadius>(
    getSavedThemeRadius(),
  )

  useEffect(() => {
    if (!isMounted) return

    try {
      localStorage.setItem('theme', theme as 'light' | 'dark')
      localStorage.setItem('themeColor', themeColor)
      localStorage.setItem('themeRadius', String(themeRadius))
      setGlobalColorTheme(theme as 'light' | 'dark', themeColor, themeRadius)
    } catch (error) {
      console.error('Error saving themeColor to localStorage:', error)
    }
  }, [isMounted, theme, themeColor, themeRadius])

  if (!isMounted) {
    return null
  }

  return (
    <ThemeContext.Provider
      value={{
        themeColor,
        setThemeColor,
        themeRadius,
        setThemeRadius,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext(): ThemeColorStateParams {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useThemeContext must be used within a ColorsThemeProvider')
  }

  return context
}
