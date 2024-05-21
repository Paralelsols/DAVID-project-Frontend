
import './globals.css'
import { Inter } from 'next/font/google'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PMT Ai',
  description: 'PMT AI - Revolutionizing Automated Crypto and Forex Trading',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
