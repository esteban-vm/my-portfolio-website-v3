import { getTranslations } from 'next-intl/server'

export async function ContactMe() {
  const t = await getTranslations('contact')

  return (
    <div className='size-full rounded-2xl bg-background-content p-6 light:shadow-foreground/10 light:shadow-sm'>
      <h2 className='line-clamp-1 font-wellfleet text-foreground/80 text-xl uppercase'>{t('title')}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur reprehenderit qui est dolore consectetur,
        dolorum tenetur dignissimos in quos quaerat. Tempore repellat doloremque sapiente tempora eius molestias
        inventore, minus ad voluptas nemo? Soluta, autem, sapiente voluptatem unde magni ex consectetur consequatur nemo
        eligendi velit quam?
      </p>
    </div>
  )
}
