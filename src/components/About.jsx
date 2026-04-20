import { motion } from 'framer-motion'
import { CheckCircle, Mail, ExternalLink } from 'lucide-react'

const credentials = [
  '25+ years of executive leadership across telecom, fiber, and connectivity ecosystems',
  'P&L ownership across product, sales, and network operations',
  'Led network strategy for regional and national service providers',
  'M&A advisory across multiple telecom and fiber transactions',
  'Deep expertise in wholesale, carrier, and enterprise markets',
  'Operational experience spanning ILEC, CLEC, fiber, and wireless',
]

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
            className="relative"
          >
            {/* Profile card */}
            <div className="relative rounded-3xl overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0C2248 100%)' }}>
              <div className="absolute inset-0 grid-bg opacity-30" />

              {/* Avatar placeholder */}
              <div className="relative p-12 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full mb-6 flex items-center justify-center text-6xl font-black text-white border-4 border-blue-500/40"
                  style={{ background: 'linear-gradient(135deg,#0369A1,#1E40AF)', fontFamily: 'Poppins,sans-serif' }}>
                  GC
                </div>
                <h3 className="text-2xl font-black text-white mb-1" style={{ fontFamily: 'Poppins,sans-serif' }}>Glenn Calafati</h3>
                <p className="text-blue-300 text-sm font-medium mb-4">Founder & Principal Advisor</p>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                  Executive leader with a career spent at the intersection of network strategy,
                  commercial growth, and operational execution in the telecom industry.
                </p>
                <div className="flex items-center gap-3">
                  <a href="mailto:info@alternetcom.net"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm rounded-lg hover:bg-blue-600/30 transition-colors cursor-pointer">
                    <Mail size={14} />
                    Contact
                  </a>
                  <a href="https://www.linkedin.com/in/glenncalafati/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/8 border border-white/15 text-slate-300 text-sm rounded-lg hover:bg-white/15 transition-colors cursor-pointer">
                    <ExternalLink size={14} />
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 border-t border-white/10">
                {[
                  { v: '25+', l: 'Years' },
                  { v: '100+', l: 'Engagements' },
                  { v: '5', l: 'Segments' },
                ].map(({ v, l }) => (
                  <div key={l} className="py-5 text-center border-r border-white/10 last:border-0">
                    <div className="text-2xl font-black text-gradient" style={{ fontFamily: 'Poppins,sans-serif' }}>{v}</div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3"
            >
              About
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6"
              style={{ fontFamily: 'Poppins,sans-serif' }}
            >
              Advisory That Comes{' '}
              <span style={{ background: 'linear-gradient(135deg,#0369A1,#818CF8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                From Doing
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg leading-relaxed mb-8"
            >
              AlterNet Communications LLC is a boutique advisory firm founded by Glenn Calafati,
              a telecom executive with deep roots in network strategy, product management,
              and commercial leadership. Unlike generalist consultancies, every engagement
              reflects first-hand operational experience — not secondary research.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-3 mb-8"
            >
              {credentials.map((c, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  className="flex items-start gap-3 text-slate-600 text-sm"
                >
                  <CheckCircle size={16} className="text-blue-500 shrink-0 mt-0.5" />
                  {c}
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-700 text-white font-semibold rounded-xl transition-colors duration-200 cursor-pointer"
            >
              Schedule a Call
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
