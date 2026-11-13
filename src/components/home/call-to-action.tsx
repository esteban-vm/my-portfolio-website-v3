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
        <span>{t('button')}</span>
      </Button>
    </GridCard>
  )
}

const Title = tw.h1`text-balance font-bold text-4xl`
const Subtitle = tw.h2`text-pretty text-foreground/80 text-xl`
const Button = tw.button`flex items-center gap-2 rounded-lg border border-foreground/30 px-3 py-1.5 font-geist text-sm hover:opacity-80`
