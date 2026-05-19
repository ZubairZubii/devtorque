"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Lightbulb, Trophy, Cpu, Handshake, AlertTriangle, TrendingUp, CheckCircle, RefreshCw, Activity } from "lucide-react"
import { WaveText } from "@/components/wave-text"
import { FadeInSection } from "@/components/ui/parallax"
import { Button } from "@/components/ui/button"

const timeline = [
  { year: "2022", title: "Founded DevTorque", desc: "Started with a vision to automate businesses through AI and intelligent systems." },
  { year: "2023", title: "First 50 Clients", desc: "Scaled to serve enterprises across multiple industries worldwide." },
  { year: "2024", title: "AI Systems Launch", desc: "Released our voice agent platform and full-stack automation suite." },
  { year: "2025", title: "Global Expansion", desc: "Expanded operations to serve international clients across 15+ countries." },
]

const values = [
  { title: "Innovation First", desc: "We push boundaries with cutting-edge AI and automation solutions.", icon: Lightbulb, color: "#4d9fff" },
  { title: "Client Success", desc: "Your growth is our success metric — we measure ourselves by your outcomes.", icon: Trophy, color: "#4d9fff" },
  { title: "Technical Excellence", desc: "We build scalable, reliable systems engineered to last.", icon: Cpu, color: "#4d9fff" },
  { title: "Transparent Partnership", desc: "Clear communication and honest collaboration on every project.", icon: Handshake, color: "#4d9fff" },
]

