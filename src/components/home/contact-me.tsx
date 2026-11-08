import { getTranslations } from 'next-intl/server'
import { HomeCard } from '@/styles/styled'

export async function ContactMe() {
  const t = await getTranslations('contact')

  return (
    <HomeCard>
      <h2 className='line-clamp-1 font-wellfleet text-foreground/80 text-xl uppercase'>{t('title')}</h2>
      <p className='text-foreground/70 leading-5'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur reprehenderit qui est dolore consectetur,
        dolorum tenetur dignissimos in quos quaerat. Tempore repellat doloremque sapiente tempora eius molestias
        inventore, minus ad voluptas nemo? Soluta, autem, sapiente voluptatem unde magni ex consectetur consequatur nemo
        eligendi velit quam?
      </p>
    </HomeCard>
  )
}
