export interface CTALink {
  label: string
  href: string
}

export interface HeroContent {
  heading: string
  supportingText?: string
  cta?: CTALink
}

export interface SectionContent {
  id: string
  heading: string
  supportingText?: string
  cta?: CTALink
}

export interface PageContent {
  slug: string
  title: string
  metaDescription: string
  hero: HeroContent
  sections: SectionContent[]
}

export interface HomeHeroContent {
  headingLead: string
  headingEmphasis: string
  headingClose: string
  cta: CTALink
}

export interface HomeSituation {
  id: string
  label: string
  description: string
}

export interface HomeSolutionContent {
  heading: string
  supportingText: string
  situations: HomeSituation[]
}

export interface HomeWorkProject {
  id: string
  title: string
  problemStatement: string
  imageAlt: string
  href: string
}

export interface HomeWorkContent {
  projects: HomeWorkProject[]
}

export interface HomeStudioContent {
  label: string
  leadText: string
  primaryCta: CTALink
  secondaryCta: CTALink
}

export interface HomeCapabilityItem {
  id: string
  title: string
  description: string
}

export interface HomeCapabilitiesContent {
  heading: string
  supportingText: string
  items: HomeCapabilityItem[]
}

export interface HomeProcessStage {
  id: string
  number: string
  title: string
  description: string
}

export interface HomeProcessContent {
  heading: string
  supportingText: string
  stages: HomeProcessStage[]
}

export interface HomeContactContent {
  heading: string
  href: string
}

export interface HomeContent {
  slug: string
  title: string
  metaDescription: string
  hero: HomeHeroContent
  solution: HomeSolutionContent
  work: HomeWorkContent
  studio: HomeStudioContent
  capabilities: HomeCapabilitiesContent
  process: HomeProcessContent
  contact: HomeContactContent
}

export interface AboutHeroContent {
  statement: string
}

export interface AboutStudioContent {
  heading: string
  paragraphs: string[]
}

export interface AboutFounderContent {
  pullLine: string
  paragraphs: string[]
}

export interface AboutPerspectiveContent {
  heading: string
  paragraphs: string[]
}

export interface AboutTeamWorkInviteContent {
  line: string
  teamCta: CTALink
  workCta: CTALink
}

export interface AboutContent {
  slug: string
  title: string
  metaDescription: string
  hero: AboutHeroContent
  studioStory: AboutStudioContent
  founderStory: AboutFounderContent
  perspective: AboutPerspectiveContent
  teamWorkInvite: AboutTeamWorkInviteContent
}

export interface TeamMember {
  id: string
  name: string
  role: string
  description: string
  photoSrc: string
}

export interface TeamHeroContent {
  statement: string
}

export interface TeamWorkInviteContent {
  line: string
  cta: CTALink
}

export interface TeamContent {
  slug: string
  title: string
  metaDescription: string
  hero: TeamHeroContent
  members: TeamMember[]
  workInvite: TeamWorkInviteContent
}
export interface LegalSubsection {
  id: string
  heading: string
  paragraphs: string[]
}

export interface LegalSection {
  id: string
  heading: string
  paragraphs: string[]
  subsections?: LegalSubsection[]
}

export interface LegalPageContent {
  slug: string
  title: string
  metaDescription: string
  lastUpdated: string
  intro: string[]
  sections: LegalSection[]
}

export type ProcessStageVariant = 'A' | 'B' | 'C' | 'D' | 'E' | 'dominant'

export interface ProcessStage {
  id: string
  number: string
  variant: ProcessStageVariant
  headline?: string
  body: string
  statLabel?: string
  stat?: string
}

export interface ProcessNeverItem {
  lead: string
  detail: string
}

export interface ProcessNeverContent {
  heading: string
  items: ProcessNeverItem[]
}

export interface ProcessHeroContent {
  headline: string
  supportingLine: string
}

export interface ProcessClosingContent {
  line: string
  cta: CTALink
}

export interface ProcessContent {
  slug: string
  title: string
  metaDescription: string
  hero: ProcessHeroContent
  stages: ProcessStage[]
  never: ProcessNeverContent
  closing: ProcessClosingContent
}