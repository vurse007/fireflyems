import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Firefly EMS | Muscle Rehabilitation Reinvented',
  description: 'Revolutionizing movement and restoring strength through muscle activation technology. Firefly EMS uses electromyostimulation to combat sarcopenia and promote muscle recovery.',
  keywords: ['EMS', 'muscle rehabilitation', 'electromyostimulation', 'sarcopenia', 'muscle atrophy', 'physical therapy', 'muscle recovery'],
  authors: [{ name: 'Firefly EMS Team' }],
  openGraph: {
    title: 'Firefly EMS | Muscle Rehabilitation Reinvented',
    description: 'Revolutionizing movement and restoring strength through muscle activation technology.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Firefly EMS | Muscle Rehabilitation Reinvented',
    description: 'Revolutionizing movement and restoring strength through muscle activation technology.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
