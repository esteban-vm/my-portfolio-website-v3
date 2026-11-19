'use client'

import type { ReactNode } from 'react'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useRef, useState } from 'react'
import tw from 'tailwind-styled-components'
import { PROJECT_CONTAINER_HEIGHT, PROJECT_LINK_HEIGHT, PROJECTS } from '@/lib/constants'

interface ProjectListProps {
  children: ReactNode
}

export function ProjectList({ children }: ProjectListProps) {
  const [count, setCount] = useState(3)
  const t = useTranslations('my_projects')
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const { scrollTop } = container
    const elementsScrolled = Math.floor(scrollTop / PROJECT_LINK_HEIGHT)

    let newCount: number

    if (scrollTop > 0) {
      newCount = Math.min(PROJECTS.length, 3 + elementsScrolled)
    } else if (scrollTop < 0) {
      newCount = Math.max(3, 3 - Math.floor(Math.abs(elementsScrolled)))
    } else {
      newCount = 3
    }

    setCount(newCount)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <>
      <Title>
        {t('title')} ({count}/{PROJECTS.length})
      </Title>
      <List ref={containerRef} style={{ height: PROJECT_CONTAINER_HEIGHT }}>
        {children}
      </List>
    </>
  )
}

const Title = tw.h2`mb-2 font-wellfleet text-lg uppercase lg:text-xl`
const List = tw.div`w-full snap-y snap-mandatory overflow-auto rounded-lg border border-foreground/10`
