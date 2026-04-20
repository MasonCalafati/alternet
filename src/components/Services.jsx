import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Wifi, ArrowUpRight } from 'lucide-react'
import {
  GlobeNetworkIcon, RevenueSignalIcon, BroadcastSatelliteIcon,
  MergeOrbitIcon, TechOrbitIcon, OEMGlobeIcon,
} from './icons/index.jsx'

const services = [
  {
    icon: GlobeNetworkIcon,
    title: 'Network & Infrastructure Strategy',
    desc: 'Architecture planning, capacity optimization, and multi-year network investment roadmaps aligned to growth objectives.',
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'hover:border-blue-500/40',
    accent: 'text-blue-400',
  },
  {
    icon: RevenueSignalIcon,
    title: 'Product & Revenue Strategy',
    desc: 'Service portfolio design, pricing frameworks, and revenue diversification strategies for competitive differentiation.',
    color: 'from-indigo-500/20 to-purple-500/10',
    border: 'hover:border-indigo-500/40',
    accent: 'text-indigo-400',
  },
  {
    icon: BroadcastSatelliteIcon,
    title: 'Go-To-Market Strategy',
    desc: 'Market entry planning, channel development, sales enablement, and demand generation for connectivity services.',
    color: 'from-violet-500/20 to-pink-500/10',
    border: 'hover:border-violet-500/40',
    accent: 'text-violet-400',
  },
  {
    icon: MergeOrbitIcon,
    title: 'M&A and Investment Advisory',
    desc: 'Due diligence support, target evaluation, valuation modeling, and post-acquisition integration roadmaps.',
    color: 'from-amber-500/20 to-yellow-500/10',
    border: 'hover:border-amber-500/40',
    accent: 'text-amber-400',
  },
  {
    icon: TechOrbitIcon,
    title: 'Vendor & Technology Strategy',
    desc: 'Technology assessment, vendor selection, RFP management, and ecosystem alignment for network modernization.',
    color: 'from-teal-500/20 to-emerald-500/10',
    border: 'hover:border-teal-500/40',
    accent: 'text-teal-400',
  },
  {
    icon: OEMGlobeIcon,
    title: 'OEM Product Market Alignment',
    desc: 'Product positioning, feature-market fit analysis, and commercialization strategy for network technology manufacturers.',
    color: 'from-rose-500/20 to-red-500/10',
    border: 'hover:border-rose-500/40',
    accent: 'text-rose-400',
  },
]

const additional = [
  { icon: Wifi, label: 'AI & High-Capacity Network Readiness' },
  { icon: ArrowUpRight, label: 'Wholesale & Carrier Strategy Development' },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, delay: index * 0.08 }}
      className={`group relative p-6 rounded-2xl border border-slate-700/50 ${service.border} bg-gradient-to-br ${service.color} hover:bg-slate-800/60 transition-colors duration-300 cursor-pointer`}
    >
      <div className={`w-16 h-16 rounded-2xl bg-slate-800/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
        <Icon size={36} className={service.accent} />
      </div>
      <h3 className="font-bold text-white text-lg mb-3 leading-snug" style={{ fontFamily: 'Poppins,sans-serif' }}>
        {service.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
      <div className={`absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${service.accent}`}>
        <ArrowUpRight size={18} />
      </div>
    </motion.div>
  )
}

export default function Services() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section
      id="services"
      className="relative py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #050D1F 0%, #0A1628 100%)' }}
    >
      <div className="absolute inset-0 dot-bg opacity-40" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3"
          >
            Core Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white leading-tight mb-5"
            style={{ fontFamily: 'Poppins,sans-serif' }}
          >
            Service Areas Built on{' '}
            <span className="text-gradient">Real-World Depth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Advisory grounded in hands-on executive leadership — not just frameworks. Every engagement
            draws on decades of operational experience across the full telecom ecosystem.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>

        {/* Additional offerings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {additional.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 px-5 py-3 rounded-xl border border-blue-500/25 bg-blue-500/8 text-blue-300 text-sm font-medium">
              <Icon size={16} className="text-blue-400" />
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
