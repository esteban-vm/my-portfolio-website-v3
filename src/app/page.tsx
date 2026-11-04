import Link from 'next/link'
import tw from 'tailwind-styled-components'

export default function HomePage() {
  return (
    <main className='relative mt-4 mb-2 grid grow gap-2.5 md:grid-cols-4 lg:grid-cols-3'>
      <section className='md:col-span-2 lg:col-span-1'>
        <Card>
          <h2>About</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum ex fugiat dolor dolores in odio
            possimus a. Id fugiat architecto pariatur, ullam quod cum voluptatibus officia placeat, unde veritatis culpa
            delectus hic asperiores quibusdam eos ratione fugit quos ea dicta libero ipsum error illum sapiente
            excepturi! Molestiae, aspernatur maiores!
          </p>
        </Card>
      </section>

      <section className='md:col-span-2 lg:col-span-2'>
        <Card>
          <h2>CTA</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum vel reprehenderit a, facere rerum
            cumque eos, unde cupiditate hic repudiandae, eveniet laborum aperiam sequi beatae quisquam corporis quos!
            Commodi aliquid, ullam eaque culpa consequatur quo provident esse ad modi quod sapiente et dolores corrupti
            quaerat laborum fuga?
          </p>
        </Card>
      </section>

      <section className='md:col-span-2 lg:col-span-1'>
        <Card>
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi quod adipisci unde blanditiis dolor
            non. Nisi, modi quos? Suscipit.
          </p>
        </Card>
      </section>

      <section className='md:col-span-2 lg:col-span-2'>
        <Card>
          <h2>Tech</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur reprehenderit qui est dolore
            consectetur, dolorum tenetur dignissimos in quos quaerat. Tempore repellat doloremque sapiente tempora eius
            molestias inventore, minus ad voluptas nemo? Soluta, autem, sapiente voluptatem unde magni ex consectetur
            consequatur nemo eligendi velit quam?
          </p>
        </Card>
      </section>

      <section className='md:col-span-full'>
        <Card>
          <h2>Projects</h2>
          <div>
            <Link href='/projects/1'>Project 1</Link>
          </div>
        </Card>
      </section>
    </main>
  )
}

const Card = tw.div`[&_h2]:fl-text-lg/xl size-full rounded-2xl bg-background-content p-6`
