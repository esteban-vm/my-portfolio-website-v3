import { getTranslations } from 'next-intl/server'
import { NAME } from '@/lib/constants'

export async function AboutMe() {
  const t = await getTranslations('about')

  return (
    <div className='size-full rounded-2xl bg-background-content p-6 light:shadow-foreground/10 light:shadow-sm'>
      <h1 className='font-bold font-wellfleet text-3xl'>{NAME}</h1>
      <h2 className='line-clamp-1 font-wellfleet text-foreground/80 text-xl uppercase'>{t('subtitle')}</h2>
      <br />
      <p className='text-foreground/70 leading-5'>
        {t.rich('text', {
          name: NAME.slice(0, NAME.indexOf(' ')),
          important(chunks) {
            return <span className='font-semibold'>{chunks}</span>
          },
        })}
      </p>
    </div>
  )
}
