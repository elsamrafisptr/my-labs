'use client'

import Link from 'next/link'

import { footerItems, resume } from '@/common/constants'
import AchievementCard from '@/components/elements/achievement-card'
import EducationCard from '@/components/elements/edu-card'
import OrganizationCard from '@/components/elements/org-card'
import WorkCard from '@/components/elements/work-card'
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'
import { useMemo } from 'react'

const footList = Object.entries(footerItems).map(([path, { name }]) => ({ path, name }))

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
  const links = useMemo(() => footList, [])

  const works = useMemo(() => {
    return (resume?.works || []).map(item => {
      const base = `${item.title ?? ''} ${item.name ?? ''}`
      const slug = `works/${slugify(base)}`
      return { ...item, slug }
    })
  }, [resume?.works])

  const organizations = useMemo(() => {
    return (resume?.organizations || []).map(item => {
      const base = `${item.title ?? ''} ${item.name ?? ''}`
      const slug = `organizations/${slugify(base)}`
      return { ...item, slug }
    })
  }, [resume?.organizations])

  const educations = useMemo(() => {
    return (resume?.educations || []).map(item => {
      const base = `${item.title ?? ''} ${item.name ?? ''}`
      const slug = `educations/${slugify(base)}`
      return { ...item, slug }
    })
  }, [resume?.educations])

  const skills = useMemo(() => resume?.skills, [])

  const achievements = useMemo(() => resume?.achievements, [])

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
              <Link
                className="flex items-center transition-all hover:text-stone-800 dark:hover:text-stone-100"
                rel="noopener noreferrer"
                target="_blank"
                href={links[1]!.path}
              >
                <GithubIcon size={16} />
                <p className="ml-2 text-sm capitalize">{links[1]!.name}</p>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center transition-all hover:text-stone-800 dark:hover:text-stone-100"
                rel="noopener noreferrer"
                target="_blank"
                href={links[2]!.path}
              >
                <LinkedinIcon size={16} />
                <p className="ml-2 text-sm capitalize">{links[2]!.name}</p>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center transition-all hover:text-stone-800 dark:hover:text-stone-100"
                rel="noopener noreferrer"
                target="_blank"
                href={links[3]!.path}
              >
                <MailIcon size={16} />
                <p className="ml-2 text-sm capitalize">{links[3]!.name}</p>
              </Link>
            </li>
          </ul>
          <button className="flex cursor-pointer items-center gap-2 text-sm text-stone-600 hover:text-stone-800 dark:text-stone-300 dark:hover:text-stone-100">
            <DownloadIcon size={16} /> Download CV
          </button>
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
        <div className="mt-4 grid grid-cols-3 gap-6">
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
