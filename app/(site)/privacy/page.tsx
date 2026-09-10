import type { Metadata } from 'next'
import LegalPage from '@/components/legal/LegalPage'
import { privacyContent } from '@/data/pages/privacy'

export const metadata: Metadata = {
  title: privacyContent.title,
  description: privacyContent.metaDescription,
}

export default function PrivacyPage() {
  return <LegalPage content={privacyContent} />
}