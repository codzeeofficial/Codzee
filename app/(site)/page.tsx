import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import { homeContent } from '@/data/pages/home'

export const metadata: Metadata = {
  title: `${homeContent.hero.headingLead} ${homeContent.hero.headingEmphasis.toLowerCase()}, ${homeContent.hero.headingClose} \u2014 Codzee`,
  description: homeContent.metaDescription,
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
     
    </>
  )
}
