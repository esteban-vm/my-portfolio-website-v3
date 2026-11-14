import type { Project } from '@/types'
import Link from 'next/link'
import { BsArrowsFullscreen } from 'react-icons/bs'
import tw from 'tailwind-styled-components'

export function ProjectLink({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} passHref scroll={false}>
      <Wrapper>
        <div className='h-full grow'>
          <Title>{project.title}</Title>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil illo tempora rerum, incidunt assumenda sint
            magni hic alias veniam, ut autem reiciendis doloribus, quos rem fugiat sequi suscipit quae aspernatur ipsa
            ducimus aliquid maiores expedita beatae vitae. Nulla voluptatum iste eum, sequi enim aspernatur autem at,
            neque molestiae velit laudantium officiis, repudiandae architecto quisquam. Labore voluptates atque
            molestiae fugiat natus tempora nihil odit, magnam quibusdam facere est perspiciatis vitae corrupti officia
            et temporibus totam nobis veniam! Eligendi, soluta. Et, sunt.
          </Description>
        </div>
        <BsArrowsFullscreen className='size-4 shrink-0 text-current/60' />
      </Wrapper>
    </Link>
  )
}

const Wrapper = tw.div`flex h-1/3 w-full snap-start scroll-m-0 items-center justify-center bg-background px-4 py-1 hover:bg-background-content`
const Title = tw.span`font-semibold font-wellfleet text-sky-500 uppercase dark:text-sky-300`
const Description = tw.p`line-clamp-2 text-foreground/80 text-sm leading-4`
