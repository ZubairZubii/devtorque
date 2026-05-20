import Link from "next/link"
import { Home, Wrench, Phone, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#07091a] px-6">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,60,160,0.12),transparent)]" />

      {/* Big glowing 404 */}
      <div className="relative mb-6 select-none pointer-events-none">
        <span
          className="text-[clamp(120px,22vw,220px)] font-extrabold leading-none tracking-tighter"
          style={{
            background: "linear-gradient(135deg, rgba(77,159,255,0.12) 0%, rgba(56,189,248,0.06) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </span>
        {/* Glow layer */}
        <div
          className="absolute inset-0 flex items-center justify-center text-[clamp(120px,22vw,220px)] font-extrabold leading-none tracking-tighter"
          style={{
            background: "linear-gradient(135deg, #4d9fff 0%, #38bdf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            opacity: 0.07,
            filter: "blur(22px)",
          }}
        >
          404
        </div>
      </div>

      <div className="relative z-10 text-center max-w-md mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">Page Not Found</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
          This page went off the grid
        </h1>
        <p className="text-white/40 text-sm leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or was moved.
          Let&apos;s get you back to something useful.
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-3 justify-center mb-10">
        {[
          { href: "/", icon: Home, label: "Go Home" },
          { href: "/services", icon: Wrench, label: "Services" },
          { href: "/contact", icon: Phone, label: "Contact Us" },
        ].map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white/60 hover:text-white transition-all hover:bg-white/[0.06]"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="flex items-center gap-2 text-[#4d9fff]/70 hover:text-[#4d9fff] text-sm transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to DevTorque
      </Link>
    </div>
  )
}
