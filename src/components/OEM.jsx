import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import {
  ProductFitIcon, PricingTierIcon, ChannelNetworkIcon,
  RevenueOrbitIcon, TeamSignalIcon,
} from './icons/index.jsx'

const oemServices = [
  { icon: ProductFitIcon, title: 'Product-Market Fit Analysis', desc: 'Validate your product against real operator procurement cycles and technical requirements.' },
  { icon: PricingTierIcon, title: 'Packaging & Pricing Strategy', desc: 'Develop pricing models that align with telecom CAPEX cycles and buyer decision frameworks.' },
  { icon: ChannelNetworkIcon, title: 'Channel & Partner Strategy', desc: 'Build distribution through VARs, integrators, and direct carrier relationships.' },
  { icon: RevenueOrbitIcon, title: 'Revenue Modeling', desc: 'Forecast realistic ramp curves and develop sales compensation plans for network products.' },
  { icon: TeamSignalIcon, title: 'Field Sales Enablement', desc: 'Equip your commercial teams with the technical depth needed to sell to engineering-led buyers.' },
]

export default function OEM() {
  return (
    <section
      id="oem"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0F1E3A 100%)' }}
    >
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3"
            >
              OEM Advisory
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white leading-tight mb-6"
              style={{ fontFamily: 'Poppins,sans-serif' }}
            >
              Built for{' '}
              <span className="text-gradient-gold">Network Technology</span>{' '}
              Manufacturers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-8"
            >
              Network equipment vendors face a unique challenge: selling highly technical products to
              buyers who have seen every pitch. AlterNet Communications brings the buyer-side perspective
              that transforms how manufacturers go to market.
            </motion.p>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-xl transition-colors duration-200 cursor-pointer"
            >
              Explore OEM Advisory <ArrowRight size={16} />
            </motion.a>
          </div>

          {/* Right: service list */}
          <div className="space-y-4">
            {oemServices.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4 p-5 rounded-xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-amber-500/25 transition-all duration-200 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon size={32} className="text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1" style={{ fontFamily: 'Poppins,sans-serif' }}>{s.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
