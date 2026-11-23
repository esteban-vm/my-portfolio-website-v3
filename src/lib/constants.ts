import type { Project } from '@/types/projects'

// i18n
export const LOCALES = ['en', 'es'] as const
export const LOCALE_COOKIE = 'MY_PORTFOLIO_LOCALE'

// Theming
export const THEME_STORAGE = 'MY_PORTFOLIO_THEME'
export const THEME_COOKIE = 'MY_PORTFOLIO_THEME'

// UI
export const MODAL_ROOT_ID = 'modal-root'
export const CONTAINER_ID = 'container'

// Metadata
export const NAME = 'Esteban V.M.'
export const EMAIL = 'estebanvm1990@gmail.com'

// Projects
export const PROJECTS: Project[] = [
  {
    title: 'Teslo Shop',
    description:
      'Tienda virtual de ropas ficticia hecha con Next.js App Router, DaisyUI (TailwindCSS), Prisma ORM y PostgreSQL. Cuenta con exploración del catálogo de artículos en base al género, autenticación de clientes y administradores, protección de rutas, permisos basados en roles y cambio de tema a claro u oscuro según preferencias del usuario. Los datos son traídos de una base de datos PostgreSQL externa alojada en NeonDB y las imágenes de productos nuevos se suben a una nube de Cloudinary',
    slug: 'project_1',
    repo: 'https://github.com/esteban-vm/my-teslo-shop',
    demo: 'https://my-teslo-shop.vercel.app/',
    screenshot: '',
  },
  {
    title: 'VidTube',
    description:
      'Clon de YouTube hecho con Next.js App Router, DaisyUI (TailwindCSS) y TypeScript. Hace uso de la API de YouTube y cuenta con buscador de videos, exploración temática de videos y cambio de tema a claro u oscuro persistente en LocalStorage.',
    slug: 'project_2',
    repo: 'https://github.com/esteban-vm/youtube-clone',
    demo: 'https://youtube-clone-six-liard.vercel.app/',
    screenshot: '',
  },
  {
    title: 'Nextflix',
    description:
      'Clon de Netflix hecho con Next.js App Router, Shadcn (TailwindCSS), Prisma ORM y TypeScript. Cuenta con autenticación básica (correo electrónico y contraseña), exploración de películas y tendencias actuales (con datos de ejemplo traídos de una base de datos PostgreSQL externa alojada en NeonDB y archivos multimedia alojados en Cloudinary), posibilidad de añadir múltiples perfiles por usuario y agregar favoritos.',
    slug: 'project_3',
    repo: 'https://github.com/esteban-vm/nextflix',
    demo: 'https://nextflix-jade.vercel.app/',
    screenshot: '',
  },
  {
    title: 'Chatbot de IA',
    description:
      'Chatbot de IA hecho con Vite, React y TypeScript. Hace uso de la API de Gemini para generar las conversaciones, cuenta con posibilidad de cambio de idioma y tema de la interfaz, además de poder escribir y recibir mensajes renderizados como Markdown e instalar la aplicación de manera local como una PWA.',
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
    title: 'Calculadora',
    description: 'Aplicación de calculadora',
    slug: 'project_7',
    repo: 'https://github.com/esteban-vm/calculator',
    demo: 'https://calculator-esteban-vm.vercel.app/',
    screenshot: '',
  },
  {
    title: 'Página de destino ficticia 1',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ab recusandae, doloremque deserunt distinctio nam.',
    slug: 'project_8',
    repo: 'https://github.com/esteban-vm/bizwizz',
    demo: 'https://bizwizz.vercel.app/',
    screenshot: '',
  },
  {
    title: 'Página de destino ficticia 2',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ab recusandae, doloremque deserunt distinctio nam.',
    slug: 'project_9',
    repo: 'https://github.com/esteban-vm/digisolve',
    demo: 'https://digisolve-xi.vercel.app/',
    screenshot: '',
  },
]
