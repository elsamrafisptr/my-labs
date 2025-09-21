'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { navItems } from '@/common/constants'
import { cn } from '@/lib/client-utils'
import { motion, useReducedMotion } from 'framer-motion'
import { memo, useEffect, useMemo, useRef } from 'react'

import ThemeToggle from './theme-toggle'

const navList = Object.entries(navItems).map(([path, { name }]) => ({ path, name }))

const Navbar = () => {
  const pathname = usePathname() || '/'

  const links = useMemo(() => navList, [])

  const shouldReduceMotion = useReducedMotion()
  const isFirstMountRef = useRef(true)

  useEffect(() => {
    isFirstMountRef.current = false
  }, [])

  const initialProp = shouldReduceMotion
    ? false
    : isFirstMountRef.current
      ? { opacity: 0, y: 0 }
      : false

  return (
    <motion.nav
      initial={initialProp}
      animate={initialProp === false ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className="sticky top-0 container my-12 flex max-w-[680px] items-center justify-between gap-4 lg:my-10"
    >
      <div className="flex items-center gap-4 tracking-tight md:gap-6">
        <Link href="/" className="relative m-1 flex items-center px-2 py-1">
          <Image
            src="/vercel.svg"
            alt="logo"
            width={32}
            height={32}
            className="rounded-full"
          />
        </Link>

        <div className="flex gap-2">
          {links.map(({ path, name }) => {
            const isActive =
              pathname === path || (path !== '/' && pathname.startsWith(path))
            return (
              <Link key={path} href={path} className="relative m-1">
                <span
                  className={cn(
                    'inline-block px-2 py-1 align-middle capitalize transition-colors duration-200',
                    isActive
                      ? 'text-stone-900 dark:text-white'
                      : 'hover:text-stone-800 dark:hover:text-stone-200'
                  )}
                  aria-current={isActive && 'page'}
                >
                  {name}
                </span>

                <span
                  aria-hidden
                  className={cn(
                    'absolute right-0 -bottom-0.5 left-0 h-[1px] rounded bg-stone-900 transition-transform duration-200 dark:bg-white',
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
