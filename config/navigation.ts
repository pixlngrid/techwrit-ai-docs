export const navItems = [
  { label: 'Overview', href: '/about/' },
  { label: 'Getting Started', href: '/getting-started/' },
  {
    label: 'Resources',
    items: [
      { label: 'Release Notes', href: '/release-notes/' },
      { label: 'Blog', href: '/blog/' },
      { label: 'FAQs', href: '/faq/' },
      { label: 'Glossary', href: '/components/glossary/' },
    ],
  },
]

export const footerConfig = {
  copyright: `© ${new Date().getFullYear()} Trellis by Pixl'n Grid`,
  poweredBy: 'Powered by Next.js',
}
