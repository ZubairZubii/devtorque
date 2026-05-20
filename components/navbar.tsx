"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"
import { Magnetic } from "@/components/magnetic"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 rounded-full transition-all duration-400 ${
          isScrolled
            ? "bg-[#080c28]/92 backdrop-blur-2xl border border-white/[0.13] shadow-[0_0_0_1px_rgba(77,159,255,0.08),0_8px_40px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.07)] py-2.5"
            : "bg-[#0b1040]/72 backdrop-blur-xl border border-white/[0.10] shadow-[0_0_0_1px_rgba(77,159,255,0.06),0_4px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.05)] py-3"
        }`}
      >
        <div className="px-5 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/12 group-hover:border-[#38bdf8]/40 transition-colors">
              <Image src="/images/devtorque-logo.jpg" alt="DevTorque" fill className="object-cover" />
            </div>
            <span className="text-base font-bold tracking-tight text-white group-hover:text-[#38bdf8] transition-colors">
              DevTorque
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all duration-200 rounded-lg ${
                  pathname === link.href
                    ? "text-white"
                    : "text-white/45 hover:text-white/85 hover:bg-white/[0.04]"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-gradient-to-r from-[#4d9fff] to-[#38bdf8] shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right side — CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Magnetic strength={0.25}>
              <Link href="/contact">
                <motion.div
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary btn-shimmer flex items-center gap-1.5 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.1em] cursor-pointer"
                >
                  Book a Call
                  <ArrowRight className="w-3 h-3" />
                </motion.div>
              </Link>
            </Magnetic>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[4.5rem] left-4 right-4 z-40 rounded-2xl bg-[#07091a]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden md:hidden"
          >
            {/* Top gradient line */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#4d9fff]/40 to-transparent" />
            <nav className="p-5 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      pathname === link.href
                        ? "text-white bg-white/6 border border-white/10"
                        : "text-white/55 hover:text-white hover:bg-white/4"
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                    )}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-3 border-t border-white/6 mt-2">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.div
                    whileTap={{ scale: 0.97 }}
                    className="btn-primary w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold"
                  >
                    Book a Free Call
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
