import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Map, Building, PieChart } from 'lucide-react'

const cases = [
  {
    icon: Map,
    tag: 'Service Provider Expansion',
    challenge: 'Regional fiber provider needed to enter new markets quickly without over-building capital infrastructure.',
    actions: [
      'Identified high-density anchor tenant corridors',
      'Developed IRU and dark fiber monetization models',
      'Built wholesale pricing tiers for rapid partner on-boarding',
    ],
    result: 'Accelerated market entry with a validated monetization roadmap',
    metric: '18 mo faster',
    metricLabel: 'Time-to-Revenue',
    color: 'from-blue-600 to-cyan-600',
    bg: 'from-blue-950/60 to-cyan-950/40',
    border: 'border-blue-500/25',
  },
  {
    icon: Building,
    tag: 'Enterprise Transformation',
    challenge: 'Multi-site company faced fragmented carrier relationships, escalating WAN costs, and outdated MPLS infrastructure.',
    actions: [
      'Audited 40+ carrier contracts and identified overlap',
      'Designed phased SD-WAN migration with zero downtime',
      'Negotiated consolidated agreements with preferred carriers',
    ],
    result: '30–40% reduction in connectivity costs with a phased SD-WAN migration roadmap',
    metric: '35%',
    metricLabel: 'Average Cost Reduction',
    color: 'from-violet-600 to-indigo-600',
    bg: 'from-violet-950/60 to-indigo-950/40',
    border: 'border-violet-500/25',
  },
  {
    icon: PieChart,
    tag: 'PE Investment Diligence',
    challenge: 'Private equity firm evaluating a regional CLEC acquisition needed technical and commercial due diligence in 30 days.',
    actions: [
      'Assessed network asset quality, stranded plant exposure, and churn risk',
      'Modeled EBITDA scenarios across integration and standalone paths',
      'Identified $12M in post-close value creation levers',
    ],
    result: 'Clear risk-adjusted valuation with identified value creation levers',
    metric: '$12M',
    metricLabel: 'Value Creation Identified',
    color: 'from-amber-500 to-orange-600',
    bg: 'from-amber-950/60 to-orange-950/40',
    border: 'border-amber-500/25',
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="relative py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3"
          >
            Impact in Action
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-5"
            style={{ fontFamily: 'Poppins,sans-serif' }}
          >
            Real Results,{' '}
            <span style={{ background: 'linear-gradient(135deg,#0369A1,#818CF8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Real Clients
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            Every engagement is different. Here&apos;s how AlterNet Communications has driven measurable impact across client segments.
          </motion.p>
        </div>

        {/* Case cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.tag}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-300 bg-white"
              >
                {/* Top gradient band */}
                <div className={`h-1.5 bg-gradient-to-r ${c.color}`} />

                <div className="p-7 flex flex-col flex-1">
                  {/* Tag */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center`}>
                      <Icon size={30} className="text-white" />
                    </div>
                    <span className="text-sm font-semibold text-slate-600">{c.tag}</span>
                  </div>

                  {/* Challenge */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-5 italic border-l-2 border-slate-200 pl-3">
                    &ldquo;{c.challenge}&rdquo;
                  </p>

                  {/* Actions */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {c.actions.map((a, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckCircle size={15} className="text-green-500 shrink-0 mt-0.5" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* Result */}
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${c.bg} border ${c.border}`}>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className={`text-3xl font-black bg-gradient-to-r ${c.color} bg-clip-text text-transparent`} style={{ fontFamily: 'Poppins,sans-serif' }}>
                        {c.metric}
                      </span>
                      <span className="text-slate-500 text-xs font-medium">{c.metricLabel}</span>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">{c.result}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors duration-200 cursor-pointer">
            Discuss Your Challenge <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
