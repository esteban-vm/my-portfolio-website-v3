import NextLink from 'next/link'
import { Suspense } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
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
        <Suspense
          fallback={
            <Loading>
              <AiOutlineLoading3Quarters className='size-1/2 animate-spin' />
            </Loading>
          }
        >
          <ThemeButton />
        </Suspense>
      </div>
    </Wrapper>
  )
}

const Wrapper = tw.header`sticky inset-x-0 top-2 z-10 flex items-center justify-between rounded-2xl bg-background-content/30 p-3 ring-[0.5px] ring-foreground/30 backdrop-blur-[1px]`
const Link = tw.a`flex aspect-square w-12 items-center justify-center rounded-xl bg-background font-wellfleet ring-1 ring-foreground/30 hover:bg-background-content`
const Loading = tw.div`flex size-12 cursor-wait items-center justify-center rounded-full bg-background ring-1 ring-foreground/30`
