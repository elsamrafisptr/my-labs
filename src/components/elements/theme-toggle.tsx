'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useCallback, useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const current = (resolvedTheme ?? theme ?? 'light') as 'light' | 'dark'

  const toggle = useCallback(() => {
    setTheme(current === 'light' ? 'dark' : 'light')
  }, [current, setTheme])

  if (!mounted) {
    return (
      <button
        aria-hidden
        className="pointer-events-none h-8 w-8 rounded p-1 opacity-0"
        tabIndex={-1}
        type="button"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={current === 'dark'}
      aria-label={current === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      title={current === 'dark' ? 'Switch to light' : 'Switch to dark'}
      className="cursor-pointer rounded p-2 transition-all duration-300 hover:bg-stone-300 hover:opacity-80 dark:hover:bg-stone-700"
    >
      {current === 'dark' ? <SunIcon size={16} /> : <MoonIcon size={16} />}
    </button>
  )
}
