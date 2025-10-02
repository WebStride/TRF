import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'The Rathik Foundation',
  description: 'A social foundation dedicated to making a positive impact in our community.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-urbanist">
        {children}
      </body>
    </html>
  )
} 