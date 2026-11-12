import { getTranslations } from 'next-intl/server'
import { NAME } from '@/lib/constants'
import { GridCard } from '@/styles/styled'

export async function AboutMe() {
  const t = await getTranslations('about')

  return (
    <GridCard className='items-start'>
      <h2 className='font-bold font-wellfleet text-3xl'>{NAME}</h2>
      <h3 className='mb-2 line-clamp-1 font-wellfleet text-foreground/80 text-xl uppercase'>{t('subtitle')}</h3>
      <p className='text-foreground/70 text-sm leading-5'>
        {t.rich('text', {
          name: NAME.slice(0, NAME.indexOf(' ')),
          important: (chunks) => <span className='font-semibold'>{chunks}</span>,
        })}
      </p>
    </GridCard>
  )
}
