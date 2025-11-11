import Link from 'next/link'

import { ResumeProps } from '../types'

export const baseImageUrl = 'https://ik.imagekit.io/a5rn4awa3digi2tal1/portfolio'
export const worksImageUrl = baseImageUrl + '/logos/works'
export const organizationsImageUrl = baseImageUrl + '/logos/organizations'
export const educationsImageUrl = baseImageUrl + '/logos/educations'

export const blogsImageUrl = baseImageUrl + '/blogs'
export const projectsImageUrl = baseImageUrl + '/projects'

export const notFoundImageUrl = baseImageUrl + '/thumbnail_no_image.jpg'
export const profileImageUrl = baseImageUrl + '/profile.webp'
export const resumeAttachmentUrl = baseImageUrl + '/resume.pdf'

export const resume: Readonly<ResumeProps> = {
  name: 'Elsam Rafi Saputra',
  role: 'Remote Software Engineer',
  initials: 'E',
  url: 'https://elsamrafisptr.github.io/my-labs/',
  location: 'Bandung, Indonesia',
  locationLink: '',
  description:
    'Just a software engineer with a strong focus on design, full-stack, and marketing. Broader challenges transitioned me became passionate about entrepreneurship, software engineering, and artificial intelligence (AI).',
  avatarUrl: profileImageUrl,

  navbar: [],
  footer: [],

  skills: [
    'Typescript',
    'Python',
    'Golang',
    'PostgreSQL',
    'MySQL',
    'Firebase',
    'MongoDB',
    'React',
    'Next JS',
    'Express JS',
    'gRPC',
    'FastAPI',
    'GCP',
    'Azure',
    'AWS',
    'Docker',
    'Github Actions',
    'Wordpress'
  ],

  works: [
    {
      title: 'Software Engineer',
      name: 'SCHNAP',
      desc: "Australia's premier electrical wholesaler and supplies",
      location: 'Kingsgrove, Australia',
      imageUrl: worksImageUrl + '/schnap_logo.jpeg',
      href: '',
      status: 'Full Time',
      type: 'Remote',
      website: 'https://schnap.com.au/',
      start: 'Mar 2025',
      end: 'Now',
      content: <div className="h-full w-full"></div>
    },
    {
      title: 'Fullstack Developer',
      name: 'KAP TNN',
      desc: ' Indonesia’s registered public accounting firm partner of BOKS International',
      location: 'South Jakarta, Indonesia',
      imageUrl: worksImageUrl + '/kaptnn_logo.jpeg',
      href: '',
      status: 'Full Time',
      type: 'Remote',
      website: 'https://kaptnn.com/',
      start: 'Sep 2024',
      end: 'Aug 2025',
      content: <div className="h-full w-full"></div>
    },
    {
      title: 'Frontend Developer',
      name: 'School Tech Indonesia',
      desc: 'Digital school management startup',
      location: 'Malang, Indonesia',
      imageUrl: worksImageUrl + '/schooltech_logo.jpeg',
      href: '',
      status: 'Full Time',
      type: 'Remote',
      website: 'https://schooltechindonesia.com/',
      start: 'Aug 2024',
      end: 'Dec 2024',
      content: <div className="h-full w-full"></div>
    },
    {
      title: 'Fullstack Developer',
      name: 'Betr Beta',
      desc: 'Software agency',
      location: 'Anson Road, Singapore',
      imageUrl: worksImageUrl + '/betrbeta_logo.jpeg',
      href: '',
      status: 'Part Time',
      type: 'Remote',
      website: 'https://betrbeta.com/en-SG',
      start: 'Jun 2024',
      end: 'Aug 2024',
      content: <div className="h-full w-full"></div>
    },
    {
      title: 'Software Engineer Freelance',
      name: 'Arnawa Digital',
      desc: 'Self-employed software agency',
      location: 'Bandung, Indonesia',
      imageUrl: worksImageUrl + '/arnawa_logo.webp',
      href: '',
      status: 'Part Time',
      type: 'Remote',
      website: 'https://arnawadigital.com/',
      start: 'Apr 2023',
      end: 'Sep 2024',
      content: <div className="h-full w-full"></div>
    },
    {
      title: 'English and Mathematics Teacher',
      name: 'Rainbow Kids',
      desc: 'Private tutoring class in Bandung.',
      location: 'Bandung, Indonesia',
      imageUrl: worksImageUrl + '/rainbow_kids_logo.png',
      href: '',
      status: 'Part Time',
      type: 'On-Site',
      website: '',
      start: 'Sep 2022',
      end: 'Apr 2023',
      content: <div className="h-full w-full"></div>
    },
    {
      title: 'Algorithm and Data Structures Practicum Assistant',
      name: 'IFLabs Telkom University',
      desc: '',
      location: 'Bandung, Indonesia',
      imageUrl: worksImageUrl + '/iflabs_logo.jpg',
      href: '',
      status: 'Part Time',
      type: 'On-Site',
      website: 'https://informatics.labs.telkomuniversity.ac.id/',
      start: 'Sep 2022',
      end: 'Jan 2023',
      content: <div className="h-full w-full"></div>
    }
  ],

  educations: [
    {
      title: 'Bachelor of Informatics',
      name: 'Telkom University',
      score: '(GPA 3.77/4.00) - Cumlaude',
      location: 'Bandung, Indonesia',
      imageUrl: educationsImageUrl + '/telu_logo.jpeg',
      href: '',
      website: 'https://telkomuniversity.ac.id/',
      start: 'Sep 2021',
      end: 'Jan 2025',
      content: <div className="h-full w-full"></div>
    },
    {
      title: 'Cloud Computing Cohort',
      name: 'Bangkit Academy 2024',
      score: '(A, 87/100)',
      location: 'Jakarta, Indonesia',
      imageUrl: educationsImageUrl + '/bangkit_logo.jpeg',
      href: '',
      website: 'https://grow.google/intl/id_id/bangkit/',
      start: 'Sep 2024',
      end: 'Jan 2025',
      content: <div className="h-full w-full"></div>
    },
    {
      title: 'AWS Academy 2024 Backend Development',
      name: 'AWS Backend Academy',
      score: '(A, 100%)',
      location: 'Jakarta, Indonesia',
      imageUrl: educationsImageUrl + '/aws_logo.png',
      href: '',
      website: 'https://aws.dicoding.com/',
      start: 'Mar 2024',
      end: 'Sep 2024',
      content: <div className="h-full w-full"></div>
    }
  ],

  organizations: [
    {
      title: 'Design and Publication Team',
      name: 'TelU Edu Movement',
      desc: 'Social & Education',
      location: 'Bandung, Indonesia',
      imageUrl: organizationsImageUrl + '/team_logo.jpeg',
      href: '',
      type: 'On-Site',
      website: '',
      start: 'Oct 2021',
      end: 'Aug 2022',
      content: <div className="h-full w-full"></div>
    },
    {
      title: 'Design and Motion Video Division',
      name: 'Menebarmanfaat.id',
      desc: 'Social & Personal Development',
      location: 'Bandung, Indonesia',
      imageUrl: organizationsImageUrl + '/menebarmanfaat_logo.jpeg',
      href: '',
      type: 'Remote',
      website: 'https://www.instagram.com/telu_edumovement/',
      start: 'Nov 2021',
      end: 'Mar 2022',
      content: <div className="h-full w-full"></div>
    }
  ],

  projects: [
    {
      accelerator: 'Microsoft Online Hackathon 2025 (elevAIte with Dicoding)',
      name: 'Teman Anti Judi Online',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: notFoundImageUrl,
      href: '',
      website: '',
      github: 'https://github.com/elsamrafisptr',
      year: '',
      stacks: ['FastAPI', 'Next JS', 'PostgreSQL', 'Open AI', 'Azure'],
      content: <div className="h-full w-full"></div>
    },
    {
      accelerator:
        'International Conference on Advancement in Data Science, E-learning and Information System (ICADEIS 2025)',
      name: 'Growth Momentum',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: notFoundImageUrl,
      href: '',
      website: '',
      github: 'https://github.com/elsamrafisptr',
      year: '',
      stacks: ['Flask', 'PostgreSQL', 'K-Means Clustering', 'React'],
      content: <div className="h-full w-full"></div>
    },
    {
      accelerator: 'Bangkit Academy 2024 By Google, GoTo, Tokopedia, Traveloka',
      name: 'StuntFree Apps',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: projectsImageUrl + '/project_thumbnail_stuntfree.webp',
      href: '',
      website: '',
      github: 'https://github.com/elsamrafisptr',
      year: '',
      stacks: ['FastAPI', 'gRPC', 'PostgreSQL', 'Vertex AI', 'GCP'],
      content: <div className="h-full w-full"></div>
    }
  ],

  achievements: [
    {
      accelerator: 'elevAIte by Microsoft Azure',
      name: 'Certificate elevAIte by Microsoft Azure',
      desc: '',
      imageUrl: '',
      href: '',
      year: '',
      credential: ''
    },
    {
      accelerator: 'ICADEIS 2025',
      name: 'Certificate as Paper Presenter',
      desc: '',
      imageUrl: '',
      href: '',
      year: '',
      credential: ''
    },
    {
      accelerator: 'Telkom University',
      name: 'Telkom University Endowment Fund Scholarship 2024',
      desc: '',
      imageUrl: '',
      href: '',
      year: '',
      credential: ''
    },
    {
      accelerator: 'Bangkit Academy 2024',
      name: 'Bangkit Academy Certificate',
      desc: '',
      imageUrl: '',
      href: '',
      year: '',
      credential: ''
    },
    {
      accelerator: 'AWS Backend Academy',
      name: 'Certificate of AWS Backend Academy',
      desc: '',
      imageUrl: '',
      href: '',
      year: '',
      credential: ''
    },
    {
      accelerator: 'Tanamduit',
      name: 'Tanamduit Campus Ambassador 2022',
      desc: '',
      imageUrl: '',
      href: '',
      year: '',
      credential: ''
    },
    {
      accelerator: '',
      name: '',
      desc: '',
      imageUrl: '',
      href: '',
      year: '',
      credential: ''
    }
  ],
  competitions: [],

  blogs: [
    {
      title: 'Hello World!',
      publishedAt: '2025-10-01',
      summary: 'Hello World! This is my first time writing for a blog post.',
      image: blogsImageUrl + '/blog_thumnail_hello_world.png',
      content: (
        <div className="flex h-full w-full flex-col gap-6">
          <p className="text-justify">
            {`I don't know why I started writing. Actually, I like writing and pouring my
thoughts into words and imagination, but sometimes I feel limited because I
am also an `}
            <Link
              href="https://www.16personalities.com/articles/am-i-an-introvert"
              target="_blank"
              className="italic"
            >
              {`\u201Cintrovert\u201D`}
            </Link>
            {` , which makes me not very confident, and a perfectionist, which makes me
afraid of doing things imperfectly.`}
          </p>
          <p className="text-justify">
            {`But, screw that, `}
            <strong>Hello World!</strong>
            {` The first sentence in learning IT, let's write and share!`}
          </p>
          <p className="text-justify">{`Thanks!`}</p>
        </div>
      )
    },
    {
      title: 'How I Received a Job Offer and a Quick Promotion from a Remote Company',
      publishedAt: '2025-10-08',
      image: blogsImageUrl + '/blog_thumnail_job_offer_and_quick_promotion.jpg',
      content: (
        <div className="flex h-full w-full flex-col gap-8">
          <div className="flex h-full w-full flex-col gap-3">
            <p className="text-justify">
              {`One morning, right before starting my usual work, I received a message
              from an unknown number. I almost ignored it, but curiosity won. As I read
              further, it turned out to be a `}
              <strong>{`job offer for a remote software engineering position`}</strong>
              {`.`}
            </p>
            <p className="text-justify">
              {`It felt surreal, because of no interviews, no tests, and I hadn’t even
              graduated yet at that time. Since my current job operated in the morning
              and this new role was in the evening, I decided to take both. Yes, it
              meant `}
              <strong>{`sacrificing more of my personal time`}</strong>
              {`, but it also meant `}
              <strong>{`learning, growing, and earning`}</strong>
              {`.`}
            </p>
          </div>

          <div className="flex h-full w-full flex-col gap-3">
            <h1 className="text-xl font-semibold">{`But the Question Is: How Did I Get Offered by SCHNAP?`}</h1>
            <p className="text-justify">
              {`After some time talking with my Lead and especially after I got promoted,
              gaining more responsibility over their systems. I realized a few things:`}
            </p>
            <ul className="flex h-full w-full flex-col gap-3">
              <li className="ml-4 list-disc text-justify">
                {`My company was using `}
                <strong>AI Agents</strong>
                {`. In this case, the agents used the `}
                <strong>LinkedIn API</strong>
                {` and `}
                <strong>OpenAI</strong>
                {` to find and analyze candidate data that was valuable to them.`}
              </li>
              <li className="ml-4 list-disc text-justify">
                {`That means `}
                <strong>{`I was the most valuable candidate at that time`}</strong>
                {` hehe.`}
              </li>
            </ul>
          </div>

          <div className="flex h-full w-full flex-col gap-3">
            <h1 className="text-xl font-semibold">{`What Made Me the Most Valuable Candidate?`}</h1>
            <ul className="flex h-full w-full flex-col gap-3">
              <li className="ml-4 list-disc text-justify">
                {`I’m just applying of concept `}
                <strong>{`T-shaped Software Engineer (Fullstack)`}</strong>
                {`, but I specialize in `}
                <strong>{`Automation`}</strong>
                {` (Zapier, Make.com, n8n) and `}
                <strong>{`AI Integration`}</strong>
                {`.`}
              </li>
              <li className="ml-4 list-disc text-justify">
                {`I aligned perfectly with the company’s focus areas likes `}
                <strong>{`Data, ETL, and AI Engineering`}</strong>
                {`.`}
              </li>
              <li className="ml-4 list-disc text-justify">
                {`I `}
                <strong>{`optimized my social media`}</strong>
                {` profiles using the right `}
                <strong>{`keywords and content strategy`}</strong>
                {`.`}
              </li>
            </ul>
          </div>

          <div className="flex h-full w-full flex-col gap-3">
            <h1 className="text-xl font-semibold">{`So, What About The Quick Promotion? What Happen?`}</h1>
            <p className="text-justify">
              {`After 2 months, I'm working there, I didn't take so long to adapt to the
              environment and make a good relation between me, Lead, and the Boss (But,
              I'm not licking them or anything bad). This is just small development team
              (10 People of E-Commerce, 4 of them Developer including myself).`}
            </p>
            <p className="text-justify">
              {`I forgot when I got contacted again by my Boss. That he, Lead, and I
              were invited to vacation to Dinner in Jakarta and then a week free vacation in
              Bali (OMG)! So, don't take too long to answer and think; you must
              already know what I will answer right? `}
              <strong>{`Yes`}</strong>
              {`, I didn't take the invitation hehe.`}
            </p>
            <p className="text-justify">
              {`I'm too shy and introvert to just go on vacation with other people (at that
              time also many rumors that many foreigners invite Indonesians to go
              on vacation but they take the Indonesian organs and sell it ☠️).`}
            </p>
            <p className="text-justify">
              {`And then I was just invited to an online meeting because I wasn't going to Bali.
              So, the news my Boss said he liked my work, my effort, and the
              contribution is going well. But, he didn't want me to still work with
              another company. So, there was negotiation and I got my quick promotion in
              just 2 months of working.`}
            </p>
          </div>

          <div className="flex h-full w-full flex-col gap-3">
            <h1 className="text-xl font-semibold">{`The Conclusion`}</h1>
            <p className="text-justify">
              {`Optimize your personal branding and make yourself visible to the world.
              Also don't just work without a path, but keep finishing problems by
              making a solution that is worth.`}
            </p>
            <p className="text-justify italic">{`Thank you so much for your attention.`}</p>
          </div>
        </div>
      )
    }
  ]
} as const
