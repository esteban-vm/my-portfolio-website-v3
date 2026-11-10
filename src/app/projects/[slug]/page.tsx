import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/constants'

export const instant = false

export type ProjectPageProps = PageProps<'/projects/[slug]'>

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params

  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <div className='border border-foreground/30'>
      <h2>ProjectPage</h2>
      <p>{project.title}</p>
    </div>
  )
}