export function BusinessFlowVisualizer() {
  const [mode, setMode] = useState<"manual" | "automated">("automated")

  return (
    <div className="relative w-full h-[520px] rounded-2xl border border-white/10 bg-[#070913] overflow-hidden flex flex-col justify-between p-6">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,102,255,0.04)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      {/* Mode Header Controls */}
      <div className="relative z-20 flex justify-between items-center border-b border-white/5 pb-4">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#4d9fff] uppercase">Interactive Visualizer</span>
          <h4 className="text-sm font-bold text-white mt-0.5">Business Process Flow</h4>
        </div>
        <div className="flex bg-[#0d1228]/85 p-1 rounded-full border border-white/8">
          <button
            onClick={() => setMode("manual")}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
              mode === "manual"
                ? "bg-red-500/15 text-red-400 border border-red-500/20 shadow-[0_0_12px_rgba(239,68,68,0.2)]"
                : "text-white/45 hover:text-white/80"
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 animate-pulse" />
            Manual Legacy
          </button>
          <button
            onClick={() => setMode("automated")}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
              mode === "automated"
                ? "bg-[#0060ee] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_0_1px_rgba(0,102,255,0.45),0_4px_14px_rgba(0,102,255,0.3)]"
                : "text-white/45 hover:text-white/80"
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            DevTorque AI
          </button>
        </div>
      </div>

      {/* Main visualization arena */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {mode === "manual" ? (
            <motion.div
              key="manual"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Red glow */}
              <div className="absolute w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

              {/* Central bottleneck icon */}
              <div className="relative flex flex-col items-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 rounded-full border border-red-500/20 bg-red-500/5 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.1)]"
                >
                  <RefreshCw className="w-6 h-6 text-red-400/70 animate-spin" style={{ animationDuration: "12s" }} />
                </motion.div>
                <span className="text-[9px] font-mono text-red-400/60 mt-3 tracking-wider">PROCESS BOTTLENECK</span>
              </div>

              {/* Scattered manual tags */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-6 p-3 bg-red-500/5 border border-red-500/10 rounded-xl text-left"
              >
                <div className="text-[10px] font-bold text-red-400 uppercase">Repetitive Data Entry</div>
                <p className="text-[9px] text-white/30 mt-1 max-w-[120px]">Manual copying between spreadsheets and CRM.</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute bottom-6 left-12 p-3 bg-red-500/5 border border-red-500/10 rounded-xl text-left"
              >
                <div className="text-[10px] font-bold text-red-400 uppercase">Siloed Data Systems</div>
                <p className="text-[9px] text-white/30 mt-1 max-w-[120px]">Fragmented tools requiring constant human sync.</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="absolute top-16 right-6 p-3 bg-red-500/5 border border-red-500/10 rounded-xl text-left"
              >
                <div className="text-[10px] font-bold text-red-400 uppercase">Delayed Lead Response</div>
                <p className="text-[9px] text-white/30 mt-1 max-w-[120px]">Leads wait 24-48 hours. Communication cold drops.</p>
              </motion.div>

              {/* Connecting static broken lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                <line x1="25%" y1="20%" x2="50%" y2="50%" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="30%" y1="80%" x2="50%" y2="50%" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="automated"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Blue/cyan glow */}
              <div className="absolute w-72 h-72 bg-[#0066ff]/5 rounded-full blur-3xl pointer-events-none" />

              {/* Central AI Engine */}
              <div className="relative flex flex-col items-center">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 rounded-full border border-[#38bdf8]/40 bg-[#0066ff]/10 flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.2)]"
                >
                  <Activity className="w-8 h-8 text-[#38bdf8] animate-pulse" />
                </motion.div>
                <span className="text-[9px] font-mono text-[#38bdf8] mt-3 tracking-widest font-bold">DEVTORQUE ENGINE</span>
              </div>

              {/* Automated flow tags */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-4 p-3 bg-[#0066ff]/5 border border-[#38bdf8]/20 rounded-xl text-left shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                <div className="text-[10px] font-bold text-[#38bdf8] flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  Automated LLM Workflows
                </div>
                <p className="text-[9px] text-white/45 mt-1 max-w-[140px]">AI-driven email processing, invoice parsing, and updates.</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="absolute bottom-4 left-8 p-3 bg-[#0066ff]/5 border border-[#38bdf8]/20 rounded-xl text-left shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                <div className="text-[10px] font-bold text-[#38bdf8] flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  Seamless CRM & API Sync
                </div>
                <p className="text-[9px] text-white/45 mt-1 max-w-[140px]">Zero manual transfer. Systems synchronize in real-time.</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute top-12 right-4 p-3 bg-[#0066ff]/5 border border-[#38bdf8]/20 rounded-xl text-left shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                <div className="text-[10px] font-bold text-[#38bdf8] flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  Instant Auto-Responder
                </div>
                <p className="text-[9px] text-white/45 mt-1 max-w-[140px]">Lead qualified & scheduled in under 60 seconds.</p>
              </motion.div>

              {/* Dynamic flowing lines using SVG path with strokeDasharray animation */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 120 80 Q 200 120, 260 210" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="6 4" className="animate-flow-dash" />
                <path d="M 140 380 Q 200 320, 260 270" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="6 4" className="animate-flow-dash-reverse" />
                <path d="M 440 100 Q 360 160, 310 230" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="6 4" className="animate-flow-dash" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Footer metric */}
      <div className="relative z-20 border-t border-white/5 pt-4 flex justify-between items-center text-[10px] font-mono">
        <span className="text-white/30">BUSINESS OUTCOME</span>
        <AnimatePresence mode="wait">
          {mode === "manual" ? (
            <motion.div
              key="manual-out"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="text-red-400 font-bold"
            >
              HIGH OPERATIONAL DRAG
            </motion.div>
          ) : (
            <motion.div
              key="auto-out"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="text-green-400 font-bold flex items-center gap-1.5"
            >
              +350% EFFICIENCY / 0 HOURS WASTED
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-32 overflow-hidden">
        {/* Multi-layer background to match Home page */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_0%,rgba(0,55,160,0.20),transparent_72%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_30%_at_18%_0%,rgba(70,35,160,0.09),transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-30 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-3/5 bg-gradient-to-b from-[#07091a]/80 via-[#07091a]/40 to-transparent pointer-events-none" />

        <div className="container max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/10 text-xs font-bold tracking-[0.2em] uppercase text-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.15)]">
              The DevTorque Mission
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8 drop-shadow-md">
              We Don't Just Write Code.<br />
              <span className="bg-gradient-to-r from-[#4d9fff] to-[#38bdf8] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                We Engineer Autonomy.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed mb-16">
              DevTorque was founded on a simple premise: human intelligence is too valuable to be wasted on repetitive tasks. We build elite AI systems, SaaS platforms, and automated pipelines that allow businesses to scale limitlessly without scaling headcount.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-24">
              <div className="text-left flex items-center gap-4 bg-white/[0.02] border border-white/8 rounded-2xl p-5 w-64 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:border-[#38bdf8]/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center shrink-0">
                  <Activity className="w-6 h-6 text-[#38bdf8]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-[10px] text-[#38bdf8] font-mono uppercase tracking-wider mt-1">Projects Delivered</div>
                </div>
              </div>
              <div className="text-left flex items-center gap-4 bg-white/[0.02] border border-white/8 rounded-2xl p-5 w-64 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:border-[#10B981]/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center shrink-0">
                  <Trophy className="w-6 h-6 text-[#10B981]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">10x</div>
                  <div className="text-[10px] text-[#34d399] font-mono uppercase tracking-wider mt-1">Average ROI</div>
                </div>
              </div>
              <div className="text-left flex items-center gap-4 bg-white/[0.02] border border-white/8 rounded-2xl p-5 w-64 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:border-[#8B5CF6]/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center shrink-0">
                  <Handshake className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-[10px] text-[#a78bfa] font-mono uppercase tracking-wider mt-1">Uptime SLA</div>
                </div>
              </div>
            </div>
            
            <div className="max-w-5xl mx-auto text-left shadow-[0_20px_60px_rgba(0,0,0,0.6)] rounded-2xl border border-white/10">
              <BusinessFlowVisualizer />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MANIFESTO ────────────────────────────────────────────── */}
      <section className="py-28 border-y border-white/5 bg-gradient-to-b from-[#070913] to-transparent mb-28">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="inline-block px-4 py-1.5 mb-5 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] uppercase text-white/70">
                Our Philosophy
              </span>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                Engineering <br /><span className="text-[#38bdf8]">Operational Excellence</span>
              </h2>
              <p className="text-white/40 text-base leading-relaxed mb-8">
                We are not a traditional agency. We don't just build "brochure websites" that sit statically on the internet. We are deep-tech engineers, AI specialists, and automation architects.
              </p>
              <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent my-8" />
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white/70 text-sm font-medium">
                  <CheckCircle className="text-[#10B981] w-5 h-5 shrink-0" />
                  <span>Obsessive focus on measurable ROI</span>
                </div>
                <div className="flex items-center gap-4 text-white/70 text-sm font-medium">
                  <CheckCircle className="text-[#10B981] w-5 h-5 shrink-0" />
                  <span>Enterprise-grade security standards</span>
                </div>
                <div className="flex items-center gap-4 text-white/70 text-sm font-medium">
                  <CheckCircle className="text-[#10B981] w-5 h-5 shrink-0" />
                  <span>Custom-coded infrastructure, never off-the-shelf</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 bg-white/[0.02] p-10 md:p-12 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,102,255,0.05)]">
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-[#0066FF]/20 flex items-center justify-center text-[#38bdf8] text-sm font-mono border border-[#0066FF]/30">01</span>
                    Eliminate the Mundane
                  </h3>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed ml-14">
                    Every manual data entry, every missed lead, and every delayed email response costs you money. We deploy autonomous agents that run these processes instantly, flawlessly, and without human intervention, effectively expanding your operational capacity without hiring.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center text-[#a78bfa] text-sm font-mono border border-[#8B5CF6]/30">02</span>
                    Scale with Systems, Not Sweat
                  </h3>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed ml-14">
                    Hiring more people to solve scaling issues creates overhead, management complexity, and margin degradation. Our SaaS platforms and CRM integrations create infinite scalability. When your processes are codified, handling 10 clients takes the exact same effort as handling 10,000.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-[#10B981]/20 flex items-center justify-center text-[#34d399] text-sm font-mono border border-[#10B981]/30">03</span>
                    Future-Proof Architecture
                  </h3>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed ml-14">
                    The AI landscape shifts weekly. We build modular, API-first architectures that allow us to swap out underlying models (OpenAI, Anthropic, open-source) as technology evolves, ensuring your business is never locked into obsolete tech.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────── */}
      <section className="container max-w-6xl mx-auto mb-28">
        <FadeInSection>
          <div className="mb-12">
            <WaveText as="h2" className="text-3xl md:text-4xl font-bold text-white mb-3">
              Our Journey
            </WaveText>
            <p className="text-white/40 text-sm">Milestones that shaped DevTorque</p>
          </div>
        </FadeInSection>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D4FF]/50 via-[#0066FF]/20 to-transparent" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <FadeInSection key={item.year} delay={i * 0.08}>
                <div className={`relative flex gap-8 md:gap-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} group/journey`}>
                  {/* Glowing Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#00D4FF] border-4 border-[#07091a] -translate-x-1/2 mt-5 shadow-[0_0_15px_#00D4FF] group-hover/journey:scale-125 transition-transform duration-300" />

                  {/* Card */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent hover:from-white/[0.06] hover:border-white/20 transition-all duration-300 group shadow-sm hover:shadow-[0_10px_30px_rgba(0,212,255,0.15)] cursor-default ${i % 2 === 0 ? "" : "md:ml-auto"}`}>
                    <div className="inline-block px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#00D4FF] text-xs font-bold tracking-widest mb-4">{item.year}</div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">{item.title}</h3>
                    <p className="text-white/50 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────── */}
      <section className="container max-w-6xl mx-auto mb-28">
        <FadeInSection>
          <div className="mb-12">
            <WaveText as="h2" className="text-3xl md:text-4xl font-bold text-white mb-3">
              Our Values
            </WaveText>
            <p className="text-white/40 text-sm">What drives every decision at DevTorque</p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-5">
          {values.map((value, i) => (
            <FadeInSection key={value.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group p-7 rounded-2xl border border-white/8 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-white/14 transition-all"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${value.color}14`, border: `1px solid ${value.color}24` }}
                >
                  <value.icon className="w-5 h-5" style={{ color: value.color }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ── TEAM SPOTLIGHT ───────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 mb-20 text-center">
        <FadeInSection>
          <div className="mb-12">
            <WaveText as="h2" className="text-3xl md:text-4xl font-bold text-white mb-3">
              Meet the Team
            </WaveText>
            <p className="text-white/40 text-sm">The minds building DevTorque</p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="flex justify-center">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group text-center max-w-sm mx-auto"
            >
              {/* Rectangular rounded card — professional headshot style */}
              <div className="relative w-64 h-80 mx-auto mb-6 rounded-2xl overflow-hidden border border-white/12 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(77,159,255,0.12)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/profile.png"
                  alt="Zubair Ali"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle bottom gradient for text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07091a]/50 via-transparent to-transparent" />
                {/* Top gradient accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4d9fff]/50 to-transparent" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">Zubair Ali</h3>
              <div className="text-sm font-semibold mb-4" style={{ background: "linear-gradient(135deg,#4d9fff,#38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Founder & CEO
              </div>
              <p className="text-white/45 text-sm leading-relaxed mb-5">
                AI systems architect and full-stack engineer with a passion for automating businesses at scale.
              </p>

              <div className="flex justify-center gap-2">
                {["AI Architecture", "Full-Stack", "Automation"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-3 py-1.5 rounded-lg text-white/50 bg-white/[0.05] border border-white/10 hover:text-white/80 hover:border-white/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </FadeInSection>
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
                  Ready to Transform Your Business?
                </h2>
                <p className="text-sm md:text-base text-white/50 mb-9 leading-relaxed">
                  Let's build intelligent systems that automate your workflow and drive growth. Book your free strategy session today.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="/contact">
                    <Button size="lg" className="btn-primary px-8 py-5 text-sm font-semibold group">
                      Get Started Today
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
