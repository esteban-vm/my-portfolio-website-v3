import { getTranslations } from 'next-intl/server'
import { projects } from '@/lib/constants'
import { GridCard } from '@/styles/styled'
import { ProjectLink } from './project-link'

export async function MyProjects() {
  const t = await getTranslations('my_projects')

  return (
    <GridCard className='items-start'>
      <h2 className='mb-2 font-wellfleet text-xl uppercase'>{t('title')}</h2>
      <div className='scrollbar-none! h-52 snap-y snap-mandatory overflow-auto scroll-smooth rounded-lg border border-foreground/10'>
        {projects.map((project) => {
          return <ProjectLink key={project.slug} project={project} />
        })}
      </div>
    </GridCard>
  )
}
