"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 12 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-[150] w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(7,9,26,0.9)",
            border: "1px solid rgba(77,159,255,0.3)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4), 0 0 14px rgba(77,159,255,0.1)",
            backdropFilter: "blur(12px)",
          }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 text-[#4d9fff]" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
