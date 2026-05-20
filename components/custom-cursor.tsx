"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [state, setState] = useState<"default"|"pointer"|"clicking">("default")
  const [visible, setVisible] = useState(false)
  const [ready, setReady] = useState(false)

  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)
  const sx = useSpring(mx, { stiffness: 520, damping: 32, mass: 0.4 })
  const sy = useSpring(my, { stiffness: 520, damping: 32, mass: 0.4 })

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return
    setReady(true)
    const move = (e: MouseEvent) => {
      mx.set(e.clientX); my.set(e.clientY); setVisible(true)
      const el = e.target as HTMLElement
      const isPtr = getComputedStyle(el).cursor === "pointer" ||
        !!el.closest("a,button,[role='button'],input,textarea,select,summary")
      setState(s => s === "clicking" ? s : isPtr ? "pointer" : "default")
    }
    const down = () => setState("clicking")
    const up = () => { setState("default") }
    const leave = () => setVisible(false)
    const enter = () => setVisible(true)
    document.addEventListener("mousemove", move)
    document.addEventListener("mousedown", down)
    document.addEventListener("mouseup", up)
    document.addEventListener("mouseleave", leave)
    document.addEventListener("mouseenter", enter)
    return () => {
      document.removeEventListener("mousemove", move)
      document.removeEventListener("mousedown", down)
      document.removeEventListener("mouseup", up)
      document.removeEventListener("mouseleave", leave)
      document.removeEventListener("mouseenter", enter)
    }
  }, [mx, my])

  if (!ready) return null

  const ringSize = state === "clicking" ? 20 : state === "pointer" ? 52 : 38
  const ringBorder = state === "pointer" ? "rgba(56,189,248,0.75)" : "rgba(77,159,255,0.55)"
  const dotSize = state === "clicking" ? 8 : 4

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%", border: `1.5px solid ${ringBorder}` }}
        animate={{ width: ringSize, height: ringSize, opacity: visible ? 1 : 0 }}
        transition={{ width: { duration: 0.18 }, height: { duration: 0.18 }, opacity: { duration: 0.15 } }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#4d9fff]"
        style={{ x: mx, y: my, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: dotSize, height: dotSize, opacity: visible ? 1 : 0, background: state === "pointer" ? "#38bdf8" : "#4d9fff" }}
        transition={{ duration: 0.1 }}
      />
    </>
  )
}
