import { memo } from 'react'

function Footer() {
  return (
    <footer className="mb-6">
      <div className="flex w-full items-center justify-between">
        <div className="font-sm mt-8 flex w-full space-y-2 space-x-2 text-neutral-600 md:space-y-0 md:space-x-4 dark:text-neutral-300"></div>
      </div>
    </footer>
  )
}

export default memo(Footer)
