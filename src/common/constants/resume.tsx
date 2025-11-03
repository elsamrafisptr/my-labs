import { ResumeProps } from '../types'

export const resume: Readonly<ResumeProps> = {
  name: 'Elsam Rafi Saputra',
  role: 'Remote Software Engineer',
  initials: 'E',
  url: 'https://elsamrafisptr-portfolio.vercel.app',
  location: 'Bandung, Indonesia',
  locationLink: 'https://',
  description:
    'Just a software engineer with a strong focus on design, full-stack, and marketing. Broader challenges transitioned me became passionate about entrepreneurship, software engineering, and artificial intelligence (AI).',
  avatarUrl: '/profile.webp',

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
      imageUrl: '/schnap_logo.jpeg',
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
      imageUrl: '/kaptnn_logo.jpeg',
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
      imageUrl: '/schooltech_logo.jpeg',
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
      imageUrl: '/betrbeta_logo.jpeg',
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
      imageUrl: '/arnawa_logo.webp',
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
      imageUrl: '/rainbow_kids_logo.png',
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
      imageUrl: '/iflabs_logo.jpg',
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
      imageUrl: '/telu_logo.jpeg',
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
      imageUrl: '/bangkit_logo.jpeg',
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
      imageUrl: '/aws_logo.png',
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
      imageUrl: '/team_logo.jpeg',
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
      imageUrl: '/menebarmanfaat_logo.jpeg',
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
      imageUrl: '/thumbnail_no_image.jpg',
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
      imageUrl: '/thumbnail_no_image.jpg',
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
      imageUrl: '/project_thumbnail_stuntfree.webp',
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
      image: '/blog_thumnail_hello_world.png',
      content: <div className="h-full w-full"></div>
    },
    {
      title: 'How I Received a Job Offer and a Quick Promotion from a Remote Company',
      publishedAt: '2025-10-08',
      image: '/blog_thumnail_job_offer_and_quick_promotion.jpg',
      content: <div className="h-full w-full"></div>
    }
  ]
} as const
