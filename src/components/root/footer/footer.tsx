import { getTranslations } from 'next-intl/server'
import { NAME } from '@/lib/constants'
import { ScrollButton } from './scroll-button'

export async function Footer() {
  const t = await getTranslations('footer')

  return (
    <footer className='mb-2 flex shrink-0 grow-0 items-center justify-between px-3 font-wellfleet text-foreground/50'>
      <small className='basis-1/3 truncate'>© 2026 {NAME}</small>
      <ScrollButton />
      <small className='basis-1/3 truncate text-right'>{t('text')}</small>
    </footer>
  )
}
