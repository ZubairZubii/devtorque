"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const orbitServices = [
  { label: "AI Agents",      color: "#4d9fff", radius: 196, duration: 12 },
  { label: "Automation",     color: "#a78bfa", radius: 220, duration: 17 },
  { label: "SaaS Platforms", color: "#38bdf8", radius: 205, duration: 15 },
  { label: "CRM Systems",    color: "#34d399", radius: 212, duration: 19 },
  { label: "AI Chatbots",    color: "#fbbf24", radius: 200, duration: 13 },
]

const latitudes = [-55, -36, -18, 0, 18, 36, 55]

export function EarthGlobe() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"],
  })
  const tiltX = useTransform(scrollYProgress, [0, 1], [0, 18])

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center select-none"
      style={{ width: 480, height: 480 }}
    >
      {/* Outer atmospheric glow blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 380, height: 380, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,70,200,0.16) 0%, rgba(0,30,120,0.08) 55%, transparent 75%)",
          filter: "blur(24px)",
        }}
      />

      {/* Scroll-driven tilt on the globe body */}
      <motion.div
        style={{ rotateX: tiltX }}
        className="relative flex items-center justify-center"
      >
        {/* ── Globe sphere ── */}
        <div className="relative" style={{ width: 290, height: 290 }}>
          {/* Base — dark ocean gradient with vivid 3-D lighting */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 35% 28%, #1e6090 0%, #0d2d55 28%, #061220 55%, #020912 100%)",
              boxShadow: [
                "inset -58px -40px 90px rgba(0,0,0,0.94)",
                "inset 32px 26px 70px rgba(0,110,240,0.30)",
                "inset 0 0 0 1px rgba(60,150,255,0.18)",
                "0 0 70px rgba(0,80,220,0.30)",
                "0 0 130px rgba(0,55,170,0.14)",
              ].join(", "),
            }}
          />

          {/* Grid overlay clipped to sphere */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {/* Scrolling longitude stripes */}
            <div
              className="absolute inset-0 globe-longitude-grid"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(120,190,255,0.09) 0, rgba(120,190,255,0.09) 1px, transparent 1px, transparent 8.33%)",
              }}
            />
            {/* Static latitude lines */}
            {latitudes.map((pct) => (
              <div
                key={pct}
                className="absolute left-0 right-0"
                style={{ top: `${50 + pct}%`, height: 1, background: "rgba(120,190,255,0.10)" }}
              />
            ))}
          </div>

          {/* Atmosphere rim */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, transparent 47%, rgba(0,80,200,0.26) 59%, rgba(0,40,120,0.42) 68%, transparent 71%)",
            }}
          />
          {/* Highlight */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle at 30% 28%, rgba(140,195,255,0.10) 0%, transparent 42%)",
            }}
          />
        </div>

        {/* Decorative orbit rings (tilt with globe) */}
        {[
          { size: 348, opacity: 0.14, rotX: 74, rotZ: 0 },
          { size: 400, opacity: 0.08, rotX: 62, rotZ: 22 },
        ].map((ring, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              width: ring.size, height: ring.size,
              borderRadius: "50%",
              border: `1px solid rgba(60,140,255,${ring.opacity})`,
              transform: `rotateX(${ring.rotX}deg) rotateZ(${ring.rotZ}deg)`,
            }}
          />
        ))}
      </motion.div>

      {/* ── Orbiting service labels (outside tilt for stable text) ── */}
      {orbitServices.map((svc, i) => (
        <div
          key={svc.label}
          className="absolute pointer-events-none"
          style={{ top: "50%", left: "50%", width: 0, height: 0 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: svc.duration,
              repeat: Infinity,
              ease: "linear",
              delay: -(svc.duration * i) / orbitServices.length,
            }}
            style={{
              position: "absolute",
              width: svc.radius * 2,
              height: svc.radius * 2,
              top: -svc.radius,
              left: -svc.radius,
              borderRadius: "50%",
            }}
          >
            {/* Counter-rotate so label always faces camera */}
            <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)" }}>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: svc.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: -(svc.duration * i) / orbitServices.length,
                }}
              >
                <div
                  className="whitespace-nowrap px-3 py-1.5 rounded-full text-[11px] font-bold flex items-center gap-1.5 backdrop-blur-sm"
                  style={{
                    color: svc.color,
                    background: `${svc.color}1a`,
                    border: `1px solid ${svc.color}38`,
                    textShadow: `0 0 12px ${svc.color}80`,
                  }}
                >
                  <span className="orbit-dot w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: svc.color }} />
                  {svc.label}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
