import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ShareBars/Navbar'
import Footer from '@/components/ShareBars/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PIXEL MEDIA',
  description: 'Watch later',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>

      </body>
    </html>
  )
}
