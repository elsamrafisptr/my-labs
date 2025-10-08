import { basePath } from '@/common/constants'
import { formatDate, getBlogPosts } from '@/lib/utils'

import BlogCard from './blog-card'

export function BlogPosts() {
  const allBlogs = getBlogPosts()

  return (
    <div className="mt-4 grid w-full grid-cols-1 gap-6 md:gap-8">
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1
          }
          return 1
        })
        .map(post => {
          return (
            <BlogCard
              key={post.metadata.title.toLocaleLowerCase().replace(' ', '-')}
              name={post.metadata.title}
              href={post.slug}
              date={formatDate(post.metadata.publishedAt)}
              imgUrl={basePath + post.metadata.image}
            />
          )
        })}
    </div>
  )
}
