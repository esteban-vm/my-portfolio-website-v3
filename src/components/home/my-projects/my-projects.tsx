import { PROJECTS } from '@/lib/constants'
import { GridCard } from '@/styles/styled'
import { ProjectLink } from './project-link'
import { ProjectList } from './project-list'

export function MyProjects() {
  return (
    <GridCard className='items-start'>
      <ProjectList>
        {PROJECTS.map((project) => (
          <ProjectLink key={project.slug} project={project} />
        ))}
      </ProjectList>
    </GridCard>
  )
}
