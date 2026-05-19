"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight,
  Zap,
  MessageSquare,
  TrendingUp,
  Layers,
  BarChart3,
  Target,
  Check,
  ShoppingCart,
  Building2,
  Heart,
  Rocket,
  Megaphone,
  DollarSign,
  Users,
  GraduationCap,
  Scale,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/ui/parallax"
import { EarthGlobe } from "@/components/earth-globe"
import { TechOrbitCSS } from "@/components/tech-orbit-css"
import { WaveText } from "@/components/wave-text"

function AnimatedCounter({ value, duration = 1.8 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20px" })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    if (start === end) return

    const totalMiliseconds = duration * 1000
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 16)
    
    const timer = setInterval(() => {
      start += 1
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, incrementTime)

    return () => clearInterval(timer)
  }, [value, duration, isInView])

  return <span ref={ref}>{count}</span>
}

// ── Data ──────────────────────────────────────────────────────────
const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "AI Uptime" },
  { value: 10, suffix: "x", label: "Average ROI" },
]

const businessServices = [
  {
    icon: Zap,
    title: "AI Process Automation",
    tagline: "Eliminate Repetitive Work",
    description: "Deploy intelligent automation that handles tasks, approvals, and data processing — freeing your team for high-value work.",
    outcomes: ["Reduce manual work by 60%+", "Zero errors on routine tasks", "Scale without adding headcount"],
    color: "#4d9fff",
    glowColor: "rgba(77, 159, 255, 0.11)",
    borderGlow: "rgba(77, 159, 255, 0.28)",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots & Support",
    tagline: "24/7 Customer Service",
    description: "Intelligent chatbots and voice agents that handle customer queries, qualify leads, and escalate complex cases automatically.",
    outcomes: ["Handle 80% of inquiries without staff", "Always-on availability", "Seamless handoff to human agents"],
    color: "#a78bfa",
    glowColor: "rgba(167, 139, 250, 0.11)",
    borderGlow: "rgba(167, 139, 250, 0.28)",
  },
  {
    icon: TrendingUp,
    title: "CRM & Sales Automation",
    tagline: "Close More, Faster",
    description: "Automate your entire sales pipeline — from lead capture and scoring to follow-up sequences and deal tracking.",
    outcomes: ["3x faster lead response time", "Automated follow-up sequences", "Full pipeline visibility and reporting"],
    color: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.11)",
    borderGlow: "rgba(56, 189, 248, 0.28)",
  },
  {
    icon: Layers,
    title: "Custom Business Platforms",
    tagline: "Built for Your Operations",
    description: "Purpose-built SaaS platforms, internal tools, and client portals engineered to match your exact workflows.",
    outcomes: ["100% tailored to your process", "Enterprise-grade architecture", "Full ownership, no vendor lock-in"],
    color: "#34d399",
    glowColor: "rgba(52, 211, 153, 0.11)",
    borderGlow: "rgba(52, 211, 153, 0.28)",
  },
  {
    icon: BarChart3,
    title: "Data & Reporting Dashboards",
    tagline: "Instant Business Clarity",
    description: "Real-time dashboards and automated reporting that give you complete visibility across all your business metrics.",
    outcomes: ["Live data from all connected systems", "Automated daily and weekly reports", "Custom KPIs and smart alerting"],
    color: "#fbbf24",
    glowColor: "rgba(251, 191, 36, 0.11)",
    borderGlow: "rgba(251, 191, 36, 0.28)",
  },
  {
    icon: Target,
    title: "Lead Generation Systems",
    tagline: "AI-Powered Outreach",
    description: "End-to-end lead generation — automated prospecting, personalized outreach at scale, and direct booking integration.",
    outcomes: ["Automated prospect research", "Personalized outreach at scale", "Direct calendar booking integration"],
    color: "#f472b6",
    glowColor: "rgba(244, 114, 182, 0.11)",
    borderGlow: "rgba(244, 114, 182, 0.28)",
  },
]

