import { getTranslations } from 'next-intl/server'
import tw from 'tailwind-styled-components'
import { projects } from '@/lib/constants'
import { GridCard } from '@/styles/styled'
import { ProjectLink } from './project-link'

export async function MyProjects() {
  const t = await getTranslations('my_projects')

  return (
    <GridCard className='items-start'>
      <Title>{t('title')}</Title>
      <Content>
        {projects.map((project) => (
          <ProjectLink key={project.slug} project={project} />
        ))}
      </Content>
    </GridCard>
  )
}

const Title = tw.h2`mb-2 font-wellfleet text-lg uppercase lg:text-xl`
const Content = tw.div`scrollbar-none! h-52 snap-y snap-mandatory overflow-auto scroll-smooth rounded-lg border border-foreground/10`
