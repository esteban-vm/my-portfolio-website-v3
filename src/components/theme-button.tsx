'use client'

import { useTheme } from '@teispace/next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'

export function ThemeButton() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className='action-button'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      title='Cambiar tema'
      type='button'
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  )
}
