import { ThemeColorsNames } from '@/constants/theme'
import { ThemeColors } from '@/types/theme'

export const getSavedThemeColor = (): ThemeColors => {
  if (typeof window === 'undefined') return ThemeColorsNames.Blue

  try {
    return (
      (localStorage.getItem('themeColor') as ThemeColors) ||
      ThemeColorsNames.Blue
    )
  } catch (error) {
    console.error('Error accessing localStorage:', error)
    return ThemeColorsNames.Blue
  }
}
