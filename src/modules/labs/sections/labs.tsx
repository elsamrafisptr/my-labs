import { basePath, resume } from '@/common/constants'
import ProjectCard from '@/components/elements/project-card'
import { getProjects } from '@/lib/client-utils'

const Labs = () => {
  const projects = getProjects(true)

  return (
    <main className="flex w-full flex-col gap-12">
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50">
          Coming Soon
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-6 md:grid-cols-3">
          {projects.slice(0, 1).map(project => (
            <ProjectCard
              key={project.name.toLocaleLowerCase().replace(' ', '-')}
              {...project}
              imageUrl={basePath + project.imageUrl}
              href={project.slug}
            />
          ))}
        </div>
      </section>
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50">
          Existing Experiments
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-6 md:grid-cols-3">
          {projects.slice(1, resume.projects.length).map(project => (
            <ProjectCard
              key={project.name.toLocaleLowerCase().replace(' ', '-')}
              {...project}
              imageUrl={basePath + project.imageUrl}
              href={project.slug}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Labs
