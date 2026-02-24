/**
 * TechWrit AI brand logo components.
 */

interface LogoProps {
  className?: string
  size?: number
}

function GeometricMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 240 240" fill="none" aria-hidden="true">
      <rect width="240" height="240" rx="60" fill="#1E3A8A" />
      <path d="M 60 0 L 120 0 L 120 120 L 0 120 L 0 60 Q 0 0 60 0 Z" fill="#60A5FA" />
      <path d="M 120 0 L 180 0 Q 240 0 240 60 L 240 120 L 120 120 Z" fill="#1E3A8A" />
      <path d="M 0 120 L 120 120 L 120 240 L 60 240 Q 0 240 0 180 Z" fill="#0F172A" />
      <circle cx="60" cy="180" r="60" fill="#2563EB" />
      <path d="M 120 120 L 240 120 L 240 180 Q 240 240 180 240 L 120 240 Z" fill="#A855F7" />
      <path d="M 120 240 L 240 120 L 240 180 Q 240 240 180 240 Z" fill="#C084FC" />
    </svg>
  )
}

/** Small icon for navbar (default 32px) */
export function PlaceholderIcon({ className, size = 32 }: LogoProps) {
  return (
    <span className={className}>
      <GeometricMark size={size} />
    </span>
  )
}

/** Text wordmark for navbar and hero */
export function PlaceholderWordmark({ className }: { className?: string }) {
  return (
    <span className={className} style={{ fontWeight: 700, fontSize: '1.25rem', lineHeight: 1 }}>
      <span style={{ color: 'var(--foreground)' }}>Tech</span>
      <span style={{ color: 'var(--primary)' }}>Writ</span>
      <span style={{ fontSize: '0.8em', fontWeight: 400, color: 'var(--primary)', opacity: 0.7, marginLeft: 2 }}>AI</span>
    </span>
  )
}
