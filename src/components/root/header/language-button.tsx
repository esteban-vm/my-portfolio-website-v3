'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useAction } from 'next-safe-action/hooks'
import { IoLanguage } from 'react-icons/io5'
import { changeLanguage } from '@/actions'
import { ActionButton } from '@/components/shared'

export function LanguageButton() {
  const locale = useLocale()
  const t = useTranslations('header')
  const { execute, isPending } = useAction(changeLanguage)

  const onLanguageChange = () => {
    execute({ lang: locale === 'en' ? 'es' : 'en' })
  }

  return (
    <ActionButton disabled={isPending} onClick={onLanguageChange} title={t('language_button')} type='button'>
      <IoLanguage />
    </ActionButton>
  )
}
