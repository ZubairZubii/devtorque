"use client"
import { motion } from "framer-motion"
import { Phone, PenTool, Rocket, HeartHandshake } from "lucide-react"
import { FadeInSection } from "@/components/ui/parallax"
import { WaveText } from "@/components/wave-text"

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "Discovery Call",
    desc: "We spend 30 minutes understanding your business, your biggest time-drains, and exactly where AI can unlock leverage. No pitch — just diagnosis.",
    color: "#4d9fff",
    detail: "Free · 30 minutes · No commitment",
  },
  {
    num: "02",
    icon: PenTool,
    title: "System Blueprint",
    desc: "We map out the exact automation architecture — which tools connect, what triggers what, and the measurable outcome at each stage. You approve before we write a single line.",
    color: "#a78bfa",
    detail: "Delivered in 48 hours",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Build & Launch",
    desc: "We build, test, and deploy. You stay informed at every milestone. Most systems go live in 2–4 weeks. Nothing goes to production without your sign-off.",
    color: "#38bdf8",
    detail: "2–4 weeks average delivery",
  },
  {
    num: "04",
    icon: HeartHandshake,
    title: "Support & Scale",
    desc: "We monitor, optimise, and expand your automation as your business grows. You get a dedicated contact — not a helpdesk ticket number.",
    color: "#34d399",
    detail: "Ongoing partnership",
  },
]

export function HowWeWork() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(0,40,120,0.08),transparent)] pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="inline-block text-[#4d9fff] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full border border-[#4d9fff]/20 bg-[#4d9fff]/6">
              Our Process
            </span>
            <WaveText as="h2" className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              How We Work
            </WaveText>
            <p className="text-sm text-white/45 max-w-lg mx-auto leading-relaxed">
              From first call to live system — a clear, no-surprise process that keeps you in control at every step.
            </p>
          </div>
        </FadeInSection>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[3.4rem] left-[12.5%] right-[12.5%] h-px" style={{ background: "rgba(77,159,255,0.1)" }}>
            <motion.div
              className="h-full origin-left"
              style={{ background: "linear-gradient(90deg, #4d9fff, #a78bfa, #38bdf8, #34d399)" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Icon circle */}
                <div className="flex justify-center lg:justify-start mb-5">
                  <div
                    className="relative w-14 h-14 rounded-full flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${step.color}15`,
                      border: `2px solid ${step.color}40`,
                      boxShadow: `0 0 0 6px ${step.color}08`,
                    }}
                  >
                    <step.icon className="w-5 h-5" style={{ color: step.color }} />
                    <span
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold"
                      style={{ background: step.color, color: "#07091a" }}
                    >
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Content card */}
                <div
                  className="p-5 rounded-2xl h-full transition-all duration-300 group-hover:border-white/12"
                  style={{
                    background: "linear-gradient(145deg, rgba(13,18,40,0.8) 0%, rgba(7,9,26,0.9) 100%)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                >
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">{step.title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed mb-4">{step.desc}</p>
                  <div
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                    style={{ color: step.color, background: `${step.color}12`, border: `1px solid ${step.color}25` }}
                  >
                    <span className="w-1 h-1 rounded-full" style={{ background: step.color }} />
                    {step.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
