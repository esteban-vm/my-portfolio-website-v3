'use client'

import type { ReactNode } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import tw from 'tailwind-styled-components'
import { PROJECT_CONTAINER_HEIGHT, PROJECT_LINK_HEIGHT, PROJECTS } from '@/lib/constants'

interface ProjectListProps {
  children: ReactNode
}

export function ProjectList({ children }: ProjectListProps) {
  const [count, setCount] = useState(3)
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

    const handleScrollEvent = () => {
      handleScroll()
    }

    container.addEventListener('scroll', handleScrollEvent)

    return () => container.removeEventListener('scroll', handleScrollEvent)
  }, [handleScroll])

  useEffect(() => {
    console.log({ count })
  }, [count])

  return (
    <Wrapper ref={containerRef} style={{ height: PROJECT_CONTAINER_HEIGHT }}>
      {children}
    </Wrapper>
  )
}

const Wrapper = tw.div`w-full snap-y snap-mandatory overflow-auto rounded-lg border border-foreground/10`
