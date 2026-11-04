'use client'

import { useRouter } from 'next/navigation'
import { use, useEffect, useRef } from 'react'
import { browser, createPortal } from 'react-dom'
import { PROJECT_MODAL_ID } from '@/lib/constants'

export function ProjectModal({ slug }: { slug: string }) {
  use(browser())

  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (!dialogRef.current) return
    const dialog = dialogRef.current
    if (!dialog.open) dialog.showModal()
  }, [])

  return createPortal(
    <dialog
      className='-translate-1/2 glass glass-surface top-1/2 left-1/2 flex w-full max-w-sm flex-col items-center justify-center rounded-2xl p-6 text-foreground backdrop:bg-background/80'
      onClose={router.back}
      ref={dialogRef}
    >
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
    </dialog>,
    document.getElementById(PROJECT_MODAL_ID)!
  )
}
