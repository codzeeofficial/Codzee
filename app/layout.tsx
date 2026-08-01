import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Archivo, Archivo_Black, Playfair_Display } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
})

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-body',
})

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-impact',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  variable: '--font-accent',
})

export const metadata: Metadata = {
  title: 'Codzee',
  description: 'A product engineering studio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${archivo.variable} ${archivoBlack.variable} ${playfairDisplay.variable}`}
      >
        {children}
      </body>
    </html>
  )
}