import type { Metadata } from 'next'
import { Inter, Bebas_Neue, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { CustomCursor } from '@/components/custom-cursor'
import { ScrollProgress } from '@/components/scroll-progress'
import { LiveActivity } from '@/components/live-activity'
import { CommandPalette } from '@/components/command-palette'
import { LoadingScreen } from '@/components/loading-screen'
import { BackToTop } from '@/components/back-to-top'
import { SectionNavDots } from '@/components/section-nav-dots'
import { StickyCTA } from '@/components/sticky-cta'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' })
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ["latin"], variable: '--font-bebas' })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'DevTorque - AI Systems & Automation Agency',
  description: "We build AI systems that automate your operations 24/7. AI Voice Agents, Workflow Automation, SaaS Development, CRM Systems — built for real business results.",
  keywords: ['AI automation', 'SaaS development', 'voice agents', 'CRM', 'workflow automation', 'DevTorque', 'AI agency'],
  authors: [{ name: 'DevTorque', url: 'https://devtorque.co' }],
  metadataBase: new URL('https://devtorque.co'),
  icons: { icon: '/images/devtorque-logo.jpg' },
  openGraph: {
    title: 'DevTorque - AI Systems & Automation Agency',
    description: "We build AI systems that automate your operations 24/7.",
    url: 'https://devtorque.co',
    siteName: 'DevTorque',
    images: [{ url: '/images/devtorque-cover.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevTorque - AI Systems & Automation Agency',
    description: "We build AI systems that automate your operations 24/7.",
    images: ['/images/devtorque-cover.jpg'],
  },
  robots: { index: true, follow: true },
}

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DevTorque",
  "url": "https://devtorque.co",
  "logo": "https://devtorque.co/images/devtorque-logo.jpg",
  "description": "AI automation and SaaS development agency building intelligent systems for businesses worldwide.",
  "email": "support@devtorque.co",
  "serviceArea": { "@type": "Place", "name": "Worldwide" },
  "sameAs": ["https://github.com/devtorqueai-prog"],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} ${geistMono.variable} bg-background`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden min-h-screen" suppressHydrationWarning>
        {/* Global UI layer */}
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <LiveActivity />
        <CommandPalette />
        <BackToTop />
        <SectionNavDots />
        <StickyCTA />

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
