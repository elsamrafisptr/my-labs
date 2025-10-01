import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  name: string
  href: string
  imgUrl?: string
  year: string
  desc: string
  stack: string[]
}

const ProjectCard = ({ name, href, desc, imgUrl, year, stack }: ProjectCardProps) => {
  return (
    <Link
      href={href}
      className="hover:bg-foreground/5 hover:border-foreground/10 border-foreground/0 group relative -m-2 flex flex-col gap-6 rounded-md border p-2 transition-colors duration-100"
    >
      {imgUrl ? (
        <Image
          src={imgUrl}
          alt={'Image of ' + name}
          width={600}
          height={600}
          className="border-foreground/10 aspect-[4/3] h-max w-full rounded-[4px] border object-cover object-top md:aspect-video"
        />
      ) : (
        <article className="border-foreground/10 aspect-[4/3] h-max w-full rounded-[4px] border bg-stone-300 object-cover object-top md:aspect-video"></article>
      )}

      <div className="grow">
        <div className="flex w-full flex-row items-center justify-between">
          <h1 className="font-medium">{name}</h1>
          <p className="text-xs opacity-50">{year}</p>
        </div>
        <h2 className="text-sm opacity-70">{desc}</h2>
        <h3 className="mt-4 flex flex-row flex-wrap gap-1.5 text-xs opacity-70">
          {stack.map(e => (
            <span key={e} className="bg-foreground/5 text-foreground/60 px-1.5 py-0.5">
              {e}
            </span>
          ))}
        </h3>
      </div>
    </Link>
  )
}

export default ProjectCard
