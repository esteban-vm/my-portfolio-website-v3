import { getTranslations } from 'next-intl/server'
import tw from 'tailwind-styled-components'

export async function MyStatus() {
  const t = await getTranslations('contact_me.my_status')

  return (
    <>
      <Label>{t('label')}</Label>
      <Status>
        <div className='size-3 rounded-full bg-current motion-safe:animate-pulse' />
        <span>{t('value')}</span>
      </Status>
    </>
  )
}

const Label = tw.h3`mt-1.5 text-foreground/75 text-sm`
const Status = tw.div`flex items-center gap-2 rounded-lg bg-background px-3 py-2 font-semibold text-sm text-teal-600 uppercase ring-1 ring-foreground/10 dark:text-teal-400`
