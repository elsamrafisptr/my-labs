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
  avatarUrl: '/profile.png',

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
      imageUrl: '',
      href: '',
      status: 'Full Time',
      type: 'Remote',
      website: 'https://schnap.com.au/',
      start: 'Mar 2025',
      end: 'Now',
      content: ''
    },
    {
      title: 'Fullstack Developer',
      name: 'KAP TNN',
      desc: ' Indonesia’s registered public accounting firm partner of BOKS International',
      location: 'South Jakarta, Indonesia',
      imageUrl: '',
      href: '',
      status: 'Full Time',
      type: 'Remote',
      website: 'https://kaptnn.com/',
      start: 'Sep 2024',
      end: 'Aug 2025',
      content: ''
    },
    {
      title: 'Frontend Developer',
      name: 'School Tech Indonesia',
      desc: 'Digital school management startup',
      location: 'Malang, Indonesia',
      imageUrl: '',
      href: '',
      status: 'Full Time',
      type: 'Remote',
      website: 'https://schooltechindonesia.com/',
      start: 'Aug 2024',
      end: 'Dec 2024',
      content: ''
    },
    {
      title: 'Fullstack Developer',
      name: 'Betr Beta',
      desc: 'Software agency',
      location: 'Anson Road, Singapore',
      imageUrl: '',
      href: '',
      status: 'Part Time',
      type: 'Remote',
      website: 'https://betrbeta.com/en-SG',
      start: 'Jun 2024',
      end: 'Aug 2024',
      content: ''
    }
  ],
  educations: [
    {
      title: 'Bachelor of Informatics',
      name: 'Telkom University',
      score: '(GPA 3.77/4.00) - Cumlaude',
      location: 'Bandung, Indonesia',
      imageUrl: '',
      href: '',
      website: 'https://telkomuniversity.ac.id/',
      start: 'Sep 2021',
      end: 'Jan 2025',
      content: ''
    },
    {
      title: 'Cloud Computing Cohort',
      name: 'Bangkit Academy 2024',
      score: '(A, 87/100)',
      location: 'Jakarta, Indonesia',
      imageUrl: '',
      href: '',
      website: 'https://grow.google/intl/id_id/bangkit/',
      start: 'Sep 2024',
      end: 'Jan 2025',
      content: ''
    },
    {
      title: 'AWS Academy 2024 Backend Development',
      name: 'AWS Backend Academy',
      score: '(A, 100%)',
      location: 'Jakarta, Indonesia',
      imageUrl: '',
      href: '',
      website: 'https://aws.dicoding.com/',
      start: 'Mar 2024',
      end: 'Sep 2024',
      content: ''
    }
  ],
  organizations: [
    {
      title: 'Design and Publication Team',
      name: 'TelU Edu Movement',
      desc: 'Social & Education',
      location: 'Bandung, Indonesia',
      imageUrl: '',
      href: '',
      type: 'On-Site',
      website: '',
      start: 'Oct 2021',
      end: 'Aug 2022',
      content: ''
    },
    {
      title: 'Design and Motion Video Division',
      name: 'Menebarmanfaat.id',
      desc: 'Social & Personal Development',
      location: 'Bandung, Indonesia',
      imageUrl: '',
      href: '',
      type: 'Remote',
      website: 'https://www.instagram.com/telu_edumovement/',
      start: 'Nov 2021',
      end: 'Mar 2022',
      content: ''
    }
  ],
  projects: [
    {
      accelerator: 'Microsoft Online Hackathon 2025 (elevAIte with Dicoding)',
      name: 'Teman Anti Judi Online',
      desc: '',
      imageUrl: '',
      href: '',
      website: '',
      github: '',
      year: '',
      stacks: [],
      content: ''
    },
    {
      accelerator:
        'International Conference on Advancement in Data Science, E-learning and Information System (ICADEIS 2025)',
      name: 'Growth Momentum (E-Learning Platform)',
      desc: '',
      imageUrl: '',
      href: '',
      website: '',
      github: '',
      year: '',
      stacks: [],
      content: ''
    },
    {
      accelerator: 'Bangkit Academy 2024 By Google, GoTo, Tokopedia, Traveloka',
      name: 'StuntFree Stunting Prevention and Detection Apps',
      desc: '',
      imageUrl: '',
      href: '',
      website: '',
      github: '',
      year: '',
      stacks: [],
      content: ''
    }
  ],
  achievements: [
    {
      accelerator: '',
      name: '',
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
  competitions: []
} as const
