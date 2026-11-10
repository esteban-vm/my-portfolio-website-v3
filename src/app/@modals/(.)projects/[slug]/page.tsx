import type { ProjectPageProps } from '@/app/projects/[slug]/page'
import { notFound } from 'next/navigation'
import { ProjectModal } from '@/components/projects'
import { projects } from '@/lib/constants'

export { generateMetadata, instant } from '@/app/projects/[slug]/page'

export default async function ProjectModalPage({ params }: ProjectPageProps) {
  const { slug } = await params

  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return <ProjectModal project={project} />
}
