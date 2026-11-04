'use client'

import { useTheme } from '@teispace/next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'

export function ThemeButton() {
  const { resolvedTheme, theme, setTheme } = useTheme()

  return (
    <button
      className='action-button'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      title='Cambiar tema'
      type='button'
    >
      {resolvedTheme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  )
}
