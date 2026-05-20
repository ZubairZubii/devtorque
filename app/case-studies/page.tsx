import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeInSection } from "@/components/ui/parallax"
import { WaveText } from "@/components/wave-text"

const cases = [
  {
    id: "ecom-automation",
    tag: "E-Commerce",
    color: "#f472b6",
    client: "DTC Fashion Brand",
    location: "London, UK",
    headline: "From £2k to £11k/month in recovered revenue — in 6 weeks",
    challenge: "A 7-figure DTC brand was manually sending abandoned cart emails and had no post-purchase follow-up sequence. Their 3-person ops team was overwhelmed, and leads were cold before anyone responded.",
    solution: "We built a fully automated multi-step email + SMS sequence triggered by cart abandonment, purchase, and 30-day inactivity. AI personalization pulled product names and browsing history into every message, making each one feel handwritten.",
    results: [
      { metric: "£11k/mo", label: "Recovered revenue (was £2k)" },
      { metric: "23%",     label: "Cart recovery rate (was 8%)" },
      { metric: "0 hrs",   label: "Team time on follow-ups" },
    ],
    stack: ["GoHighLevel", "Make.com", "OpenAI", "Klaviyo"],
    timeline: "6 weeks",
  },
  {
    id: "real-estate-ai",
    tag: "Real Estate",
    color: "#34d399",
    client: "Property Investment Agency",
    location: "Dubai, UAE",
    headline: "Lead response time: 4 hours → 90 seconds. Close rate up 28%.",
    challenge: "A fast-growing real estate agency in Dubai was losing warm leads because agents couldn't respond fast enough. At peak hours, leads waited 3–5 hours. Competitors were responding in minutes.",
    solution: "We deployed an AI voice + SMS qualification agent that responded to every inbound lead in under 90 seconds, asked qualifying questions, and booked appointments directly into agent calendars — no human involvement required.",
    results: [
      { metric: "90s",  label: "Average lead response time" },
      { metric: "+28%", label: "Deals closed vs. prior quarter" },
      { metric: "40hrs",label: "Agent time saved per week" },
    ],
    stack: ["Vapi", "n8n", "Google Calendar", "HubSpot"],
    timeline: "4 weeks",
  },
  {
    id: "saas-onboarding",
    tag: "SaaS",
    color: "#a78bfa",
    client: "B2B SaaS Platform",
    location: "Bangalore, India",
    headline: "Enterprise onboarding cut from 12 days to 3. Support tickets down 60%.",
    challenge: "A growing B2B SaaS company was spending 2 weeks manually onboarding each enterprise client — 6 different tools, multiple handoffs, constant status emails. Support was overwhelmed with basic setup questions.",
    solution: "We redesigned the entire onboarding pipeline: auto-provisioning, guided in-app setup sequences, automated check-in emails at each milestone, and an AI support bot handling 80% of setup queries before they became tickets.",
    results: [
      { metric: "3 days", label: "Onboarding time (was 12 days)" },
      { metric: "−60%",   label: "Support tickets from new users" },
      { metric: "4×",     label: "Onboarding capacity, same team" },
    ],
    stack: ["Next.js", "Node.js", "LangChain", "PostgreSQL", "Intercom"],
    timeline: "5 weeks",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="relative pt-24">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,55,160,0.18),transparent_70%)]" />
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="container mx-auto px-6 relative text-center">
          <FadeInSection>
            <span className="inline-block text-[#38bdf8] text-[11px] font-bold uppercase tracking-[0.2em] mb-5 px-4 py-1.5 rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/6">
              Proven Results
            </span>
            <WaveText as="h1" className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight">
              Case Studies
            </WaveText>
            <p className="text-base text-white/45 max-w-xl mx-auto leading-relaxed">
              Real projects, real numbers. Here&apos;s exactly what we built and what happened after.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Cases */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="space-y-10 max-w-5xl mx-auto">
            {cases.map((c) => (
              <FadeInSection key={c.id}>
                <div
                  className="relative rounded-3xl overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, rgba(13,18,40,0.92) 0%, rgba(7,9,26,0.97) 100%)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                >
                  <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${c.color}cc, ${c.color}22)` }} />

                  <div className="p-7 md:p-10">
                    {/* Tag row */}
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span
                        className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.12em]"
                        style={{ color: c.color, background: `${c.color}15`, border: `1px solid ${c.color}28` }}
                      >
                        {c.tag}
                      </span>
                      <span className="text-white/30 text-xs">{c.client} · {c.location}</span>
                      <span className="ml-auto text-[10px] text-white/25 font-medium">Delivered in {c.timeline}</span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-7 leading-snug">{c.headline}</h2>

                    {/* Results */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {c.results.map((r) => (
                        <div
                          key={r.label}
                          className="px-4 py-3 rounded-xl"
                          style={{ background: `${c.color}0e`, border: `1px solid ${c.color}22` }}
                        >
                          <div className="text-xl font-extrabold leading-none mb-1" style={{ color: c.color }}>{r.metric}</div>
                          <div className="text-white/40 text-[11px]">{r.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Challenge + Solution */}
                    <div className="grid md:grid-cols-2 gap-6 mb-7">
                      <div>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/28 mb-2.5">The Challenge</h3>
                        <p className="text-white/52 text-sm leading-relaxed">{c.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/28 mb-2.5">Our Solution</h3>
                        <p className="text-white/52 text-sm leading-relaxed">{c.solution}</p>
                      </div>
                    </div>

                    {/* Stack */}
                    <div className="flex flex-wrap items-center gap-2 pt-5 border-t border-white/[0.06]">
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/22 mr-1">Tech used:</span>
                      {c.stack.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-[10px] font-semibold text-white/45 bg-white/[0.04] border border-white/8"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <p className="text-white/38 text-sm mb-5">Want results like these for your business?</p>
            <Link href="/contact">
              <div className="btn-primary btn-shimmer inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-[0.1em]">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <p className="text-white/22 text-[11px] mt-3">No commitment · Free 30-min call · Response within 2 hours</p>
          </div>
        </div>
      </section>
    </div>
  )
}
