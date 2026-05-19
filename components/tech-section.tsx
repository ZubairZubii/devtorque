"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "OpenAI", "LangChain", "AWS", "GCP", "Azure",
  "Kubernetes", "Docker", "Terraform", "PostgreSQL", "Redis",
  "Stripe", "Twilio", "Vercel", "GitHub", "Figma",
]

export function TechSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <section id="tech" className="py-28 px-6 md:px-14">
      <div className="text-center mb-20">
        <p className="text-[10px] font-bold tracking-[3px] uppercase text-[var(--dt-blue)] flex items-center justify-center gap-2.5 mb-4">
          <span className="w-5 h-px bg-[var(--dt-blue)]" />
          TECHNOLOGY STACK
          <span className="w-5 h-px bg-[var(--dt-blue)]" />
        </p>
        <h2 className="font-[var(--font-bebas)] text-5xl md:text-7xl tracking-wide uppercase">
          Tools We Master
        </h2>
      </div>

      <div
        ref={ref}
        className="relative w-full max-w-lg h-[500px] mx-auto"
        style={{ perspective: "800px" }}
      >
        <motion.div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            rotateY: rotation,
          }}
        >
          {technologies.map((tech, i) => {
            const theta = (i / technologies.length) * Math.PI * 2
            const phi = Math.acos(1 - (2 * (i + 0.5)) / technologies.length)
            const radius = 180
            const x = radius * Math.sin(phi) * Math.cos(theta)
            const y = radius * Math.sin(phi) * Math.sin(theta)
            const z = radius * Math.cos(phi)

            return (
              <span
                key={tech}
                className="absolute top-1/2 left-1/2 whitespace-nowrap text-[11px] font-bold tracking-[1.5px] uppercase text-white/60 hover:text-[var(--dt-cyan)] transition-colors px-2 py-1 rounded border border-transparent hover:border-[var(--dt-cyan)]/30"
                style={{
                  transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px)`,
                }}
              >
                {tech}
              </span>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
