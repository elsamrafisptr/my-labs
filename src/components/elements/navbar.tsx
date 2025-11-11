'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { navItems, resume } from '@/common/constants'
import { cn } from '@/lib/client-utils'
import { motion, useReducedMotion } from 'motion/react'
import { memo, useEffect, useMemo, useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import ThemeToggle from './theme-toggle'

const Navbar = () => {
  const pathname = usePathname()
  const navList = Object.entries(navItems).map(([path, { name }]) => ({ path, name }))
  const links = useMemo(() => navList, [navList])

  const [mounted, setMounted] = useState(false)
  useEffect(() => void setMounted(true), [])

  const shouldReduceMotion = useReducedMotion()

  const motionProps = {
    initial: mounted && !shouldReduceMotion ? { opacity: 0, y: 4 } : false,
    animate: mounted && !shouldReduceMotion ? { opacity: 1, y: 0 } : undefined,
    transition:
      mounted && !shouldReduceMotion
        ? { duration: 0.2, ease: [0.42, 0, 0.58, 1] as const }
        : undefined
  }

  return (
    <motion.nav
      {...motionProps}
      className="sticky top-0 z-[99999] container flex max-w-[680px] items-center justify-between gap-4 bg-stone-200 py-8 dark:bg-stone-800"
    >
      <div className="flex items-center gap-4 tracking-tight md:gap-6">
        <Link href="/" className="relative flex items-center py-2">
          <Avatar>
            <AvatarImage
              src={resume.avatarUrl}
              className="aspect-square rounded-full border border-stone-700 shadow-md shadow-stone-700/20 dark:border-stone-200 dark:shadow-stone-200/20"
              alt="avatar"
            />
            <AvatarFallback>{resume.initials}</AvatarFallback>
          </Avatar>
        </Link>

        <div className="flex gap-6">
          {links.map(({ path, name }) => {
            const isActive = mounted
              ? pathname === path || (path !== '/' && pathname?.startsWith(path))
              : false

            return (
              <Link key={path} href={path} className="relative m-1">
                <span
                  className={cn(
                    'inline-block py-1 align-middle capitalize transition-colors duration-200',
                    isActive
                      ? 'text-stone-800 dark:text-white'
                      : 'hover:text-stone-800 dark:hover:text-stone-200'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {name}
                </span>

                <span
                  aria-hidden
                  className={cn(
                    'absolute right-0 -bottom-0.5 left-0 h-[1px] rounded bg-stone-800 transition-transform duration-200 dark:bg-white',
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  )}
                  style={{ transformOrigin: 'left center' }}
                />
              </Link>
            )
          })}
        </div>
      </div>

      <div className="flex w-8 items-center gap-4 md:gap-6">
        <ThemeToggle />
      </div>
    </motion.nav>
  )
}

export default memo(Navbar)
