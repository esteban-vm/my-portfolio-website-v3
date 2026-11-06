import { ScrollButton } from './scroll-button'

export function Footer() {
  return (
    <footer className='mb-2 flex shrink-0 grow-0 items-center justify-between px-3 font-wellfleet text-foreground/50'>
      <small className='basis-1/3'>© Esteban V.M.</small>
      <ScrollButton />
      <small className='basis-1/3 truncate text-right'>Built with Next.js & Tailwind</small>
    </footer>
  )
}
