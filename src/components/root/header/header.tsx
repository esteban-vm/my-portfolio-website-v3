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

const Wrapper = tw.header`sticky inset-x-0 top-2 z-10 flex items-center justify-between rounded-2xl bg-background-content/20 p-3 light:shadow-sm shadow-foreground/10 light:ring-4 light:ring-background-content ring-1 ring-foreground/20 backdrop-blur-[2px]`

const Link = tw.a`flex aspect-square w-12 items-center justify-center rounded-xl border border-foreground/30 bg-background font-wellfleet hover:opacity-90`
