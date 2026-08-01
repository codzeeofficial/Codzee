import Link from 'next/link'
import { ROUTES } from '@/lib/constants/routes'

export default function NotFound() {
  return (
    <main>
      <h1>Page not found</h1>
      <Link href={ROUTES.home}>Return home</Link>
    </main>
  )
}