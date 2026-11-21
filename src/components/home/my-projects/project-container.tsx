'use client'

import type { ReactNode } from 'react'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useRef, useState } from 'react'
import tw from 'tailwind-styled-components'
import { PROJECTS } from '@/lib/constants'

interface ProjectContainerProps {
  children: ReactNode
}

export function ProjectContainer({ children }: ProjectContainerProps) {
  const [count, setCount] = useState(3)
  const t = useTranslations('my_projects')
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback(() => {
    const container = wrapperRef.current
    if (!container) return

    const link = container.querySelector('a')
    if (!link) return

    const { scrollTop } = container
    const linksScrolled = Math.ceil(scrollTop / link.offsetHeight)

    let newCount: number

    if (scrollTop > 0) {
      newCount = Math.min(PROJECTS.length, 3 + linksScrolled)
    } else if (scrollTop < 0) {
      newCount = Math.max(3, 3 - Math.floor(Math.abs(linksScrolled)))
    } else {
      newCount = 3
    }

    setCount(newCount)
  }, [])

  useEffect(() => {
    const container = wrapperRef.current
    if (!container) return

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <>
      <Title>
        {t('title')} ({count}/{PROJECTS.length})
      </Title>
      <Wrapper ref={wrapperRef}>{children}</Wrapper>
    </>
  )
}

const Title = tw.h2`mb-2 font-wellfleet text-lg uppercase lg:text-xl`
const Wrapper = tw.div`h-52 w-full snap-y snap-mandatory overflow-y-auto rounded-lg ring-1 ring-foreground/10`
