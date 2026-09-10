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
        problemStatement:
          'Expense tracking already existed everywhere \u2014 just never in a way that fit how this business actually worked.',
        imageAlt: 'Pennify expense tracking product dashboard',
        href: ROUTES.caseStudies.pennify,
      },
      {
        id: 'orvari',
        title: 'Orvari',
        problemStatement:
          'Shopify assumes a fulfilment model that doesn\u2019t match how COD businesses actually operate.',
        imageAlt: 'Orvari commerce operating system admin interface',
        href: ROUTES.caseStudies.orvari,
      },
      {
        id: 'zhabyart',
        title: 'Zhabyart',
        problemStatement: 'The work was extraordinary. The website didn\u2019t say so.',
        imageAlt: 'Zhabyart atmospheric digital presence',
        href: ROUTES.caseStudies.zhabyart,
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
    items: [],
  },

  process: {
    heading: 'What happens after you reach out?',
    supportingText:
      'There\u2019s a clear path from a first conversation to a finished product, and every step of it happens before you have to guess what comes next.',
    stages: [],
  },

  contact: {
    heading: 'Shall we talk?',
    href: ROUTES.contact,
  },
}