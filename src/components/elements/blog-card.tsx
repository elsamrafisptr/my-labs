import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  name: string
  href: string
  imgUrl?: string
  year: number
  desc: string
}

const BlogCard = ({ name, href, desc, imgUrl, year }: BlogCardProps) => {
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
        <div className="flex w-full flex-row items-start justify-between">
          <p>{name}</p>
          <div className="flex flex-row items-center gap-2">
            <p className="text-xs opacity-50">{year}</p>
          </div>
        </div>
        <h2 className="opacity-70">{desc}</h2>
        <span>Read More</span>
      </div>
    </Link>
  )
}

export default BlogCard
