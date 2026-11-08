import { getTranslations } from 'next-intl/server'
import { GridCard } from '@/styles/styled'

export async function ContactMe() {
  const t = await getTranslations('contact')

  return (
    <GridCard>
      <div className='mx-auto flex w-full max-w-md flex-col gap-1 border border-amber-500 p-1'>
        <h2 className='line-clamp-1 font-wellfleet text-foreground/80 text-xl uppercase'>{t('title')}</h2>
        <br />
        <div className='rounded-lg border border-amber-500 px-4 py-2'>Email</div>
        <div className='flex gap-1'>
          <button className='w-1/2 cursor-pointer rounded-lg border border-amber-500 px-4 py-2' type='button'>
            LinkedIn
          </button>
          <button className='w-1/2 cursor-pointer rounded-lg border border-amber-500 px-4 py-2' type='button'>
            GitHub
          </button>
        </div>
      </div>
    </GridCard>
  )
}
