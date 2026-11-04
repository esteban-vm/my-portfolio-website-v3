import type { Metadata } from 'next'

export const instant = false

type Props = PageProps<'/projects/[slug]'>

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  return {
    title: slug,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params

  return (
    <div className='mt-4 mb-2 grow border border-foreground/30'>
      <h2>ProjectPage</h2>
      <p>{slug}</p>
    </div>
  )
}
