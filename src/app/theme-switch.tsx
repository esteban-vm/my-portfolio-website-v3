'use client'

import { useTheme } from '@teispace/next-themes'

export function ThemeSwitch() {
  const { theme, resolvedTheme, setTheme } = useTheme()

  return (
    <>
      <p>theme: {theme}</p>
      <p>resolvedTheme: {resolvedTheme}</p>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} type='button'>
        Change
      </button>
    </>
  )
}
