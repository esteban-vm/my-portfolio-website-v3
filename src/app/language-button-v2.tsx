'use client'

import { IoLanguage } from 'react-icons/io5'

export function LanguageButtonV2() {
  return (
    <button
      className='glass glass-surface group flex size-10 cursor-pointer items-center justify-center rounded-full transition active:scale-95'
      title='Cambiar idioma'
      type='button'
    >
      <IoLanguage className='group-hover:motion-safe:animate-pulse' />
    </button>
  )
}
