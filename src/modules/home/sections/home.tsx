import { BlogPosts } from '@/components/elements/posts'
import ProjectCard from '@/components/elements/project-card'

const projects = [
  {
    name: 'Evaly',
    description: 'All-in-One Assessment Platform',
    website: 'https://evaly.io',
    github: 'https://github.com/fahreziadh/evaly',
    logo: '/evaly.webp',
    story: '/project/evaly',
    stack: ['Open-source', 'Next.js', 'Tailwindcss', 'Supabase (PostgreSQL)', 'Redis'],
    thumbnail: '/img/evaly.webp',
    year: '2024'
  },
  {
    name: 'Typehere',
    description: 'A Simple Open Source Form Builder',
    website: 'https://typehere.fun',
    github: 'https://github.com/fahreziadh/typehere',
    logo: '/typehere.webp',
    story: '/project/typehere',
    stack: ['Open-source', 'Sveltekit', 'Tailwindcss', 'LibSQL(SQLite)', 'Cloudflare'],
    thumbnail: '/img/typehere.webp',
    year: '2024'
  }
]

const Home = () => {
  return (
    <main className="flex flex-col gap-6">
      <section>
        <h1 className="text-lg font-semibold md:text-xl dark:text-stone-50">
          Elsam Rafi Saputra
        </h1>
        <h2 className="mb-4 text-sm font-medium text-stone-700 md:text-base dark:text-stone-300">
          Remote Software Engineer
        </h2>
        <p className="mb-4 text-justify text-sm text-stone-700 md:text-base dark:text-stone-300">
          Just a software engineer with a strong focus on design, full-stack, and
          marketing. Broader challenges transitioned me became passionate about
          entrepreneurship, software engineering, and artificial intelligence (AI).
        </p>
      </section>
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50"></h3>
      </section>
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50">
          Pinned Projects
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-6 md:gap-8">
          {projects.map(project => (
            <ProjectCard
              key={project.name.toLocaleLowerCase().replace(' ', '-')}
              name={project.name}
              href={project.story}
              desc={project.description}
              year={parseInt(project.year)}
              stack={project.stack}
            />
          ))}
        </div>
      </section>
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50">
          Latest Resources
        </h3>
        <BlogPosts />
      </section>
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50"></h3>
      </section>
    </main>
  )
}

export default Home
