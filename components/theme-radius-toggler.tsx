'use client'

import * as React from 'react'
import { useThemeContext } from '@/providers/colors-theme-provider'

import { ThemeRadius } from '@/types/theme'
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ThemeRadiusValues } from '@/constants/theme'

export function ThemeRadiusToggler() {
  const { themeRadius, setThemeRadius } = useThemeContext()

  const createSelectItems = () => {
    return Object.values(ThemeRadiusValues)
      .filter((value) => typeof value === 'number')
      .map((value) => (
        <SelectItem key={value} value={String(value)}>
          <div className="flex items-center space-x-3">
            <div className="text-sm">{value}</div>
          </div>
        </SelectItem>
      ))
  }

  return (
    <Select
      onValueChange={(value) => setThemeRadius(Number(value) as ThemeRadius)}
      defaultValue={String(themeRadius)}
    >
      <SelectTrigger className="w-[180px] ring-offset-transparent focus:ring-transparent">
        <SelectValue placeholder="Select Radius" />
      </SelectTrigger>
      <SelectContent className="border-muted">
        {createSelectItems()}
      </SelectContent>
    </Select>
  )
}
