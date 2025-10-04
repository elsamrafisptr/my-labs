import Blog from '@/modules/blog'

export const dynamic = 'force-static'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.'
}

export default function Page() {
  return <Blog />
}
