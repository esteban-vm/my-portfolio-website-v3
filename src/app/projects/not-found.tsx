import { getTranslations } from 'next-intl/server'
import { NotFound } from '@/components/root'

export default async function ProjectNotFound() {
  const t = await getTranslations('my_projects')

  return <NotFound title={t('not_found')} />
}
