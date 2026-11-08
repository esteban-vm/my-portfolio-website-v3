import type { IconType } from 'react-icons'
import { getTranslations } from 'next-intl/server'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6'
import tw from 'tailwind-styled-components'
import { cn } from '@/lib/ui'
import { GridCard } from '@/styles/styled'

export async function ContactMe() {
  const t = await getTranslations('contact')

  return (
    <GridCard>
      <div className='mx-auto flex w-full max-w-md flex-col'>
        <Title>{t('title')}</Title>
        <br />
        <Subtitle>Correo electrónico</Subtitle>
        <div className='rounded-lg border border-foreground/30 px-3 py-2'>…</div>
        <Subtitle className='mt-1'>Redes profesionales</Subtitle>
        <div className='flex gap-1'>
          <SocialLink
            className='text-black'
            href='https://github.com/esteban-vm'
            icon={FaSquareGithub}
            subtitle='@esteban-vm'
            title='GitHub'
          />
          <SocialLink
            className='text-[#0967C2]'
            href='https://www.linkedin.com/in/webdev-esteban/'
            icon={FaLinkedin}
            subtitle='in/webdev-esteban'
            title='LinkedIn'
          />
        </div>
        <Subtitle className='mt-1'>Estado</Subtitle>
        <div className='rounded-lg border border-foreground/30 px-3 py-2'>…</div>
      </div>
    </GridCard>
  )
}

interface SocialLinkProps {
  title: string
  subtitle: string
  href: string
  className: string
  icon: IconType
}

function SocialLink({ title, subtitle, href, className, icon: Icon }: SocialLinkProps) {
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

const Title = tw.h2`line-clamp-1 font-wellfleet text-foreground/80 text-xl uppercase`
const Subtitle = tw.h3`font-wellfleet text-foreground/75 uppercase`
