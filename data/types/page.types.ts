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