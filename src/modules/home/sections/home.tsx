import Link from 'next/link'

import { basePath, footerItems, resume } from '@/common/constants'
import AchievementCard from '@/components/elements/achievement-card'
import DownloadButton from '@/components/elements/download-button'
import EducationCard from '@/components/elements/edu-card'
import OrganizationCard from '@/components/elements/org-card'
import WorkCard from '@/components/elements/work-card'
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'

function slugify(input = '') {
  return input
    .normalize?.('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

const Home = () => {
  const links = Object.entries(footerItems).map(([path, { name }]) => ({
    path,
    name
  }))

  const works = (resume?.works || []).map(item => {
    const base = `${item.title ?? ''} ${item.name ?? ''}`
    const slug = `works/${slugify(base)}`
    return { ...item, slug }
  })

  const organizations = (resume?.organizations || []).map(item => {
    const base = `${item.title ?? ''} ${item.name ?? ''}`
    const slug = `organizations/${slugify(base)}`
    return { ...item, slug }
  })

  const educations = (resume?.educations || []).map(item => {
    const base = `${item.title ?? ''} ${item.name ?? ''}`
    const slug = `educations/${slugify(base)}`
    return { ...item, slug }
  })

  const skills = resume?.skills || []
  const achievements = resume?.achievements || []

  return (
    <main className="flex w-full flex-col gap-6">
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
            fileUrl="/resume.pdf"
            fileName={`${resume.name} - ${resume.role} Resume`}
          />
        </div>
      </section>
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-600 dark:text-stone-50">
          Experiences
        </h3>
        <div className="grid grid-cols-1 gap-6">
          {works.map(item => {
            return (
              <WorkCard
                key={item.name.toLocaleLowerCase().replace(' ', '-')}
                {...item}
                imageUrl={basePath + item.imageUrl}
                href={item.slug}
              />
            )
          })}
        </div>
      </section>
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50">
          Organizations
        </h3>
        <div className="grid grid-cols-1 gap-6">
          {organizations.map(item => {
            return (
              <OrganizationCard
                key={item.title.toLocaleLowerCase().replace(' ', '-')}
                {...item}
                imageUrl={basePath + item.imageUrl}
                href={item.slug}
              />
            )
          })}
        </div>
      </section>
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50">
          Educations
        </h3>
        <div className="grid grid-cols-1 gap-6">
          {educations.map(item => {
            return (
              <EducationCard
                key={item.name.toLocaleLowerCase().replace(' ', '-')}
                {...item}
                imageUrl={basePath + item.imageUrl}
                href={item.slug}
              />
            )
          })}
        </div>
      </section>
      <section>
        <h3 className="text-md mb-4 font-semibold text-stone-700 dark:text-stone-50">
          Skills
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          {skills.map(item => {
            return (
              <p
                key={item.toLocaleLowerCase().replace(' ', '-')}
                className="rounded bg-stone-300 px-1.5 py-1 text-xs text-stone-800 dark:bg-stone-600 dark:text-stone-100"
              >
                {item}
              </p>
            )
          })}
        </div>
      </section>
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50">
          Achievements
        </h3>
        <div className="mt-4 grid grid-cols-3 gap-4 md:gap-6">
          {achievements.map(item => (
            <AchievementCard
              key={item.accelerator.toLocaleLowerCase().replace(' ', '-')}
              {...item}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
