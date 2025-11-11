'use client'

import { DownloadIcon } from 'lucide-react'
import { useState } from 'react'

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
  const [loading, setLoading] = useState<boolean>(false)

  const handleNativeDownload = (url: string, name: string) => {
    const a = document.createElement('a')
    a.href = url
    a.download = name
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  const downloadBlob = async (url: string, suggestedName: string) => {
    setLoading(true)
    try {
      const res = await fetch(url, { method: 'GET' })
      if (!res.ok) throw new Error(`Network error: ${res.status}`)
      const blob = await res.blob()

      const cd = res.headers.get('content-disposition')
      let filename = suggestedName
      if (cd) {
        const match = /filename\*?=(?:UTF-8'')?["']?([^;"']+)["']?/.exec(cd)
        if (match?.[1]) {
          filename = decodeURIComponent(match[1])
        }
      }

      const objectUrl = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = objectUrl
      a.download = filename
      document.body.appendChild(a)
      a.click()
      a.remove()
      setTimeout(() => URL.revokeObjectURL(objectUrl), 1000)
    } finally {
      setLoading(false)
    }
  }

  const onClick = async (e: React.MouseEvent) => {
    e.preventDefault()

    if (fileUrl.startsWith('/')) {
      handleNativeDownload(fileUrl, fileName)
      return
    }

    try {
      await downloadBlob(fileUrl, fileName)
    } catch (err) {
      console.error('Download failed (maybe CORS). Falling back to opening file.', err)
      window.open(fileUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <button
      onClick={onClick}
      className={`flex cursor-pointer items-center text-stone-600 transition-all hover:text-stone-800 dark:text-stone-300 dark:hover:text-stone-100 ${className}`}
      aria-label={`Download ${fileName}`}
      title={`Download ${fileName}`}
      type="button"
      disabled={loading}
    >
      <DownloadIcon size={16} />
      <p className="ml-2 text-sm capitalize">
        {loading ? 'Preparing...' : 'Download Resume'}
      </p>
    </button>
  )
}
