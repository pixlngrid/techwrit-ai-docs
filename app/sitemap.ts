import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { getAllDocsMeta, getAllReleaseNotes, getAllBlogPosts } from '@/lib/content'

const BASE_URL = siteConfig.url.replace(/\/$/, '')

function abs(pathname: string): string {
  const withSlash = pathname.endsWith('/') ? pathname : `${pathname}/`
  return `${BASE_URL}${withSlash}`
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [
    {
      url: abs('/'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]

  const docs = await getAllDocsMeta()
  for (const doc of docs) {
    const lastModified = doc.last_update?.date
      ? new Date(doc.last_update.date)
      : undefined
    entries.push({
      url: abs(doc.slug),
      changeFrequency: 'weekly',
      priority: 0.8,
      ...(lastModified ? { lastModified } : {}),
    })
  }

  if (siteConfig.releaseNotes?.enabled) {
    entries.push({
      url: abs('/release-notes'),
      changeFrequency: 'weekly',
      priority: 0.6,
    })
    const notes = await getAllReleaseNotes()
    for (const note of notes) {
      const lastModified = note.meta.date ? new Date(note.meta.date) : undefined
      entries.push({
        url: abs(`/release-notes/${note.meta.slug}`),
        changeFrequency: 'monthly',
        priority: 0.5,
        ...(lastModified && !Number.isNaN(lastModified.getTime())
          ? { lastModified }
          : {}),
      })
    }
  }

  if (siteConfig.blog?.enabled) {
    entries.push({
      url: abs('/blog'),
      changeFrequency: 'weekly',
      priority: 0.6,
    })
    const posts = await getAllBlogPosts()
    for (const post of posts) {
      const lastModified = post.meta.date ? new Date(post.meta.date) : undefined
      entries.push({
        url: abs(`/blog/${post.meta.slug}`),
        changeFrequency: 'monthly',
        priority: 0.5,
        ...(lastModified && !Number.isNaN(lastModified.getTime())
          ? { lastModified }
          : {}),
      })
    }
  }

  return entries
}
