import ProjectCard from '@/components/elements/project-card'

const projects = [
  {
    name: '',
    description: '',
    website: '',
    github: '',
    logo: '',
    story: '',
    stack: [''],
    thumbnail: '',
    year: ''
  },
  {
    name: '',
    description: '',
    website: '',
    github: '',
    logo: '',
    story: '',
    stack: [''],
    thumbnail: '',
    year: ''
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
        <div className="mt-4 flex flex-col gap-8">
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
      {/* <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50">
          Latest Resources
        </h3>
      </section> */}
      <section>
        <h3 className="text-md mb-6 font-semibold text-stone-700 dark:text-stone-50"></h3>
      </section>
    </main>
  )
}

export default Home
