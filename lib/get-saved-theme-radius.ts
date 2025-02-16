import { ThemeRadiusValues } from '@/constants/theme'
import { ThemeRadius } from '@/types/theme'

export const getSavedThemeRadius = (): ThemeRadius => {
  if (typeof window === 'undefined') return ThemeRadiusValues.ZeroPointFive

  try {
    return (
      (Number(localStorage.getItem('themeRadius')) as ThemeRadius) ||
      ThemeRadiusValues.ZeroPointFive
    )
  } catch (error) {
    console.error('Error accessing localStorage:', error)
    return ThemeRadiusValues.ZeroPointFive
  }
}
