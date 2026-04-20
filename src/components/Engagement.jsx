import { motion } from 'framer-motion'
import { Zap, Clock, BarChart3, CheckCircle } from 'lucide-react'

const models = [
  {
    icon: Zap,
    name: 'Project-Based',
    ideal: 'Specific deliverables with defined scope',
    desc: 'Best for focused engagements — strategy documents, due diligence, market entry plans, or technology assessments.',
    features: ['Fixed scope & timeline', 'Clear deliverables', 'Defined milestones', 'Post-delivery debrief'],
    cta: 'Start a Project',
    highlight: false,
  },
  {
    icon: Clock,
    name: 'Fractional Advisory',
    ideal: 'Ongoing strategic guidance',
    desc: 'Embedded executive-level advisory on a retainer basis. Ideal when you need consistent strategic input without a full-time hire.',
    features: ['Weekly/monthly availability', 'Responsive to emerging issues', 'Board & exec presentations', 'Flexible ramp-up'],
    cta: 'Discuss Retainer',
    highlight: true,
  },
  {
    icon: BarChart3,
    name: 'Transaction Support',
    ideal: 'M&A, fundraising, or investment events',
    desc: 'Intensive, time-bounded advisory for deal cycles — from initial diligence through closing and integration planning.',
    features: ['Deal-cycle aligned', 'NDA & confidentiality framework', 'Investor-ready materials', 'Integration roadmap'],
    cta: 'Get Started',
    highlight: false,
  },
]

export default function Engagement() {
  return (
    <section
      id="engagement"
      className="relative py-24 px-6 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3"
          >
            How We Work Together
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-5"
            style={{ fontFamily: 'Poppins,sans-serif' }}
          >
            Flexible{' '}
            <span style={{ background: 'linear-gradient(135deg,#0369A1,#818CF8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Engagement Models
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            Every situation is different. AlterNet Communications adapts its engagement structure to match your timeline, budget, and outcome goals.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {models.map((m, i) => {
            const Icon = m.icon
            return (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 ${
                  m.highlight
                    ? 'border-blue-500/50 shadow-2xl shadow-blue-100'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-lg'
                }`}
              >
                {m.highlight && (
                  <div className="bg-blue-600 text-white text-xs font-bold tracking-widest uppercase text-center py-2">
                    Most Popular
                  </div>
                )}
                <div className={`p-7 flex flex-col flex-1 ${m.highlight ? 'bg-white' : 'bg-white'}`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${
                    m.highlight ? 'bg-blue-600' : 'bg-slate-100'
                  }`}>
                    <Icon size={34} className={m.highlight ? 'text-white' : 'text-slate-600'} />
                  </div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{m.ideal}</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'Poppins,sans-serif' }}>{m.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{m.desc}</p>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {m.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <CheckCircle size={14} className={m.highlight ? 'text-blue-500' : 'text-green-500'} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
                      m.highlight
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-200'
                        : 'bg-slate-900 hover:bg-slate-700 text-white'
                    }`}
                  >
                    {m.cta}
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
