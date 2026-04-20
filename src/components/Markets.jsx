import { motion } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  SatelliteDishIcon, EnterpriseSignalIcon, InvestorGlobeIcon,
  DataCenterOrbitIcon, ChipOrbitIcon,
} from './icons/index.jsx'

const markets = [
  {
    icon: SatelliteDishIcon,
    title: 'Telecom & Connectivity Providers',
    desc: 'Competitive strategy, network investment planning, and revenue diversification for ISPs, CLECs, and fiber operators.',
    tag: 'Service Providers',
  },
  {
    icon: EnterpriseSignalIcon,
    title: 'Enterprises & Mid-Market',
    desc: 'Connectivity cost optimization, SD-WAN strategy, vendor negotiation, and WAN transformation roadmaps.',
    tag: 'Enterprise',
  },
  {
    icon: InvestorGlobeIcon,
    title: 'Private Equity & Infrastructure Investors',
    desc: 'Technical due diligence, risk-adjusted valuation, and value creation strategies for telecom acquisitions.',
    tag: 'PE / Investors',
  },
  {
    icon: DataCenterOrbitIcon,
    title: 'Data Center & Edge Infrastructure',
    desc: 'Interconnection strategy, colocation alignment, and edge network planning for data center operators and developers.',
    tag: 'Data Center',
  },
  {
    icon: ChipOrbitIcon,
    title: 'Network Technology Manufacturers',
    desc: 'Product-market fit, pricing models, go-to-market strategy, and OEM partnerships for network hardware vendors.',
    tag: 'OEM / Vendors',
  },
]

export default function Markets() {
  const ref = useRef(null)

  return (
    <section className="relative py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3"
            >
              Who We Serve
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
              style={{ fontFamily: 'Poppins,sans-serif' }}
            >
              Built for the{' '}
              <span style={{ background: 'linear-gradient(135deg,#0369A1,#818CF8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                Entire Ecosystem
              </span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#contact"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            Talk to an Advisor <ArrowRight size={16} />
          </motion.a>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {markets.map((m, i) => {
            const Icon = m.icon
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors duration-200">
                    <Icon size={36} className="text-blue-600" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {m.tag}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-3 leading-snug" style={{ fontFamily: 'Poppins,sans-serif' }}>
                  {m.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
              </motion.div>
            )
          })}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="p-6 rounded-2xl flex flex-col items-start justify-between cursor-pointer group"
            style={{ background: 'linear-gradient(135deg, #0369A1 0%, #1E3A5F 100%)' }}
          >
            <div>
              <p className="text-blue-200 text-sm font-medium mb-2">Don&apos;t see your segment?</p>
              <h3 className="text-white font-bold text-xl leading-snug mb-3" style={{ fontFamily: 'Poppins,sans-serif' }}>
                Let&apos;s discuss your specific challenges
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Every engagement is tailored. If your situation is unique, that&apos;s exactly when advisory depth matters most.
              </p>
            </div>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-700 font-semibold text-sm rounded-xl hover:bg-blue-50 transition-colors duration-200">
              Get in Touch <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
