import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Sparkles } from 'lucide-react'

export function CreativeCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion || !window.matchMedia('(pointer: fine)').matches) return

    const move = e => {
      setPosition({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const hide = () => setVisible(false)

    window.addEventListener('pointermove', move)
    document.addEventListener('mouseleave', hide)

    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('mouseleave', hide)
    }
  }, [reduceMotion])

  if (reduceMotion) return null

  return (
    <motion.div
      aria-hidden="true"
      className="vantivo-cursor"
      animate={{
        x: position.x - 19,
        y: position.y - 19,
        opacity: visible ? 1 : 0
      }}
      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
    >
      <Sparkles size={18} strokeWidth={2.6} />
    </motion.div>
  )
}

export function Reveal({ children, delay = 0, className = '' }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  )
}

export function StudioClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      setTime(new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Detroit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(new Date()))
    }

    update()
    const interval = setInterval(update, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="flex items-center gap-3 text-xs font-black">
      <span className="vantivo-live-dot" />
      MICHIGAN / {time || '--:--'} EST/EDT
    </span>
  )
}

export function FloatingProjectCTA() {
  return (
    <a
      href="#contact"
      className="vantivo-floating-cta"
      aria-label="Start a project with Vantivo"
    >
      LET'S TALK
      <ArrowUpRight size={19} />
    </a>
  )
}
