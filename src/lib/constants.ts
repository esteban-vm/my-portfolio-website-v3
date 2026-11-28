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
      'Tienda virtual de ropas ficticia hecha con Next.js App Router, DaisyUI (TailwindCSS), TypeScript, Prisma ORM y PostgreSQL. Cuenta con exploración del catálogo de artículos en base al género, autenticación de clientes y administradores, protección de rutas, permisos basados en roles y cambio de tema a claro u oscuro según preferencias del usuario. Los datos son traídos de una base de datos PostgreSQL externa alojada en NeonDB y las imágenes de productos nuevos se suben a una nube de Cloudinary',
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
      'Clon de Netflix hecho con Next.js App Router, Shadcn (TailwindCSS), Prisma ORM y TypeScript. Cuenta con autenticación básica (correo electrónico con contraseña), exploración de películas y tendencias actuales (con datos de ejemplo traídos de una base de datos PostgreSQL externa alojada en NeonDB y archivos multimedia alojados en Cloudinary), posibilidad de añadir múltiples perfiles por usuario y agregar favoritos.',
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
    title: 'Clon de Instagram',
    description:
      'Clon de Instagram hecho con Next.js App Router, DaisyUI (TailwindCSS), TypeScript, Prisma ORM y PostgreSQL. Cuenta con autenticación básica (correo electrónico con contraseña), exploración de fotos, posibilidad de cambio de tema (claro/oscuro) e idioma (inglés/español)',
    slug: 'project_5',
    repo: 'https://github.com/esteban-vm/instagram-clone-v2',
    demo: 'https://instagram-clone-v2-mu.vercel.app/',
    screenshot: '',
  },
  {
    title: 'Buscador de imágenes',
    description:
      'Buscador simple y seguro de imágenes hecho con Next.js App Router, DaisyUI (TailwindCSS) y TypeScript. Hace uso de la API de Pixabay para obtener las imágenes, cuenta con un campo de búsqueda diferida, además de poder ver las imágenes a modo de presentación de diapositivas y/o a pantalla completa, entre otras opciones.',
    slug: 'project_6',
    repo: 'https://github.com/esteban-vm/snap-tiles',
    demo: 'https://snap-tiles-beryl.vercel.app/',
    screenshot: '',
  },
  {
    title: 'Calculadora',
    description:
      'Aplicación simple de calculadora hecha con Vite, React, TypeScript y Emotion. Tiene cambio de tema (claro/oscuro), realiza operaciones aritméticas básicas (suma, resta, multiplicación y división), además cuenta con botones para cambio de signo (+/-), limpiar todo (AC), limpiar entrada (CE) y coma decimal, además de no permitir realizar divisiones por cero. Tiene posibilidad de instalación como PWA para usarla sin conexión así como poder utilizar el teclado para ingresar las cantidades y/o realizar las operaciones.',
    slug: 'project_7',
    repo: 'https://github.com/esteban-vm/calculator',
    demo: 'https://calculator-esteban-vm.vercel.app/',
    screenshot: '',
  },
  {
    title: 'Juego de conecta 4',
    description:
      'Versión web simple del juego de conectar 4 puntos de forma seguida tanto de forma vertical o diagonal; hecho con Vite, React y TypeScript. Se puede jugar por turnos de 2 jugadores o contra la máquina.',
    slug: 'project_8',
    repo: 'https://github.com/esteban-vm/connect-4-game-v2',
    demo: 'https://connect-4-game-v2.vercel.app/',
    screenshot: '',
  },
  {
    title: 'Juego de cartas',
    description:
      'Juego de cartas simple hecho con Vite, TypeScript y Phaser. Se usó programación orientada a objetos para el desarrollo, además de la API de Canvas HTML. Se puede jugar tanto en móvil como en PC arrastrando las cartas.',
    slug: 'project_9',
    repo: 'https://github.com/esteban-vm/card-game',
    demo: 'https://card-game-ruby.vercel.app/',
    screenshot: '',
  },
  {
    title: 'Juego de zombies',
    description:
      'Juego simple de disparos a zombies hecho con Vite, TypeScript y PixiJS. Se usó programación orientada a objetos para el desarrollo, además de la API de Canvas HTML. Se puede jugar tanto en móvil como en PC, y cuenta con variedad de enemigos, música, efectos de sonido y de clima y barra de salud del jugador',
    slug: 'project_10',
    repo: 'https://github.com/esteban-vm/zombie-horde-game',
    demo: 'https://zombie-horde-game.vercel.app/',
    screenshot: '',
  },
  {
    title: 'Juego de supervivencia',
    description:
      'Juego simple de supervivencia hecho con Vite, TypeScript y Phaser. Se usó programación orientada a objetos para el desarrollo, además de la API de Canvas HTML. Se recomienda jugar en PC o con un teclado, y cuenta con variedad de recursos y enemigos contra los que defenderse y/o atacar, así como efectos de sonido simples.',
    slug: 'project_11',
    repo: 'https://github.com/esteban-vm/survival-game',
    demo: 'https://survival-game-rosy.vercel.app/',
    screenshot: '',
  },
  {
    title: 'Página de destino ficticia',
    description:
      'Página de destino para una agencia de diseño gráfico ficticia hecha con Next.js App Router, TypeScript y TailwindCSS; cuenta con secciones de Header, Servicios, Equipo, Portafolio, Testimonios, Contacto con validación de formulario y Footer. Cuenta con efectos de ondas para el fondo con SVG, animaciones hechas exclusivamente con CSS, además de un carrusel con un mínimo de JavaScript para su funcionalidad.',
    slug: 'project_12',
    repo: 'https://github.com/esteban-vm/bizwizz',
    demo: 'https://bizwizz.vercel.app/',
    screenshot: '',
  },
  {
    title: 'Página de destino ficticia',
    description:
      'Página de destino para una agencia digital ficticia hecha con Next.js App Router, TypeScript y Emotion; cuenta con secciones de Header, llamada a la acción, Portafolio, Servicios, Testimonios, Precios y Footer, además de un formulario de contacto con validaciones previas al envío. La experiencia de usuario de complementa con animaciones hechas completamente con CSS, sin JavaScript.',
    slug: 'project_13',
    repo: 'https://github.com/esteban-vm/digisolve',
    demo: 'https://digisolve-xi.vercel.app/',
    screenshot: '',
  },
]
