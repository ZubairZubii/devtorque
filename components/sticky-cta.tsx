"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, X } from "lucide-react"
import Link from "next/link"

export function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (dismissed) return
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      setVisible(pct > 0.3)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [dismissed])

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ type: "spring", stiffness: 250, damping: 24 }}
          className="fixed bottom-0 left-0 right-0 z-[180] flex items-center justify-between px-5 py-3 md:px-10"
          style={{
            background: "linear-gradient(135deg, rgba(0,28,90,0.97) 0%, rgba(7,9,26,0.97) 100%)",
            borderTop: "1px solid rgba(77,159,255,0.16)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 -8px 40px rgba(0,0,0,0.5)",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4d9fff]/40 to-transparent" />

          <div className="flex items-center gap-3 flex-1 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse flex-shrink-0" />
            <p className="text-white/65 text-sm truncate hidden sm:block">
              <span className="text-white font-semibold">Still doing things manually?</span>
              {" "}Book a free 30-min automation audit.
            </p>
            <p className="text-white text-sm font-semibold sm:hidden">Book your free call</p>
          </div>

          <div className="flex items-center gap-2.5 flex-shrink-0 ml-4">
            <Link href="/contact" onClick={() => setDismissed(true)}>
              <motion.div
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="btn-primary btn-shimmer flex items-center gap-1.5 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.1em]"
              >
                Book a Call <ArrowRight className="w-3 h-3" />
              </motion.div>
            </Link>
            <button
              onClick={() => setDismissed(true)}
              className="p-1.5 text-white/25 hover:text-white/60 transition-colors rounded-lg hover:bg-white/[0.05]"
              aria-label="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
