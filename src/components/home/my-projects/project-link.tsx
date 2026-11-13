import type { Project } from '@/types'
import Link from 'next/link'
import { BsArrowsFullscreen } from 'react-icons/bs'
import tw from 'tailwind-styled-components'

export function ProjectLink({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} key={project.slug} passHref scroll={false}>
      <Wrapper>
        <Title>{project.title}</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod nihil laborum distinctio inventore sed vel
          voluptates, aliquid tenetur natus sunt aspernatur doloremque nam. Voluptatem beatae quis ipsam amet enim quam
          explicabo officia nostrum quae ipsum, aspernatur, itaque vel expedita unde earum id, odit non animi libero
          doloribus optio voluptatum?
        </Description>
        <BsArrowsFullscreen className='ml-2 size-4 shrink-0 text-current/60' />
      </Wrapper>
    </Link>
  )
}

const Wrapper = tw.span`flex h-1/3 snap-start scroll-m-0 items-center justify-center bg-background px-4 hover:bg-background-content`
const Title = tw.span`mr-4 shrink-0 font-semibold font-wellfleet text-base text-sky-500 uppercase lg:text-lg dark:text-sky-300`
const Description = tw.p`line-clamp-2 grow text-foreground/80 text-sm`
