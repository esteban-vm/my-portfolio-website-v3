import * as Home from '@/components/home'
import { GridCard } from '@/styles/styled'

export default function HomePage() {
  return (
    <main className='grid grow gap-2 md:grid-cols-4 lg:grid-cols-3'>
      {/* About Me */}
      <section className='not-md:order-3 order-first md:col-span-2 lg:col-span-1'>
        <Home.AboutMe />
      </section>

      {/* Call To Action */}
      <section className='order-2 md:col-span-2'>
        <Home.CallToAction />
      </section>

      {/* Date Time */}
      <section className='not-md:order-first order-3 md:col-span-2 lg:col-span-1'>
        <GridCard>
          <Home.DateTime />
        </GridCard>
      </section>

      {/* Contact Me */}
      <section className='not-md:order-last order-4 md:col-span-2'>
        <Home.ContactMe />
      </section>

      {/* Projects */}
      <section className='not-md:order-4 order-last md:col-span-full'>
        <Home.MyProjects />
      </section>
    </main>
  )
}
