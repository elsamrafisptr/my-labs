import Image from 'next/image'
import Link from 'next/link'

import { WorkProps } from '@/common/types'

const WorkCard = (props: WorkProps) => {
  return (
    <Link
      href={props.href}
      className="hover:bg-foreground/5 hover:border-foreground/10 border-foreground/0 group relative -m-2 flex gap-4 rounded-md border p-2 transition-colors duration-100 md:flex-row md:items-center md:gap-6"
    >
      {props.imageUrl ? (
        <Image
          src={props.imageUrl}
          alt={'Image of ' + props.name}
          width={600}
          height={600}
          className="border-foreground/10 aspect-square h-full rounded-[4px] border object-cover object-top md:w-16"
        />
      ) : (
        <article className="border-foreground/10 aspect-square h-full w-12 rounded-[4px] border bg-stone-300 object-cover object-top md:w-16" />
      )}

      <div className="flex w-full flex-col gap-1">
        <div className="flex w-full flex-col items-start justify-between">
          <span className="flex w-full items-center justify-between">
            <h1 className="text-sm text-stone-700 dark:text-stone-300">{props.name}</h1>
            <p className="text-sm text-stone-700 dark:text-stone-300">
              {props.start} - {props.end}
            </p>
          </span>
          <p className="text-sm font-semibold text-stone-800 dark:text-stone-50">
            {props.title}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default WorkCard
