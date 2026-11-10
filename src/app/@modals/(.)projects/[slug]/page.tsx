import type { ProjectPageProps } from '@/app/projects/[slug]/page'
import { ProjectModal } from '@/components/projects'

export { generateMetadata, instant } from '@/app/projects/[slug]/page'

export default async function ProjectModalPage({ params }: ProjectPageProps) {
  const { slug } = await params

  return <ProjectModal slug={slug} />
}
