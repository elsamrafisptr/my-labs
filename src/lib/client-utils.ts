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
