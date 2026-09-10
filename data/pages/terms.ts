import type { LegalPageContent } from '@/data/types/page.types'

export const termsContent: LegalPageContent = {
  slug: 'terms',
  title: 'Terms of Service',
  metaDescription:
    'The terms governing use of the Codzee website and client project engagements.',
  lastUpdated: '20 August 2026',
  intro: [
    'These Terms of Service ("Terms") govern your use of the Codzee website, and, where you engage us for a project, your relationship with CODZEE STUDIO (SMC-PRIVATE) LIMITED ("Codzee," "we," "us," or "our") as a client. These Terms apply in two layers: general terms that apply to anyone visiting our website, and client engagement terms that apply once you\u2019ve engaged us for a project. Each individual project is additionally governed by its own Statement of Work, which incorporates these Terms by reference \u2014 where a Statement of Work states something specific to that project, it governs for that project.',
    'We are registered and legally present in Pakistan, and these Terms are governed by Pakistan\u2019s law.',
  ],
  sections: [
    {
      id: 'website-use',
      heading: 'Website Use',
      paragraphs: [
        'The content on this website \u2014 including our name, branding, copy, and the work shown on it \u2014 belongs to Codzee or the respective project owners, and is not to be copied, reproduced, or used without our permission. We make reasonable efforts to keep this website accurate and available, but we don\u2019t guarantee it will always be error-free or uninterrupted, and we\u2019re not responsible for how you use information found on it. This website may link to third-party sites; we don\u2019t control and aren\u2019t responsible for their content or practices.',
      ],
    },
    {
      id: 'client-engagements',
      heading: 'Client Engagements',
      paragraphs: [
        'The remainder of these Terms applies once you\u2019ve engaged Codzee for a project.',
      ],
      subsections: [
        {
          id: 'payment-structure',
          heading: 'Payment Structure',
          paragraphs: [
            'Codzee\u2019s payment structure scales with the size of the engagement, reflecting the fact that risk and commitment on both sides grow with project scope. Projects under $5,000 follow a 50% deposit on engagement, 50% on completion structure. Projects between $5,000 and $15,000 follow a 40% deposit on engagement, 30% at an agreed mid-project milestone, 30% on completion structure. Projects above $15,000 follow a 30% deposit on engagement, with the remainder split across milestone payments tied to defined project phases, with the final balance due on completion.',
            'The exact amounts, milestones, and dates for a given engagement are set out in that project\u2019s Statement of Work.',
            'Payment is accepted via bank transfer, through Codzee\u2019s Payoneer-issued regional account details (United States, European Union, or United Kingdom, depending on the client\u2019s location), allowing most clients to pay via a standard local bank transfer rather than an international wire. All amounts are in US dollars unless otherwise agreed in writing. Each party is responsible for any fees charged by their own bank or payment provider in sending or receiving payment.',
          ],
        },
        {
          id: 'cancellation-refunds',
          heading: 'Cancellation and Refunds',
          paragraphs: [
            'Any payment made for a completed project milestone is non-refundable once that milestone has been delivered. If a client cancels an engagement partway through an active milestone, Codzee will invoice for the proportional value of work completed on that milestone up to the point of cancellation; any amount already paid toward that milestone is credited against this final invoice.',
          ],
        },
        {
          id: 'scope-documentation-revisions',
          heading: 'Scope, Documentation, and Revisions',
          paragraphs: [
            'Every engagement begins with a documentation phase. Once a client\u2019s deposit is received, Codzee prepares a project document outlining the features, structure, and outcomes the project will deliver. Work begins only once the client has reviewed and approved this documentation. This document describes what will be built and why \u2014 it does not disclose Codzee\u2019s internal implementation methods, technical architecture decisions, or specific execution workflow, which remain Codzee\u2019s own working process.',
            'Each project includes two rounds of revisions per defined project phase, within the scope agreed in that phase\u2019s documentation. A revision means a change or refinement to a feature or element already within the approved scope \u2014 it does not mean a change to the fundamental nature or direction of the project. Requests that fall outside the originally approved scope, or exceed the included revision rounds, will be scoped and billed separately, at a rate agreed with the client before that additional work begins.',
          ],
        },
        {
          id: 'ip-ownership',
          heading: 'Intellectual Property and Ownership',
          paragraphs: [
            'Codzee retains ownership of all work product \u2014 code, designs, and any other project deliverables \u2014 until the project\u2019s final invoice has been paid in full. Upon full and final payment, ownership of the completed project transfers to the client.',
            'Regardless of ownership transfer, Codzee retains the right to display completed projects in its own portfolio and marketing materials, including on this website, unless otherwise agreed in writing as part of a project\u2019s Statement of Work.',
            'If a project is terminated or placed on indefinite hold before final payment is made, ownership of any work completed to that point remains with Codzee, consistent with the general ownership rule above.',
          ],
        },
        {
          id: 'timelines-delays',
          heading: 'Timelines and Delays',
          paragraphs: [
            'Codzee provides realistic delivery estimates that include a reasonable buffer for unforeseen circumstances, rather than a fixed date presented as guaranteed. Where a client requests additional, more rigorous testing beyond Codzee\u2019s standard process, this is available as an optional addition and will extend the stated timeline accordingly.',
            'Where a delay is caused by the client \u2014 including delayed feedback, delayed approvals, or delayed provision of required assets or information \u2014 the project timeline is extended accordingly, without penalty to Codzee.',
          ],
        },
        {
          id: 'response-windows-holds',
          heading: 'Client Response Windows and Project Holds',
          paragraphs: [
            'Where an active project requires client approval or input to proceed, Codzee will specify a reasonable response window (typically 10 days) for that specific request. If the client does not respond within that window, the project is placed on hold, with no further work performed, until the client responds.',
            'If a project remains on hold for more than 30 days without client response, Codzee reserves the right to allocate that project capacity to other client work. The original project resumes once the client re-engages, but resuming may involve a waiting period and, where applicable, an adjustment to the project\u2019s price to reflect the change in scheduling.',
          ],
        },
        {
          id: 'confidentiality',
          heading: 'Confidentiality',
          paragraphs: [
            'Both Codzee and the client agree to keep confidential any non-public information shared in the course of the engagement \u2014 including project details, business information, and, on Codzee\u2019s part, internal processes and methods \u2014 and not to disclose this information to third parties without the other party\u2019s consent, except where required by law.',
          ],
        },
        {
          id: 'warranties',
          heading: 'Warranties',
          paragraphs: [
            'Codzee commits to delivering each project in line with the scope and specifications set out in that project\u2019s approved documentation. Codzee does not warrant that the delivered software will be entirely free of defects \u2014 software of any complexity may contain issues that surface after delivery \u2014 which is why every project includes a post-launch support period, described below.',
          ],
        },
        {
          id: 'post-launch-support',
          heading: 'Post-Launch Support',
          paragraphs: [
            'Every project includes 90 days of complimentary post-launch support following delivery, covering the correction of defects or issues within the originally agreed project scope. This support period does not cover new features, functionality outside the original scope, or changes to the project\u2019s original direction \u2014 such requests are treated as new work and quoted separately, based on their complexity.',
          ],
        },
        {
          id: 'limitation-of-liability',
          heading: 'Limitation of Liability',
          paragraphs: [
            'Codzee\u2019s total liability arising from any project, however caused, is limited to the total amount actually paid by the client for that project. Neither party is liable to the other for indirect, incidental, or consequential damages \u2014 including lost profits, lost business, or lost opportunities \u2014 arising from the engagement, to the fullest extent permitted by law.',
          ],
        },
        {
          id: 'data-processing',
          heading: 'Data Processing',
          paragraphs: [
            'Codzee\u2019s handling of personal data is described in our Privacy Policy. Where a client requires a formal Data Processing Agreement for their own compliance purposes, one is available on request.',
          ],
        },
        {
          id: 'third-party-services',
          heading: 'Third-Party Services',
          paragraphs: [
            'Where a project requires specialized work outside Codzee\u2019s core scope, or where a client requests infrastructure or hosting set up on their behalf, Codzee may engage third-party service providers. Any such provider receives only the specific information necessary to complete their scoped task, consistent with our Privacy Policy.',
          ],
        },
      ],
    },
    {
      id: 'termination',
      heading: 'Termination',
      paragraphs: [
        'Either party may raise concerns about an active engagement at any time. Where a project remains on hold beyond the window described in Client Response Windows and Project Holds, or where either party wishes to formally end an engagement, the terms of Cancellation and Refunds and Intellectual Property and Ownership govern the outcome.',
      ],
    },
    {
      id: 'governing-law',
      heading: 'Governing Law and Dispute Resolution',
      paragraphs: [
        'These Terms, and any engagement with Codzee, are governed by the laws of Pakistan. In the event of a dispute, both parties agree to first attempt to resolve the matter directly and in good faith for a period of 30 days before pursuing formal legal action.',
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to These Terms',
      paragraphs: [
        'We may update these Terms from time to time as our practices evolve. Where we do, we\u2019ll update the "last updated" date at the top of this page. For active engagements, the Terms in effect at the time a Statement of Work is signed will continue to govern that specific project, unless both parties agree otherwise in writing.',
      ],
    },
    {
      id: 'contact',
      heading: 'Contact',
      paragraphs: [
        'Questions about these Terms can be sent to hello@codzee.com.',
      ],
    },
  ],
}
