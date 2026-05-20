"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Home, Wrench, Users, Phone, Calendar, ArrowRight, X, Zap } from "lucide-react"
import Link from "next/link"

const commands = [
  {
    group: "Navigation",
    items: [
      { icon: Home,      label: "Home",         href: "/",        shortcut: "G H" },
      { icon: Wrench,    label: "Services",     href: "/services",shortcut: "G S" },
      { icon: Users,     label: "About Us",     href: "/about",   shortcut: "G A" },
      { icon: Phone,     label: "Contact",      href: "/contact", shortcut: "G C" },
    ],
  },
  {
    group: "Quick Actions",
    items: [
      { icon: Calendar,  label: "Book a Free Call",    href: "/contact",  shortcut: "B" },
      { icon: Zap,       label: "View All Services",   href: "/services", shortcut: "V S" },
      { icon: ArrowRight,label: "Get a Quote",         href: "/contact",  shortcut: "Q" },
    ],
  },
]

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault(); setOpen(o => !o); setQuery("")
      }
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 60)
  }, [open])

  const filtered = commands
    .map(g => ({ ...g, items: g.items.filter(item => !query || item.label.toLowerCase().includes(query.toLowerCase())) }))
    .filter(g => g.items.length > 0)

  return (
    <>
      {/* Trigger hint */}
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
        className="fixed bottom-6 right-6 z-[200] hidden md:flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] font-medium text-white/35 hover:text-white/65 transition-colors"
        style={{ background: "rgba(7,9,26,0.8)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}
      >
        <Search className="w-3 h-3" />
        Quick nav
        <span className="flex items-center gap-0.5 ml-0.5">
          <kbd className="px-1.5 py-0.5 rounded text-[9px] bg-white/[0.08] border border-white/12">⌘</kbd>
          <kbd className="px-1.5 py-0.5 rounded text-[9px] bg-white/[0.08] border border-white/12">K</kbd>
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -12 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[301] w-full max-w-lg px-4"
            >
              <div className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(7,9,26,0.97)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(77,159,255,0.08)",
                }}
              >
                <div className="h-px bg-gradient-to-r from-transparent via-[#4d9fff]/50 to-transparent" />
                <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/8">
                  <Search className="w-4 h-4 text-white/35 flex-shrink-0" />
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search pages or actions..."
                    className="flex-1 bg-transparent text-sm text-white placeholder-white/30 outline-none"
                  />
                  <button onClick={() => setOpen(false)} className="text-white/25 hover:text-white/55 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-2 max-h-72 overflow-y-auto">
                  {filtered.length === 0 ? (
                    <div className="py-8 text-center text-white/30 text-sm">No results for &ldquo;{query}&rdquo;</div>
                  ) : filtered.map(group => (
                    <div key={group.group} className="mb-2">
                      <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/25">{group.group}</div>
                      {group.items.map(item => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/65 hover:text-white hover:bg-white/[0.05] transition-all group"
                        >
                          <item.icon className="w-4 h-4 text-white/30 group-hover:text-[#4d9fff] transition-colors flex-shrink-0" />
                          <span className="flex-1">{item.label}</span>
                          <kbd className="px-2 py-0.5 rounded text-[10px] bg-white/[0.06] border border-white/10 text-white/30 font-mono">{item.shortcut}</kbd>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="px-4 py-2.5 border-t border-white/6 flex items-center gap-4 text-[10px] text-white/25">
                  <span className="flex items-center gap-1"><kbd className="px-1 rounded bg-white/[0.06] border border-white/10">↵</kbd> select</span>
                  <span className="flex items-center gap-1"><kbd className="px-1 rounded bg-white/[0.06] border border-white/10">↑↓</kbd> navigate</span>
                  <span className="flex items-center gap-1"><kbd className="px-1 rounded bg-white/[0.06] border border-white/10">esc</kbd> close</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
