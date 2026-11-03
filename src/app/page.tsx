// import Image from 'next/image'

import tw from 'tailwind-styled-components'

export default function HomePage() {
  return (
    <main className='relative mt-4 mb-2 grid grow gap-2.5 px-1 md:grid-cols-4 lg:grid-cols-3'>
      {/* <Image alt='' className='object-cover object-center' fill loading='eager' src='/images/background.webp' /> */}

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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus et cumque eum harum sunt. Adipisci
            quibusdam qui magnam est, dolore, iure labore non placeat itaque laboriosam ipsa doloribus optio accusantium
            repudiandae laudantium ab sapiente aut. Nobis nesciunt, nemo deleniti consectetur exercitationem magnam
            quidem numquam veniam inventore nam asperiores dolore itaque sint molestias? Accusantium quam harum porro
            impedit error aliquid enim saepe tempore nulla obcaecati exercitationem soluta in ea illo unde dolores
            aliquam totam accusamus repudiandae, cumque rem cupiditate! Mollitia laborum voluptate aspernatur reiciendis
            corrupti rerum incidunt ut suscipit, amet labore repellendus autem ipsam quam, ducimus nobis delectus magni
            ipsum, fugit et ipsa dignissimos eligendi. Sit, temporibus illum. Omnis optio in rem aliquid dolorum fugiat
            culpa nesciunt incidunt officia ex?
          </p>
        </Card>
      </section>
    </main>
  )
}

const Card = tw.div`glass glass-surface glass-strength-5 [&_h2]:fl-text-lg/xl size-full rounded-2xl p-6`
