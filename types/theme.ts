import { ThemeRadiusValues } from '@/constants/theme'

export type ThemeMode = 'light' | 'dark'

export type ThemeRadius =
  | ThemeRadiusValues.Zero
  | ThemeRadiusValues.ZeroPointThree
  | ThemeRadiusValues.ZeroPointFive
  | ThemeRadiusValues.ZeroPointSevenFive
  | ThemeRadiusValues.One

export type ThemeColors =
  | 'Zinc'
  | 'Red'
  | 'Rose'
  | 'Orange'
  | 'Green'
  | 'Blue'
  | 'Yellow'
  | 'Violet'

export interface ThemeColorStateParams {
  themeColor: ThemeColors
  setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>
  themeRadius: ThemeRadius
  setThemeRadius: React.Dispatch<React.SetStateAction<ThemeRadius>>
}
