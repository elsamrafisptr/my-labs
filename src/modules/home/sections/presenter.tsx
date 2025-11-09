'use client'

import { basePath, resume } from '@/common/constants'
import EducationCard from '@/components/elements/edu-card'
import OrganizationCard from '@/components/elements/org-card'
import WorkCard from '@/components/elements/work-card'
import { getEducations, getOrganizations, getWorks } from '@/lib/client-utils'
import { memo, useState } from 'react'

const HomePresenter = () => {
  const [showAll, setShowAll] = useState<Record<string, boolean>>({
    works: false,
    organizations: false,
    educations: false
  })

  const SHOW_LIMIT = 3

  const toggleShow = (section: string) => {
    setShowAll(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const works = getWorks(true)
  const organizations = getOrganizations(true)
  const educations = getEducations(true)

  const visibleWorks = showAll.works ? works : works.slice(0, SHOW_LIMIT)
  const visibleOrgs = showAll.organizations
    ? organizations
    : organizations.slice(0, SHOW_LIMIT)
  const visibleEdu = showAll.educations ? educations : educations.slice(0, SHOW_LIMIT)

  const skills = resume?.skills || []
  return (
    <section className="flex w-full flex-col gap-12">
      {' '}
      <div>
        <h3 className="text-md mb-6 font-semibold text-stone-600 dark:text-stone-50">
          Experiences
        </h3>
        <div className="grid grid-cols-1 gap-6">
          {visibleWorks.map(item => {
            return (
              <WorkCard
                key={item.name.toLocaleLowerCase().replace(' ', '-')}
                {...item}
                imageUrl={basePath + item.imageUrl}
                href={item.slug}
              />
            )
          })}
          {works.length > SHOW_LIMIT && (
            <div className="flex justify-center">
              <button
                onClick={() => toggleShow('works')}
                className="cursor-pointer text-xs text-stone-500 underline-offset-4 hover:underline dark:text-stone-400"
              >
                {showAll.works
                  ? 'Show less'
                  : `Show more (${works.length - SHOW_LIMIT})`}
              </button>
            </div>
          )}
        </div>
      </div>
      <div>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50">
          Organizations
        </h3>
        <div className="grid grid-cols-1 gap-6">
          {visibleOrgs.map(item => {
            return (
              <OrganizationCard
                key={item.title.toLocaleLowerCase().replace(' ', '-')}
                {...item}
                imageUrl={basePath + item.imageUrl}
                href={item.slug}
              />
            )
          })}
          {organizations.length > SHOW_LIMIT && (
            <div className="flex justify-center">
              <button
                onClick={() => toggleShow('organizations')}
                className="cursor-pointer text-xs text-stone-500 underline-offset-4 hover:underline dark:text-stone-400"
              >
                {showAll.organizations
                  ? 'Show less'
                  : `Show more (${works.length - SHOW_LIMIT})`}
              </button>
            </div>
          )}
        </div>
      </div>
      <div>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50">
          Educations
        </h3>
        <div className="grid grid-cols-1 gap-6">
          {visibleEdu.map(item => {
            return (
              <EducationCard
                key={item.name.toLocaleLowerCase().replace(' ', '-')}
                {...item}
                imageUrl={basePath + item.imageUrl}
                href={item.slug}
              />
            )
          })}
          {educations.length > SHOW_LIMIT && (
            <div className="flex justify-center">
              <button
                onClick={() => toggleShow('educations')}
                className="cursor-pointer text-xs text-stone-500 underline-offset-4 hover:underline dark:text-stone-400"
              >
                {showAll.educations
                  ? 'Show less'
                  : `Show more (${works.length - SHOW_LIMIT})`}
              </button>
            </div>
          )}
        </div>
      </div>
      <div>
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
      </div>
    </section>
  )
}

export default memo(HomePresenter)
