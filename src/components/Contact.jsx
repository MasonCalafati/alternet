import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle, Zap, Loader2 } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', segment: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setSent(true)
    } catch {
      alert('Something went wrong. Please email us directly at info@alternetcom.net')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section
      id="contact"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #020917 0%, #0C1A3A 60%, #050D1F 100%)' }}
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(3,105,161,0.15) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3"
            >
              Let&apos;s Connect
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white leading-tight mb-6"
              style={{ fontFamily: 'Poppins,sans-serif' }}
            >
              Ready to Transform{' '}
              <span className="text-gradient">Your Network Strategy?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-8"
            >
              Whether you&apos;re a service provider scaling your footprint, an enterprise rethinking connectivity,
              or an investor evaluating a telecom asset — let&apos;s talk.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <a
                href="mailto:info@alternetcom.net"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <span className="text-sm font-medium">info@alternetcom.net</span>
              </a>

              <div className="pt-6 p-6 rounded-2xl border border-white/8 bg-white/4">
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={16} className="text-blue-400" />
                  <span className="text-white font-semibold text-sm">Typical Response Time</span>
                </div>
                <p className="text-slate-400 text-sm">Within 24 hours. Initial consultations are complimentary — no obligation, no sales pitch.</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          >
            {sent ? (
              <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: 'Poppins,sans-serif' }}>Message Sent</h3>
                <p className="text-slate-400 text-sm">Glenn will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/12 bg-white/4 backdrop-blur-sm p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-slate-400 text-xs font-medium mb-1.5">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/12 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/10 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-slate-400 text-xs font-medium mb-1.5">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/12 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/10 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-slate-400 text-xs font-medium mb-1.5">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Organization"
                    className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/12 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/10 transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="segment" className="block text-slate-400 text-xs font-medium mb-1.5">I am a...</label>
                  <select
                    id="segment"
                    name="segment"
                    value={form.segment}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/12 text-slate-300 text-sm focus:outline-none focus:border-blue-500/60 transition-all duration-200 cursor-pointer"
                  >
                    <option value="">Select your segment</option>
                    <option>Telecom / Connectivity Provider</option>
                    <option>Enterprise / Mid-Market</option>
                    <option>Private Equity / Investor</option>
                    <option>Data Center / Edge Operator</option>
                    <option>Network Technology Manufacturer</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-400 text-xs font-medium mb-1.5">Your Challenge *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe what you're trying to solve or explore..."
                    className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/12 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/10 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/50 hover:shadow-blue-700/60 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>Send Message <Send size={16} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
