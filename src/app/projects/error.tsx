'use client'

import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
import { BiSolidError } from 'react-icons/bi'
import tw from 'tailwind-styled-components'

interface ProjectErrorProps {
  error: unknown
  retry: () => void
}

export default function ProjectError({ error, retry }: ProjectErrorProps) {
  const t = useTranslations('error')

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className='space-y-1 text-center'>
      <BiSolidError className='inline size-28 text-red-500' />
      <h2 className='text-xl'>{t('title')}</h2>
      <Button onClick={retry} type='button'>
        {t('button')}
      </Button>
    </section>
  )
}

const Button = tw.button`cursor-pointer rounded-lg border border-foreground/30 bg-transparent px-3 py-2 transition hover:opacity-80 active:scale-95`
