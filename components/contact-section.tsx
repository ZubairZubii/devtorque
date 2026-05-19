"use client"

import { motion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-28 px-6"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[900px] h-[900px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,var(--dt-blue)_0%,transparent_65%)] opacity-10 rounded-full" />
        <div className="absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,var(--dt-cyan)_0%,transparent_65%)] opacity-5 rounded-full" />
      </div>

      <motion.div
        className="relative z-10 text-center max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-[10px] font-bold tracking-[3px] uppercase text-[var(--dt-cyan)] flex items-center justify-center gap-2.5 mb-6">
          <span className="w-5 h-px bg-[var(--dt-cyan)]" />
          GET IN TOUCH
          <span className="w-5 h-px bg-[var(--dt-cyan)]" />
        </p>

        <h2 className="font-[var(--font-bebas)] text-6xl md:text-8xl tracking-wide uppercase leading-[0.9] mb-6">
          {"Let's Build"}<br />
          <span className="text-gradient">Something Great</span>
        </h2>

        <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
          Ready to transform your business with intelligent software? We{"'"}d love to hear about your project.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@devtorque.com"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-bold tracking-wide uppercase text-sm rounded overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Mail className="w-4 h-4" />
              Start a Conversation
            </span>
            <div className="absolute inset-0 bg-[var(--dt-cyan)] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 font-semibold tracking-wide uppercase text-sm rounded transition-colors"
          >
            View Our Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
