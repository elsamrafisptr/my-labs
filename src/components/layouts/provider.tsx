'use client'

import { ThemeProvider } from 'next-themes'

import Footer from '../elements/footer'
import Navbar from '../elements/navbar'

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
      <div className="flex max-w-xl flex-auto flex-col items-center px-2 md:px-0">
        <Navbar />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  )
}
