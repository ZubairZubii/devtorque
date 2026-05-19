"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/images/hero-voice.jpg",
    tag: "AI VOICE AGENTS",
    name: "Conversational AI",
    desc: "24/7 intelligent voice systems that handle customer calls, bookings, and support with human-like conversation.",
    color: "var(--dt-cyan)",
  },
  {
    id: 2,
    image: "/images/hero-saas.jpg",
    tag: "SAAS PLATFORMS",
    name: "Custom SaaS",
    desc: "Full-stack SaaS applications built for scale with modern architectures and beautiful interfaces.",
    color: "var(--dt-purple)",
  },
  {
    id: 3,
    image: "/images/hero-cloud.jpg",
    tag: "CLOUD & DEVOPS",
    name: "Infrastructure",
    desc: "Kubernetes, CI/CD pipelines, and cloud-native solutions on AWS, Azure, and GCP.",
    color: "var(--dt-orange)",
  },
  {
    id: 4,
    image: "/images/hero-automate.jpg",
    tag: "AUTOMATION",
    name: "Workflow Automation",
    desc: "Connect your tools and automate repetitive tasks with intelligent workflow orchestration.",
    color: "var(--dt-green)",
  },
]

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const getPosition = (index: number) => {
    const diff = index - activeIndex
    if (diff === 0) return "active"
    if (diff === 1 || diff === -(slides.length - 1)) return "next"
    if (diff === -1 || diff === slides.length - 1) return "prev"
    if (diff === 2 || diff === -(slides.length - 2)) return "far-next"
    if (diff === -2 || diff === slides.length - 2) return "far-prev"
    return "hidden"
  }

  const goNext = () => setActiveIndex((prev) => (prev + 1) % slides.length)
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,var(--dt-blue)_0%,transparent_70%)] opacity-10" />
      </div>

      {/* 3D Carousel */}
      <div className="absolute inset-0 z-10 flex items-center justify-center" style={{ perspective: "1400px" }}>
        <div className="relative w-full h-full">
          {slides.map((slide, index) => {
            const position = getPosition(index)
            return (
              <motion.div
                key={slide.id}
                className="absolute top-1/2 left-1/2 w-[min(700px,85vw)] rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                style={{
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  x: position === "active" ? "-50%" :
                     position === "prev" ? "calc(-50% - min(52vw, 480px))" :
                     position === "next" ? "calc(-50% + min(52vw, 480px))" :
                     position === "far-prev" ? "calc(-50% - min(80vw, 720px))" :
                     position === "far-next" ? "calc(-50% + min(80vw, 720px))" : "-50%",
                  y: "-50%",
                  z: position === "active" ? 0 :
                     position === "prev" || position === "next" ? -140 :
                     position === "far-prev" || position === "far-next" ? -280 : -400,
                  rotateY: position === "prev" ? 18 :
                           position === "next" ? -18 :
                           position === "far-prev" ? 30 :
                           position === "far-next" ? -30 : 0,
                  scale: position === "active" ? 1 :
                         position === "prev" || position === "next" ? 0.86 :
                         position === "far-prev" || position === "far-next" ? 0.7 : 0.5,
                  opacity: position === "active" ? 1 :
                           position === "prev" || position === "next" ? 0.65 :
                           position === "far-prev" || position === "far-next" ? 0.25 : 0,
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative h-[280px]">
                  <Image
                    src={slide.image}
                    alt={slide.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
                </div>
                <div className="p-5 bg-[var(--dt-surface-1)]">
                  <div
                    className="text-[10px] font-bold tracking-[2px] uppercase mb-1.5 flex items-center gap-2"
                    style={{ color: slide.color }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-blink" style={{ background: slide.color }} />
                    {slide.tag}
                  </div>
                  <h3 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-wide uppercase text-foreground mb-1.5">
                    {slide.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {slide.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Hero text overlay */}
      <div className="relative z-20 flex-1 flex flex-col justify-end pb-20 px-6 md:px-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[var(--dt-cyan)]/40 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--dt-cyan)] animate-blink" />
              <span className="text-[10px] font-bold tracking-[2px] uppercase text-[var(--dt-cyan)]">
                AI-Powered Agency
              </span>
            </div>
            <h1 className="font-[var(--font-bebas)] text-lg md:text-2xl tracking-[3px] uppercase text-muted-foreground leading-tight max-w-md">
              We build <strong className="text-foreground text-xl md:text-3xl block">intelligent software</strong>
              that drives growth
            </h1>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={goPrev}
              className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goNext}
              className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center backdrop-blur-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="flex gap-2 ml-4">
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveIndex(i)}
                  className={`w-12 h-9 rounded overflow-hidden border-2 transition-all ${
                    i === activeIndex ? "border-white opacity-100" : "border-transparent opacity-45"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.name}
                    width={48}
                    height={36}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 right-6 md:right-14 z-20 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] tracking-[3px] uppercase text-foreground [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  )
}
