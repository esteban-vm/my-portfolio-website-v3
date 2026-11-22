import { getTranslations } from 'next-intl/server'
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6'
import tw from 'tailwind-styled-components'
import { GridCard } from '@/styles/styled'
import { EmailLink } from './email-link'
import { MyStatus } from './my-status'
import { SocialLink } from './social-link'

export async function ContactMe() {
  const t = await getTranslations('contact_me')

  return (
    <GridCard>
      <Content>
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
        <MyStatus />
      </Content>
    </GridCard>
  )
}

const Content = tw.div`mx-auto flex w-full max-w-md flex-col`
const Title = tw.h2`mb-2 line-clamp-1 font-wellfleet text-lg uppercase lg:text-xl`
const Label = tw.h3`text-foreground/75 text-sm`
