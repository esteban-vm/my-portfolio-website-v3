'use client'

import type { Project } from '@/types'
import { useRouter } from 'next/navigation'
import { use, useEffect, useRef } from 'react'
import { browser, createPortal } from 'react-dom'
import tw from 'tailwind-styled-components'
import { MODAL_ROOT_ID } from '@/lib/constants'

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
        <p>ProjectModal</p>
        <p>{project.title}</p>
        <form method='dialog'>
          <Button type='submit'>Close</Button>
        </form>
      </Content>
    </Dialog>,
    document.getElementById(MODAL_ROOT_ID)!
  )
}

const Dialog = tw.dialog`-translate-1/2 top-1/2 left-1/2 w-[calc(100%-var(--spacing)*4)] max-w-lg rounded-2xl bg-background-content/20 p-6 light:shadow-sm shadow-foreground/10 light:ring-foreground ring-1 ring-foreground/20 backdrop-blur-[2px] backdrop:bg-background/80`

const Content = tw.div`fade-in flex flex-col items-center justify-center gap-3 fill-mode-forwards text-foreground duration-1000 motion-safe:animate-in`
const Button = tw.button`cursor-pointer rounded-lg border border-foreground/30 bg-transparent px-3 py-2 hover:opacity-90 active:scale-95`
