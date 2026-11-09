import type { IconType } from 'react-icons'
import { FaExternalLinkAlt } from 'react-icons/fa'
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
    <a
      className='flex w-1/2 items-center gap-1.5 rounded-lg border border-foreground/30 px-3 py-2 hover:opacity-90'
      href={href}
      rel='noopener'
      target='_blank'
    >
      <Icon className={cn('size-8 shrink-0 dark:rounded-sm dark:bg-white', className)} />
      <div className='grow'>
        <p className='font-bold text-sm'>{title}</p>
        <p className='line-clamp-1 text-current/60 text-xs'>{subtitle}</p>
      </div>
      <FaExternalLinkAlt className='size-4 shrink-0 text-current/60' />
    </a>
  )
}
