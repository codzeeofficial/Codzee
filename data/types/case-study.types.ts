export type GallerySlotTier = 'primary' | 'compact'
export type WidthPattern = 'A' | 'B' | 'C' | 'D'

export interface FramedCaptureImage {
  src: string
  alt: string
  caption?: string
}

export interface GallerySlot {
  tier: GallerySlotTier
  pattern: WidthPattern
  images: FramedCaptureImage[]
}

export interface CaseStudyGallery {
  slots: GallerySlot[]
}

export interface RenderHeroImage {
  src: string
  alt: string
}

export interface CaseStudyTestimonial {
  quote: string
  name: string
  role: string
  photo: string
}

export interface CaseStudyContent {
  slug: string
  title: string
  metaDescription: string
  renderHero: RenderHeroImage
  problem: string
  thinking: string
  build: string
  gallery: CaseStudyGallery
  result: string
  proofUrl: string
  testimonial: CaseStudyTestimonial | null
}