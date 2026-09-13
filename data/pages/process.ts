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
      title: 'Initial Intake',
      variant: 'A',
      headline: "Reaching out doesn't commit you to anything.",
      paragraphs: [
        "The first conversation is thirty minutes, over Zoom or Google Meet, focused entirely on your specific situation — not a sales pitch about what we offer. We ask what is broken, what is missing, or what was built wrong, and we listen long enough to understand the operational reality.",
        "We do not quote a price on this call. If you ask, we provide a rough range, never a firm number — a real figure only makes sense once we understand the actual scope. If it is not a fit, either direction, we say so plainly, and nothing else follows."
      ],
      takeaway: 'Thirty minutes to diagnose the problem. Zero sales pressure and no guesswork quotes.',
      metaDetails: [
        { label: 'Format', value: '30-minute video call' },
        { label: 'Focus', value: 'Problem diagnosis' },
        { label: 'Commitment', value: 'None' }
      ]
    },
    {
      id: 'the-map',
      number: '02',
      title: 'Diagnostic Map',
      variant: 'C',
      headline: 'You should see we understood you before you pay us anything.',
      paragraphs: [
        "If the discovery call shows a clear path forward, we build the Map — a visual, whiteboard-style architecture of the problem, our proposed engineering direction, and any open constraints.",
        "This costs you nothing and happens before any contract exists. You are verifying whether we diagnosed the actual issue correctly before either of us commits to an agreement."
      ],
      takeaway: 'A complete architectural breakdown delivered before a contract or payment is requested.',
      metaDetails: [
        { label: 'Deliverable', value: 'Visual problem map' },
        { label: 'Cost', value: 'Zero' },
        { label: 'Timing', value: 'Pre-contract' }
      ]
    },
    {
      id: 'agreement-kickoff',
      number: '03',
      title: 'Commitment & Start',
      variant: 'E',
      headline: 'Work begins within 24 business hours.',
      paragraphs: [
        "Once you approve the Map, we issue a clear agreement with locked scope. Once signed and the initial invoice clears, active work starts within 24 business hours.",
        "Weekends do not count toward this window. A Friday payment means a Monday start, never a lost week or stalled momentum."
      ],
      takeaway: 'Clear scope in writing and a guaranteed 24-hour turnaround to production start.',
      statLabel: 'How fast we actually start',
      stat: '24 hours',
      metaDetails: [
        { label: 'Scope', value: 'Locked in writing' },
        { label: 'Window', value: '24 business hours' }
      ]
    },
    {
      id: 'research-planning',
      number: '04',
      title: 'System Scope',
      variant: 'D',
      headline: "Nothing gets built until it's written down first.",
      paragraphs: [
        "Before design or code begins, we spend time researching your operational requirements, competitors, and technical constraints.",
        "That research becomes a plain-language specification detailing what will be built and why. You review and approve it. This is where scope is locked — nothing moves to design until you confirm this is the right thing to build."
      ],
      takeaway: 'Plain-language specifications that lock requirements before design begins.',
      metaDetails: [
        { label: 'Format', value: 'Plain-language specification' },
        { label: 'Sign-off', value: 'Client written approval' },
        { label: 'Gate', value: 'Scope locked' }
      ]
    },
    {
      id: 'design',
      number: '05',
      title: 'Interface Architecture',
      variant: 'B',
      headline: 'You see every screen before a single line of code exists.',
      paragraphs: [
        "Once the specification is approved, we design what you will actually use — every screen, state, and user flow, presented before engineering starts.",
        "Catching a misaligned direction in design costs a short conversation. Catching it after development costs weeks of rework. If something feels off, that is the exact moment to adjust it."
      ],
      takeaway: 'Full fidelity previews across every state before development touches a line of code.',
      metaDetails: [
        { label: 'Coverage', value: 'Every screen and flow' },
        { label: 'Feedback', value: 'Direct review rounds' },
        { label: 'Code status', value: 'Zero code until visual sign-off' }
      ]
    },
    {
      id: 'build',
      number: '06',
      title: 'Production Build',
      variant: 'dominant',
      headline: 'The longest stage, and the one that matters most.',
      paragraphs: [
        "This is where the majority of the timeline lives — typically ten to twenty business days depending on system complexity.",
        "Every feature is built against the approved specification from Stage 04, verified as it completes, and tested continuously. Nothing reaches testing without passing internal quality gates."
      ],
      takeaway: 'Disciplined engineering built against locked specifications with continuous verification.',
      metaDetails: [
        { label: 'Timeline', value: '10 to 20+ business days' },
        { label: 'Testing', value: 'Continuous internal QA' },
        { label: 'Architecture', value: 'Full type safety & audited code' }
      ]
    },
    {
      id: 'testing-handover',
      number: '07',
      title: 'Verification & Handover',
      variant: 'E',
      headline: 'Dedicated QA before release, and 90 days of warranty after.',
      paragraphs: [
        "Before anything reaches you, the system goes through a dedicated security and quality pass. Once you test and approve it, final payment clears, and all code and repositories transfer entirely to you.",
        "For ninety days after launch, any bug or issue within the original scope is resolved at no extra cost. Any additions beyond that scope are quoted separately, never hidden in the background."
      ],
      takeaway: 'Comprehensive QA, complete IP handover, and ninety days of full bug warranty.',
      statLabel: 'What happens after launch',
      stat: '90 days',
      metaDetails: [
        { label: 'Ownership', value: '100% repository transfer' },
        { label: 'Warranty', value: '90 days bug resolution' }
      ]
    }
  ],
  never: {
    heading: "You won't be left wondering.",
    items: [
      {
        lead: 'We never make a decision without telling you why.',
        detail: "If we choose an approach during design or build, you can ask why, and the answer is a specific reason — not reassurance. Understanding the thinking behind a decision is part of what you are paying for, not an inconvenience to work around."
      },
      {
        lead: 'We never expand scope without telling you first.',
        detail: "What we are building is written down and approved before design starts. If something outside that scope emerges mid-project, it becomes a separate, quoted conversation — never a silent addition to the invoice."
      },
      {
        lead: 'We never leave a message sitting.',
        detail: "During work hours, expect a reply within the hour. Outside those hours, including weekends, you will hear back the same day."
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
