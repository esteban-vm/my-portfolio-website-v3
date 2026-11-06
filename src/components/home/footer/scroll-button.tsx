'use client'

import { HiChevronDoubleUp } from 'react-icons/hi2'
import { CONTAINER_ID } from '@/lib/constants'

export function ScrollButton() {
  const onScrollToTop = () => {
    const container = document.getElementById(CONTAINER_ID)
    container?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <button
      className='flex size-4 cursor-pointer items-center justify-center hover:opacity-80'
      onClick={onScrollToTop}
      title='Volver arriba'
      type='button'
    >
      <HiChevronDoubleUp className='size-full' />
    </button>
  )
}
