import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  name: string
  href: string
  imgUrl?: string
  date: string
  views: number
}

const BlogCard = ({ name, href, imgUrl, date, views }: BlogCardProps) => {
  return (
    <Link
      href={href}
      className="hover:bg-foreground/5 hover:border-foreground/10 border-foreground/0 group relative -m-2 flex gap-6 rounded-md border p-2 transition-colors duration-100 md:flex-row"
    >
      {imgUrl ? (
        <Image
          src={imgUrl}
          alt={'Image of ' + name}
          width={600}
          height={600}
          className="border-foreground/10 aspect-square h-full rounded-[4px] border object-cover object-top md:w-16"
        />
      ) : (
        <article className="border-foreground/10 aspect-square h-full rounded-[4px] border bg-stone-300 object-cover object-top md:w-16" />
      )}

      <div className="flex flex-col gap-1">
        <div className="flex w-full flex-col items-start justify-between">
          <p className="text-sm opacity-50">{date}</p>
          <p>{name}</p>
        </div>
        <span className="flex items-start gap-1 text-xs text-stone-400">
          {views} Views
        </span>
      </div>
    </Link>
  )
}

export default BlogCard
