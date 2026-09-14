import { ContactPageContent } from '../types/page.types'

export const contactContent: ContactPageContent = {
  slug: 'contact',
  title: 'Contact — Codzee',
  metaDescription: 'Reach out to Codzee. A real person reads every note and replies within 24 hours. The first call is thirty minutes, with zero commitment.',
  leadIn: 'Direct line to the studio',
  heading: "Let's talk about what's actually broken.",
  supportingText: 'Reaching out does not start a sales cycle. We read what you send, reply directly, and set up a thirty-minute diagnostic call.',
  reassurances: [
    {
      number: '01',
      lead: 'A real person reads every note.',
      detail: 'No automated screening or sales funnels. An engineer reviews your problem directly.'
    },
    {
      number: '02',
      lead: 'Response within 24 hours.',
      detail: 'During work hours, expect a reply within the hour. Outside those hours, always within the day.'
    },
    {
      number: '03',
      lead: 'The first call is just thirty minutes.',
      detail: 'We listen to what is broken or missing. We do not pitch, pressure, or quote guesswork numbers.'
    }
  ],
  form: {
    step1: {
      title: 'Who are we speaking with?',
      nameLabel: 'Your name',
      namePlaceholder: 'Full name',
      emailLabel: 'Email address',
      emailPlaceholder: 'name@company.com'
    },
    step2: {
      title: 'What are you working on?',
      companyLabel: 'Company or brand',
      companyPlaceholder: 'Organization name',
      roleLabel: 'Website or current link (optional)',
      rolePlaceholder: 'yoursite.com or leave blank'
    },
    step3: {
      title: 'What needs solving?',
      problemLabel: 'Tell us what is broken, missing, or needs building',
      problemPlaceholder: 'Give us as much or as little detail as you like. We read every line.'
    },
    step4: {
      title: 'Review before sending',
      submitButtonLabel: 'Send note'
    },
    confirmation: {
      heading: "We've received your note.",
      message: 'A real person will review it and reply within 24 hours. The first call is thirty minutes, and it is strictly a conversation about your problem.',
      subline: 'Talk soon.'
    }
  }
}
