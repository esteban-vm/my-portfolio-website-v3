'use client'

import { useTheme } from '@teispace/next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'

export function ThemeButtonV2() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className='glass glass-surface group flex size-10 cursor-pointer items-center justify-center rounded-full transition active:scale-95'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      title='Cambiar tema'
      type='button'
    >
      {theme === 'dark' ? (
        <FaSun className='group-hover:motion-safe:animate-pulse' />
      ) : (
        <FaMoon className='group-hover:motion-safe:animate-pulse' />
      )}
    </button>
  )
}
