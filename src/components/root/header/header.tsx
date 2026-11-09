import Link from 'next/link'
import { LanguageButton } from './language-button'
import { ThemeButton } from './theme-button'

export function Header() {
  return (
    <header className='glass glass-surface glass-saturation-100 glass-blur-1 glass-strength-5 sticky inset-x-0 top-2 z-10 flex items-center justify-between rounded-2xl p-3'>
      <Link
        className='flex aspect-square w-12 items-center justify-center rounded-xl border border-foreground/30 font-wellfleet hover:opacity-90'
        href='/'
      >
        <span className='align-top text-3xl'>E</span>
      </Link>
      <div className='flex gap-1.5'>
        <LanguageButton />
        <ThemeButton />
      </div>
    </header>
  )
}
