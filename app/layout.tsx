import Script from 'next/script'

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' data-theme="light">
      <head>
        {/* <script dangerouslySetInnerHTML={{ __html: `document.documentElement.setAttribute('data-theme', 'dark')` }} /> */}
      </head>
      <body>
        {children}
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <Script id='myscript' strategy='beforeInteractive'>
          {`document.documentElement.setAttribute('data-theme', 'dark')`}
        </Script>
      </body>
    </html>
  )
}
