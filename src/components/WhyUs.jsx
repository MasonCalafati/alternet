import { motion } from 'framer-motion'
import { ExecutiveOrbitIcon, TargetOrbitIcon, DualOrbitIcon, OperationsGlobeIcon } from './icons/index.jsx'

const reasons = [
  {
    icon: ExecutiveOrbitIcon,
    title: 'Executive-Level Depth',
    desc: 'Not consultant-level advice. Hands-on leadership experience across major telecom operators, fiber buildouts, and network technology companies.',
    stat: '25+',
    statLabel: 'Years Executive Leadership',
  },
  {
    icon: TargetOrbitIcon,
    title: 'Actionable, Practical Strategies',
    desc: 'Every deliverable is designed for implementation — with measurable financial impact, not theoretical frameworks.',
    stat: '100%',
    statLabel: 'Implementation-Ready',
  },
  {
    icon: DualOrbitIcon,
    title: 'Commercial + Technical Expertise',
    desc: 'Rare combination of deep technical knowledge and P&L-level commercial acumen across the full telecom value chain.',
    stat: '2-in-1',
    statLabel: 'Technical & Commercial',
  },
  {
    icon: OperationsGlobeIcon,
    title: 'Grounded in Operations',
    desc: 'Advisory shaped by real operational experience — integrations, network builds, product launches, and M&A events.',
    stat: '30-40%',
    statLabel: 'Average Cost Reduction',
  },
]

export default function WhyUs() {
  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0C1E3A 50%, #091424 100%)' }}
    >
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)' }} />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3"
          >
            Why AlterNet Communications
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white leading-tight mb-5"
            style={{ fontFamily: 'Poppins,sans-serif' }}
          >
            The Differentiators That{' '}
            <span className="text-gradient">Actually Matter</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Most advisory firms offer models. We offer leadership — built on decades of doing the actual work.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: i * 0.1 }}
                className="group flex gap-5 p-7 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-white/15 transition-all duration-300"
              >
                <div className="shrink-0 w-18 h-18 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-200" style={{width:'4.5rem',height:'4.5rem'}}>
                  <Icon size={36} className="text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg mb-2" style={{ fontFamily: 'Poppins,sans-serif' }}>
                    {r.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{r.desc}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-gradient" style={{ fontFamily: 'Poppins,sans-serif' }}>
                      {r.stat}
                    </span>
                    <span className="text-slate-500 text-xs font-medium">{r.statLabel}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
