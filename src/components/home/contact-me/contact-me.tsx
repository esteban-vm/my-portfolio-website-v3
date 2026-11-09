import { getTranslations } from 'next-intl/server'
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6'
import tw from 'tailwind-styled-components'
import { GridCard } from '@/styles/styled'
import { EmailLink } from './email-link'
import { SocialLink } from './social-link'

export async function ContactMe() {
  const t = await getTranslations('contact')

  return (
    <GridCard>
      <div className='mx-auto flex w-full max-w-md flex-col'>
        <Title>{t('title')}</Title>
        <Subtitle>Correo electrónico</Subtitle>
        <EmailLink />
        <Subtitle className='mt-1.5'>Redes profesionales</Subtitle>
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
        <Subtitle className='mt-1.5'>Estado</Subtitle>
        <div className='rounded-lg border border-foreground/30 px-3 py-2'>…</div>
      </div>
    </GridCard>
  )
}

const Title = tw.h2`mb-2 line-clamp-1 font-wellfleet text-foreground/80 text-xl uppercase`
const Subtitle = tw.h3`font-wellfleet text-foreground/75 text-lg`
