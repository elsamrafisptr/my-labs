import Image from 'next/image'

import { AchievementProps } from '@/common/types'

const AchievementCard = (props: AchievementProps) => {
  return (
    <div className="hover:bg-foreground/5 hover:border-foreground/10 border-foreground/0 group relative -m-2 flex cursor-pointer gap-4 rounded-md border p-2 transition-colors duration-100 md:flex-row md:items-center md:gap-6">
      {props.imageUrl ? (
        <Image
          src={props.imageUrl}
          alt={'Image of ' + props.accelerator}
          width={600}
          height={600}
          className="border-foreground/10 aspect-video h-max w-full rounded-[4px] border object-cover object-top"
        />
      ) : (
        <article className="border-foreground/10 aspect-video h-max w-full rounded-[4px] border bg-stone-300 object-cover object-top"></article>
      )}
    </div>
  )
}

export default AchievementCard
