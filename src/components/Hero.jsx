import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { ShieldGlobeIcon, GlobeTrendIcon, EcosystemGlobeIcon } from './icons/index.jsx'

// Animated fiber optic network canvas
// FIX 11: pauses RAF when canvas is scrolled out of view
function FiberCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let W, H
    let running = true

    const resize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    resize()
    window.addEventListener('resize', resize)

    // FIX 11: pause loop when off-screen, resume when back
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!running) {
            running = true
            draw()
          }
        } else {
          running = false
          cancelAnimationFrame(raf)
        }
      },
      { threshold: 0 }
    )
    observer.observe(canvas)

    const nodes = []
    const NODES = 55
    const MAX_DIST = 160

    for (let i = 0; i < NODES; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    const packets = Array.from({ length: 12 }, () => ({
      progress: Math.random(),
      speed: 0.002 + Math.random() * 0.003,
      nodeA: Math.floor(Math.random() * NODES),
      nodeB: Math.floor(Math.random() * NODES),
    }))

    const draw = () => {
      if (!running) return // FIX 11: stop scheduling when off-screen

      ctx.clearRect(0, 0, W, H)

      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        n.pulse += 0.02
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
      })

      for (let i = 0; i < NODES; i++) {
        for (let j = i + 1; j < NODES; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.3
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(56,189,248,${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      packets.forEach((p) => {
        p.progress += p.speed
        if (p.progress >= 1) {
          p.progress = 0
          p.nodeA = Math.floor(Math.random() * NODES)
          p.nodeB = Math.floor(Math.random() * NODES)
        }
        const a = nodes[p.nodeA], b = nodes[p.nodeB]
        const dx = b.x - a.x, dy = b.y - a.y
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < MAX_DIST) {
          const px = a.x + dx * p.progress
          const py = a.y + dy * p.progress
          ctx.beginPath()
          ctx.arc(px, py, 2.5, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(96,165,250,0.9)'
          ctx.fill()
          ctx.beginPath()
          ctx.arc(px, py, 6, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(56,189,248,0.15)'
          ctx.fill()
        }
      })

      nodes.forEach((n) => {
        const pulse = Math.abs(Math.sin(n.pulse)) * 0.5 + 0.5
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * (1 + pulse * 0.5), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56,189,248,${0.4 + pulse * 0.4})`
        ctx.fill()
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56,189,248,${0.04 * pulse})`
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      observer.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} id="fiber-canvas" />
}

const badges = [
  { icon: ShieldGlobeIcon, text: '25+ Years Executive Leadership' },
  { icon: GlobeTrendIcon, text: 'Proven Financial Impact' },
  { icon: EcosystemGlobeIcon, text: 'Telecom & Fiber Ecosystems' },
]

const statsData = [
  { value: '25+', label: 'Years Experience' },
  { value: '100+', label: 'Engagements' },
  { value: '$2B+', label: 'Network Value Advised' },
  { value: '40%', label: 'Avg. Cost Reduction' },
]

// FIX 1: stagger variants for stats container and each cell
const statsContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 1.05 },
  },
}
const statItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #020917 0%, #0C1A3A 40%, #091429 70%, #050D1F 100%)' }}
    >
      <div className="absolute inset-0 grid-bg opacity-60" />
      <FiberCanvas />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(3,105,161,0.18) 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 max-w-6xl mx-auto w-full">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Executive Advisory Services
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-white mb-6"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Connectivity,{' '}
          <span className="text-gradient block">Infrastructure</span>{' '}
          <span className="text-white">& Network Strategy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10"
        >
          Executive advisory services for service providers, enterprises, investors,
          and network technology manufacturers — grounded in 25+ years of real operational leadership.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-xl shadow-blue-900/50 hover:shadow-blue-700/60 transition-all duration-200 cursor-pointer group"
          >
            Schedule a Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl hover:bg-white/5 transition-all duration-200 cursor-pointer"
          >
            Explore Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {badges.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full glass text-slate-300 text-sm">
              <Icon size={14} className="text-blue-400" />
              {text}
            </div>
          ))}
        </motion.div>

        {/* FIX 1: staggered stats row */}
        <motion.div
          variants={statsContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden w-full max-w-3xl"
        >
          {statsData.map(({ value, label }, i) => (
            <motion.div
              key={i}
              variants={statItem}
              className="bg-slate-900/80 backdrop-blur-sm px-6 py-5 text-center"
            >
              <div className="text-3xl font-black text-white mb-1" style={{ fontFamily: 'Poppins,sans-serif' }}>
                <span className="text-gradient">{value}</span>
              </div>
              <div className="text-xs text-slate-400 font-medium tracking-wide uppercase">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* FIX 5: spring bounce on scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <a href="#services" className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: 8 }}
            transition={{ type: 'spring', stiffness: 120, damping: 10, repeat: Infinity, repeatType: 'reverse' }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
