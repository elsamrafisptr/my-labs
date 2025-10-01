import { resume } from '@/common/constants'
import { BlogPosts } from '@/components/elements/posts'
import ProjectCard from '@/components/elements/project-card'

const Home = () => {
  return (
    <main className="flex flex-col gap-6">
      <section>
        <h1 className="text-lg font-semibold md:text-xl dark:text-stone-50">
          {resume.name}
        </h1>
        <h2 className="mb-4 text-sm font-medium text-stone-700 md:text-base dark:text-stone-300">
          {resume.role}
        </h2>
        <p className="mb-4 text-justify text-sm text-stone-700 md:text-base dark:text-stone-300">
          {resume.description}
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
          {resume.projects.splice(0, 2).map(project => (
            <ProjectCard
              key={project.name.toLocaleLowerCase().replace(' ', '-')}
              name={project.name}
              href={project.href}
              desc={project.desc}
              year={project.year}
              stack={project.stacks}
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
