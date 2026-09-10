import HeroSection from '@/components/about/HeroSection'
import StudioStorySection from '@/components/about/StudioStorySection'
import FounderStorySection from '@/components/about/FounderStorySection'
import PerspectiveSection from '@/components/about/PerspectiveSection'
import TeamWorkInviteSection from '@/components/about/TeamWorkInviteSection'
import { ContactSection } from '@/components/home/ContactSection'
import { homeContent } from '@/data/pages/home'

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <StudioStorySection />
      <FounderStorySection />
      <PerspectiveSection />
      <TeamWorkInviteSection />
      <ContactSection content={homeContent.contact} />
    </>
  )
}