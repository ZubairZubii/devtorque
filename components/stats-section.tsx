"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: 95, label: "Client Satisfaction", suffix: "%" },
  { value: 50, label: "Projects Delivered", suffix: "+" },
  { value: 24, label: "Response Time", suffix: "hrs" },
  { value: 3, label: "Avg. Time to MVP", suffix: "mo" },
]

function AnimatedRing({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<SVGCircleElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayed, setDisplayed] = useState(0)
  
  const circumference = 2 * Math.PI * 50
  const percentage = value / 100
  const strokeDashoffset = circumference - (percentage * circumference)

  useEffect(() => {
    if (isInView) {
      const duration = 1800
      const start = performance.now()
      const animate = (now: number) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplayed(Math.round(value * eased))
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, value])

  return (
    <div className="relative w-28 h-28 mx-auto mb-5">
      <svg className="w-28 h-28 -rotate-90" viewBox="0 0 110 110">
        <circle
          cx="55"
          cy="55"
          r="50"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="3"
        />
        <circle
          ref={ref}
          cx="55"
          cy="55"
          r="50"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={isInView ? strokeDashoffset : circumference}
          className="transition-[stroke-dashoffset] duration-[1800ms] ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-[var(--font-bebas)] text-3xl tracking-wide">
          {displayed}{suffix}
        </span>
      </div>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="bg-[var(--dt-blue)] py-20 px-6 md:px-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <AnimatedRing value={stat.value} suffix={stat.suffix} />
            <p className="text-[11px] font-semibold tracking-[2.5px] uppercase text-white/65">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
