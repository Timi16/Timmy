import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Timmys Portfolio',
  description: 'Created by Timmy',
  generator: 'Timmy',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
