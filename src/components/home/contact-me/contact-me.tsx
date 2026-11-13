import { getTranslations } from 'next-intl/server'
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6'
import tw from 'tailwind-styled-components'
import { GridCard } from '@/styles/styled'
import { EmailLink } from './email-link'
import { SocialLink } from './social-link'

export async function ContactMe() {
  const t = await getTranslations('contact_me')

  return (
    <GridCard>
      <div className='mx-auto flex w-full max-w-md flex-col'>
        <Title>{t('title')}</Title>
        <Label>{t('email')}</Label>
        <EmailLink />
        <Label className='mt-1.5'>{t('networks')}</Label>
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
        <Label className='mt-1.5'>{t('status')}</Label>
        <Status>
          <div className='size-3 rounded-full bg-current motion-safe:animate-pulse' />
          <span>{t('status_text')}</span>
        </Status>
      </div>
    </GridCard>
  )
}

const Title = tw.h2`mb-2 line-clamp-1 font-wellfleet text-lg uppercase lg:text-xl`
const Label = tw.h3`text-foreground/75 text-sm`
const Status = tw.div`flex items-center gap-2 rounded-lg border border-foreground/10 bg-background px-3 py-2 font-semibold text-emerald-500 text-sm uppercase dark:text-emerald-300`
