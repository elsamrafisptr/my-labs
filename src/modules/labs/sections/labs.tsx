import { resume } from '@/common/constants'
import ProjectCard from '@/components/elements/project-card'

const Labs = () => {
  return (
    <main className="flex flex-col gap-6">
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50">
          Coming Soon
        </h3>
      </section>
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50">
          Existing Experiments
        </h3>
        <div className="mt-4 grid grid-cols-3 gap-6">
          {resume.projects.map(project => (
            <ProjectCard
              key={project.name.toLocaleLowerCase().replace(' ', '-')}
              {...project}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Labs
