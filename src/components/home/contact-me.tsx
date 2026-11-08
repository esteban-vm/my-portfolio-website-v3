import { getTranslations } from 'next-intl/server'
import { FaExternalLinkAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { GridCard } from '@/styles/styled'

export async function ContactMe() {
  const t = await getTranslations('contact')

  return (
    <GridCard>
      <div className='mx-auto flex w-full max-w-md flex-col'>
        <h2 className='line-clamp-1 font-wellfleet text-foreground/80 text-xl uppercase'>{t('title')}</h2>
        <br />
        <h3 className='font-wellfleet text-foreground/75 uppercase'>Correo electrónico</h3>
        <div className='rounded-lg border border-foreground/30 px-3 py-2'>…</div>
        <h3 className='mt-1 font-wellfleet text-foreground/75 uppercase'>Redes profesionales</h3>
        <div className='flex gap-1'>
          <a
            className='flex w-1/2 items-center gap-1.5 rounded-lg border border-foreground/30 px-3 py-2 hover:opacity-90'
            href='https://github.com/esteban-vm'
            rel='noopener'
            target='_blank'
          >
            <FaGithub className='size-8' />
            <div className='grow'>
              <p className='font-bold text-sm'>GitHub</p>
              <p className='line-clamp-1 text-current/60 text-xs'>@esteban-vm</p>
            </div>
            <FaExternalLinkAlt className='size-4 shrink-0 text-current/60' />
          </a>
          <a
            className='flex w-1/2 items-center gap-1.5 rounded-lg border border-foreground/30 px-3 py-2 hover:opacity-90'
            href='https://www.linkedin.com/in/webdev-esteban/'
            rel='noopener'
            target='_blank'
          >
            <FaLinkedin className='size-8 border-[#0059b3] fill-[#0967C2]' />
            <div className='grow'>
              <p className='font-bold text-sm'>LinkedIn</p>
              <p className='line-clamp-1 text-current/60 text-xs'>in/webdev-esteban</p>
            </div>
            <FaExternalLinkAlt className='size-4 shrink-0 text-current/60' />
          </a>
        </div>
        <h3 className='mt-1 font-wellfleet text-foreground/75 uppercase'>Estado</h3>
        <div className='rounded-lg border border-foreground/30 px-3 py-2'>…</div>
      </div>
    </GridCard>
  )
}
