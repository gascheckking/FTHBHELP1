import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BaseHelpCast',
  description: 'Community-driven support for Farcaster & Base',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
