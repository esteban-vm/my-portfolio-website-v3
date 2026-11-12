import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
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
        <GridCard className='flex flex-col items-center justify-center text-center'>
          <h2 className='shimmering motion-safe:animate-shimmer'>{t('cta.title')}</h2>
          <p className='text-foreground/80'>{t('cta.text')}</p>
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
        <GridCard>
          <h2 className='font-wellfleet text-2xl text-foreground/80'>{t('projects.title')}</h2>
          <div className='[&_p]:text-foreground/70 [&_p]:leading-5'>
            {projects.map((project) => {
              return (
                <p key={project.slug}>
                  <Link className='text-sky-500 hover:opacity-80' href={`/projects/${project.slug}`} scroll={false}>
                    {project.title}
                  </Link>
                </p>
              )
            })}
          </div>
        </GridCard>
      </section>
    </main>
  )
}
