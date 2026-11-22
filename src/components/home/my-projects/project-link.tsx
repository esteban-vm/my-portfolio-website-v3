import type { Project } from '@/types/projects'
import Link from 'next/link'
import { BsArrowsFullscreen } from 'react-icons/bs'
import tw from 'tailwind-styled-components'

export function ProjectLink({ index, project }: { index: number; project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} passHref scroll={false}>
      <Wrapper>
        <div className='h-full grow'>
          <Title>
            {index}. {project.title}
          </Title>
          <Description>{project.description}</Description>
        </div>
        <BsArrowsFullscreen className='size-4 shrink-0 stroke-1 text-teal-600 dark:text-teal-400' />
      </Wrapper>
    </Link>
  )
}

const Wrapper = tw.div`flex h-1/3 w-full snap-start scroll-m-0 items-center justify-center gap-1.5 bg-background px-3 py-1 hover:bg-background-content`
const Title = tw.span`line-clamp-1 font-semibold font-wellfleet text-sky-600 uppercase dark:text-sky-400`
const Description = tw.p`line-clamp-2 text-pretty text-justify text-foreground/80 text-sm leading-4 md:text-left`
