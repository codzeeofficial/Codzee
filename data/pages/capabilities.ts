import { CapabilitiesContent } from '../types/page.types'

export const capabilitiesContent: CapabilitiesContent = {
  slug: 'capabilities',
  title: 'Sync, access, payments and analytics — Codzee',
  metaDescription: 'The hard parts of a build, described by the problem: sync across devices, user access, payments, analytics, site control and heavy media.',
  hero: {
    headline: 'The hard parts, in plain terms.',
    supportingLine: 'Each one is described by the problem it solves, with a project you can look at.'
  },
  complexity: {
    heading: 'Three levels of complexity, in plain terms.',
    paragraph: "Complexity isn't counted in screens or features. It shows in how many places the same truth has to live, and how many people depend on it being right.",
    tiers: [
      {
        id: 'single-surface',
        label: 'A single surface',
        description: 'One place people visit, built to carry heavy content without slowing down.'
      },
      {
        id: 'one-product-several-surfaces',
        label: 'One product, several surfaces',
        description: 'The same records on web and phone, with plans, payments and offline behaviour.'
      },
      {
        id: 'whole-operation',
        label: 'A whole operation',
        description: 'Many users with different access, live activity, and a phone companion. The business runs on it.'
      }
    ]
  },
  index: {
    label: 'The full list',
    line: 'Each one opens into its full detail below.'
  },
  capabilities: [
    {
      id: 'every-screen-agrees',
      number: '01',
      title: 'Every screen agrees',
      summary: 'The same records and the same numbers on web and phone, offline included.',
      detail: {
        paragraphs: [
          'A record is added on the web, and a minute later someone opens the phone. The numbers have to match. When the phone has no signal, they still have to.',
          'That behaviour is designed into how the data is stored and how it travels, not added at the end.'
        ],
        specifics: [
          'Entries made offline appear on screen immediately',
          'Entries sync with the backend when the connection returns',
          'The same records and the same numbers on web and Android',
          'New activity on the backend reaches the phone in the same second'
        ],
        proof: [
          { label: 'See it in Pennify', href: '/work/pennify' },
          { label: 'See it in Orvari', href: '/work/orvari' }
        ]
      }
    },
    {
      id: 'right-access-for-everyone',
      number: '02',
      title: 'The right access for everyone',
      summary: 'Every user sees and changes only what belongs to them.',
      detail: {
        paragraphs: [
          'The owner needs to see everything. A person on one task needs to see one thing. Everyone in between needs something different, and a mistake in either direction is expensive.',
          'Permissions are designed into the structure of the system, not added as a login screen afterwards.'
        ],
        specifics: [
          'Multiple users signing in to one system',
          'Access set per user, from full control to a single task'
        ],
        proof: [
          { label: 'See it in Orvari', href: '/work/orvari' }
        ]
      }
    },
    {
      id: 'payments-and-paid-plans',
      number: '03',
      title: 'Payments and paid plans',
      summary: 'Free and paid tiers, with features that unlock by plan.',
      detail: {
        paragraphs: [
          'A free version has to be useful, and a paid one has to be worth paying for. The line between them runs through the whole product.',
          'Payment methods, plan status and feature access are built as one system, so the product knows what each person has paid for.'
        ],
        specifics: [
          'Payment methods for the paid plan',
          'Features that unlock by plan, such as a longer history of records',
          'Up to a year of backed-up data on the paid plan'
        ],
        proof: [
          { label: 'See it in Pennify', href: '/work/pennify' }
        ]
      }
    },
    {
      id: 'numbers-from-the-same-records',
      number: '04',
      title: 'Numbers from the same records',
      summary: 'Cost, revenue and margin per product, worked out from what the team already enters.',
      detail: {
        paragraphs: [
          'The dashboard shows one figure and the books show another. Nobody trusts a number that was typed in twice.',
          'So a number is never typed twice. Cost and revenue are worked out from the same records the team already enters.'
        ],
        specifics: [
          'Dashboards and analytics on live records',
          'A cost price kept private from customers',
          'Cost, revenue and margin worked out per product'
        ],
        proof: [
          { label: 'See it in Orvari', href: '/work/orvari' }
        ]
      }
    },
    {
      id: 'control-without-a-developer',
      number: '05',
      title: 'Control without a developer',
      summary: 'Add, edit and publish what the public sees, from your own panel.',
      detail: {
        paragraphs: [
          'Something on the site needs to change today, and the only person who can change it is a developer.',
          'The panel is built so the people who run the business can make the change themselves.'
        ],
        specifics: [
          'Create a product with its details, images, description and price',
          'Update banners, run sales and group products into collections',
          'Control the public site from the same panel as everything else'
        ],
        proof: [
          { label: 'See it in Orvari', href: '/work/orvari' }
        ]
      }
    },
    {
      id: 'heavy-media-fast-pages',
      number: '06',
      title: 'Heavy media, fast pages',
      summary: 'Image-heavy work presented without slowing the page.',
      detail: {
        paragraphs: [
          'Some work only makes sense at full quality, and full quality is heavy. A page that carries it badly loses the person before they have seen anything.',
          'The site is built around the weight of its content from the start, not patched after it feels slow.'
        ],
        specifics: [
          'Heavy images shown at full quality',
          'Pages that still load fast under that weight'
        ],
        proof: [
          { label: 'See it in Zhabyart', href: '/work/zhabyart' }
        ]
      }
    }
  ],
  workInvitation: {
    line: 'Every one of these has a project behind it, written up from the problem outward.',
    cta: {
      label: 'See the work',
      href: '/work'
    }
  },
  closing: {
    line: 'If one of these sounds like your problem, tell us about it.',
    cta: {
      label: 'Start a conversation',
      href: '/contact'
    }
  }
}