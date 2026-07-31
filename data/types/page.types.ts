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