"use client"
import { motion } from "framer-motion"
import { X, Check, Clock, AlertTriangle, TrendingDown, Zap, TrendingUp, Shield } from "lucide-react"
import { FadeInSection } from "@/components/ui/parallax"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const painPoints = [
  { icon: Clock,         text: "Hours wasted on manual data entry every single day" },
  { icon: AlertTriangle, text: "Leads fall through the cracks — no automated follow-up" },
  { icon: TrendingDown,  text: "Team doing work a computer should be handling" },
  { icon: AlertTriangle, text: "Reports built manually every week — slow and error-prone" },
  { icon: Clock,         text: "Customer queries sitting unanswered for hours" },
  { icon: TrendingDown,  text: "Growth limited by what your team can physically do" },
]

const solutions = [
  { icon: Zap,        text: "Automated workflows running 24/7 without human input" },
  { icon: Check,      text: "Every lead qualified and followed up within 90 seconds" },
  { icon: TrendingUp, text: "Your team focused on high-value work, not admin" },
  { icon: Check,      text: "Reports generated and delivered automatically every Monday" },
  { icon: Shield,     text: "AI handles 80% of customer queries instantly, around the clock" },
  { icon: TrendingUp, text: "Scale revenue without scaling your headcount" },
]

export function PainSolution() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,30,80,0.10),transparent)] pointer-events-none" />
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-14">
            <span className="inline-block text-[#f59e0b] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/6">
              The Reality Check
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Your Business Right Now vs.{" "}
              <span style={{ background: "linear-gradient(135deg,#4d9fff,#38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                After DevTorque
              </span>
            </h2>
            <p className="text-sm text-white/40 max-w-md mx-auto">Which side of this table describes your business today?</p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {/* Without */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, rgba(30,8,8,0.88) 0%, rgba(15,4,4,0.95) 100%)",
              border: "1px solid rgba(239,68,68,0.14)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg,transparent,rgba(239,68,68,0.5),transparent)" }} />
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-500/12 border border-red-500/22 flex items-center justify-center">
                <X className="w-4 h-4 text-red-400" />
              </div>
              <h3 className="text-sm font-bold text-red-400/85">Without DevTorque</h3>
            </div>
            <ul className="space-y-3.5">
              {painPoints.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-red-500/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <p.icon className="w-3 h-3 text-red-400/60" />
                  </div>
                  <span className="text-white/45 text-sm leading-snug">{p.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* With */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl p-6 relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, rgba(5,20,15,0.88) 0%, rgba(3,12,8,0.95) 100%)",
              border: "1px solid rgba(52,211,153,0.16)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg,transparent,rgba(52,211,153,0.5),transparent)" }} />
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-full bg-emerald-500/12 border border-emerald-500/22 flex items-center justify-center">
                <Check className="w-4 h-4 text-emerald-400" />
              </div>
              <h3 className="text-sm font-bold text-emerald-400/85">With DevTorque</h3>
            </div>
            <ul className="space-y-3.5">
              {solutions.map((s, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <s.icon className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span className="text-white/70 text-sm leading-snug">{s.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <FadeInSection>
          <div className="text-center mt-10">
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="btn-primary btn-shimmer inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-[0.1em]"
              >
                Start the Switch <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
            <p className="text-white/25 text-[11px] mt-3">Free 30-min call · No commitment · Response within 2 hours</p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
