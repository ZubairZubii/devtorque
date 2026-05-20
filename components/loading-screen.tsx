"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function LoadingScreen() {
  const [visible, setVisible] = useState(false)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem("dt_loaded")
    if (!seen) {
      setVisible(true)
      sessionStorage.setItem("dt_loaded", "1")
      const t1 = setTimeout(() => setLeaving(true), 1600)
      const t2 = setTimeout(() => setVisible(false), 2300)
      return () => { clearTimeout(t1); clearTimeout(t2) }
    }
  }, [])

  if (!visible) return null

  return (
    <AnimatePresence>
      {!leaving ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] bg-[#07091a] flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-14"
          >
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-white/12 shadow-[0_0_24px_rgba(77,159,255,0.2)]">
              <Image src="/images/devtorque-logo.jpg" alt="DevTorque" fill className="object-cover" />
            </div>
            <span className="text-[1.6rem] font-bold text-white tracking-tight">DevTorque</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-white/30 text-xs font-medium uppercase tracking-[0.3em] mb-16"
          >
            AI Systems & Automation
          </motion.p>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.04]">
            <motion.div
              className="h-full"
              style={{ background: "linear-gradient(90deg, #0066FF, #38bdf8)" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.55, ease: "linear" }}
              style={{ transformOrigin: "0%", background: "linear-gradient(90deg,#0066FF,#38bdf8)" }}
            />
          </div>
        </motion.div>
      ) : (
        <motion.div key="curtain" className="fixed inset-0 z-[9999] pointer-events-none">
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#07091a]"
            initial={{ y: 0 }} animate={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#07091a]"
            initial={{ y: 0 }} animate={{ y: "100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
