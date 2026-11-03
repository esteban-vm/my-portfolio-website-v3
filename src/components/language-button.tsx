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
      className='glass glass-surface group flex size-10 cursor-pointer items-center justify-center rounded-full transition active:scale-95 disabled:opacity-50'
      disabled={isPending}
      onClick={onLanguageChange}
      title='Cambiar idioma'
      type='button'
    >
      <IoLanguage className='group-hover:motion-safe:animate-pulse' />
    </button>
  )
}
