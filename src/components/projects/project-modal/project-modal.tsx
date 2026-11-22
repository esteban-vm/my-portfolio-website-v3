'use client'

import type { Project } from '@/types/projects'
import { useRouter } from 'next/navigation'
import { use, useEffect, useRef } from 'react'
import { browser, createPortal } from 'react-dom'
import { IoCloseSharp } from 'react-icons/io5'
import tw from 'tailwind-styled-components'
import { MODAL_ROOT_ID } from '@/lib/constants'
import { CircleButton } from '@/styles/styled'

export function ProjectModal({ project }: { project: Project }) {
  use(browser())

  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (!dialog.open) dialog.showModal()
  }, [])

  return createPortal(
    <Dialog onClose={router.back} ref={dialogRef}>
      <Content>
        <h2 className='italic'>(En construcción…)</h2>
        <p>ProjectModal</p>
        <p>{project.title}</p>
        <p>{project.description}</p>
      </Content>
      <form className='absolute right-3 bottom-3 md:top-3' method='dialog'>
        <CircleButton className='[&>svg]:size-3/5' type='submit'>
          <IoCloseSharp className='text-red-500' />
        </CircleButton>
      </form>
    </Dialog>,
    document.getElementById(MODAL_ROOT_ID)!
  )
}

const Dialog = tw.dialog`-translate-1/2 relative top-1/2 left-1/2 h-[calc(100%-var(--spacing)*4.5)] max-h-full w-[calc(100%-var(--spacing)*4.5)] max-w-7xl rounded-2xl bg-transparent p-6 ring-[0.5px] ring-foreground backdrop-blur-sm backdrop:bg-background/75`
const Content = tw.div`fade-in flex flex-col items-center justify-center gap-3 fill-mode-forwards text-foreground duration-1000 motion-safe:animate-in`
