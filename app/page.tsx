'use client'

import { ThemeColorToggler } from '@/components/theme-color-toggler'
import { ThemeModeToggler } from '@/components/theme-mode-toggler'
import { ThemeRadiusToggler } from '@/components/theme-radius-toggler'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-4">
        <ThemeModeToggler />
        <ThemeColorToggler />
        <ThemeRadiusToggler />
      </div>

      <div>
        <Button>This is a dynamic theme btn</Button>
      </div>
    </div>
  )
}
