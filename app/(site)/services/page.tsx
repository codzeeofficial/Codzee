import type { Metadata } from 'next'
import HeroSection from '@/components/services/HeroSection'
import ProductEngineeringSection from '@/components/services/ProductEngineeringSection'
import SystemsArchitectureSection from '@/components/services/SystemsArchitectureSection'
import InterfaceCraftSection from '@/components/services/InterfaceCraftSection'
import PlatformOperationsSection from '@/components/services/PlatformOperationsSection'
import MobileEngineeringSection from '@/components/services/MobileEngineeringSection'
import BrandFoundationSection from '@/components/services/BrandFoundationSection'
import { ContactSection } from '@/components/home/ContactSection'
import { servicesContent } from '@/data/pages/services'
import { homeContent } from '@/data/pages/home'

export const metadata: Metadata = {
  title: servicesContent.title,
  description: servicesContent.metaDescription,
}

export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <ProductEngineeringSection />
      <SystemsArchitectureSection />
      <InterfaceCraftSection />
      <PlatformOperationsSection />
      <MobileEngineeringSection />
      <BrandFoundationSection />
      <ContactSection content={homeContent.contact} />
    </>
  )
}
