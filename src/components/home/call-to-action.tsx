import { getTranslations } from 'next-intl/server'
import { FaDownload } from 'react-icons/fa6'
import tw from 'tailwind-styled-components'
import { GridCard } from '@/styles/styled'

export async function CallToAction() {
  const t = await getTranslations('cta')

  return (
    <GridCard className='gap-2 text-center font-wellfleet uppercase'>
      <h1 className='text-balance font-bold text-4xl'>{t('title')}</h1>
      <h2 className='text-pretty text-foreground/80 text-xl'>{t('subtitle')}</h2>
      <Button type='button'>
        <FaDownload />
        <span>{t('button')}</span>
      </Button>
    </GridCard>
  )
}

const Button = tw.button`flex items-center gap-2 rounded-lg border border-foreground/30 px-3 py-1.5 font-geist text-sm hover:opacity-80`
