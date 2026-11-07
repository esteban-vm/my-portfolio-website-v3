import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import tw from 'tailwind-styled-components'
import { AboutMe, DateTime } from '@/components/home'

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
        <Card>
          <h2>{t('cta.title')}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum vel reprehenderit a, facere rerum
            cumque eos, unde cupiditate hic repudiandae, eveniet laborum aperiam sequi beatae quisquam corporis quos!
            Commodi aliquid, ullam eaque culpa consequatur quo provident esse ad modi quod sapiente et dolores corrupti
            quaerat laborum fuga?
          </p>
        </Card>
      </section>

      {/* DateTime */}
      <section className='not-md:order-first order-3 md:col-span-2 lg:col-span-1'>
        <Card>
          <DateTime />
        </Card>
      </section>

      {/* Contact */}
      <section className='not-md:order-last order-4 md:col-span-2'>
        <Card>
          <h2>{t('contact.title')}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur reprehenderit qui est dolore
            consectetur, dolorum tenetur dignissimos in quos quaerat. Tempore repellat doloremque sapiente tempora eius
            molestias inventore, minus ad voluptas nemo? Soluta, autem, sapiente voluptatem unde magni ex consectetur
            consequatur nemo eligendi velit quam?
          </p>
        </Card>
      </section>

      {/* Projects */}
      <section className='not-md:order-4 order-last md:col-span-full'>
        <Card>
          <h2>{t('projects.title')}</h2>
          <div>
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
        </Card>
      </section>
    </main>
  )
}

const Card = tw.div`size-full rounded-2xl bg-background-content p-6 light:shadow-foreground/10 light:shadow-sm [&_h2]:font-wellfleet [&_h2]:text-2xl`
