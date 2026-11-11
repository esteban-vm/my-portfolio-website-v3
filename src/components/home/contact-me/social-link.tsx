import type { IconType } from 'react-icons'
import { FaExternalLinkAlt } from 'react-icons/fa'
import tw from 'tailwind-styled-components'
import { cn } from '@/lib/ui'

interface SocialLinkProps {
  title: string
  subtitle: string
  href: string
  className: string
  icon: IconType
}

export function SocialLink({ title, subtitle, href, className, icon: Icon }: SocialLinkProps) {
  return (
    <Wrapper href={href} rel='noopener' target='_blank'>
      <Icon className={cn('size-8 shrink-0 rounded-sm dark:bg-white', className)} />
      <div className='grow'>
        <p className='font-bold text-sm'>{title}</p>
        <p className='line-clamp-1 text-current/60 text-xs'>{subtitle}</p>
      </div>
      <FaExternalLinkAlt className='size-4 shrink-0 text-current/60' />
    </Wrapper>
  )
}

const Wrapper = tw.a`flex w-1/2 items-center justify-center gap-1.5 rounded-lg border border-foreground/10 bg-background px-3 py-2 font-geist hover:opacity-90`
