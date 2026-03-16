export const navItems = [
  { label: 'Overview', href: '/about/' },
  { label: 'Getting Started', href: '/getting-started/' },
  {
    label: 'Resources',
    items: [
      { label: 'Release Notes', href: '/release-notes/' },
      { label: 'FAQs', href: '/faq/' },
      { label: 'Glossary', href: '/components/glossary/' },
    ],
  },
]

export const footerConfig = {
  copyright: `© ${new Date().getFullYear()} TechWrit AI`,
  poweredBy: 'Powered by Trellis & Next.js',
}
