import type { Metadata } from 'next'
import HeroSection from '@/components/capabilities/HeroSection'
import ComplexitySection from '@/components/capabilities/ComplexitySection'
import ScreenSyncSection from '@/components/capabilities/ScreenSyncSection'
import AccessControlSection from '@/components/capabilities/AccessControlSection'
import PaymentsPlansSection from '@/components/capabilities/PaymentsPlansSection'
import OperationRecordsSection from '@/components/capabilities/OperationRecordsSection'
import SiteControlSection from '@/components/capabilities/SiteControlSection'
import PerformanceMediaSection from '@/components/capabilities/PerformanceMediaSection'
import WorkInvitationSection from '@/components/capabilities/WorkInvitationSection'
import { ContactSection } from '@/components/home/ContactSection'
import { capabilitiesContent } from '@/data/pages/capabilities'
import { homeContent } from '@/data/pages/home'

export const metadata: Metadata = {
  title: capabilitiesContent.title,
  description: capabilitiesContent.metaDescription,
}

export default function CapabilitiesPage() {
  return (
    <>
      <HeroSection />
      <ComplexitySection />
      <ScreenSyncSection />
      <AccessControlSection />
      <PaymentsPlansSection />
      <OperationRecordsSection />
      <SiteControlSection />
      <PerformanceMediaSection />
      <WorkInvitationSection />
      <ContactSection content={homeContent.contact} />
    </>
  )
}
