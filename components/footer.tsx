'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Send, Check } from "lucide-react"

const footerLinks = {
  services: [
    { label: "AI Voice Agents", href: "/services#voice-agents" },
    { label: "SaaS Development", href: "/services#saas" },
    { label: "CRM Systems", href: "/services#crm" },
    { label: "Cloud & DevOps", href: "/services#cloud" },
    { label: "Workflow Automation", href: "/services#automation" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy & Terms", href: "/privacy" },
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/software.projects.dev/?hl=it", icon: Instagram },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61577817483423", icon: Facebook },
    { label: "LinkedIn", href: "#", icon: Linkedin },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer className="relative bg-[#040614] overflow-hidden">
      {/* Gradient accent line at very top */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#4d9fff]/50 to-transparent" />
      <div className="h-px bg-gradient-to-r from-transparent via-[#38bdf8]/20 to-transparent mt-px" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Decorative gradient glow */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-tr from-[#0066FF]/8 via-[#8B5CF6]/4 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-[#38bdf8]/5 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="relative container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="md:col-span-3 lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-white/10 group-hover:border-[#00D4FF]/30 transition-colors">
                <Image
                  src="/images/devtorque-logo.jpg"
                  alt="DevTorque"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-[#00D4FF] transition-colors">
                DevTorque
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              We don&apos;t just build websites — we engineer intelligent systems, custom AI integrations, and SaaS solutions that automate operations.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', damping: 8, stiffness: 120, delay: i * 0.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/8 flex items-center justify-center text-white/50 hover:text-[#00D4FF] hover:bg-[#0066FF]/10 hover:border-[#0066FF]/40 hover:shadow-[0_0_15px_rgba(0,102,255,0.25)] transition-all"
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-semibold uppercase tracking-[2.5px] text-white/80">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-all duration-200 block py-0.5 hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-semibold uppercase tracking-[2.5px] text-white/80">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-all duration-200 block py-0.5 hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Updated (Newsletter) */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <h4 className="text-white text-xs font-semibold uppercase tracking-[2.5px] text-white/80">Stay Connected</h4>
            <p className="text-white/40 text-xs leading-relaxed">
              Subscribe to get automation insights and agency updates.
            </p>
            <form onSubmit={handleSubscribe} className="relative flex items-center mt-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@company.com"
                className="w-full px-4 py-2.5 pr-12 rounded-full bg-white/[0.04] border border-white/10 text-white text-xs placeholder-white/25 focus:border-[#4d9fff]/40 focus:bg-white/[0.06] transition-all outline-none"
              />
              <button
                type="submit"
                className="btn-shimmer absolute right-1 p-2 rounded-full bg-gradient-to-r from-[#0066FF] to-[#38bdf8] text-white shadow-[0_2px_8px_rgba(0,102,255,0.25)] hover:shadow-[0_3px_12px_rgba(0,102,255,0.4)] transition-all flex items-center justify-center"
                aria-label="Subscribe"
              >
                {subscribed ? (
                  <Check className="w-3 h-3" />
                ) : (
                  <Send className="w-3 h-3" />
                )}
              </button>
            </form>
            {subscribed && (
              <p className="text-[10px] text-emerald-400 font-medium">
                ✓ Successfully subscribed! Thank you.
              </p>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} DevTorque. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
              <span className="text-[10px] text-white/30 uppercase tracking-widest">Systems Online</span>
            </div>
            <div className="flex gap-5">
              <a href="tel:+923244983583" className="text-xs text-white/30 hover:text-white/70 transition-colors flex items-center gap-1.5">
                <Phone size={10} /> +92 324 498 3583
              </a>
              <a href="mailto:devtorque.ai@gmail.com" className="text-xs text-white/30 hover:text-white/70 transition-colors flex items-center gap-1.5">
                <Mail size={10} /> devtorque.ai@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
