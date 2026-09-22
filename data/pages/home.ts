import { ROUTES } from '@/lib/constants/routes'
import type { HomeContent } from '@/data/types/page.types'

export const homeContent: HomeContent = {
  slug: 'home',
  title: 'Codzee',
  metaDescription:
    'You don\u2019t want problems, just like us. A product engineering studio that builds what\u2019s missing and rebuilds what was built wrong.',

  hero: {
    headingLead: 'You don\u2019t want',
    headingEmphasis: 'PROBLEMS',
    headingClose: 'just like us.',
    cta: { label: 'Discover Work', href: ROUTES.work },
  },

  solution: {
    heading: 'The system was never the problem. The moment it was built for was.',
    supportingText:
      'Most projects don\u2019t fail because the technology was wrong. They fail because a decision got made before the problem was fully understood \u2014 the wrong tool, a rushed shortcut, or nothing built at all when something clearly should have been.',
    situations: [
      {
        id: 'broken',
        label: 'Broken',
        description: 'Something exists, and it stopped doing what it\u2019s supposed to.',
      },
      {
        id: 'missing',
        label: 'Missing',
        description: 'Nothing exists yet, and it needs to.',
      },
      {
        id: 'built-wrong',
        label: 'Built wrong',
        description: 'Something exists, but the wrong tool built it.',
      },
    ],
  },

  work: {
    projects: [
      {
        id: 'pennify',
        title: 'Pennify',
        category: 'Financial Operations',
        problemStatement:
          'Expense tracking already existed everywhere — just never in a way that fit how this business actually worked.',
        imageAlt: 'Pennify expense tracking product dashboard',
        href: ROUTES.caseStudies.pennify,
        tags: ['Next.js', 'PostgreSQL', 'Design System'],
        metric: '94% time reduction in monthly reconciliations',
      },
      {
        id: 'orvari',
        title: 'Orvari',
        category: 'Commerce Infrastructure',
        problemStatement:
          'Shopify assumes a fulfilment model that doesn’t match how COD businesses actually operate.',
        imageAlt: 'Orvari commerce operating system admin interface',
        href: ROUTES.caseStudies.orvari,
        tags: ['Full-Stack Engine', 'Realtime Inventory', 'Edge APIs'],
        metric: 'Zero order sync failures across 12,000+ daily orders',
      },
      {
        id: 'zhabyart',
        title: 'Zhabyart',
        category: 'Digital Flagship',
        problemStatement: 'The work was extraordinary. The website didn’t say so.',
        imageAlt: 'Zhabyart atmospheric digital presence',
        href: ROUTES.caseStudies.zhabyart,
        tags: ['WebGL Motion', 'Fluid Typography', 'Custom CMS'],
        metric: '3.4x average session duration post-launch',
      },
    ],
  },

  studio: {
    label: 'Who are we?',
    leadText:
      'A product engineering studio. We start with the problem living inside a business, not with a deliverable — the software gets built around whatever solving that problem actually requires. Code is the tool. Understanding the problem is the real work.',
    primaryCta: { label: 'About Codzee', href: ROUTES.about },
    secondaryCta: { label: 'Meet the Team', href: ROUTES.team },
  },

  capabilities: {
    heading: 'We don\u2019t skip the hard parts.',
    supportingText:
      'The parts that decide whether software actually works are usually invisible. That\u2019s where we spend most of our time.',
    items: [
      {
        id: 'every-screen-agrees',
        title: 'Screen Sync',
        description:
          'Same records, same numbers — on web and phone, even offline.',
      },
      {
        id: 'right-access-for-everyone',
        title: 'Access Control',
        description:
          'Every user sees and changes only what belongs to them, from full control to a single task.',
      },
      {
        id: 'payments-and-paid-plans',
        title: 'Payments',
        description:
          'Free and paid tiers built as one system, so the product knows what each person has paid for.',
      },
      {
        id: 'control-without-a-developer',
        title: 'Site Control',
        description:
          'The people who run the business can update the public site themselves, no developer needed.',
      },
    ],
  },

  process: {
    heading: 'What happens after you reach out?',
    supportingText:
      'There’s a clear path from a first conversation to a finished product, and every step of it happens before you have to guess what comes next.',
    stages: [
      {
        id: 'first-call',
        number: '01',
        title: 'First Call',
        description:
          'A 30-minute discovery conversation about your specific problem — not a sales pitch. We listen until we understand what is broken, missing, or built wrong.',
        duration: '30 min call',
        deliverables: ['Scope evaluation', 'Technical feasibility analysis'],
      },
      {
        id: 'the-map',
        number: '02',
        title: 'Problem Map',
        description:
          'A visual whiteboard-style blueprint of the system architecture and proposed execution roadmap before any contract or invoice exists.',
        duration: '48h delivery',
        deliverables: ['System blueprint', 'Decision log', 'Cost forecast'],
      },
      {
        id: 'scoped-build',
        number: '03',
        title: 'Scoped Build',
        description:
          'The core production phase where features are engineered against locked documentation, tested continuously, and deployed in weekly milestones.',
        duration: '2–4 weeks',
        isHub: true,
        deliverables: ['Production code', 'Automated testing', 'Weekly staging releases'],
      },
      {
        id: 'handover',
        number: '04',
        title: 'Testing & Handover',
        description:
          'Dedicated QA and security passes followed by complete repository handover. Includes 90 days of guaranteed post-launch maintenance.',
        duration: '90 days support',
        deliverables: ['Full repository transfer', 'Deployment pipeline', '90-day warranty'],
      },
    ],
  },

  contact: {
    heading: 'Shall we talk?',
    href: ROUTES.contact,
  },
}