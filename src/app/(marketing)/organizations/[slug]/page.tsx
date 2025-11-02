import { notFound } from 'next/navigation'

import { baseUrl } from '@/common/constants'
import { getOrganizations } from '@/lib/client-utils'

export async function generateStaticParams() {
  const posts = getOrganizations()

  return posts.map(post => ({
    slug: post.slug
  }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const posts = getOrganizations()
  const post = posts.find(post => post.slug === slug)

  if (!post) {
    return
  }

  return {
    title: post.title,
    description: post.desc,
    openGraph: {
      title: post.title,
      description: post.desc,
      type: 'article',
      publishedTime: post.end,
      url: `${baseUrl}/organizations/${post.slug}`,
      images: [
        {
          url: post.imageUrl
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.desc,
      images: [post.imageUrl]
    }
  }
}

export default async function Organization({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const posts = getOrganizations()
  const post = posts.find(post => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="h-full w-full">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            datePublished: post.end,
            dateModified: post.end,
            description: post.desc,
            image: post.imageUrl,
            url: `${baseUrl}/works/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio'
            }
          })
        }}
      />
      <h1 className="title text-2xl font-semibold tracking-tighter">
        {post.title} @ {post.name}
      </h1>
      <div className="mt-2 mb-8 flex items-center justify-between text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{post.desc}</p>
      </div>
      <article className="prose">{post.content}</article>
    </section>
  )
}
