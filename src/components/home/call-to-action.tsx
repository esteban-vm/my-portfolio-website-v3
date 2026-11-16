import { getTranslations } from 'next-intl/server'
import { FaDownload } from 'react-icons/fa6'
import tw from 'tailwind-styled-components'
import { GridCard } from '@/styles/styled'

export async function CallToAction() {
  const t = await getTranslations('call_to_action')

  return (
    <GridCard className='gap-2 text-center font-wellfleet uppercase'>
      <Title>{t('title')}</Title>
      <Subtitle>{t('subtitle')}</Subtitle>
      <Button type='button'>
        <FaDownload />
        <span className='font-geist font-semibold uppercase'>{t('button')}</span>
      </Button>
    </GridCard>
  )
}

const Title = tw.h1`text-balance font-bold text-3xl lg:text-4xl`
const Subtitle = tw.h2`text-pretty text-foreground/80 text-lg lg:text-xl`
const Button = tw.button`flex cursor-pointer items-center gap-2 rounded-md bg-teal-500 px-3 py-1.5 text-background-content text-sm hover:opacity-80 dark:bg-teal-300`
