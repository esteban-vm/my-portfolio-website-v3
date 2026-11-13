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
export const projects: Project[] = [
  { title: 'Project 1', slug: 'project_1' },
  { title: 'Project 2', slug: 'project_2' },
  { title: 'Project 3', slug: 'project_3' },
  { title: 'Project 4', slug: 'project_4' },
  { title: 'Project 5', slug: 'project_5' },
  { title: 'Project 6', slug: 'project_6' },
  { title: 'Project 7', slug: 'project_7' },
  { title: 'Project 8', slug: 'project_8' },
]
