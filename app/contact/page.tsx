"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Script from "next/script"
import { Mail, MessageSquare, Globe, Phone, ArrowRight, ExternalLink } from "lucide-react"
import { WaveText } from "@/components/wave-text"
import { FadeInSection } from "@/components/ui/parallax"

const contactInfo = [
  {
    Icon: Mail,
    label: "Email",
    value: "devtorque.ai@gmail.com",
    href: "mailto:devtorque.ai@gmail.com",
  },
  {
    Icon: MessageSquare,
    label: "Chat",
    value: "Live Support Available",
    href: "#",
  },
  {
    Icon: Globe,
    label: "Location",
    value: "Available Globally",
    href: "#",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+92 324 498 3583",
    href: "tel:+923244983583",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", company: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    const initCalendly = () => {
      // @ts-expect-error calendly global
      if (typeof window !== "undefined" && window.Calendly && typeof window.Calendly.initInlineWidget === "function") {
        const container = document.querySelector('.calendly-inline-widget')
        if (container) {
          // Clear container to avoid duplicate widgets
          container.innerHTML = ""
          // @ts-expect-error calendly global
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/devtorque-ai/30min',
            parentElement: container,
          });
        }
      }
    }

    // Try immediately
    initCalendly()

    const handleScriptLoad = () => {
      initCalendly()
    }

    document.addEventListener('calendly-loaded', handleScriptLoad)

    // Fallback interval to ensure it initializes when script is loaded async
    const interval = setInterval(() => {
      // @ts-expect-error calendly global
      if (typeof window !== "undefined" && window.Calendly) {
        initCalendly()
        clearInterval(interval)
      }
    }, 500)

    // Ensure it triggers after navigation animation completes
    const timeout = setTimeout(initCalendly, 1000)

    return () => {
      document.removeEventListener('calendly-loaded', handleScriptLoad)
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="min-h-screen pt-32 pb-0">
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="afterInteractive" 
        onLoad={() => document.dispatchEvent(new Event('calendly-loaded'))}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-24 overflow-hidden mb-14">
        {/* Multi-layer background to match Home page */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_0%,rgba(0,55,160,0.20),transparent_72%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_30%_at_18%_0%,rgba(70,35,160,0.09),transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-30 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-3/5 bg-gradient-to-b from-[#07091a]/80 via-[#07091a]/40 to-transparent pointer-events-none" />

        <div className="container max-w-3xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/10 text-xs font-bold tracking-[0.2em] uppercase text-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.15)]">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1] drop-shadow-md">
              Let's Build Something <br />
              <span className="bg-gradient-to-r from-[#4d9fff] to-[#38bdf8] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(56,189,248,0.2)]">Amazing</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto leading-relaxed">
              Whether you have a project in mind or just want to explore options, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FORM + CONTACT INFO ──────────────────────────────────── */}
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-20">
        {/* Left: Form */}
        <FadeInSection>
          <div className="p-7 rounded-2xl border border-white/8 bg-white/[0.03]">
            <h2 className="text-xl font-bold text-white mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: "name", label: "Your Name", type: "text", placeholder: "Alex Mercer" },
                { name: "email", label: "Email Address", type: "email", placeholder: "alex@company.com" },
                { name: "company", label: "Company Name", type: "text", placeholder: "Your Company" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs font-semibold uppercase tracking-[1px] text-white/45 mb-1.5">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    required={field.name !== "company"}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/8 text-white text-sm placeholder-white/25 focus:border-[#4d9fff]/40 focus:bg-white/[0.06] transition-all outline-none"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-semibold uppercase tracking-[1px] text-white/45 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/8 text-white text-sm placeholder-white/25 focus:border-[#4d9fff]/40 focus:bg-white/[0.06] transition-all outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full py-4 disabled:opacity-50 text-white font-bold text-sm uppercase tracking-[2px]"
              >
                {isSubmitting ? "Sending…" : "Send Message"}
              </motion.button>

              {submitStatus === "success" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-[#34d399] p-3 rounded-lg bg-[#34d399]/10 border border-[#34d399]/20">
                  ✓ Message sent! We&apos;ll get back to you soon.
                </motion.p>
              )}
              {submitStatus === "error" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-red-400 p-3 rounded-lg bg-red-500/10 border border-red-400/20">
                  ✗ Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </div>
        </FadeInSection>

        {/* Right: Contact info */}
        <FadeInSection delay={0.1}>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-6">Contact Information</h2>

            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-center gap-5 p-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent hover:from-white/[0.06] hover:border-[#38bdf8]/30 transition-all duration-300 group shadow-sm hover:shadow-[0_8px_30px_rgba(0,212,255,0.12)]"
              >
                <div className="w-12 h-12 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center flex-shrink-0 group-hover:border-[#38bdf8]/40 group-hover:bg-[#38bdf8]/10 transition-colors">
                  <info.Icon className="w-5 h-5 text-[#4d9fff] group-hover:text-[#38bdf8] transition-colors" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#4d9fff] mb-1">{info.label}</div>
                  <div className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{info.value}</div>
                </div>
              </a>
            ))}

            {/* Quick CTA */}
            <div className="mt-8 p-8 rounded-3xl border border-[#38bdf8]/20 bg-gradient-to-r from-[#0066FF]/10 to-[#38bdf8]/10 shadow-[0_0_20px_rgba(0,102,255,0.05)]">
              <div className="text-base font-bold text-white mb-2">Prefer to jump straight in?</div>
              <p className="text-sm text-white/60 mb-5 leading-relaxed">
                Book a free 30-minute consultation directly from the calendar below.
              </p>
              <div className="flex items-center gap-3 text-[#38bdf8] text-sm font-bold uppercase tracking-wider">
                <ArrowRight className="w-4 h-4" />
                Scroll down for the booking calendar
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* ── CALENDLY EMBED — FULL WIDTH ─────────────────────────────── */}
      <section className="border-t border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_80%,rgba(0,55,160,0.10),transparent)] pointer-events-none" />

        <div className="py-14">
          {/* Header */}
          <FadeInSection>
            <div className="text-center mb-8 px-6">
              <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#38bdf8] mb-3">
                ✦ Free 30-Minute Strategy Call ✦
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                Book Your{" "}
                <span style={{ background: "linear-gradient(135deg,#4d9fff,#38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Free Consultation
                </span>
              </h2>
              <p className="text-sm text-white/40 max-w-sm mx-auto">
                Pick a time that works — no commitment required.
              </p>
            </div>
          </FadeInSection>

          {/*
            max-w-6xl (1152px) with NO extra px padding → iframe = 1152px wide.
            Calendly's two-column breakpoint is ~1100px, so 1152px triggers it.
            height: 1000px covers both panels fully with no internal scroll.
          */}
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden bg-white shadow-[0_0_80px_rgba(0,80,200,0.14)]">
              <div
                className="calendly-inline-widget w-full"
                data-url="https://calendly.com/devtorque-ai/30min"
                style={{ minWidth: "320px", height: "1000px" }}
              />
            </div>
          </div>

          <div className="flex justify-end px-6 mt-3">
            <a href="https://calendly.com/devtorque-ai/30min" target="_blank" rel="noopener noreferrer"
              className="text-[11px] text-white/25 hover:text-white/50 flex items-center gap-1 transition-colors">
              <ExternalLink className="w-3 h-3" /> Open in new tab
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <FadeInSection>
          <div className="text-center mb-10">
            <WaveText as="h2" className="text-2xl md:text-3xl font-bold text-white mb-3">
              Frequently Asked Questions
            </WaveText>
            <p className="text-sm text-white/38">Quick answers to common questions</p>
          </div>
        </FadeInSection>

        <div className="space-y-3">
          {[
            { q: "What is your typical project timeline?", a: "Most projects take 4–12 weeks depending on scope. We provide a detailed timeline during the discovery phase." },
            { q: "Do you offer ongoing support?", a: "Yes! We provide 24/7 monitoring, regular updates, and dedicated support packages for all our clients." },
            { q: "What if I have budget constraints?", a: "We work with businesses of all sizes. Let's discuss your budget and find the best solution for you." },
            { q: "Can you work with my existing tech stack?", a: "Absolutely. We integrate with virtually any technology and can work within your existing infrastructure." },
          ].map((item, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-5 rounded-xl border border-white/8 bg-white/[0.025] hover:border-white/14 transition-all cursor-pointer"
            >
              <summary className="font-semibold text-sm text-white flex items-center justify-between list-none">
                {item.q}
                <span className="text-white/35 group-open:rotate-180 transition-transform ml-4 flex-shrink-0">›</span>
              </summary>
              <p className="text-white/45 mt-3 text-sm leading-relaxed">{item.a}</p>
            </motion.details>
          ))}
        </div>
      </section>
    </div>
  )
}
