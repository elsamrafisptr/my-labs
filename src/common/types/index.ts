import { ReactNode } from 'react'

interface NavbarProps {
  name: string
  url: string
}

interface FooterProps {
  name: string
  icon: ReactNode
  url: string
}

interface WorkProps {
  title: string
  href: string
  name: string
  desc: string
  location: string
  type: string
  status: string
  imageUrl: string
  website: string
  start: string
  end: string
  content: ReactNode
}

interface EducationProps {
  title: string
  href: string
  name: string
  score: string
  location: string
  imageUrl: string
  website: string
  start: string
  end: string
  content: ReactNode
}

interface OrganizationProps {
  title: string
  href: string
  name: string
  desc: string
  location: string
  type: string
  imageUrl: string
  website: string
  start: string
  end: string
  content: ReactNode
}

interface ProjectProps {
  accelerator: string
  href: string
  name: string
  desc: string
  imageUrl: string
  website: string
  github: string
  year: string
  stacks: string[]
  content: ReactNode
}

interface AchievementProps {
  accelerator: string
  href: string
  name: string
  desc: string
  imageUrl: string
  credential: string
  year: string
}

interface CompetitionProps {
  accelerator: string
  href: string
  name: string
  desc: string
  imageUrl: string
  credential: string
  year: string
}

interface BlogProps {
  title: string
  publishedAt: string
  summary?: string
  image?: string
  content?: ReactNode
}

interface ResumeProps {
  name: string
  role: string
  initials: string
  url: string
  location: string
  locationLink: string
  description: string
  avatarUrl: string
  skills: string[]

  navbar: NavbarProps[]
  footer: FooterProps[]

  works: WorkProps[]
  educations: EducationProps[]
  organizations: OrganizationProps[]
  projects: ProjectProps[]
  achievements: AchievementProps[]
  competitions: CompetitionProps[]

  blogs: BlogProps[]
}

export type {
  NavbarProps,
  FooterProps,
  WorkProps,
  EducationProps,
  OrganizationProps,
  ProjectProps,
  AchievementProps,
  BlogProps,
  ResumeProps
}
