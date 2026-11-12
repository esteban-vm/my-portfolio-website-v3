import NextLink from 'next/link'
import tw from 'tailwind-styled-components'
import { LanguageButton } from './language-button'
import { ThemeButton } from './theme-button'

export function Header() {
  return (
    <Wrapper>
      <Link $as={NextLink} href='/'>
        <span className='align-top text-3xl'>E</span>
      </Link>
      <div className='flex gap-1.5'>
        <LanguageButton />
        <ThemeButton />
      </div>
    </Wrapper>
  )
}

const Wrapper = tw.header`glass glass-surface glass-saturation-100 glass-blur-1 glass-strength-5 sticky inset-x-0 top-2 z-10 flex items-center justify-between rounded-2xl p-3`
const Link = tw.a`flex aspect-square w-12 items-center justify-center rounded-xl border border-foreground/30 bg-background font-wellfleet hover:opacity-90`
