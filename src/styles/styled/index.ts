import tw from 'tailwind-styled-components'

export const CircleButton = tw.button`flex size-12 cursor-pointer items-center justify-center rounded-full bg-background ring-1 ring-foreground/30 transition hover:bg-background-content active:scale-[99%] disabled:opacity-90 [&>svg]:size-2/5`

export const GridCard = tw.div`flex size-full flex-col items-center justify-center rounded-2xl bg-background-content px-3.5 py-4.5 light:shadow-sm shadow-foreground/10 lg:px-4.5 lg:py-5.5`
