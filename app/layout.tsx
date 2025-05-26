import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "지민선 | 백엔드 개발자",
  description: "백엔드 개발자 지민선의 포트폴리오 웹사이트",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        {/* Google Analytics gtag.js 라이브러리 비동기 로드 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-09L87056NC"
          strategy="afterInteractive"
        />
        {/* gtag 설정 스크립트 */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-09L87056NC');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
