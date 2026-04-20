import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'OEM Advisory', href: '#oem' },
  { label: 'About', href: '#about' },
  { label: 'Engagement', href: '#engagement' },
]

// FIX 2: mobile menu stagger variants
const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, staggerChildren: 0.05, delayChildren: 0.05 },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
}

const menuItemVariants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.2 } },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  // FIX 7: track active section
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // FIX 7: IntersectionObserver for active section highlight
  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1))
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.25, rootMargin: '-80px 0px -50% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/95 backdrop-blur-xl border border-slate-700/60 shadow-2xl shadow-black/40'
            : 'bg-slate-900/70 backdrop-blur-md border border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center cursor-pointer group" aria-label="AlterNet Communications LLC">
            <img
              src="/alternet-logo.jpg"
              alt="AlterNet Communications LLC"
              className="rounded-xl group-hover:opacity-90 transition-opacity duration-200"
              style={{ height: '52px', width: 'auto' }}
            />
          </a>

          {/* Desktop links — FIX 7: active highlight */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const isActive = activeSection === l.href.slice(1)
              return (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-white bg-white/10 border border-white/15'
                        : 'text-slate-300 hover:text-white hover:bg-white/8'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/40 hover:shadow-blue-700/50 cursor-pointer"
            >
              Schedule Consultation
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu — FIX 2: per-item stagger */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed top-20 left-4 right-4 z-40 bg-slate-900/98 backdrop-blur-xl border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden"
          >
            <ul className="p-4 space-y-1">
              {links.map((l) => (
                <motion.li key={l.label} variants={menuItemVariants}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-slate-300 hover:text-white text-sm font-medium rounded-xl hover:bg-white/8 transition-colors cursor-pointer"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={menuItemVariants} className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-colors text-center cursor-pointer"
                >
                  Schedule Consultation
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
