import { BlogPosts } from '@/components/elements/posts'

export const dynamic = 'force-static'

const Blog = () => {
  return (
    <main className="flex w-full flex-col gap-6">
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50">
          My Blog Resources
        </h3>
        <BlogPosts />
      </section>
    </main>
  )
}

export default Blog
