import Link from 'next/link'

import { footerItems } from '@/common/constants'
import { ArrowUpRightIcon } from 'lucide-react'
import { memo, useMemo } from 'react'

const footList = Object.entries(footerItems).map(([path, { name }]) => ({ path, name }))

function Footer() {
  const links = useMemo(() => footList, [])

  return (
    <footer className="fixed bottom-0 mb-6">
      <div className="flex w-full items-center justify-between">
        <ul className="font-sm mt-8 flex w-full flex-col space-y-2 space-x-0 text-neutral-600 md:flex-row md:space-y-0 md:space-x-4 dark:text-neutral-300">
          {links.map(({ path, name }) => {
            return (
              <li key={path}>
                <Link
                  className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={path}
                >
                  <ArrowUpRightIcon size={20} />
                  <p className="ml-2 h-7">{name}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}

export default memo(Footer)
