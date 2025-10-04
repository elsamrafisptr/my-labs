'use client'

import { DownloadIcon } from 'lucide-react'

type Props = {
  fileUrl: string
  fileName?: string
  className?: string
}

export default function DownloadButton({
  fileUrl,
  fileName = 'download.pdf',
  className = ''
}: Props) {
  const handleNativeDownload = (url: string, name: string) => {
    const a = document.createElement('a')
    a.href = url
    a.download = name
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (fileUrl.startsWith('/')) {
      handleNativeDownload(fileUrl, fileName)
      return
    }
  }

  return (
    <button
      onClick={onClick}
      className={`flex cursor-pointer items-center text-stone-600 transition-all hover:text-stone-800 dark:text-stone-300 dark:hover:text-stone-100 ${className}`}
      aria-label={`Download ${fileName}`}
      title={`Download ${fileName}`}
      type="button"
    >
      <DownloadIcon size={16} />
      <p className="ml-2 text-sm capitalize">Download Resume</p>
    </button>
  )
}
