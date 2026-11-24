'use client'

import { useTheme } from '@teispace/next-themes'
import { useTranslations } from 'next-intl'
import { use } from 'react'
import { browser } from 'react-dom'
import { FaMoon, FaSun } from 'react-icons/fa'
import { CircleButton } from '@/styles/styled'

export function ThemeButton() {
  use(browser())

  const t = useTranslations('header.theme_button')
  const { resolvedTheme, theme, setTheme } = useTheme()

  const onThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <CircleButton onClick={onThemeChange} title={resolvedTheme === 'dark' ? t('light') : t('dark')} type='button'>
      {resolvedTheme === 'dark' ? <FaSun className='text-amber-400' /> : <FaMoon className='text-slate-600' />}
    </CircleButton>
  )
}
