'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useAction } from 'next-safe-action/hooks'
import { IoLanguage } from 'react-icons/io5'
import tw from 'tailwind-styled-components'
import { changeLanguage } from '@/actions'
import { GlassButton } from '@/styles/styled'

export function LanguageButton() {
  const locale = useLocale()
  const t = useTranslations('header')
  const { execute, isPending } = useAction(changeLanguage)

  const onLanguageChange = () => {
    execute({ lang: locale === 'en' ? 'es' : 'en' })
  }

  return (
    <GlassButton
      className='relative disabled:cursor-not-allowed'
      disabled={isPending}
      onClick={onLanguageChange}
      title={t('language_button')}
      type='button'
    >
      <IoLanguage />
      <Badge>{locale}</Badge>
    </GlassButton>
  )
}

const Badge = tw.span`-translate-1/4 absolute top-0 left-0 bg-transparent font-semibold font-wellfleet text-current text-xs uppercase`
