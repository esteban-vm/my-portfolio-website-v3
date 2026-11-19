import type { Project } from '@/types'

// i18n
export const LOCALES = ['en', 'es'] as const
export const LOCALE_COOKIE = 'MY_PORTFOLIO_LOCALE'

// Theming
export const THEME_STORAGE = 'MY_PORTFOLIO_THEME'
export const THEME_COOKIE = 'MY_PORTFOLIO_THEME'

// UI
export const MODAL_ROOT_ID = 'modal-root'
export const CONTAINER_ID = 'container'

// Data
export const NAME = 'Esteban V.M.'
export const EMAIL = 'estebanvm1990@gmail.com'

// Projects
export const PROJECTS: Project[] = [
  {
    title: 'Teslo Shop',
    description:
      'Tienda virtual de ropas ficticia hecha con Next.js, TailwindCSS, Prisma y PostgreSQL. Cuenta con exploración del catálogo de artículos en base al género, autenticación de clientes, protección de rutas, permisos basados en roles y cambio de tema a claro u oscuro según preferencias del usuario.',
    slug: 'project_1',
    repo: 'https://github.com/esteban-vm/my-teslo-shop',
    demo: 'https://my-teslo-shop.vercel.app/',
    screenshot: '',
  },
  {
    title: 'VidTube',
    description: 'Clon de YouTube',
    slug: 'project_2',
    repo: 'https://github.com/esteban-vm/youtube-clone',
    demo: 'https://youtube-clone-six-liard.vercel.app/',
    screenshot: '',
  },
  {
    title: 'Nextflix',
    description: 'Clon de Netflix',
    slug: 'project_3',
    repo: 'https://github.com/esteban-vm/nextflix',
    demo: 'https://nextflix-jade.vercel.app/',
    screenshot: '',
  },
  {
    title: 'React AI Chatbot',
    description: 'Chatbot de IA',
    slug: 'project_4',
    repo: 'https://github.com/esteban-vm/react-ai-chatbot',
    demo: 'https://react-ai-chatbot-tawny.vercel.app/',
    screenshot: '',
  },
  {
    title: 'Instagram Clone',
    description: 'Clon de Instagram',
    slug: 'project_5',
    repo: 'https://github.com/esteban-vm/instagram-clone-v2',
    demo: 'https://instagram-clone-v2-mu.vercel.app/',
    screenshot: '',
  },
  {
    title: 'Snap Tiles',
    description: 'Buscador de imágenes',
    slug: 'project_6',
    repo: 'https://github.com/esteban-vm/snap-tiles',
    demo: 'https://snap-tiles-beryl.vercel.app/',
    screenshot: '',
  },
  {
    title: 'Note App',
    description: 'Aplicación de notas',
    slug: 'project_7',
    repo: 'https://github.com/esteban-vm/note-app',
    demo: 'https://note-app-esteban-vm.vercel.app/',
    screenshot: '',
  },
  {
    title: 'Calculator',
    description: 'Aplicación de calculadora',
    slug: 'project_8',
    repo: 'https://github.com/esteban-vm/calculator',
    demo: 'https://calculator-esteban-vm.vercel.app/',
    screenshot: '',
  },
]
