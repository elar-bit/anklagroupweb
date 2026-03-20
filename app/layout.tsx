import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { LanguageProvider } from '@/components/language-provider'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'ANKLA Group Inc | Enterprise Technology Solutions',
  description: 'Leading provider of cloud telephony, enterprise LAN networks, managed IT support, contact center services, and AI solutions for businesses.',
  generator: 'v0.app',
  keywords: ['telefonía en la nube', 'hosted PBX', 'call center', 'AI agents', 'soporte técnico', 'redes LAN'],
  icons: {
    icon: [
      { url: '/favicon-32x32.png?v=1', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=1', type: 'image/png', sizes: '180x180' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
