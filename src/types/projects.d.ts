export interface BaseProject {
  title: string
  repo: string
  demo: string
  screenshot: string
}

export interface Project extends BaseProject {
  description: string
  slug: string
}
