import type { Project } from '@/types'
import Link from 'next/link'
import { BsArrowsFullscreen } from 'react-icons/bs'

export function ProjectLink({ project }: { project: Project }) {
  return (
    <Link
      className='flex h-1/3 snap-start scroll-m-0 items-center justify-center bg-background px-4 hover:bg-background-content'
      href={`/projects/${project.slug}`}
      key={project.slug}
      scroll={false}
    >
      <span className='mr-4 shrink-0 font-semibold font-wellfleet text-sky-500 uppercase dark:text-sky-300'>
        {project.title}
      </span>
      <p className='line-clamp-2 grow text-foreground/80 text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod nihil laborum distinctio inventore sed vel
        voluptates, aliquid tenetur natus sunt aspernatur doloremque nam. Voluptatem beatae quis ipsam amet enim quam
        explicabo officia nostrum quae ipsum, aspernatur, itaque vel expedita unde earum id, odit non animi libero
        doloribus optio voluptatum?
      </p>
      <BsArrowsFullscreen className='ml-2 size-4 shrink-0 text-current/60' />
    </Link>
  )
}
