'use client'

import * as React from 'react'
import { useThemeContext } from '@/providers/colors-theme-provider'
import { useTheme } from 'next-themes'

import { ThemeColors } from '@/types/theme'
import { cn } from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const availableThemeColors = [
  { name: 'Zinc', light: 'bg-zinc-900', dark: 'bg-zinc-100' },
  { name: 'Red', light: 'bg-red-600', dark: 'bg-red-600' },
  { name: 'Rose', light: 'bg-rose-600', dark: 'bg-rose-700' },
  { name: 'Orange', light: 'bg-orange-500', dark: 'bg-orange-700' },
  { name: 'Green', light: 'bg-green-600', dark: 'bg-green-500' },
  { name: 'Blue', light: 'bg-blue-600', dark: 'bg-blue-500' },
  { name: 'Yellow', light: 'bg-yellow-400', dark: 'bg-yellow-500' },
  { name: 'Violet', light: 'bg-violet-600', dark: 'bg-violet-700' },
]

export function ThemeColorToggler() {
  const { themeColor, setThemeColor } = useThemeContext()
  const { theme } = useTheme()

  const createSelectItems = () => {
    return availableThemeColors.map(({ name, light, dark }) => (
      <SelectItem key={name} value={name}>
        <div className="flex item-center space-x-3">
          <div
            className={cn(
              'rounded-full',
              'w-[20px]',
              'h-[20px]',
              theme === 'light' ? light : dark,
            )}
          ></div>
          <div className="text-sm">{name}</div>
        </div>
      </SelectItem>
    ))
  }

  return (
    <Select
      onValueChange={(value) => setThemeColor(value as ThemeColors)}
      defaultValue={themeColor}
    >
      <SelectTrigger className="w-[180px] ring-offset-transparent focus:ring-transparent">
        <SelectValue placeholder="Select Color" />
      </SelectTrigger>
      <SelectContent className="border-muted">
        {createSelectItems()}
      </SelectContent>
    </Select>
  )
}
