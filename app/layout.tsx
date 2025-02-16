import '@/styles/globals.css'

import { Inter } from 'next/font/google'
import ColorsThemeProvider from '@/providers/colors-theme-provider'
import { ThemeProvider } from '@/providers/theme-provider'

import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Readonly<Props>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={cn(
          'w-full min-h-svh relative bg-background antialiased',
          inter.className,
        )}
      >
        <ThemeProvider>
          <ColorsThemeProvider>{children}</ColorsThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
