import type { Metadata } from 'next'
import LegalPage from '@/components/legal/LegalPage'
import { termsContent } from '@/data/pages/terms'

export const metadata: Metadata = {
  title: termsContent.title,
  description: termsContent.metaDescription,
}

export default function TermsPage() {
  return <LegalPage content={termsContent} />
}