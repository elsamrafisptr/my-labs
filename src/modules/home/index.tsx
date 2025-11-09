import Link from 'next/link'

import { basePath, footerItems, resume } from '@/common/constants'
import DownloadButton from '@/components/elements/download-button'
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'

import HomePresenter from './sections/presenter'

const Home = () => {
  const links = Object.entries(footerItems).map(([path, { name }]) => ({
    path,
    name
  }))

  return (
    <main className="flex w-full flex-col gap-12">
      <section>
        <h1 className="text-lg font-semibold text-stone-800 md:text-xl dark:text-stone-100">
          {resume.name}
        </h1>
        <h2 className="mb-4 text-sm font-medium text-stone-600 md:text-base dark:text-stone-300">
          {resume.role}
        </h2>
        <p className="mb-6 text-justify text-sm text-stone-600 md:text-base dark:text-stone-300">
          {resume.description}
          <br />
          <br />I also enjoy Leetcode, competitions, and hackathons, because I find them
          very enjoyable while challenging myself and building something.
        </p>
        <div className="flex items-center justify-between">
          <ul className="font-sm flex w-fit space-x-6 text-stone-600 md:space-y-0 md:space-x-4 dark:text-stone-300">
            <li>
              {links[0]?.path && (
                <Link
                  className="flex items-center transition-all hover:text-stone-800 dark:hover:text-stone-100"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={links[0].path}
                >
                  <GithubIcon size={16} />
                  <p className="ml-2 text-sm capitalize">{links[0].name}</p>
                </Link>
              )}
            </li>
            <li>
              {links[1]?.path && (
                <Link
                  className="flex items-center transition-all hover:text-stone-800 dark:hover:text-stone-100"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={links[1].path}
                >
                  <LinkedinIcon size={16} />
                  <p className="ml-2 text-sm capitalize">{links[1].name}</p>
                </Link>
              )}
            </li>
            <li>
              {links[2]?.path && (
                <Link
                  className="flex items-center transition-all hover:text-stone-800 dark:hover:text-stone-100"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`mailto:${links[2].path}`}
                >
                  <MailIcon size={16} />
                  <p className="ml-2 text-sm capitalize">{links[2].name}</p>
                </Link>
              )}
            </li>
          </ul>
          <DownloadButton
            fileUrl={basePath + '/resume.pdf'}
            fileName={`${resume.name} - ${resume.role} Resume`}
          />
        </div>
      </section>
      <HomePresenter />
    </main>
  )
}

export default Home
