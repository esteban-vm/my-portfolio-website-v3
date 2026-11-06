'use client'

import { HiChevronDoubleUp } from 'react-icons/hi2'

export function ScrollButton() {
  return (
    <button className='flex size-8 cursor-pointer items-center justify-center' type='button'>
      <HiChevronDoubleUp className='size-full motion-safe:animate-pulse' />
    </button>
  )
}