// ── Page ──────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="relative">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Multi-layer background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_65%_45%,rgba(0,55,160,0.20),transparent_72%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_30%_at_18%_65%,rgba(70,35,160,0.09),transparent_60%)]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        {/* Left vignette */}
        <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-[#07091a] via-[#07091a]/55 to-transparent pointer-events-none" />

        {/* Floating ambient particles */}
        {[
          { top: "20%", left: "8%",  size: 3,  delay: "0s",   dur: "7s" },
          { top: "55%", left: "15%", size: 2,  delay: "1.5s", dur: "9s" },
          { top: "35%", left: "45%", size: 4,  delay: "0.8s", dur: "6s" },
          { top: "70%", left: "55%", size: 2,  delay: "2s",   dur: "8s" },
          { top: "15%", left: "72%", size: 3,  delay: "3s",   dur: "10s" },
          { top: "80%", left: "82%", size: 2,  delay: "0.3s", dur: "7s" },
          { top: "45%", left: "88%", size: 5,  delay: "1s",   dur: "12s" },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#4d9fff]/30 pointer-events-none"
            style={{
              top: p.top, left: p.left,
              width: p.size, height: p.size,
              animation: `float ${p.dur} ease-in-out infinite`,
              animationDelay: p.delay,
            }}
          />
        ))}

        <div className="relative container mx-auto px-6 pt-28 pb-16 z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* Left — text */}
            <div className="max-w-xl lg:max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-7"
              >
                <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse flex-shrink-0" />
                <span className="text-sm text-white/65 font-medium">AI & Automation Agency</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] md:leading-[0.95] mb-6 tracking-tight"
              >
                <WaveText as="span" className="block text-white">We Build</WaveText>
                <WaveText
                  as="span"
                  className="block bg-gradient-to-r from-[#4d9fff] to-[#38bdf8] bg-clip-text text-transparent"
                >
                  AI Systems
                </WaveText>
                <WaveText as="span" className="block text-white/70">That Scale</WaveText>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="text-base text-white/50 mb-8 leading-relaxed max-w-md"
              >
                Your team is drowning in manual tasks, missed follow-ups, and
                broken workflows. We fix that — permanently — with AI systems
                that run your operations 24/7.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.32 }}
                className="flex flex-wrap gap-3 mb-9"
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="btn-primary px-7 py-5 group"
                  >
                    Book Free Consultation
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="btn-ghost px-7 py-5"
                  >
                    Explore Services
                  </Button>
                </Link>
              </motion.div>

              {/* Inline stats */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.44 }}
                className="flex flex-wrap gap-2"
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/8"
                  >
                    <span
                      className="text-lg font-bold leading-none flex items-center"
                      style={{
                        background: "linear-gradient(135deg, #4d9fff, #38bdf8)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      <AnimatedCounter value={stat.value} />
                      <span>{stat.suffix}</span>
                    </span>
                    <span className="text-[11px] text-white/40">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Earth Globe */}
            <div className="hidden lg:flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <EarthGlobe />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-5 h-9 rounded-full border border-white/14 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-white/35"
            />
          </div>
        </motion.div>
      </section>

      {/* ── TICKER ───────────────────────────────────────────────── */}
      <section className="py-6 border-y border-white/8 overflow-hidden bg-white/[0.01] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.04),transparent_70%)] pointer-events-none" />
        <div className="animate-ticker flex gap-8 whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8">
              {[
                { name: "AI Process Automation", color: "#4d9fff" },
                { name: "Workflow Optimization", color: "#f472b6" },
                { name: "CRM Systems", color: "#34d399" },
                { name: "Custom Platforms", color: "#38bdf8" },
                { name: "Cloud Infrastructure", color: "#fbbf24" },
                { name: "AI Chatbots", color: "#a78bfa" },
                { name: "Data Dashboards", color: "#00D4FF" },
                { name: "Lead Generation", color: "#f472b6" }
              ].map((item) => (
                <div 
                  key={item.name} 
                  className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/8 shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:border-white/18 hover:bg-white/[0.06] transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }} />
                  <span className="text-white/60 text-xs font-bold uppercase tracking-[0.18em]">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_50%_0%,rgba(0,45,130,0.10),transparent)]" />
        <div className="container mx-auto px-6 relative">
          <FadeInSection>
            <div className="text-center mb-14">
              <span className="inline-block text-[#f59e0b] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/6">
                What We Deliver
              </span>
              <WaveText
                as="h2"
                className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
              >
                Real Outcomes. Zero Overhead.
              </WaveText>
              <p className="text-sm text-white/45 max-w-lg mx-auto leading-relaxed">
                Every solution we build is tied to a business result — fewer hours wasted,
                faster pipelines, and growth that doesn&apos;t require more headcount.
              </p>
            </div>
          </FadeInSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {businessServices.map((service, idx) => (
              <StaggerItem key={service.title}>
                <motion.div
                  className="group relative h-full rounded-2xl cursor-default overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, rgba(13,18,40,0.9) 0%, rgba(7,9,26,0.95) 100%)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px ${service.borderGlow}, 0 0 40px -10px ${service.glowColor}`,
                    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
                  }}
                >
                  {/* Colored top accent bar */}
                  <div
                    className="h-[3px] w-full"
                    style={{ background: `linear-gradient(90deg, ${service.color}cc, ${service.color}33)` }}
                  />

                  {/* Corner number */}
                  <div
                    className="absolute top-4 right-4 text-[10px] font-bold tabular-nums opacity-20 group-hover:opacity-50 transition-opacity"
                    style={{ color: service.color }}
                  >
                    0{idx + 1}
                  </div>

                  {/* Hover corner glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 10% 10%, ${service.glowColor}, transparent 60%)` }}
                  />

                  <div className="relative p-6 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-5">
                      <div
                        className="relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: `${service.color}18`,
                          border: `1px solid ${service.color}30`,
                          boxShadow: `0 0 0 0 ${service.color}00`,
                        }}
                      >
                        <service.icon className="w-5 h-5 relative z-10" style={{ color: service.color }} />
                        {/* Icon glow ring on hover */}
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ boxShadow: `inset 0 0 12px ${service.color}30, 0 0 20px ${service.color}20` }}
                        />
                      </div>
                    </div>

                    {/* Tag + title */}
                    <div
                      className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2"
                      style={{ color: service.color }}
                    >
                      {service.tagline}
                    </div>
                    <h3 className="text-[1.05rem] font-bold text-white mb-3 leading-snug">{service.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed mb-5">{service.description}</p>

                    {/* Outcomes */}
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2.5">
                          <div
                            className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: `${service.color}18` }}
                          >
                            <Check className="w-2.5 h-2.5" style={{ color: service.color }} />
                          </div>
                          <span className="text-white/55 text-xs leading-snug">{o}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Card footer CTA */}
                    <div
                      className="pt-4 border-t flex items-center justify-between"
                      style={{ borderColor: "rgba(255,255,255,0.06)" }}
                    >
                      <Link href="/services" className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-2.5"
                        style={{ color: service.color }}
                      >
                        Explore
                        <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </Link>
                      <div
                        className="w-1.5 h-1.5 rounded-full opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"
                        style={{ backgroundColor: service.color, boxShadow: `0 0 6px ${service.color}` }}
                      />
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInSection>
            <div className="text-center mt-11">
              <Link href="/services">
                <Button variant="outline" className="border-white/10 text-white/55 hover:text-white hover:border-white/22 hover:bg-white/5 px-8 py-4 text-sm font-semibold transition-all">
                  View All Services <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="py-14 border-y border-white/8 bg-white/[0.015]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <FadeInSection key={stat.label} delay={index * 0.08}>
                <div className="relative group p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/15 transition-all text-center">
                  <div
                    className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300 flex justify-center items-center gap-0.5"
                    style={{
                      background: "linear-gradient(135deg, #ffffff 0%, #a2c6ff 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <AnimatedCounter value={stat.value} />
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-white/50 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] group-hover:text-white/80 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE ──────────────────────────────────── */}
      <section className="py-12 bg-[#060810] border-b border-white/6 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <FadeInSection>
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.28em] text-white/20 mb-8">
              Industries We Automate
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {[
                { name: "E-Commerce & Retail",  Icon: ShoppingCart  },
                { name: "Real Estate",           Icon: Building2     },
                { name: "Healthcare & Clinics",  Icon: Heart         },
                { name: "SaaS & Startups",       Icon: Rocket        },
                { name: "Marketing Agencies",    Icon: Megaphone     },
                { name: "Finance & FinTech",     Icon: DollarSign    },
                { name: "Legal Services",        Icon: Scale         },
                { name: "Recruitment & HR",      Icon: Users         },
                { name: "Consulting Firms",      Icon: Briefcase     },
                { name: "Education & EdTech",    Icon: GraduationCap },
              ].map((niche, i) => (
                <motion.div
                  key={niche.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                    borderColor: "rgba(255,255,255,0.16)",
                    color: "rgba(255,255,255,0.85)",
                    transition: { duration: 0.15 },
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full cursor-default text-white/45 bg-white/[0.03] border border-white/8"
                >
                  <niche.Icon className="w-3 h-3 flex-shrink-0 text-white/30" />
                  <span className="text-[11px] font-medium tracking-wide">
                    {niche.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── TECH ORBIT ───────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden bg-[#06080f]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_50%,rgba(80,40,180,0.07),transparent)]" />
        <div className="container mx-auto px-6 relative">
          <FadeInSection>
            <div className="text-center mb-14">
              <span className="inline-block text-[#a78bfa] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full border border-[#a78bfa]/20 bg-[#a78bfa]/6">
                Engineering Capability
              </span>
              <WaveText as="h2" className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                Enterprise-Grade Tech Stack
              </WaveText>
              <p className="text-sm text-white/40 max-w-md mx-auto leading-relaxed">
                Frontier AI models, battle-tested cloud infrastructure, and modern frameworks — hover to explore.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <TechOrbitCSS />
          </FadeInSection>

          {/* Legend */}
          <FadeInSection>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {[
                { label: "AI & ML",       color: "#a78bfa" },
                { label: "Frontend",      color: "#60a5fa" },
                { label: "Backend",       color: "#34d399" },
                { label: "Cloud",         color: "#fbbf24" },
                { label: "Automation",    color: "#f472b6" },
              ].map((cat) => (
                <div key={cat.label} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                  <span className="text-xs text-white/40 font-medium">{cat.label}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── ROI CALCULATOR ───────────────────────────────────────── */}
      <ROICalculator />

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <FadeInSection>
            <div className="max-w-4xl mx-auto rounded-3xl p-10 md:p-14 bg-gradient-to-br from-[#0c1228] to-[#070913] text-white shadow-[0_20px_50px_rgba(0,102,255,0.08),0_0_0_1px_rgba(77,159,255,0.12)] relative overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#4d9fff]/60 to-transparent" />
              {/* Subtle background graphics */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066FF]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#8B5CF6]/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <span className="inline-block text-[#f59e0b] text-[11px] font-bold uppercase tracking-[0.2em] mb-5 px-4 py-1.5 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/6">
                  Free 30-Min Strategy Call
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight">
                  Stop Losing Revenue to<br />
                  <span style={{ background: "linear-gradient(135deg,#4d9fff,#38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Manual Processes
                  </span>
                </h2>
                <p className="text-sm md:text-base text-white/50 mb-9 leading-relaxed">
                  One call. We analyse your bottlenecks, map the automations, and show
                  you exactly how much time and money you&apos;ll reclaim. No commitment.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="/contact">
                    <Button size="lg" className="btn-primary px-8 py-5 group">
                      Book Free Consultation
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="ghost" className="btn-ghost px-8 py-5">
                      Explore Services
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

export function ROICalculator() {
  const [activeTab, setActiveTab] = useState<"voice" | "ops" | "sales">("voice")

  // Tab 1: Voice
  const [calls, setCalls] = useState(2000)
  const [costPerCall, setCostPerCall] = useState(12)

  // Tab 2: Ops & Workflows
  const [tasks, setTasks] = useState(5000)
  const [minsPerTask, setMinsPerTask] = useState(6)
  const [wageRate, setWageRate] = useState(30)

  // Tab 3: Sales Outbound
  const [leads, setLeads] = useState(1000)
  const [leadValue, setLeadValue] = useState(250)
  const [delay, setDelay] = useState(45)

  // Dynamic Calculations based on Active Tab
  let annualSavings = 0
  let annualHoursSaved = 0
  let boostMetric = ""
  let labelText = "Est. Annual Value Reclaimed"
  let recommendation = ""
  let subtitle = ""

  if (activeTab === "voice") {
    const monthlySavings = Math.round(calls * costPerCall * 0.75)
    annualSavings = monthlySavings * 12
    annualHoursSaved = Math.round(calls * 0.1 * 12)
    boostMetric = "75% Cost Slash"
    labelText = "Est. Annual Operational Savings"
    recommendation = "Custom Inbound/Outbound AI Voice Agent (Vapi/Retell) configured with real-time semantic routing and automated ticket creation."
    subtitle = "Replaces manual call triage with a 24/7 autonomous phone response system."
  } else if (activeTab === "ops") {
    const monthlySavings = Math.round((tasks * (minsPerTask / 60)) * wageRate * 0.90)
    annualSavings = monthlySavings * 12
    annualHoursSaved = Math.round((tasks * minsPerTask / 60) * 12)
    boostMetric = "90% Time Slash"
    labelText = "Est. Staff Hours Saved Value"
    recommendation = "Enterprise Automation Pipeline (n8n/Make) integrating database triggers, email parsers, and custom Slack alerts."
    subtitle = "Eliminates repetitive data entry, file transfers, and routine back-office syncs."
  } else {
    // 8% conversion rate improvement due to immediate AI qualification
    const monthlySavings = Math.round(leads * leadValue * 0.08)
    annualSavings = monthlySavings * 12
    annualHoursSaved = Math.round(leads * 0.25 * 12)
    boostMetric = "+391% Reply Speed"
    labelText = "Est. Added Annual Revenue"
    recommendation = "Autonomous Lead Responder Agent (SMS/Email) synced with CRM, offering instant qualification and scheduling calendar links."
    subtitle = "Speeds up initial lead response times to under 60 seconds to lock in conversions."
  }

  return (
    <section className="py-24 border-t border-white/8 relative overflow-hidden bg-[#070913]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,102,255,0.06),transparent_50%)] pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="inline-block text-[#38bdf8] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full border border-[#38bdf8]/18 bg-[#38bdf8]/5">
              ROI Suite Planner
            </span>
            <WaveText as="h2" className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              Calculate Your AI Automation Impact
            </WaveText>
            <p className="text-sm text-white/40 max-w-xl mx-auto leading-relaxed">
              Select an operational bottleneck below to view how DevTorque automation transforms your efficiency and bottom line.
            </p>
          </div>
        </FadeInSection>

        {/* Tab Controls */}
        <FadeInSection>
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-[#0d1228]/85 p-1 rounded-full border border-white/8">
              <button
                onClick={() => setActiveTab("voice")}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeTab === "voice"
                    ? "bg-[#0060ee] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_0_1px_rgba(0,102,255,0.45),0_4px_14px_rgba(0,102,255,0.3)]"
                    : "text-white/45 hover:text-white/80"
                }`}
              >
                AI Voice Agents
              </button>
              <button
                onClick={() => setActiveTab("ops")}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeTab === "ops"
                    ? "bg-[#0060ee] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_0_1px_rgba(0,102,255,0.45),0_4px_14px_rgba(0,102,255,0.3)]"
                    : "text-white/45 hover:text-white/80"
                }`}
              >
                Backend Workflow & Ops
              </button>
              <button
                onClick={() => setActiveTab("sales")}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeTab === "sales"
                    ? "bg-[#0060ee] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_0_1px_rgba(0,102,255,0.45),0_4px_14px_rgba(0,102,255,0.3)]"
                    : "text-white/45 hover:text-white/80"
                }`}
              >
                AI Lead Gen & Sales Outbound
              </button>
            </div>
          </div>
        </FadeInSection>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Sliders Side */}
          <div className="lg:col-span-7 p-8 rounded-2xl border border-white/8 bg-white/[0.02] flex flex-col justify-center gap-8 min-h-[420px]">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-[#0066FF]" />
              Operational Parameters
            </h3>

            {activeTab === "voice" && (
              <>
                {/* Slider 1 */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70 font-medium">Monthly Support & Inbound Calls</span>
                    <span className="text-[#38bdf8] font-bold font-mono">{calls.toLocaleString()} calls</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={calls}
                    onChange={(e) => setCalls(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#0066ff]"
                  />
                  <div className="flex justify-between text-[10px] text-white/30 font-mono">
                    <span>100</span>
                    <span>10,000</span>
                  </div>
                </div>

                {/* Slider 2 */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70 font-medium">Legacy Live Agent Cost / Call</span>
                    <span className="text-[#38bdf8] font-bold font-mono">${costPerCall} / call</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    step="1"
                    value={costPerCall}
                    onChange={(e) => setCostPerCall(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#0066ff]"
                  />
                  <div className="flex justify-between text-[10px] text-white/30 font-mono">
                    <span>$2</span>
                    <span>$30</span>
                  </div>
                </div>
              </>
            )}

            {activeTab === "ops" && (
              <>
                {/* Slider 1 */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70 font-medium">Manual Tasks Performed / Month</span>
                    <span className="text-[#38bdf8] font-bold font-mono">{tasks.toLocaleString()} tasks</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={tasks}
                    onChange={(e) => setTasks(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#0066ff]"
                  />
                  <div className="flex justify-between text-[10px] text-white/30 font-mono">
                    <span>500</span>
                    <span>50,000</span>
                  </div>
                </div>

                {/* Slider 2 */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70 font-medium">Avg Time Spent Per Task</span>
                    <span className="text-[#38bdf8] font-bold font-mono">{minsPerTask} minutes</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={minsPerTask}
                    onChange={(e) => setMinsPerTask(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#0066ff]"
                  />
                  <div className="flex justify-between text-[10px] text-white/30 font-mono">
                    <span>1 min</span>
                    <span>30 mins</span>
                  </div>
                </div>

                {/* Slider 3 */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70 font-medium">Staff Hourly Wage Rate</span>
                    <span className="text-[#38bdf8] font-bold font-mono">${wageRate} / hour</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="100"
                    step="5"
                    value={wageRate}
                    onChange={(e) => setWageRate(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#0066ff]"
                  />
                  <div className="flex justify-between text-[10px] text-white/30 font-mono">
                    <span>$15</span>
                    <span>$100</span>
                  </div>
                </div>
              </>
            )}

            {activeTab === "sales" && (
              <>
                {/* Slider 1 */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70 font-medium">Monthly Inbound Sales Leads</span>
                    <span className="text-[#38bdf8] font-bold font-mono">{leads.toLocaleString()} leads</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="100"
                    value={leads}
                    onChange={(e) => setLeads(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#0066ff]"
                  />
                  <div className="flex justify-between text-[10px] text-white/30 font-mono">
                    <span>100</span>
                    <span>5,000</span>
                  </div>
                </div>

                {/* Slider 2 */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70 font-medium">Average Client Deal Value</span>
                    <span className="text-[#38bdf8] font-bold font-mono">${leadValue.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    step="50"
                    value={leadValue}
                    onChange={(e) => setLeadValue(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#0066ff]"
                  />
                  <div className="flex justify-between text-[10px] text-white/30 font-mono">
                    <span>$50</span>
                    <span>$2,000</span>
                  </div>
                </div>

                {/* Slider 3 */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70 font-medium">Current Manual Follow-up Delay</span>
                    <span className="text-[#38bdf8] font-bold font-mono">{delay} minutes</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="120"
                    step="5"
                    value={delay}
                    onChange={(e) => setDelay(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#0066ff]"
                  />
                  <div className="flex justify-between text-[10px] text-white/30 font-mono">
                    <span>5 mins</span>
                    <span>120 mins</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Results Display Side */}
          <div className="lg:col-span-5 p-8 rounded-2xl border border-[#0066ff]/20 bg-gradient-to-br from-[#0d172e]/80 to-[#070913]/90 flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(0,102,255,0.08)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,102,255,0.15),transparent_60%)] pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#38bdf8] uppercase">{labelText}</span>
                <div className="text-4xl md:text-5xl font-extrabold text-white mt-1.5 font-sans tracking-tight drop-shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                  ${annualSavings.toLocaleString()}
                </div>
                <div className="text-white/40 text-xs mt-1">{subtitle}</div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] font-mono text-white/30 uppercase">Hours Reclaimed</div>
                  <div className="text-lg font-bold text-white mt-0.5">{annualHoursSaved.toLocaleString()} hrs/yr</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] font-mono text-white/30 uppercase">Efficiency Boost</div>
                  <div className="text-lg font-bold text-green-400 mt-0.5">{boostMetric}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0066ff]/5 border border-[#38bdf8]/15 space-y-2">
                <div className="text-[10px] font-bold text-[#38bdf8] uppercase tracking-wide">Recommended Solution</div>
                <p className="text-xs text-white/70 leading-relaxed">
                  {recommendation}
                </p>
              </div>
            </div>

            <div className="relative z-10 pt-6">
              <Link href="/contact">
                <Button className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white py-6 rounded-xl font-semibold text-sm transition-all shadow-[0_0_28px_rgba(0,102,255,0.25)] flex items-center justify-center gap-2 border border-transparent">
                  Unlock This Automation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
