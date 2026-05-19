export function Ticker() {
  const items = [
    "AI Voice Agents",
    "SaaS Development",
    "Cloud Architecture",
    "ML Pipelines",
    "Automation",
    "DevOps",
    "Full-Stack Apps",
    "API Integration",
  ]

  return (
    <div className="border-y border-border overflow-hidden bg-[var(--dt-blue)]/5">
      <div className="flex animate-ticker">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-12 py-4 shrink-0 border-r border-border whitespace-nowrap font-[var(--font-bebas)] text-lg tracking-[2px] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="w-1 h-1 rounded-full bg-[var(--dt-blue)] shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
