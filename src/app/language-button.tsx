'use client'

import { IconButton } from 'open-glass-ui'
import { IoLanguage } from 'react-icons/io5'

export function LanguageButton() {
  return (
    <IconButton aria-label='foo' title='Cambiar idioma' type='button' variant='quiet'>
      <IoLanguage />
    </IconButton>
  )
}
