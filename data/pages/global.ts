export const globalContent = {
  footer: {
    statement: 'Codzee is a product engineering studio. We solve problems that live inside businesses.',
    wordmark: 'CODZEE',
    linkColumns: [
      {
        heading: 'Studio',
        links: [
          { label: 'Work', href: '/work' },
          { label: 'Services', href: '/services' },
          { label: 'About', href: '/about' },
        ],
      },
      {
        heading: 'Company',
        links: [
          { label: 'Team', href: '/team' },
          { label: 'Capabilities', href: '/capabilities' },
          { label: 'Process', href: '/process' },
        ],
      },
      {
        heading: 'Legal',
        links: [
          { label: 'Terms', href: '/terms' },
          { label: 'Privacy', href: '/privacy' },
        ],
      },
    ],
    backToTopLabel: 'Back to top',
    bottomBar: {
      copyright: '© 2026 Codzee. All rights reserved.',
      tagline: 'Real problems. Built from scratch.',
    },
  },
  nav: {
    primaryLinks: [
      { label: 'Work', href: '/work' },
      { label: 'Services', href: '/services' },
      { label: 'About', href: '/about' },
    ],
    contactCta: { label: "Let's talk", href: '/contact' },
  },
} as const