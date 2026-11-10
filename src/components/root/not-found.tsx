import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { TbError404 } from 'react-icons/tb'

export async function NotFound({ title }: { title: string }) {
  const t = await getTranslations('not_found')

  return (
    <section className='mt-4 mb-2 flex grow flex-col items-center justify-center'>
      <TbError404 className='size-28 text-red-500' />
      <h2>{title}</h2>
      <Link className='mt-2 text-sky-500 hover:opacity-80' href='/'>
        {t('link')}
      </Link>
    </section>
  )
}
