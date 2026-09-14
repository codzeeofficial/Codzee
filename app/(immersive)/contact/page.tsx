import type { Metadata } from 'next'
import ContactSection from '@/components/contact/ContactSection'
import { contactContent } from '@/data/pages/contact'

export const metadata: Metadata = {
  title: contactContent.title,
  description: contactContent.metaDescription,
}

export default function ContactPage() {
  return <ContactSection />
}