import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

// FIX 8: each link has a real anchor href
const navGroups = [
  {
    label: 'Services',
    links: [
      { label: 'Network & Infrastructure Strategy', href: '#services' },
      { label: 'Product & Revenue Strategy', href: '#services' },
      { label: 'Go-To-Market Strategy', href: '#services' },
      { label: 'M&A and Investment Advisory', href: '#services' },
      { label: 'Vendor & Technology Strategy', href: '#services' },
    ],
  },
  {
    label: 'Solutions',
    links: [
      { label: 'Service Providers', href: '#services' },
      { label: 'Enterprise & Mid-Market', href: '#services' },
      { label: 'PE & Investors', href: '#use-cases' },
      { label: 'Data Center', href: '#oem' },
      { label: 'OEM Advisory', href: '#oem' },
    ],
  },
  {
    label: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Engagement Models', href: '#engagement' },
      { label: 'Use Cases', href: '#use-cases' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-10 px-6"
      style={{ background: '#020917' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-16 border-b border-white/8 pb-16">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <img
                src="/alternet-logo.jpg"
                alt="AlterNet Communications LLC"
                className="rounded-xl"
                style={{ height: '72px', width: 'auto' }}
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Executive advisory services for the connectivity, infrastructure, and network technology ecosystem.
            </p>
            <a
              href="mailto:info@alternetcom.net"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors cursor-pointer"
            >
              <Mail size={14} />
              info@alternetcom.net
            </a>
          </div>

          {/* Nav groups */}
          {navGroups.map((g) => (
            <div key={g.label}>
              <h4 className="text-white text-sm font-semibold mb-4" style={{ fontFamily: 'Poppins,sans-serif' }}>{g.label}</h4>
              <ul className="space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-slate-500 hover:text-slate-300 text-sm transition-colors cursor-pointer">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} AlterNet Communications LLC. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Long Island, NY • info@alternetcom.net
          </p>
        </div>
      </div>
    </footer>
  )
}
