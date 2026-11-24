'use client'

import type { Project } from '@/types/projects'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { use, useEffect, useRef } from 'react'
import { browser, createPortal } from 'react-dom'
import { IoArrowBackSharp, IoCloseSharp } from 'react-icons/io5'
import tw from 'tailwind-styled-components'
import { MODAL_ROOT_ID } from '@/lib/constants'

export function ProjectModal({ project }: { project: Project }) {
  use(browser())

  const router = useRouter()
  const t = useTranslations('project_modal')
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (!dialog.open) dialog.showModal()
  }, [])

  return createPortal(
    <Dialog onClose={router.back} ref={dialogRef}>
      <Content>
        <Details>
          <h2 className='italic'>(En construcción…)</h2>
          <p>ProjectModal</p>
          <p>{project.title}</p>
          <p>{project.description}</p>
        </Details>
        <Form method='dialog'>
          <Button title={t('close_button')} type='submit'>
            <IoCloseSharp className='not-lg:hidden' />
            <IoArrowBackSharp className='lg:hidden' />
          </Button>
        </Form>
      </Content>
    </Dialog>,
    document.getElementById(MODAL_ROOT_ID)!
  )
}

const Dialog = tw.dialog`-translate-1/2 relative top-1/2 left-1/2 h-full w-[calc(100%-var(--spacing)*4.5)] max-w-7xl rounded-2xl bg-transparent p-3 ring-[0.5px] ring-foreground backdrop-blur-sm backdrop:bg-background/75`
const Content = tw.div`flex size-full flex-col gap-3 text-foreground lg:flex-col-reverse`
const Details = tw.div`fade-in grow fill-mode-forwards duration-1000 motion-safe:animate-in`
const Form = tw.form`shrink-0 self-center lg:self-end`
const Button = tw.button`flex size-12 cursor-pointer items-center justify-center rounded-lg bg-background ring-1 ring-foreground/30 hover:bg-background-content [&_svg]:size-3/5`
