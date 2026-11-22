import { PROJECTS } from '@/lib/constants'
import { GridCard } from '@/styles/styled'
import { ProjectContainer } from './project-container'
import { ProjectLink } from './project-link'

export function MyProjects() {
  return (
    <GridCard className='items-start'>
      <ProjectContainer>
        {PROJECTS.map((project, index) => (
          <ProjectLink index={index + 1} key={project.slug} project={project} />
        ))}
      </ProjectContainer>
    </GridCard>
  )
}
