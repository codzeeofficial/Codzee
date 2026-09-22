import { ServicesContent } from '../types/page.types'

export const servicesContent: ServicesContent = {
  slug: 'services',
  title: 'Product engineering, systems and interfaces — Codzee',
  metaDescription: 'Product engineering, systems architecture, interface craft, platform operations, mobile and brand. Each one starts with the problem.',
  hero: {
    headline: 'You never wanted software. You wanted the problem gone.',
    supportingLine: 'We start with the problem. What gets built is whatever solving it takes.'
  },
  services: [
    {
      id: 'product-engineering',
      number: '01',
      label: 'Product Engineering',
      layout: 'asymmetricColumns',
      heading: 'One team, from idea to launch.',
      supportingLine: 'Research, architecture, design and build, handled by the same team from day one.',
      paragraph: "Software bought off the shelf can't bend to how your business actually runs. We build it around the way you operate, starting with how information is organised and carrying through to the day it goes live.",
      scopeItems: [
        'Structure designed around how your business actually works',
        'Access and permissions built in from the start',
        'Built to hold up under real, everyday use',
        'Carried through to launch, not handed off before it'
      ]
    },
    {
      id: 'systems-architecture',
      number: '02',
      label: 'Systems Architecture',
      layout: 'rightOffsetStack',
      heading: 'The backend that keeps every record correct.',
      paragraph: "A number can be right on one screen and wrong on another when the data behind it isn't handled carefully. We build the backend so a change made in one place is correct everywhere else it appears, on the web, on the phone, and in every report drawn from it.",
      components: [
        'Sync between web and mobile',
        'Updates delivered the moment they happen',
        'Access set per user, from full control to a single task',
        'Payments and subscription plans built in'
      ]
    },
    {
      id: 'interface-craft',
      number: '03',
      label: 'Interface Craft',
      layout: 'splitHeroBlock',
      heading: 'Interfaces that ship exactly as designed.',
      paragraph: 'A design in a file is a drawing. A browser has to handle every screen size, every connection speed, and every way someone might use it. We build every interface ourselves, so what ships matches what you approved.',
      metrics: []
    },
    {
      id: 'platform-operations',
      number: '04',
      label: 'Platform Operations',
      layout: 'topHeavySubColumns',
      heading: 'A panel the whole operation runs on.',
      paragraph: "Businesses stall when orders sit in one place, inventory in another, and the real numbers only in someone's head. We build one panel that gives your team a clear view of daily work, what customers see, and what everything actually costs.",
      subItems: [
        {
          number: '01',
          title: 'Daily operations',
          description: 'Orders, records and tasks updated the moment work arrives.'
        },
        {
          number: '02',
          title: 'What the public sees',
          description: 'Changes to the catalogue and pricing, made without a developer.'
        },
        {
          number: '03',
          title: 'The real numbers',
          description: 'Cost, revenue and margin come from the same records the team already uses.'
        }
      ]
    },
    {
      id: 'mobile',
      number: '05',
      label: 'Mobile',
      layout: 'diagonalFocal',
      heading: 'Apps that keep working without a connection.',
      supportingLine: 'Android apps built to keep working without a signal.',
      split: {
        title: 'The record waits, then syncs.',
        paragraph: "A record still saves when there's no connection, and the screen updates right away. Once the connection returns, it syncs with the backend, and the web shows the exact same thing."
      }
    },
    {
      id: 'brand-foundation',
      number: '06',
      label: 'Brand Foundation',
      layout: 'asymmetricColumns',
      heading: 'An identity built alongside the product.',
      supportingLine: 'Name, logo and the words on every screen, decided by the same people who build it.',
      paragraph: 'A brand added after launch never quite fits. We work on the name, the visuals and the words while the product is still taking shape, so all of it comes from the same thinking.',
      assets: [
        'Name, and how it reads and sounds',
        'Logo and visual identity',
        'Typography and colour, applied consistently',
        'The words used across every screen'
      ]
    }
  ]
}
