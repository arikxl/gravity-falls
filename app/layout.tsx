import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gravity Falls',
  description: 'Arik Alexandrov',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className='px-10 pt-5'>
          <Link prefetch href='/'>Gravity Falls</Link>
      </nav>
        {children}
      </body>
    </html>
  )
}
