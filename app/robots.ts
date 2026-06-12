import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

// Required for `output: export` (static HTML export) — metadata routes must be static.
export const dynamic = 'force-static'

const BASE_URL = siteConfig.url.replace(/\/$/, '')

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
