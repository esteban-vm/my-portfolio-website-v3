import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { FaDownload } from 'react-icons/fa'
import { AboutMe, ContactMe, DateTime } from '@/components/home'
import { projects } from '@/lib/constants'
import { GridCard } from '@/styles/styled'

export default async function HomePage() {
  const t = await getTranslations()

  return (
    <main className='grid grow gap-2 md:grid-cols-4 lg:grid-cols-3'>
      {/* About Me */}
      <section className='not-md:order-3 order-first md:col-span-2 lg:col-span-1'>
        <AboutMe />
      </section>

      {/* CTA */}
      <section className='order-2 md:col-span-2'>
        <GridCard className='gap-2 text-center font-wellfleet uppercase'>
          <h1 className='text-balance font-bold text-4xl'>{t('cta.title')}</h1>
          <h2 className='text-pretty text-foreground/80 text-xl'>{t('cta.subtitle')}</h2>
          <button
            className='flex items-center gap-2 rounded-lg border border-foreground/30 px-3 py-1.5 font-geist text-sm hover:opacity-80'
            type='button'
          >
            <FaDownload />
            <span>{t('cta.button')}</span>
          </button>
        </GridCard>
      </section>

      {/* Date Time */}
      <section className='not-md:order-first order-3 md:col-span-2 lg:col-span-1'>
        <GridCard>
          <DateTime />
        </GridCard>
      </section>

      {/* Contact Me */}
      <section className='not-md:order-last order-4 md:col-span-2'>
        <ContactMe />
      </section>

      {/* Projects */}
      <section className='not-md:order-4 order-last md:col-span-full'>
        <GridCard className='items-start'>
          <h2 className='font-wellfleet text-xl uppercase'>{t('projects.title')}</h2>
          <div className='scrollbar-none! size-full h-52 snap-y snap-mandatory overflow-auto scroll-smooth rounded-lg'>
            {projects.map((project) => {
              return (
                <div className='h-1/3 snap-start scroll-m-0 bg-background p-1' key={project.slug}>
                  <div className='flex size-full flex-col justify-center rounded-lg border border-foreground/10 bg-background-content'>
                    <Link
                      className='w-fit text-sky-500 hover:opacity-80 dark:text-sky-300'
                      href={`/projects/${project.slug}`}
                      scroll={false}
                    >
                      {project.title}
                    </Link>
                    <p className='truncate'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod nihil laborum distinctio
                      inventore sed vel voluptates, aliquid tenetur natus sunt aspernatur doloremque nam. Voluptatem
                      beatae quis ipsam amet enim quam explicabo officia nostrum quae ipsum, aspernatur, itaque vel
                      expedita unde earum id, odit non animi libero doloribus optio voluptatum?
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </GridCard>
      </section>
    </main>
  )
}
