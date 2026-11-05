'use client'

import { useTheme } from '@teispace/next-themes'
import { useTranslations } from 'next-intl'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ActionButton } from '@/components/shared'

export function ThemeButton() {
  const t = useTranslations('header.theme_button')
  const { resolvedTheme, theme, setTheme } = useTheme()

  return (
    <ActionButton
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      title={resolvedTheme === 'dark' ? t('light') : t('dark')}
      type='button'
    >
      {resolvedTheme === 'dark' ? <FaSun /> : <FaMoon />}
    </ActionButton>
  )
}
