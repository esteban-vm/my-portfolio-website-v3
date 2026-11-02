import { Banner, Card } from 'open-glass-ui'

export default function HomePage() {
  return (
    <main className='relative mt-4 mb-2 grid grow gap-2.5 px-1 md:grid-cols-4 lg:grid-cols-3'>
      <div className='md:col-span-2 lg:col-span-1'>
        <Card className='size-full' eyebrow='Eye' footer='Footer' title='About'>
          <p className='fl-text-sm/base'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum ex fugiat dolor dolores in odio
            possimus a. Id fugiat architecto pariatur, ullam quod cum voluptatibus officia placeat, unde veritatis culpa
            delectus hic asperiores quibusdam eos ratione fugit quos ea dicta libero ipsum error illum sapiente
            excepturi! Molestiae, aspernatur maiores!
          </p>
        </Card>
      </div>

      <div className='md:col-span-2 lg:col-span-2'>
        <Banner className='size-full' title='CTA'>
          <p className='fl-text-sm/base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum vel reprehenderit a, facere rerum
            cumque eos, unde cupiditate hic repudiandae, eveniet laborum aperiam sequi beatae quisquam corporis quos!
            Commodi aliquid, ullam eaque culpa consequatur quo provident esse ad modi quod sapiente et dolores corrupti
            quaerat laborum fuga?
          </p>
        </Banner>
      </div>

      <div className='md:col-span-2 lg:col-span-1'>
        <div className='glass glass-surface glass-blur-4 glass-saturation-150 glass-brightness-110 glass-strength-5 rounded-xl p-6'>
          Contact
        </div>
      </div>

      <div className='md:col-span-2 lg:col-span-2'>
        <Card className='size-full' eyebrow='Eye' footer='Footer' title='Tech'>
          <p className='fl-text-sm/base'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur reprehenderit qui est dolore
            consectetur, dolorum tenetur dignissimos in quos quaerat. Tempore repellat doloremque sapiente tempora eius
            molestias inventore, minus ad voluptas nemo? Soluta, autem, sapiente voluptatem unde magni ex consectetur
            consequatur nemo eligendi velit quam?
          </p>
        </Card>
      </div>

      <div className='md:col-span-full'>
        <Banner className='size-full' title='Projects'>
          <p className='fl-text-sm/base'>
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
        </Banner>
      </div>
    </main>
  )
}
