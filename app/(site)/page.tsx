import type { Metadata } from 'next'

import { homeContent } from '@/data/pages/home'

export const metadata: Metadata = {
  title: `${homeContent.hero.headingLead} ${homeContent.hero.headingEmphasis.toLowerCase()}, ${homeContent.hero.headingClose} \u2014 Codzee`,
  description: homeContent.metaDescription,
}

export default function HomePage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 px-4 py-8 text-center lg:gap-8 lg:px-0 lg:py-16">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
          {homeContent.hero.headingLead}{' '}
          <span className="text-blue-600">{homeContent.hero.headingEmphasis}</span>{' '}
          {homeContent.hero.headingClose}
        </h1>
        <p className="max-w-[85ch] text-lg text-slate-700 sm:text-xl">
        </p>
      </section>
    </>
  )
}
