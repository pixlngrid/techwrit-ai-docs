import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { Navbar } from '@/components/docs/navbar'
import { Footer } from '@/components/docs/footer'
import {
  BookOpen,
  Zap,
  Code,
  FileText,
  GitPullRequest,
  Sparkles,
  ArrowRight,
} from 'lucide-react'

const features = [
  {
    title: '14 Purpose-Built Modes',
    icon: Zap,
    description:
      'Write, review, rewrite, simplify, style check, code-to-docs, and more. Each mode produces output tailored to the task.',
    link: '/modes/',
  },
  {
    title: 'Style Rules & Guides',
    icon: FileText,
    description:
      '25 default rules with templates for Microsoft, Google, and Apple style guides. Add custom rules on Pro.',
    link: '/settings/',
  },
  {
    title: 'Code to Docs',
    icon: Code,
    description:
      'Generate API references, user guides, and OpenAPI specs directly from source code. Paste code or upload files.',
    link: '/modes/#code-to-docs',
  },
  {
    title: 'Terminology & Glossary',
    icon: BookOpen,
    description:
      'Enforce word choice with terminology substitutions and give the AI semantic understanding with your product glossary.',
    link: '/settings/#terminology',
  },
  {
    title: 'CI/CD Integration',
    icon: GitPullRequest,
    description:
      'Lint docs on every pull request with the GitHub Actions workflow. Review comments post directly on the PR.',
    link: '/guides/github-action/',
  },
  {
    title: 'API Access',
    icon: Sparkles,
    description:
      'Integrate documentation generation and linting into your toolchain with the REST API. One endpoint, one POST.',
    link: '/api/api-reference/',
  },
]

const quickLinks = [
  { label: 'Create an account', href: '/getting-started/#create-an-account' },
  { label: 'Your first request', href: '/getting-started/#your-first-request' },
  { label: 'Configure style rules', href: '/settings/#style-rules' },
  { label: 'Set up GitHub Actions', href: '/guides/github-action/' },
  { label: 'API reference', href: '/api/api-reference/' },
  { label: 'Best practices', href: '/best-practices/' },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1" style={{ marginTop: 'var(--navbar-height)' }}>
        {/* Hero */}
        <div className="relative overflow-hidden">
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px]" />
          <div className="max-w-3xl mx-auto text-center py-14 px-4 relative">
            <h1 className="text-5xl font-bold mb-5 text-[var(--foreground)] font-display">
              {siteConfig.title}
            </h1>
            <p className="text-xl text-[var(--muted-foreground)] mb-4 leading-relaxed">
              {siteConfig.tagline}
            </p>
            <p className="text-base text-[var(--muted-foreground)] mb-10 max-w-xl mx-auto leading-relaxed">
              Learn how to generate, review, and enforce documentation standards
              with AI-powered modes, style rules, and your product glossary.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/getting-started/"
                className="px-7 py-3 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold hover:opacity-90 no-underline transition-opacity"
              >
                Get Started
              </Link>
              <a
                href="https://techwrit.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-lg border border-[var(--border)] font-semibold hover:bg-[var(--muted)] no-underline text-[var(--foreground)] transition-colors"
              >
                Open TechWrit AI
              </a>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="max-w-5xl mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold font-display text-center mb-10 text-[var(--foreground)]">
            What you can do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Link
                  key={feature.title}
                  href={feature.link}
                  className="group block p-6 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-[0_2px_16px_rgba(124,58,237,0.12)] transition-all no-underline text-[var(--foreground)]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-[var(--primary)]/10">
                      <Icon
                        size={20}
                        className="text-[var(--primary)]"
                      />
                    </div>
                    <h3 className="text-base font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {feature.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more <ArrowRight size={14} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
