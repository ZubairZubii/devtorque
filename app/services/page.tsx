"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Bot, Code2, Cloud, Workflow, Database,
  Zap, ArrowRight, Check,
  BrainCircuit, Cpu, Globe, Server, Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import TiltCard from "@/components/ui/tilt-card"
import { FadeInSection } from "@/components/ui/parallax"
import { WaveText } from "@/components/wave-text"

const services = [
  {
    id: "voice-agents",
    icon: Bot,
    title: "AI Voice Agents",
    subtitle: "24/7 Intelligent Customer Support",
    description: "Deploy human-like AI voice agents that handle customer calls around the clock. Our agents understand context, manage complex conversations, and integrate seamlessly with your existing systems.",
    color: "#8B5CF6",
    image: "/images/hero-voice.jpg",
    features: [
      "Natural language understanding",
      "Multi-language support",
      "CRM integration",
      "Call analytics dashboard",
      "Custom voice training",
      "Real-time sentiment analysis",
    ],
    benefits: [
      { metric: "80%", label: "Reduction in wait times" },
      { metric: "24/7", label: "Availability" },
      { metric: "60%", label: "Cost savings" },
    ],
  },
  {
    id: "saas",
    icon: Code2,
    title: "SaaS Development",
    subtitle: "Full-Stack Platforms Built to Scale",
    description: "From concept to launch, we build complete SaaS platforms with modern architecture, intuitive UX, and robust backend systems designed to handle millions of users.",
    color: "#0066FF",
    image: "/images/hero-saas.jpg",
    features: [
      "Custom dashboard development",
      "Multi-tenant architecture",
      "Payment integration",
      "User management system",
      "API development",
      "Analytics & reporting",
    ],
    benefits: [
      { metric: "3x", label: "Faster development" },
      { metric: "99.9%", label: "Uptime SLA" },
      { metric: "50%", label: "Lower TCO" },
    ],
  },
  {
    id: "crm",
    icon: Database,
    title: "CRM Systems",
    subtitle: "Custom Relationship Management",
    description: "Tailored CRM solutions that fit your unique business processes. Track leads, manage relationships, and automate follow-ups with intelligent automation built-in.",
    color: "#10B981",
    image: "/images/hero-automate.jpg",
    features: [
      "Lead tracking & scoring",
      "Pipeline management",
      "Email automation",
      "Custom reporting",
      "Third-party integrations",
      "Mobile-responsive design",
    ],
    benefits: [
      { metric: "40%", label: "More conversions" },
      { metric: "5hrs", label: "Saved daily" },
      { metric: "100%", label: "Data visibility" },
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & DevOps",
    subtitle: "Enterprise Infrastructure",
    description: "Scalable cloud infrastructure with automated CI/CD pipelines, containerization, and infrastructure as code. We ensure your systems are secure, fast, and always available.",
    color: "#00D4FF",
    image: "/images/hero-cloud.jpg",
    features: [
      "AWS/GCP/Azure deployment",
      "Kubernetes orchestration",
      "CI/CD automation",
      "Infrastructure as code",
      "Monitoring & alerting",
      "Security hardening",
    ],
    benefits: [
      { metric: "99.99%", label: "Uptime achieved" },
      { metric: "70%", label: "Faster deployments" },
      { metric: "40%", label: "Cost optimization" },
    ],
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Workflow Automation",
    subtitle: "End-to-End Process Automation",
    description: "Eliminate manual tasks and streamline operations with intelligent automation. From data entry to complex business processes, we automate it all.",
    color: "#F59E0B",
    image: "/images/hero-terminal.jpg",
    features: [
      "Process mapping & optimization",
      "Custom automation scripts",
      "Integration with 500+ apps",
      "Error handling & alerts",
      "Scheduled workflows",
      "Performance reporting",
    ],
    benefits: [
      { metric: "90%", label: "Less manual work" },
      { metric: "0", label: "Human errors" },
      { metric: "200hrs", label: "Saved monthly" },
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="relative pt-24">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden min-h-[55vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_70%_50%,rgba(0,55,160,0.20),transparent_72%)]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <FadeInSection>
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-7"
                >
                  <Zap className="w-3.5 h-3.5 text-[#4d9fff]" />
                  <span className="text-sm text-white/65">Comprehensive Solutions</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight leading-tight"
                >
                  Services That
                  <span
                    className="block"
                    style={{
                      background: "linear-gradient(135deg, #4d9fff 0%, #38bdf8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Transform Business
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-base text-white/45 max-w-lg leading-relaxed"
                >
                  From AI-powered voice agents to complete SaaS platforms, we deliver end-to-end solutions that automate operations and drive growth.
                </motion.p>
              </div>
            </FadeInSection>

            {/* Animated service icon cluster */}
            <div className="hidden lg:flex items-center justify-center relative h-64">
              {services.slice(0, 5).map((svc, i) => {
                const angle = (i / 5) * 2 * Math.PI - Math.PI / 2
                const r = 110
                const x = Math.round(r * Math.cos(angle))
                const y = Math.round(r * Math.sin(angle))
                return (
                  <motion.div
                    key={svc.id}
                    className="absolute"
                    style={{ left: `calc(50% + ${x}px - 22px)`, top: `calc(50% + ${y}px - 22px)` }}
                    animate={{ scale: [1, 1.10, 1], opacity: [0.75, 1, 0.75] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.55, ease: "easeInOut" }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center border"
                      style={{ background: `${svc.color}14`, borderColor: `${svc.color}26` }}
                    >
                      <svc.icon className="w-5 h-5" style={{ color: svc.color }} />
                    </div>
                  </motion.div>
                )
              })}
              {/* Center core */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(37,99,235,0.15)",
                  border: "1px solid rgba(77,159,255,0.28)",
                  boxShadow: "0 0 30px rgba(37,99,235,0.2)",
                }}
              >
                <Zap className="w-6 h-6 text-[#4d9fff]" />
              </motion.div>
              {/* Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute w-56 h-56 rounded-full"
                style={{ border: "1px dashed rgba(77,159,255,0.14)" }}
              />
              <div className="absolute w-56 h-56 rounded-full" style={{ border: "1px solid rgba(77,159,255,0.07)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Quick-nav pills */}
      <section className="py-5 border-y border-white/6 bg-[#070913] sticky top-[4.5rem] z-30 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {services.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 text-white/40 hover:text-white/80 border border-transparent hover:border-white/12 hover:bg-white/[0.04]"
              >
                <svc.icon className="w-3 h-3" style={{ color: svc.color }} />
                {svc.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-32">
                <FadeInSection>
                  <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      {/* Icon + number row */}
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center"
                          style={{
                            backgroundColor: `${service.color}18`,
                            border: `1px solid ${service.color}30`,
                            boxShadow: `0 0 24px ${service.color}18`,
                          }}
                        >
                          <service.icon className="w-7 h-7" style={{ color: service.color }} />
                        </div>
                        <span
                          className="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.15em]"
                          style={{ color: service.color, background: `${service.color}12`, border: `1px solid ${service.color}25` }}
                        >
                          {service.subtitle}
                        </span>
                      </div>

                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                        {service.title}
                      </h2>

                      <p className="text-base text-white/55 mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2.5 p-2.5 rounded-lg" style={{ background: `${service.color}08` }}>
                            <div
                              className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: `${service.color}20` }}
                            >
                              <Check className="w-2.5 h-2.5" style={{ color: service.color }} />
                            </div>
                            <span className="text-white/75 text-xs font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Benefits — styled stat pills */}
                      <div className="flex gap-4 mb-8 flex-wrap">
                        {service.benefits.map((benefit) => (
                          <div
                            key={benefit.label}
                            className="px-4 py-3 rounded-xl"
                            style={{
                              background: `${service.color}0e`,
                              border: `1px solid ${service.color}22`,
                            }}
                          >
                            <div className="text-2xl font-extrabold leading-none mb-0.5" style={{ color: service.color }}>
                              {benefit.metric}
                            </div>
                            <div className="text-white/50 text-[11px] font-medium">{benefit.label}</div>
                          </div>
                        ))}
                      </div>

                      <Link href="/contact">
                        <Button
                          className="btn-primary px-7 py-5 group text-sm"
                          style={{
                            background: service.color,
                            boxShadow: `inset 0 1px 0 rgba(255,255,255,0.18), 0 0 0 1px ${service.color}80, 0 4px 18px ${service.color}40`,
                          }}
                        >
                          Get Started
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>

                    {/* Image */}
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <TiltCard glowColor={`${service.color}30`}>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass border border-white/10">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                        </div>
                      </TiltCard>
                    </div>
                  </div>
                </FadeInSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(80,40,180,0.07),transparent)] pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <FadeInSection>
            <div className="max-w-5xl mx-auto mb-14 text-center">
              <span className="inline-block text-[#a78bfa] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full border border-[#a78bfa]/18 bg-[#a78bfa]/5">
                Modern Technology Stack
              </span>
              <WaveText as="h2" className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Industry-Leading Technologies
              </WaveText>
              <p className="text-base text-white/45 max-w-xl mx-auto leading-relaxed">
                We leverage cutting-edge tools and frameworks to build scalable, maintainable, and high-performance solutions.
              </p>
            </div>
          </FadeInSection>

          {/* Card grid tech stack */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                label: "AI & Machine Learning",
                Icon: BrainCircuit,
                color: "#a78bfa",
                items: ["OpenAI GPT-4", "LangChain", "Claude AI", "Pinecone", "Whisper AI", "Stable Diffusion"],
              },
              {
                label: "Automation & No-Code",
                Icon: Zap,
                color: "#f472b6",
                items: ["Make.com", "Zapier", "n8n", "GoHighLevel", "Asana", "Softr", "Webflow"],
              },
              {
                label: "Frontend Development",
                Icon: Globe,
                color: "#38bdf8",
                items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "React Native"],
              },
              {
                label: "Backend & Database",
                Icon: Server,
                color: "#34d399",
                items: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Redis", "MongoDB"],
              },
              {
                label: "Cloud & Infrastructure",
                Icon: Cloud,
                color: "#fbbf24",
                items: ["AWS", "Google Cloud", "Vercel", "Docker", "Kubernetes", "Terraform"],
              },
              {
                label: "Integrations & APIs",
                Icon: Layers,
                color: "#60a5fa",
                items: ["REST APIs", "GraphQL", "Webhooks", "Stripe", "Twilio", "SendGrid"],
              },
            ].map((category, i) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative p-5 rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, rgba(13,18,40,0.85) 0%, rgba(7,9,26,0.9) 100%)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
                whileHover={{
                  borderColor: `${category.color}35`,
                  boxShadow: `0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px ${category.color}30`,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${category.color}aa, ${category.color}22)` }}
                />
                {/* Corner glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${category.color}12, transparent 55%)` }}
                />

                {/* Header */}
                <div className="relative flex items-center gap-2.5 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${category.color}15`, border: `1px solid ${category.color}28` }}
                  >
                    <category.Icon className="w-4 h-4" style={{ color: category.color }} />
                  </div>
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: category.color }}
                  >
                    {category.label}
                  </span>
                </div>

                {/* Pills */}
                <div className="relative flex flex-wrap gap-1.5">
                  {category.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-semibold text-white/50 transition-all duration-200 cursor-default hover:text-white/85"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = `${category.color}12`
                        ;(e.currentTarget as HTMLElement).style.borderColor = `${category.color}30`
                        ;(e.currentTarget as HTMLElement).style.color = category.color
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"
                        ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"
                        ;(e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <FadeInSection>
            <div className="max-w-4xl mx-auto rounded-3xl p-10 md:p-14 bg-gradient-to-br from-[#0c1228] to-[#070913] text-white shadow-[0_20px_50px_rgba(0,102,255,0.08)] relative overflow-hidden border border-white/8">
              {/* Subtle background graphics */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066FF]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#8B5CF6]/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <span className="inline-block text-[#38bdf8] text-[11px] font-bold uppercase tracking-[0.2em] mb-5 px-4 py-1.5 rounded-full border border-white/8 bg-white/5">
                  Get Started
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight font-sans">
                  Ready to Automate Your Business?
                </h2>
                <p className="text-sm md:text-base text-white/50 mb-9 leading-relaxed">
                  Book a free consultation and we'll analyze your business needs 
                  to recommend the best solution for your goals. No commitment required.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="/contact">
                    <Button size="lg" className="btn-primary px-8 py-5 group">
                      Book Free Consultation
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
