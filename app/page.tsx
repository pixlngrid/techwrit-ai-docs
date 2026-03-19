import Link from 'next/link'
import { Navbar } from '@/components/docs/navbar'
import { Footer } from '@/components/docs/footer'
import {
  ShieldCheck,
  GitPullRequest,
  Users,
  Zap,
  Code,
  FileText,
  BookOpen,
  Sparkles,
  ArrowRight,
  CheckCircle,
  XCircle,
} from 'lucide-react'

const diffBefore = {
  text: 'Click on the Settings button to configure the application settings. The user should be aware that changes made here will effect the entire system. There\'s a lot of different options available, and we recommend familiarizing yourself with each one.',
  issues: [
    { term: 'Click on', reason: 'Terminology: use "select"' },
    { term: 'The user should be aware', reason: 'Passive voice' },
    { term: 'effect', reason: 'Wrong word — should be "affect"' },
  ],
}

const diffAfter = {
  text: 'Select Settings to configure the application. Changes here affect the entire system. Review each option before saving.',
  score: '100%',
  gradeLevel: '6',
  gradeBefore: '11',
}

const problems = [
  {
    icon: ShieldCheck,
    title: 'Your rules, enforced automatically',
    description:
      'Configure style rules, terminology substitutions, and a product glossary once. Every request — across all 14 modes — enforces them from the first draft.',
    link: '/settings/',
  },
  {
    icon: GitPullRequest,
    title: 'Docs linting in CI/CD',
    description:
      'Add a GitHub Action that lints every .md file on every pull request. Style violations get flagged before merge — the same way you lint code.',
    link: '/guides/github-action/',
  },
  {
    icon: Users,
    title: 'Team-wide consistency',
    description:
      'Lock shared rules, terminology, and glossary across your team. New writers get your standards the moment they join — no onboarding guesswork.',
    link: '/pricing/',
  },
]

const features = [
  {
    title: '14 Purpose-Built Modes',
    icon: Zap,
    description:
      'Write, review, rewrite, simplify, style check, code-to-docs, and more. Each mode enforces your rules and produces output tailored to the task.',
    link: '/modes/',
  },
  {
    title: 'Style Rules & Guides',
    icon: FileText,
    description:
      '25 default rules with presets for Microsoft, Google, and Apple style guides. Add custom rules on Pro. Every rule scored individually.',
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1" style={{ marginTop: 'var(--navbar-height)' }}>
        {/* Hero */}
        <div className="relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center py-16 px-4 relative">
            <h1 className="text-5xl font-bold mb-5 text-[var(--foreground)] font-display">
              Your style guide, enforced by AI
            </h1>
            <p className="text-xl text-[var(--muted-foreground)] mb-4 leading-relaxed max-w-2xl mx-auto">
              TechWrit AI reviews, rewrites, and generates technical content against
              {' '}<em>your</em> style rules, terminology, and product glossary — not
              generic writing advice.
            </p>
            <p className="text-base text-[var(--muted-foreground)] mb-10 max-w-xl mx-auto leading-relaxed">
              14 purpose-built modes. Measurable style scores. CI/CD integration.
              Start free — no credit card required.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://techwrit.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold hover:opacity-90 no-underline transition-opacity"
              >
                Try it free
              </a>
              <Link
                href="/about/"
                className="px-7 py-3 rounded-lg border border-[var(--border)] font-semibold hover:bg-[var(--muted)] no-underline text-[var(--foreground)] transition-colors"
              >
                Why TechWrit AI?
              </Link>
            </div>
          </div>
        </div>

        {/* Before / After */}
        <div className="max-w-4xl mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold font-display text-center mb-3 text-[var(--foreground)]">
            See the difference
          </h2>
          <p className="text-center text-[var(--muted-foreground)] mb-10 max-w-xl mx-auto">
            ChatGPT says &ldquo;this reads well.&rdquo; TechWrit AI tells you exactly which rules
            passed, which failed, and rewrites to fix them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="rounded-xl border border-[var(--border)] p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={18} className="text-[var(--color-utility-red-100)]" />
                <span className="font-semibold text-sm uppercase tracking-wide text-[var(--muted-foreground)]">
                  Before — Style Check: 57%
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[var(--muted-foreground)] mb-4">
                {diffBefore.text}
              </p>
              <ul className="space-y-2">
                {diffBefore.issues.map((issue) => (
                  <li
                    key={issue.term}
                    className="text-sm flex items-start gap-2"
                  >
                    <span className="mt-0.5 text-[var(--color-utility-red-100)]">&#x2717;</span>
                    <span>
                      <strong className="text-[var(--foreground)]">{issue.term}</strong>
                      {' '}<span className="text-[var(--muted-foreground)]">— {issue.reason}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* After */}
            <div className="rounded-xl border border-[var(--primary)] p-6 shadow-[0_2px_16px_rgba(124,58,237,0.08)]">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle size={18} className="text-[var(--color-utility-green-100)]" />
                <span className="font-semibold text-sm uppercase tracking-wide text-[var(--muted-foreground)]">
                  After — Style Check: {diffAfter.score}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[var(--foreground)] mb-4">
                {diffAfter.text}
              </p>
              <div className="flex gap-4 text-sm text-[var(--muted-foreground)]">
                <span>Grade level: <strong className="text-[var(--foreground)]">{diffAfter.gradeLevel}</strong> <span className="text-xs">(was {diffAfter.gradeBefore})</span></span>
                <span>All rules passed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Problem → Solution Cards */}
        <div className="bg-[var(--muted)] border-y border-[var(--border)]">
          <div className="max-w-5xl mx-auto px-4 py-16">
            <h2 className="text-2xl font-bold font-display text-center mb-3 text-[var(--foreground)]">
              Why not just use ChatGPT?
            </h2>
            <p className="text-center text-[var(--muted-foreground)] mb-10 max-w-2xl mx-auto">
              Generic AI tools give generic advice. They don&apos;t know your terminology,
              can&apos;t enforce your rules, and have no way to measure compliance.
              TechWrit AI does all three.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {problems.map((problem) => {
                const Icon = problem.icon
                return (
                  <Link
                    key={problem.title}
                    href={problem.link}
                    className="group block p-6 rounded-xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--primary)] transition-all no-underline text-[var(--foreground)]"
                  >
                    <div className="p-2 rounded-lg bg-[var(--primary)]/10 w-fit mb-4">
                      <Icon size={22} className="text-[var(--primary)]" />
                    </div>
                    <h3 className="text-base font-semibold mb-2">{problem.title}</h3>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {problem.description}
                    </p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="max-w-5xl mx-auto px-4 py-16">
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

        {/* CTA */}
        <div className="bg-[var(--muted)] border-t border-[var(--border)]">
          <div className="max-w-2xl mx-auto text-center py-16 px-4">
            <h2 className="text-2xl font-bold font-display mb-4 text-[var(--foreground)]">
              Start enforcing your style guide today
            </h2>
            <p className="text-[var(--muted-foreground)] mb-8">
              Free tier includes all 14 modes, 25 style rules, and 10 requests/month.
              No credit card required.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://techwrit.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold hover:opacity-90 no-underline transition-opacity"
              >
                Try it free
              </a>
              <Link
                href="/pricing/"
                className="px-7 py-3 rounded-lg border border-[var(--border)] font-semibold hover:bg-[var(--muted)] no-underline text-[var(--foreground)] transition-colors"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
