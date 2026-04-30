import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { siteConfig } from '@/config/site'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.tagline,
  keywords: [
    'AI for code documentation',
    'automate code comments with AI',
    'AI tool to write code documentation',
    'generate docstrings with AI',
    'automated code documentation tool',
    'AI code review for documentation',
    'context-aware code documentation generator',
    'improve code documentation with AI',
    'AI agent for code comments',
    'GitHub Copilot for code comments',
    'Tabnine for code documentation',
    'automatically create API documentation from code',
    'AI to write technical documentation from source code',
    'code documentation automation platform',
    'AI assistant for inline comments',
    'best AI tool for docstrings and comments',
  ],
  icons: { icon: { url: siteConfig.favicon, type: 'image/svg+xml' } },
  openGraph: {
    description: `${siteConfig.title} — ${siteConfig.tagline}`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme={siteConfig.colorMode.defaultMode}
          enableSystem={siteConfig.colorMode.respectPrefersColorScheme}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
