import SiteNav from '@/components/nav/SiteNav'
import Footer from '@/components/footer/Footer'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteNav />
      <main>{children}</main>
      <Footer />
    </>
  )
}