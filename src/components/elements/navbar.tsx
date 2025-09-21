'use client'

import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className="container my-6 flex max-w-[680px] flex-row items-center justify-between gap-4 lg:my-10"
    >
      <div className="flex flex-row items-center gap-4 tracking-tight md:gap-6">
        <Link href="/" className="hover:opacity-70">
          <Image
            src="/vercel.svg"
            alt="logo"
            width={32}
            height={32}
            className="rounded-full"
          />
        </Link>
        <Link href="/" className="hover:opacity-70">
          home
        </Link>
        <Link href="/blog" className="hover:opacity-70">
          blog
        </Link>
        <Link href="/contact" className="hover:opacity-70">
          contact
        </Link>
      </div>
      <div className="flex flex-row items-center gap-4 md:gap-6">
        {isClient ? (
          <button
            type="button"
            onClick={() => {
              setTheme(theme === 'light' ? 'dark' : 'light')
            }}
            className="transition-all hover:opacity-70"
          >
            {theme === 'dark' ? <SunIcon size={16} /> : <MoonIcon size={16} />}
          </button>
        ) : null}
      </div>
    </motion.div>
  )
}
