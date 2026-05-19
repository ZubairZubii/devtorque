import type { Metadata } from 'next'
import { Inter, Bebas_Neue, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-bebas',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'DevTorque - AI Systems & Automation Company',
  description: 'We don\'t build websites — we build intelligent systems that automate businesses. AI Voice Agents, SaaS Development, CRM Systems, and Workflow Automation.',
  keywords: ['AI automation', 'SaaS development', 'voice agents', 'CRM', 'workflow automation', 'DevTorque'],
  authors: [{ name: 'Zubair Ali', url: 'https://devtorque.ai' }],
  icons: {
    icon: '/images/devtorque-logo.jpg',
  },
  openGraph: {
    title: 'DevTorque - AI Systems & Automation Company',
    description: 'We don\'t build websites — we build intelligent systems that automate businesses.',
    images: ['/images/devtorque-cover.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} ${geistMono.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased overflow-x-hidden min-h-screen" suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
