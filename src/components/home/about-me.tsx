import { getTranslations } from 'next-intl/server'
import { NAME } from '@/lib/constants'
import { GridCard } from '@/styles/styled'

export async function AboutMe() {
  const t = await getTranslations('about')

  return (
    <GridCard>
      <h1 className='font-bold font-wellfleet text-3xl'>{NAME}</h1>
      <h2 className='mb-2 line-clamp-1 font-wellfleet text-foreground/80 text-xl uppercase'>{t('subtitle')}</h2>
      <p className='text-foreground/70 leading-5'>
        {t.rich('text', {
          name: NAME.slice(0, NAME.indexOf(' ')),
          important: (chunks) => <span className='font-semibold'>{chunks}</span>,
        })}
      </p>
    </GridCard>
  )
}
