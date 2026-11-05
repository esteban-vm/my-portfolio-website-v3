'use client'

import { useRouter } from 'next/navigation'
import { use, useEffect, useRef } from 'react'
import { browser, createPortal } from 'react-dom'
import tw from 'tailwind-styled-components'
import { PROJECT_MODAL_ID } from '@/lib/constants'

export function ProjectModal({ slug }: { slug: string }) {
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
      <p>ProjectModal</p>
      <p>Project: {slug}</p>
      <form method='dialog'>
        <button
          className='cursor-pointer rounded-lg border border-foreground/30 bg-transparent px-3 py-2 hover:opacity-90 active:scale-95'
          type='submit'
        >
          Close
        </button>
      </form>
    </Dialog>,
    document.getElementById(PROJECT_MODAL_ID)!
  )
}

const Dialog = tw.dialog`-translate-1/2 fade-in glass glass-surface top-1/2 left-1/2 flex w-[calc(100%-var(--spacing)*4)] max-w-lg animate-in flex-col items-center justify-center gap-3 rounded-2xl fill-mode-forwards p-6 text-foreground duration-1000 backdrop:bg-background/80`
