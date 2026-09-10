import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import SolutionSection from '@/components/home/SolutionSection'
import WorkSection from '@/components/home/WorkSection'
import { StudioSection } from '@/components/home/StudioSection'
import { CapabilitiesSection } from '@/components/home/CapabilitiesSection'
import { ProcessSection } from '@/components/home/ProcessSection'
import { ContactSection } from '@/components/home/ContactSection'
import { homeContent } from '@/data/pages/home'

export const metadata: Metadata = {
  title: `${homeContent.hero.headingLead} ${homeContent.hero.headingEmphasis.toLowerCase()}, ${homeContent.hero.headingClose} \u2014 Codzee`,
  description: homeContent.metaDescription,
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionSection content={homeContent.solution} />
      <WorkSection />
      <StudioSection content={homeContent.studio} />
      <CapabilitiesSection content={homeContent.capabilities} />
      <ProcessSection content={homeContent.process} />
      <ContactSection content={homeContent.contact} />
    </>
  )
}
