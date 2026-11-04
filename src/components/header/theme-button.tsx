'use client'

import { useTheme } from '@teispace/next-themes'
import { useTranslations } from 'next-intl'
import { FaMoon, FaSun } from 'react-icons/fa'

export function ThemeButton() {
  const t = useTranslations('header.theme_button')
  const { resolvedTheme, theme, setTheme } = useTheme()

  return (
    <button
      className='action-button'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      title={resolvedTheme === 'dark' ? t('light') : t('dark')}
      type='button'
    >
      {resolvedTheme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  )
}
