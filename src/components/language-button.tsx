'use client'

import { useLocale } from 'next-intl'
import { useAction } from 'next-safe-action/hooks'
import { IoLanguage } from 'react-icons/io5'
import { changeLanguage } from '@/actions'

export function LanguageButton() {
  const locale = useLocale()
  const { execute, isPending } = useAction(changeLanguage)

  const onLanguageChange = () => {
    execute({ lang: locale === 'en' ? 'es' : 'en' })
  }

  return (
    <button
      className='action-button'
      disabled={isPending}
      onClick={onLanguageChange}
      title='Cambiar idioma'
      type='button'
    >
      <IoLanguage />
    </button>
  )
}
