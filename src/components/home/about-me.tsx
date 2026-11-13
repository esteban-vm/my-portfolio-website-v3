import { getTranslations } from 'next-intl/server'
import tw from 'tailwind-styled-components'
import { NAME } from '@/lib/constants'
import { GridCard } from '@/styles/styled'

export async function AboutMe() {
  const t = await getTranslations('about_me')

  return (
    <GridCard className='items-start'>
      <Title>{NAME}</Title>
      <Subtitle>{t('subtitle')}</Subtitle>
      <Text>
        {t.rich('text', {
          name: NAME.slice(0, NAME.indexOf(' ')),
          important: (chunks) => <span className='font-semibold'>{chunks}</span>,
        })}
      </Text>
    </GridCard>
  )
}

const Title = tw.h2`font-bold font-wellfleet text-3xl uppercase`
const Subtitle = tw.h3`mb-2 line-clamp-1 font-wellfleet text-foreground/80 text-xl uppercase`
const Text = tw.p`text-balance text-foreground/70 text-sm`
