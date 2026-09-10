import { ProcessContent } from '../types/page.types'

export const processContent: ProcessContent = {
  slug: 'process',
  title: 'Process — Codzee',
  metaDescription: 'What actually happens after you reach out to Codzee — seven stages, from first call to handover, explained plainly with no hidden steps.',
  hero: {
    headline: "Here's what happens, in order, once you say yes.",
    supportingLine: "Seven stages, and you'll always know which one you're in."
  },
  stages: [
    {
      id: 'discovery-call',
      number: '01',
      variant: 'A',
      headline: "Reaching out doesn't commit you to anything.",
      body: "The first conversation is thirty minutes, over Zoom or Google Meet, and it's about your specific problem — not a sales pitch about what we offer. We ask what's broken, what's missing, or what was built wrong, and we listen long enough to actually understand it. We don't quote a price on this call. If you ask, we'll give a rough range, never a firm number — a real number only makes sense once we understand the actual scope, and pretending otherwise would be a guess dressed up as a quote. If it's not a fit, either direction, we say so plainly, and nothing else happens."
    },
    {
      id: 'the-map',
      number: '02',
      variant: 'C',
      headline: 'You should see we understood you before you pay us anything.',
      body: "If the discovery call goes well, we build something we call the Map — a visual, whiteboard-style breakdown of the problem as we understand it, the approach we'd take, and anything still unclear. This costs you nothing and happens before any contract exists. You're not approving a price at this stage. You're checking whether we actually understood the problem, or whether we missed something — and if we missed something, this is where it gets corrected, before it costs either of us anything."
    },
    {
      id: 'agreement-kickoff',
      number: '03',
      variant: 'E',
      body: "Once you approve the Map, we send the contract. Once it's signed and the first invoice clears, work begins within 24 business hours — weekends don't count toward that window, so a Friday payment means a Monday start, not a lost week.",
      statLabel: 'How fast we actually start',
      stat: '24 hours'
    },
    {
      id: 'research-planning',
      number: '04',
      variant: 'D',
      headline: "Nothing gets built until it's written down first.",
      body: "Before any design work starts, we spend a day or two researching your market, your competitors, and what's already been tried in your specific situation. That research feeds into a set of documents written in plain language — not code, not technical jargon — that describe exactly what we're going to build and why. You read this, ask questions, and approve it. This is the point where scope gets locked. Nothing moves to design until you've confirmed this is actually the right thing to build."
    },
    {
      id: 'design',
      number: '05',
      variant: 'B',
      headline: 'You see every screen before a single line of code exists.',
      body: "Once the plan is approved, we design what you'll actually use — every screen, every flow, shown to you before development begins. This is deliberate: catching a wrong direction here costs a conversation. Catching it after development costs real time and real rework. If something doesn't feel right at this stage, that's exactly the moment to say so."
    },
    {
      id: 'build',
      number: '06',
      variant: 'dominant',
      headline: 'The longest stage, and the one that matters most.',
      body: "This is where the majority of the timeline lives — usually ten to twenty days or more, depending on how complex the project actually is. Every feature is built against the documentation from Stage 4, checked as it's finished, and corrected before it moves forward. Nothing reaches testing without being reviewed first. This isn't a stage we rush to get to the next one — it's the stage the rest of the process exists to protect."
    },
    {
      id: 'testing-handover',
      number: '07',
      variant: 'E',
      body: "Before anything reaches you, it goes through a dedicated security and QA pass — not just a final glance before shipping. Once you approve it, final payment is made, and the work becomes yours. For ninety days after that, any bug or issue within the original scope is fixed at no extra cost. New features beyond that scope are quoted separately, not folded in silently.",
      statLabel: 'What happens after launch',
      stat: '90 days'
    }
  ],
  never: {
    heading: "You won't be left wondering.",
    items: [
      {
        lead: 'We never make a decision without telling you why.',
        detail: "If we choose an approach during design or build, you can ask why, and the answer is a specific reason — not reassurance. Understanding the thinking behind a decision is part of what you're paying for, not an inconvenience to work around."
      },
      {
        lead: 'We never expand scope without telling you first.',
        detail: "What we're building is written down and approved before design starts. If something outside that comes up mid-project, it becomes a separate, quoted conversation — never a silent addition to the invoice."
      },
      {
        lead: 'We never leave a message sitting.',
        detail: "During work hours, expect a reply within the hour. Outside those hours, including weekends, you'll still hear back the same day."
      }
    ]
  },
  closing: {
    line: "You've read how this actually works. The only thing left is the conversation that starts it.",
    cta: {
      label: 'Start a conversation',
      href: '/contact'
    }
  }
}
