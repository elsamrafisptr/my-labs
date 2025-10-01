'use client'

import Link from 'next/link'

import { footerItems, resume } from '@/common/constants'
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'
import { useMemo } from 'react'

const footList = Object.entries(footerItems).map(([path, { name }]) => ({ path, name }))

const Resume = () => {
  const links = useMemo(() => footList, [])
  return (
    <main className="flex flex-col gap-6">
      <section className="flex flex-col gap-4">
        <p className="text-justify text-sm text-stone-700 md:text-base dark:text-stone-300">
          {resume.description}
        </p>
        <ul className="font-sm flex w-full space-y-2 space-x-2 text-neutral-600 md:space-y-0 md:space-x-4 dark:text-neutral-300">
          <li>
            <Link
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
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
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
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
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={links[3]!.path}
            >
              <MailIcon size={16} />
              <p className="ml-2 text-sm capitalize">{links[3]!.name}</p>
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50">
          Experiences
        </h3>
        <div className="">
          {resume.works.map(item => {
            return (
              <div key={item.name.toLocaleLowerCase().replace(' ', '-')}>
                {item.title}
              </div>
            )
          })}
        </div>
      </section>
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50">
          Organizations
        </h3>
        <div className="">
          {resume.organizations.map(item => {
            return (
              <div key={item.name.toLocaleLowerCase().replace(' ', '-')}>
                {item.title}
              </div>
            )
          })}
        </div>
      </section>
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50">
          Educations
        </h3>
        <div className="">
          {resume.educations.map(item => {
            return (
              <div key={item.name.toLocaleLowerCase().replace(' ', '-')}>
                {item.title}
              </div>
            )
          })}
        </div>
      </section>
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50">
          Achievements
        </h3>
        <div className="">
          {resume.achievements.map(item => {
            return (
              <div key={item.name.toLocaleLowerCase().replace(' ', '-')}>
                {item.name}
              </div>
            )
          })}
        </div>
      </section>
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50">
          Skills
        </h3>
        <div className="">
          {resume.skills.map(item => {
            return <div key={item.toLocaleLowerCase().replace(' ', '-')}>{item}</div>
          })}
        </div>
      </section>
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50">
          I Love to Compete and Build!
        </h3>
        <div className="">
          {resume.organizations.map(item => {
            return (
              <div key={item.name.toLocaleLowerCase().replace(' ', '-')}>
                {item.title}
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Resume
