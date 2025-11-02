import { resume } from '@/common/constants'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(input = '') {
  return input
    .normalize?.('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export function getWorks(prefix: boolean = false) {
  return (resume?.works || []).map(item => {
    const base = `${item.title ?? ''} ${item.name ?? ''}`
    const slugBase = slugify(base)
    const slug = prefix ? `works/${slugBase}` : slugBase

    return { ...item, slug }
  })
}

export function getOrganizations(prefix: boolean = false) {
  return (resume?.organizations || []).map(item => {
    const base = `${item.title ?? ''} ${item.name ?? ''}`
    const slugBase = slugify(base)
    const slug = prefix ? `organizations/${slugBase}` : slugBase

    return { ...item, slug }
  })
}

export function getEducations(prefix: boolean = false) {
  return (resume?.educations || []).map(item => {
    const base = `${item.title ?? ''} ${item.name ?? ''}`
    const slugBase = slugify(base)
    const slug = prefix ? `educations/${slugBase}` : slugBase

    return { ...item, slug }
  })
}

export function getProjects(prefix: boolean = false) {
  return (resume?.projects || []).map(item => {
    const base = `${item.name ?? ''}`
    const slugBase = slugify(base)
    const slug = prefix ? `labs/${slugBase}` : slugBase

    return { ...item, slug }
  })
}

export function getBlogs(prefix: boolean = false) {
  return (resume?.blogs || []).map(item => {
    const base = `${item.title ?? ''}`
    const slugBase = slugify(base)
    const slug = prefix ? `blog/${slugBase}` : slugBase

    return { ...item, slug }
  })
}
