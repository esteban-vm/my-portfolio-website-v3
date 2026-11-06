import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@teispace/next-themes'
import { getTheme, getThemeScriptProps } from '@teispace/next-themes/server'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import tw from 'tailwind-styled-components'
import { Header } from '@/components/home'
import { PROJECT_MODAL_ID, THEME_COOKIE, THEME_STORAGE } from '@/lib/constants'
import { Geist, Wellfleet } from '@/lib/fonts'
import '@/styles/globals.css'

export const instant = false

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata')

  return {
    title: {
      default: t('title.default'),
      template: t('title.template'),
    },
    description: t('description'),
    keywords: [t('keywords.1'), t('keywords.2'), t('keywords.3'), t('keywords.4')],
    authors: { name: 'Esteban V.M.', url: 'https://github.com/esteban-vm' },
    generator: 'Next.js',
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default async function RootLayout({ children, modals }: LayoutProps<'/'>) {
  const locale = await getLocale()
  const initialTheme = (await getTheme()) ?? ''

  return (
    <html
      className={`${Geist.variable} ${Wellfleet.variable} h-full antialiased`}
      dir='ltr'
      lang={locale}
      suppressHydrationWarning
    >
      <head>
        <script {...getThemeScriptProps({ attribute: 'class', initialTheme })} />
      </head>
      <body className='relative h-full'>
        <ThemeProvider
          attribute='class'
          cookieOptions={{ name: THEME_COOKIE }}
          defaultTheme='system'
          disableTransitionOnChange
          enableColorScheme={false}
          enableSystem
          initialTheme={initialTheme}
          noScript
          storage='hybrid'
          storageKey={THEME_STORAGE}
          themes={['light', 'dark']}
        >
          <NextIntlClientProvider>
            <Background>
              <Container>
                <Header />
                {children}
                {modals}
                <Footer>
                  <small>© Esteban V.M.</small>
                  <small className='float-end'>Built with Next.js & Tailwind</small>
                </Footer>
              </Container>
              <div id={PROJECT_MODAL_ID} />
            </Background>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

const Background = tw.div`fixed inset-0 size-full overflow-auto bg-background text-foreground`
const Container = tw.div`relative mx-auto flex min-h-full w-full max-w-7xl flex-col px-2 font-geist`
const Footer = tw.footer`mb-2 shrink-0 grow-0 px-3 font-wellfleet text-foreground/50`
