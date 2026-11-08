import tw from 'tailwind-styled-components'

export const GlassButton = tw.button`flex size-12 cursor-pointer items-center justify-center rounded-full border border-foreground/30 bg-transparent transition hover:opacity-90 active:scale-95 disabled:opacity-90 [&>svg]:size-2/5`

export const GridCard = tw.div`size-full rounded-2xl bg-background-content p-6 light:shadow-foreground/10 light:shadow-sm`
