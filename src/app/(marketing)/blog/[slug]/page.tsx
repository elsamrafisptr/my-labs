import Image from 'next/image'
import { notFound } from 'next/navigation'

import { baseUrl } from '@/common/constants'
import { getBlogs } from '@/lib/client-utils'

export async function generateStaticParams() {
  const posts = getBlogs()

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

  const posts = getBlogs()
  const post = posts.find(post => post.slug === slug)

  if (!post) {
    return
  }

  const { title, publishedAt: publishedTime, summary: description, image } = post

  const ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  }
}

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const posts = getBlogs()
  const post = posts.find(post => post.slug === slug)

  if (!post) {
    notFound()
  }

  const imageUrl = post.image
    ? `${baseUrl}${post.image}`
    : `/og?title=${encodeURIComponent(post.title)}`

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
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            description: post.summary,
            image: imageUrl,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio'
            }
          })
        }}
      />
      <h1 className="title text-2xl font-semibold tracking-tighter">{post.title}</h1>
      <div className="mt-2 mb-8 flex items-center justify-between text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {post.publishedAt}
        </p>
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={1024}
          height={1024}
          className="mt-4 aspect-video w-full object-cover"
        />
      )}
      <article className="prose dark:prose-invert prose-stone mt-8 text-stone-600 dark:text-stone-300">
        {post.content}
      </article>
    </section>
  )
}
