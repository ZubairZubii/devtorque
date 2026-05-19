"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const services = [
  {
    number: "01",
    eyebrow: "CONVERSATIONAL AI",
    title: "AI Voice\nAgents",
    description:
      "Deploy intelligent voice agents that handle customer calls 24/7. From appointment booking to customer support, our AI agents sound natural and get things done.",
    outcomes: [
      "Reduce call center costs by up to 70%",
      "Handle unlimited concurrent calls",
      "Seamless CRM and calendar integration",
    ],
    tech: ["Retell AI", "ElevenLabs", "OpenAI", "Twilio"],
    image: "/images/hero-voice.jpg",
    color: "var(--dt-cyan)",
  },
  {
    number: "02",
    eyebrow: "FULL-STACK DEVELOPMENT",
    title: "SaaS\nPlatforms",
    description:
      "Custom SaaS applications built with modern tech stacks. From MVP to enterprise scale, we deliver products that users love and businesses rely on.",
    outcomes: [
      "Launch MVPs in weeks, not months",
      "Built for scale from day one",
      "Beautiful, conversion-optimized UI/UX",
    ],
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe"],
    image: "/images/hero-saas.jpg",
    color: "var(--dt-purple)",
  },
  {
    number: "03",
    eyebrow: "INFRASTRUCTURE",
    title: "Cloud &\nDevOps",
    description:
      "Enterprise-grade cloud infrastructure and CI/CD pipelines. We architect systems that are secure, scalable, and cost-efficient.",
    outcomes: [
      "99.99% uptime SLA-ready architectures",
      "Automated deployments and rollbacks",
      "Cost optimization and monitoring",
    ],
    tech: ["AWS", "Kubernetes", "Terraform", "GitHub Actions"],
    image: "/images/hero-cloud.jpg",
    color: "var(--dt-orange)",
  },
  {
    number: "04",
    eyebrow: "INTELLIGENT AUTOMATION",
    title: "Workflow\nAutomation",
    description:
      "Connect your tools and automate repetitive processes. We build custom integrations and AI-powered workflows that save hours every week.",
    outcomes: [
      "Eliminate manual data entry",
      "Sync data across all your tools",
      "AI-powered decision automation",
    ],
    tech: ["n8n", "Make", "Zapier", "Custom APIs"],
    image: "/images/hero-automate.jpg",
    color: "var(--dt-green)",
  },
]

export function ServicesSection() {
  return (
    <section id="services">
      {services.map((service, index) => (
        <div
          key={service.number}
          className={`min-h-screen grid md:grid-cols-2 border-b border-border ${
            index % 2 === 1 ? "md:[direction:rtl]" : ""
          }`}
        >
          {/* Text Panel */}
          <div
            className={`p-8 md:p-16 flex flex-col justify-center relative ${
              index % 2 === 1 ? "md:[direction:ltr]" : ""
            }`}
          >
            {/* Ghost number */}
            <span className="absolute -top-5 -right-2 font-[var(--font-bebas)] text-[160px] md:text-[220px] text-white/[0.03] leading-none pointer-events-none select-none">
              {service.number}
            </span>

            <div
              className="text-[10px] font-bold tracking-[3px] uppercase flex items-center gap-2.5 mb-5"
              style={{ color: service.color }}
            >
              <span className="w-5 h-px" style={{ background: service.color }} />
              {service.eyebrow}
            </div>

            <h2 className="font-[var(--font-bebas)] text-5xl md:text-7xl tracking-wide uppercase leading-[0.92] mb-6 whitespace-pre-line">
              {service.title}
            </h2>

            <p className="text-[15px] leading-relaxed text-muted-foreground mb-8 max-w-lg">
              {service.description}
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {service.outcomes.map((outcome, i) => (
                <div
                  key={i}
                  className="flex gap-3 items-start p-4 bg-white/[0.03] border border-border rounded-md hover:border-current transition-colors"
                  style={{ "--tw-border-opacity": 0.3 } as React.CSSProperties}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                    style={{ background: service.color }}
                  />
                  <p className="text-sm text-muted-foreground">{outcome}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {service.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 border border-white/10 rounded text-[11px] font-semibold tracking-wide text-white/40 hover:text-current hover:border-current transition-colors"
                  style={{ "--tw-text-opacity": 1 } as React.CSSProperties}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Visual Panel */}
          <div
            className={`relative min-h-[50vh] md:min-h-0 overflow-hidden flex items-center justify-center p-10 ${
              index % 2 === 1 ? "md:[direction:ltr]" : ""
            }`}
          >
            {/* Glow background */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none animate-glow-pulse"
              style={{
                background: `radial-gradient(ellipse 70% 60% at 50% 40%, ${service.color}, transparent 70%)`,
              }}
            />

            {/* Laptop mockup */}
            <motion.div
              className="relative w-full max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#111] rounded-t-xl p-0.5 border border-[#333] shadow-2xl">
                {/* Browser bar */}
                <div className="h-7 bg-[#1a1a1a] rounded-t-lg flex items-center px-3 gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28ca41]" />
                </div>
                {/* Screen content */}
                <div className="overflow-hidden rounded-b-md">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={580}
                    height={340}
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
              </div>
              {/* Laptop base */}
              <div className="h-4 bg-gradient-to-b from-[#1a1a1a] to-[#111] rounded-b border border-t-0 border-[#333]" />
              <div className="w-2/5 h-2.5 bg-[#0d0d0d] rounded-b-lg mx-auto border border-t-0 border-[#333]" />
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  )
}
