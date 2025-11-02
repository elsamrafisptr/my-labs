import { basePath } from '@/common/constants'
import BlogCard from '@/components/elements/blog-card'
import { getBlogs } from '@/lib/client-utils'

const Blog = () => {
  const blogs = getBlogs(true)

  return (
    <main className="flex w-full flex-col gap-12">
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50">
          My Blog Resources
        </h3>
        <div className="mt-4 grid w-full grid-cols-1 gap-6 md:gap-8">
          {!blogs || blogs.length < 1 ? (
            <div className="flex h-32 w-full items-center justify-center rounded bg-white/5 text-sm">
              No Blog Posts Provided
            </div>
          ) : (
            blogs
              .sort((a, b) => {
                if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                  return -1
                }
                return 1
              })
              .map(post => {
                return (
                  <BlogCard
                    key={post.title.toLocaleLowerCase().replace(' ', '-')}
                    name={post.title}
                    href={post.slug}
                    date={post.publishedAt}
                    imgUrl={basePath + post.image}
                  />
                )
              })
          )}
        </div>
      </section>
    </main>
  )
}

export default Blog
