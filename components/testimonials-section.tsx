"use client"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { FadeInSection } from "@/components/ui/parallax"
import { WaveText } from "@/components/wave-text"

const testimonials = [
  {
    name: "Hamza Malik",
    role: "Founder, Spark Digital",
    location: "Lahore, Pakistan",
    avatar: "HM",
    color: "#a78bfa",
    text: "We had 6 clients and a 3-person team drowning in manual reports every week. DevTorque built us an automated reporting pipeline — reports now go out every Monday at 8am without anyone touching them. Freed up nearly 2 full days a week for actual client work.",
    result: "2 days saved / week",
  },
  {
    name: "Emily Thornton",
    role: "Head of E-Commerce, Bloom & Co.",
    location: "London, UK",
    avatar: "ET",
    color: "#f472b6",
    text: "Our abandoned cart emails were being sent manually — embarrassing, I know. DevTorque built a full AI sequence with personalization. We went from recovering maybe £2k a month to over £11k. The payback on their fee was instant.",
    result: "£9k/mo revenue added",
  },
  {
    name: "Ravi Anand",
    role: "CTO, Paylane",
    location: "Bangalore, India",
    avatar: "RA",
    color: "#38bdf8",
    text: "Enterprise onboarding used to take our team 10–14 days per client. After DevTorque rebuilt the flow, it's 3 days. Support tickets from new users dropped by 60%. The system is rock solid — hasn't needed a single intervention in 4 months.",
    result: "80% faster onboarding",
  },
  {
    name: "Sarah Nowak",
    role: "Managing Director, Apex Properties",
    location: "Dubai, UAE",
    avatar: "SN",
    color: "#34d399",
    text: "In real estate, speed is everything. Leads used to wait 3–4 hours for a callback. The AI agent responds in under 90 seconds, qualifies them, and books directly into our calendar. We stopped losing deals we didn't even know we were losing.",
    result: "28% more deals closed",
  },
  {
    name: "Tom Bradley",
    role: "Principal, Bradley Consulting",
    location: "Melbourne, Australia",
    avatar: "TB",
    color: "#fbbf24",
    text: "I kept putting off automation because I thought it was only for big companies. Booked a call anyway. They built me a system for proposals, follow-ups, and invoicing in 3 weeks. I get back a full working day every single week now.",
    result: "1 full day reclaimed/week",
  },
  {
    name: "Amira Hassan",
    role: "Practice Manager, Noor Wellness Clinic",
    location: "Riyadh, Saudi Arabia",
    avatar: "AH",
    color: "#f87171",
    text: "No-shows were costing us 27% of appointments every month. The automated reminder and rescheduling system dropped that to under 9%. We didn't change anything else — we just stopped losing appointments we'd already booked.",
    result: "No-shows cut by 67%",
  },
]

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef(0)
  const scrollStart = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let animId: number
    const step = () => {
      if (!isPaused && !isDragging) {
        track.scrollLeft += 0.55
        if (track.scrollLeft >= track.scrollWidth / 2) track.scrollLeft = 0
      }
      animId = requestAnimationFrame(step)
    }
    animId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animId)
  }, [isPaused, isDragging])

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    dragStart.current = e.clientX
    scrollStart.current = trackRef.current?.scrollLeft ?? 0
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return
    trackRef.current.scrollLeft = scrollStart.current - (e.clientX - dragStart.current)
  }
  const onMouseUp = () => setIsDragging(false)

  const doubled = [...testimonials, ...testimonials]

  return (
    <section className="py-24 relative overflow-hidden bg-[#060810]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(0,50,150,0.10),transparent)] pointer-events-none" />

      <div className="container mx-auto px-6 mb-12">
        <FadeInSection>
          <div className="text-center">
            <span className="inline-block text-[#34d399] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full border border-[#34d399]/20 bg-[#34d399]/6">
              Client Results
            </span>
            <WaveText as="h2" className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Real Businesses, Real Outcomes
            </WaveText>
            <p className="text-sm text-white/45 max-w-lg mx-auto leading-relaxed">
              Every number below comes from an actual client. No stock photos, no invented metrics.
            </p>
          </div>
        </FadeInSection>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-hidden px-6 select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); setIsDragging(false) }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        {doubled.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[340px] md:w-[400px] p-6 rounded-2xl relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, rgba(13,18,40,0.92) 0%, rgba(7,9,26,0.97) 100%)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, ${t.color}bb, ${t.color}22)` }} />
            <Quote className="w-7 h-7 mb-4 opacity-20" style={{ color: t.color }} />
            <p className="text-white/65 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold mb-5"
              style={{ background: `${t.color}15`, border: `1px solid ${t.color}30`, color: t.color }}
            >
              ✦ {t.result}
            </div>
            <div className="border-t border-white/6 pt-4 flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{ background: `${t.color}20`, border: `1px solid ${t.color}35`, color: t.color }}
              >
                {t.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-white leading-none mb-0.5">{t.name}</div>
                <div className="text-[11px] text-white/40 truncate">{t.role}</div>
                <div className="text-[10px] text-white/30 mt-0.5">{t.location}</div>
              </div>
              <div className="flex gap-0.5 flex-shrink-0">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-[#fbbf24] text-[#fbbf24]" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-0 top-[30%] bottom-0 w-20 bg-gradient-to-r from-[#060810] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-[30%] bottom-0 w-20 bg-gradient-to-l from-[#060810] to-transparent pointer-events-none" />
    </section>
  )
}
