"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, MessageSquare, Users, Zap, TrendingUp, Globe } from "lucide-react"

const activities = [
  { icon: Calendar,     text: "Omar from Dubai just booked a strategy call",          color: "#38bdf8" },
  { icon: MessageSquare,text: "A marketing agency in Lahore sent an enquiry",         color: "#a78bfa" },
  { icon: Users,        text: "Priya from Bangalore started onboarding",              color: "#34d399" },
  { icon: Zap,          text: "James from Melbourne requested a workflow audit",      color: "#fbbf24" },
  { icon: TrendingUp,   text: "A real estate firm in Dubai requested a demo",        color: "#f472b6" },
  { icon: Globe,        text: "Sarah from London submitted a project brief",          color: "#4d9fff" },
  { icon: Calendar,     text: "An e-commerce brand just booked a free call",         color: "#38bdf8" },
  { icon: MessageSquare,text: "Hamza from Karachi sent a project inquiry",            color: "#f87171" },
  { icon: Zap,          text: "A SaaS startup requested CRM automation setup",       color: "#34d399" },
  { icon: Users,        text: "Ravi from Bangalore joined a discovery call",         color: "#a78bfa" },
]

interface Toast { id: number; act: typeof activities[0]; ago: string }

const agoLabels = ["just now", "2 min ago", "just now", "1 min ago", "3 min ago"]
let uid = 0

export function LiveActivity() {
  const [toasts, setToasts] = useState<Toast[]>([])
  const idx = useRef(0)

  useEffect(() => {
    const show = () => {
      const act = activities[idx.current % activities.length]
      idx.current++
      const id = uid++
      setToasts(prev => [...prev.slice(-1), { id, act, ago: agoLabels[Math.floor(Math.random() * agoLabels.length)] }])
      setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4800)
    }

    const t1 = setTimeout(show, 6000)
    let interval: ReturnType<typeof setInterval>
    const t2 = setTimeout(() => { interval = setInterval(show, 8000 + Math.random() * 3000) }, 6000)

    return () => { clearTimeout(t1); clearTimeout(t2); clearInterval(interval) }
  }, [])

  return (
    <div className="fixed bottom-6 left-6 z-[200] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map(({ id, act, ago }) => {
          const Icon = act.icon
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: -40, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl max-w-[300px] pointer-events-auto"
              style={{
                background: "rgba(7,9,26,0.93)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: `${act.color}18`, border: `1px solid ${act.color}30` }}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: act.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white/80 text-[11px] leading-snug">{act.text}</p>
                <p className="text-white/30 text-[10px] mt-0.5">{ago}</p>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] flex-shrink-0 animate-pulse" />
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
