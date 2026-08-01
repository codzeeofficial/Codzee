import ImmersiveNav from '@/components/nav/ImmersiveNav'
import Footer from '@/components/footer/Footer'

export default function ImmersiveLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ImmersiveNav />
      <main>{children}</main>
      <Footer />
    </>
  )
}