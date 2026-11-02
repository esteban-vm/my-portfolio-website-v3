'use client'

import type { GlassAppearancePreference } from 'open-glass-ui'
import type { ReactNode } from 'react'
import { useTheme } from '@teispace/next-themes'
import { GlassProvider, GlassThemeProvider } from 'open-glass-ui'

export function GlassProviders({ children }: { children: ReactNode }) {
  const { theme } = useTheme()

  return (
    <GlassProvider motion='system' quality='auto' renderer='auto'>
      <GlassThemeProvider
        appearance={theme as GlassAppearancePreference}
        className='relative mx-auto flex min-h-full w-full max-w-7xl flex-col px-2 font-geist'
        theme={{ preset: 'teal', contrast: 'high', radius: 'balanced' }}
      >
        {children}
      </GlassThemeProvider>
    </GlassProvider>
  )
}
