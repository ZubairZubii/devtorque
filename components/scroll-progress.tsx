"use client"
import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none"
      aria-hidden
    >
      <div className="h-full w-full bg-gradient-to-r from-[#0066FF] via-[#4d9fff] to-[#38bdf8] shadow-[0_0_8px_rgba(77,159,255,0.6)]" />
    </motion.div>
  )
}
