"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your business goals, technical requirements, and user needs to define a clear project scope.",
  },
  {
    number: "02",
    title: "Design",
    description: "Our team creates wireframes, prototypes, and visual designs that align with your brand and delight users.",
  },
  {
    number: "03",
    title: "Develop",
    description: "We build your solution using modern tech stacks with clean code, automated testing, and CI/CD pipelines.",
  },
  {
    number: "04",
    title: "Deploy",
    description: "Launch to production with monitoring, analytics, and ongoing support to ensure continued success.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-28 px-6 md:px-14 bg-[var(--dt-surface-1)]">
      <div className="text-center mb-16">
        <p className="text-[10px] font-bold tracking-[3px] uppercase text-[var(--dt-blue)] flex items-center justify-center gap-2.5 mb-4">
          <span className="w-5 h-px bg-[var(--dt-blue)]" />
          HOW WE WORK
          <span className="w-5 h-px bg-[var(--dt-blue)]" />
        </p>
        <h2 className="font-[var(--font-bebas)] text-5xl md:text-7xl tracking-wide uppercase">
          Our Process
        </h2>
      </div>

      <div className="grid md:grid-cols-4 border border-border">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            className="p-10 border-r border-border last:border-r-0 relative overflow-hidden hover:bg-[var(--dt-blue)]/5 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="absolute top-10 right-10 font-[var(--font-bebas)] text-xl tracking-[2px] text-white/10">
              {"->"/*→*/}
            </span>
            <p className="text-[10px] font-bold tracking-[2px] uppercase text-[var(--dt-blue)] mb-5">
              Step {step.number}
            </p>
            <h3 className="font-[var(--font-bebas)] text-3xl tracking-wide uppercase mb-3">
              {step.title}
            </h3>
            <p className="text-[13px] leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
