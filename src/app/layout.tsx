import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Providers } from './Providers'

const inter = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PredictifyPerp',
  icons: {
    icon: '/logo.png'
  },
  description: 'Providing a decentralized and user-friendly platform for making perpetual predictions about the future price of crypto assets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div>
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
