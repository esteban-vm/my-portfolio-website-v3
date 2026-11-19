import { getTranslations } from 'next-intl/server'
import tw from 'tailwind-styled-components'
import { PROJECTS } from '@/lib/constants'
import { GridCard } from '@/styles/styled'
import { ProjectLink } from './project-link'

export async function MyProjects() {
  const t = await getTranslations('my_projects')

  return (
    <GridCard className='items-start'>
      <Title>{t('title')}</Title>
      <Content>
        {PROJECTS.map((project) => (
          <ProjectLink key={project.slug} project={project} />
        ))}
      </Content>
    </GridCard>
  )
}

const Title = tw.h2`mb-2 font-wellfleet text-lg uppercase lg:text-xl`
const Content = tw.div`h-52 w-full snap-y snap-mandatory overflow-y-auto rounded-lg border border-foreground/10`
