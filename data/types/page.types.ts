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
  category?: string
  tags?: string[]
  metric?: string
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
  deliverables?: string[]
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
  duration?: string
  isHub?: boolean
  deliverables?: string[]
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

export interface ProcessStageMeta {
  label: string
  value: string
}

export interface ProcessStage {
  id: string
  number: string
  title: string
  variant: ProcessStageVariant
  headline?: string
  paragraphs: string[]
  takeaway?: string
  metaDetails?: ProcessStageMeta[]
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

export interface ContactReassurance {
  number: string
  lead: string
  detail: string
}

export interface ContactFormContent {
  step1: {
    title: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
  }
  step2: {
    title: string
    companyLabel: string
    companyPlaceholder: string
    roleLabel: string
    rolePlaceholder: string
  }
  step3: {
    title: string
    problemLabel: string
    problemPlaceholder: string
  }
  step4: {
    title: string
    submitButtonLabel: string
  }
  confirmation: {
    heading: string
    message: string
    subline: string
  }
}

export interface ContactPageContent {
  slug: string
  title: string
  metaDescription: string
  leadIn: string
  heading: string
  supportingText: string
  reassurances: ContactReassurance[]
  form: ContactFormContent
}

export interface ClosingInvitationContent {
  line: string
  cta: CTALink
}

export type ServiceLayout =
  | 'asymmetricColumns'
  | 'rightOffsetStack'
  | 'splitHeroBlock'
  | 'topHeavySubColumns'
  | 'diagonalFocal'

export interface ServiceBase {
  id: string
  number: string
  label: string
  heading: string
}

export interface ServiceSubItem {
  number: string
  title: string
  description: string
}

export interface ServiceSplitText {
  title: string
  paragraph: string
}

export interface ServiceProductEngineering extends ServiceBase {
  layout: 'asymmetricColumns'
  supportingLine: string
  paragraph: string
  scopeItems: string[]
}

export interface ServiceSystemsArchitecture extends ServiceBase {
  layout: 'rightOffsetStack'
  paragraph: string
  components: string[]
}

export interface ServiceInterfaceCraft extends ServiceBase {
  layout: 'splitHeroBlock'
  paragraph: string
  metrics: { label: string; value: string }[]
}

export interface ServicePlatformOperations extends ServiceBase {
  layout: 'topHeavySubColumns'
  paragraph: string
  subItems: [ServiceSubItem, ServiceSubItem, ServiceSubItem]
}

export interface ServiceMobile extends ServiceBase {
  layout: 'diagonalFocal'
  supportingLine: string
  split: ServiceSplitText
}

export interface ServiceBrandFoundation extends ServiceBase {
  layout: 'asymmetricColumns'
  supportingLine: string
  paragraph: string
  assets: string[]
}

export type ServiceEntry =
  | ServiceProductEngineering
  | ServiceSystemsArchitecture
  | ServiceInterfaceCraft
  | ServicePlatformOperations
  | ServiceMobile
  | ServiceBrandFoundation

export interface ServicesHeroContent {
  headline: string
  supportingLine: string
}

export interface ServicesContent {
  slug: string
  title: string
  metaDescription: string
  hero: ServicesHeroContent
  services: ServiceEntry[]
}
export interface CapabilityTier {
  id: string
  label: string
  description: string
}

export interface CapabilityComplexityContent {
  heading: string
  paragraph: string
  tiers: CapabilityTier[]
}

export interface CapabilityIndexContent {
  label: string
  line: string
}

export interface HeadlineHeroContent {
  headline: string
  supportingLine: string
}

export interface CapabilityDetail {
  paragraphs: string[]
  specifics: string[]
  proof: CTALink[]
}

export interface CapabilityEntry {
  id: string
  number: string
  title: string
  summary: string
  detail: CapabilityDetail
}

export interface CapabilitiesContent {
  slug: string
  title: string
  metaDescription: string
  hero: HeadlineHeroContent
  complexity: CapabilityComplexityContent
  index: CapabilityIndexContent
  capabilities: CapabilityEntry[]
  workInvitation: ClosingInvitationContent
  closing: ClosingInvitationContent
}