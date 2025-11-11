import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { baseUrl } from '@/common/constants'
import { getProjects } from '@/lib/client-utils'
import { GithubIcon, GlobeIcon } from 'lucide-react'

export async function generateStaticParams() {
  const projects = getProjects()

  return projects.map(project => ({
    slug: project.slug
  }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const projects = getProjects()
  const project = projects.find(project => project.slug === slug)

  if (!project) {
    return
  }

  return {
    title: project.name,
    description: project.desc,
    openGraph: {
      title: project.name,
      description: project.desc,
      type: 'article',
      url: `${baseUrl}/labs/${project.slug}`,
      images: [
        {
          url: project.imageUrl
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: project.name,
      description: project.desc,
      images: [project.imageUrl]
    }
  }
}

export default async function Project({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const projects = getProjects()
  const project = projects.find(project => project.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="flex w-full flex-col gap-6">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: project.name,
            description: project.desc,
            image: project.imageUrl,
            url: `${baseUrl}/labs/${project.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio'
            }
          })
        }}
      />
      <section className="flex flex-col gap-1">
        <h1 className="title text-2xl font-semibold tracking-tighter">
          {project.name}
        </h1>
        <h2 className="text-stone-600 dark:text-stone-300">@ {project.accelerator}</h2>
      </section>
      <section className="flex w-full flex-col gap-4">
        <p className="text-justify text-sm text-stone-600 md:text-base dark:text-stone-300">
          {project.desc}
        </p>
        <div className="grid w-full grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-4">
          <div className="flex flex-col gap-1">
            <p>Tech Stack :</p>
            <div className="flex w-full items-center gap-2 text-sm">
              {project.stacks &&
                project.stacks.length != 0 &&
                project.stacks.map(item => (
                  <p
                    key={item.toLowerCase().replace(/\s+/g, '-')}
                    className="shrink-0 rounded bg-stone-300 px-1.5 py-1 text-xs text-stone-800 dark:bg-stone-600 dark:text-stone-100"
                  >
                    {item}
                  </p>
                ))}
            </div>
          </div>
          <div className="flex w-full items-center justify-start gap-6 md:justify-end">
            {project.github && project.github != '' && (
              <span className="flex cursor-pointer items-center gap-2 text-stone-600 hover:text-stone-800 dark:text-stone-300 hover:dark:text-stone-50">
                <GithubIcon size={20} />
                <Link href={project.github} className="text-sm">
                  Github
                </Link>
              </span>
            )}
            {project.website && project.website != '' && (
              <span className="flex cursor-pointer items-center gap-2 text-stone-600 hover:text-stone-800 dark:text-stone-300 hover:dark:text-stone-50">
                <GlobeIcon size={20} />
                <Link href={project.website} className="text-sm">
                  Website
                </Link>
              </span>
            )}
          </div>
        </div>
      </section>
      <section>
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt={project.name}
            height={1024}
            width={1024}
            className="mb-6 aspect-video w-full rounded object-cover"
          />
        )}
      </section>
    </main>
  )
}
