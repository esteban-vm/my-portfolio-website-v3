import { getTranslations } from 'next-intl/server'
import { NAME } from '@/lib/constants'

export async function AboutMe() {
  const t = await getTranslations('about')

  return (
    <div className='flex size-full flex-col justify-center rounded-2xl bg-background-content p-6 light:shadow-foreground/10 light:shadow-sm'>
      <h1 className='font-bold font-wellfleet text-3xl'>{NAME}</h1>
      <h2 className='font-wellfleet text-foreground/80 text-xl uppercase'>{t('subtitle')}</h2>
      <hr className='mb-4 border-spacing-0.5 border-foreground/50' />
      <p className='text-foreground/70 leading-5'>{t('text', { name: NAME })}</p>
    </div>
  )
}
