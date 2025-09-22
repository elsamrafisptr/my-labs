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
  name: string
}

interface EducationProps {
  name: string
}

interface OrganizationProps {
  name: string
}

interface ProjectProps {
  name: string
}

interface AchievementProps {
  name: string
}

interface ResumeProps {
  name: string
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
}

export type {
  NavbarProps,
  FooterProps,
  WorkProps,
  EducationProps,
  OrganizationProps,
  ProjectProps,
  AchievementProps,
  ResumeProps
}
