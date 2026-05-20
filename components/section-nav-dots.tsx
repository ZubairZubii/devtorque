"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const sections = [
  { id: "hero",          label: "Home" },
  { id: "services",      label: "Services" },
  { id: "how-we-work",   label: "Process" },
  { id: "testimonials",  label: "Results" },
  { id: "tech-orbit",    label: "Tech Stack" },
  { id: "roi",           label: "ROI Calculator" },
  { id: "cta",           label: "Get Started" },
]

export function SectionNavDots() {
  const [active, setActive] = useState("hero")
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.35 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-[100] hidden xl:flex flex-col gap-3.5">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          onMouseEnter={() => setHovered(id)}
          onMouseLeave={() => setHovered(null)}
          className="relative flex items-center justify-end gap-2.5"
          aria-label={`Go to ${label}`}
        >
          <AnimatePresence>
            {hovered === id && (
              <motion.span
                initial={{ opacity: 0, x: 8, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 8, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/55 whitespace-nowrap pr-1"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>

          <motion.div
            animate={{
              width: active === id ? 22 : hovered === id ? 14 : 6,
              height: 6,
              backgroundColor: active === id
                ? "#4d9fff"
                : hovered === id
                ? "rgba(77,159,255,0.5)"
                : "rgba(255,255,255,0.18)",
              boxShadow: active === id ? "0 0 10px rgba(77,159,255,0.5)" : "none",
            }}
            transition={{ duration: 0.2 }}
            className="rounded-full flex-shrink-0"
          />
        </button>
      ))}
    </div>
  )
}
