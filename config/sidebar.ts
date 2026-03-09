export type SidebarItem =
  | { type: 'doc'; id: string; label?: string }
  | { type: 'category'; label: string; link?: string; collapsed?: boolean; items: SidebarItem[] }
  | { type: 'link'; label: string; href: string }
  | { type: 'api'; id: string; label?: string }
| { type: 'html'; value: string }

export const mainSidebar: SidebarItem[] = [
    {
    type: 'doc',
    id: 'about',
    label: 'Introduction',
  },
  {
    type: 'doc',
    id: 'getting-started',
    label: 'Getting Started',
  },
  {
    type: 'category',
    label: 'Using TechWrit AI',
    collapsed: false,
    items: [
      { type: 'doc', id: 'modes', label: 'Modes' },
      { type: 'doc', id: 'best-practices', label: 'Best Practices' },
      { type: 'doc', id: 'readability', label: 'Readability' },
      { type: 'doc', id: 'use-cases', label: 'Use Cases' },
    ],
  },
  {
    type: 'category',
    label: 'Configuration',
    collapsed: false,
    items: [
      { type: 'doc', id: 'settings', label: 'Settings' },
      { type: 'doc', id: 'configuration-reference', label: 'Configuration Reference' },
    ],
  },
  {
    type: 'category',
    label: 'Integrations',
    collapsed: false,
    items: [
      { type: 'doc', id: 'api/api-reference', label: 'API Reference' },
      { type: 'doc', id: 'api/api-keys', label: 'API Keys' },
      { type: 'doc', id: 'vscode-extension', label: 'VS Code Extension' },
    ],
  },
  {
    type: 'doc',
    id: 'pricing',
    label: 'Pricing',
  },
  {
    type: 'doc',
    id: 'whats-coming',
    label: "What's Coming",
  },
]
