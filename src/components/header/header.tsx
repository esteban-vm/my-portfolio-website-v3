import { getTranslations } from 'next-intl/server'
import { LanguageButton } from './language-button'
import { ThemeButton } from './theme-button'

export async function Header() {
  const t = await getTranslations()

  return (
    <header className='glass glass-surface sticky inset-x-0 top-2 z-10 flex items-center justify-between rounded-2xl px-4 py-3'>
      <span className='font-semibold'>{t('test')}</span>
      <div className='flex gap-1.5'>
        <LanguageButton />
        <ThemeButton />
      </div>
    </header>
  )
}
