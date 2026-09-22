import type { Metadata } from 'next'
import HeroSection from '@/components/process/HeroSection'
import StagesGroup from '@/components/process/StagesGroup'
import NeverSection from '@/components/process/NeverSection'
import { ContactSection } from '@/components/home/ContactSection'
import { processContent } from '@/data/pages/process'
import { homeContent } from '@/data/pages/home'

export const metadata: Metadata = {
  title: processContent.title,
  description: processContent.metaDescription,
}

export default function ProcessPage() {
  return (
    <>
      <HeroSection />
      <StagesGroup stages={processContent.stages} />
      <NeverSection />
      <ContactSection content={homeContent.contact} />
    </>
  )
}