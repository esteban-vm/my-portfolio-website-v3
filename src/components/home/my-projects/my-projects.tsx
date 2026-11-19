import { getTranslations } from 'next-intl/server'
import tw from 'tailwind-styled-components'
import { PROJECTS } from '@/lib/constants'
import { GridCard } from '@/styles/styled'
import { ProjectLink } from './project-link'
import { ProjectList } from './project-list'

export async function MyProjects() {
  const t = await getTranslations('my_projects')

  return (
    <GridCard className='items-start'>
      <Title>
        {t('title')} (3/{PROJECTS.length})
      </Title>
      <ProjectList>
        {PROJECTS.map((project) => (
          <ProjectLink key={project.slug} project={project} />
        ))}
      </ProjectList>
    </GridCard>
  )
}

const Title = tw.h2`mb-2 font-wellfleet text-lg uppercase lg:text-xl`
