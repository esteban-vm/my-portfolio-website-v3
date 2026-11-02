'use client'

import { useTheme } from '@teispace/next-themes'
import { IconButton } from 'open-glass-ui'
import { FaMoon, FaSun } from 'react-icons/fa'

export function ThemeButton() {
  const { theme, setTheme } = useTheme()

  return (
    <IconButton
      aria-label='foo'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      title='Cambiar tema'
      type='button'
      variant='quiet'
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </IconButton>
  )
}
