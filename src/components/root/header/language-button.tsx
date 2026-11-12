'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useAction } from 'next-safe-action/hooks'
import { IoLanguage } from 'react-icons/io5'
import tw from 'tailwind-styled-components'
import { changeLanguage } from '@/actions'
import { CircleButton } from '@/styles/styled'
import { IconSpain } from './icon-spain'
import { IconUK } from './icon-uk'

export function LanguageButton() {
  const locale = useLocale()
  const t = useTranslations('header')
  const { execute, isPending } = useAction(changeLanguage)

  const onLanguageChange = () => {
    execute({ lang: locale === 'en' ? 'es' : 'en' })
  }

  return (
    <CircleButton
      className='relative disabled:cursor-not-allowed'
      disabled={isPending}
      onClick={onLanguageChange}
      title={t('language_button')}
      type='button'
    >
      <IoLanguage />
      <Flag $as={locale === 'es' ? IconSpain : IconUK} />
    </CircleButton>
  )
}

const Flag = tw.svg`absolute top-0 left-0 -translate-x-1/6 -translate-y-1/4 scale-110 brightness-125`
