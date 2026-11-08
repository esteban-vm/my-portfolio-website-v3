import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { AboutMe, ContactMe, DateTime } from '@/components/home'
import { HomeCard } from '@/components/shared'

export default async function HomePage() {
  const t = await getTranslations()

  return (
    <main className='relative mt-4 mb-2 grid grow gap-2 md:grid-cols-4 lg:grid-cols-3'>
      {/* About Me */}
      <section className='not-md:order-2 order-first md:col-span-2 lg:col-span-1'>
        <AboutMe />
      </section>

      {/* CTA */}
      <section className='not-md:order-3 order-2 md:col-span-2'>
        <HomeCard>
          <h2 className='font-wellfleet text-2xl'>{t('cta.title')}</h2>
          <p className='text-foreground/70 leading-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum vel reprehenderit a, facere rerum
            cumque eos, unde cupiditate hic repudiandae, eveniet laborum aperiam sequi beatae quisquam corporis quos!
            Commodi aliquid, ullam eaque culpa consequatur quo provident esse ad modi quod sapiente et dolores corrupti
            quaerat laborum fuga?
          </p>
        </HomeCard>
      </section>

      {/* Date Time */}
      <section className='not-md:order-first order-3 md:col-span-2 lg:col-span-1'>
        <HomeCard>
          <DateTime />
        </HomeCard>
      </section>

      {/* Contact Me */}
      <section className='not-md:order-last order-4 md:col-span-2'>
        <ContactMe />
      </section>

      {/* Projects */}
      <section className='not-md:order-4 order-last md:col-span-full'>
        <HomeCard>
          <h2 className='font-wellfleet text-2xl'>{t('projects.title')}</h2>
          <div className='[&_p]:text-foreground/70 [&_p]:leading-5'>
            <p>
              <Link className='text-sky-500 hover:opacity-80' href='/projects/1' scroll={false}>
                Project 1
              </Link>
            </p>
            <p>
              <Link className='text-sky-500 hover:opacity-80' href='/projects/2' scroll={false}>
                Project 2
              </Link>
            </p>
            <p>
              <Link className='text-sky-500 hover:opacity-80' href='/projects/3' scroll={false}>
                Project 3
              </Link>
            </p>
          </div>
        </HomeCard>
      </section>
    </main>
  )
}
