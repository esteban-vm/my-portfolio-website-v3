import { getTranslations } from 'next-intl/server'
import { NotFound } from '@/components/root'

export default async function RootNotFound() {
  const t = await getTranslations('not_found')

  return <NotFound title={t('title')} />
}
