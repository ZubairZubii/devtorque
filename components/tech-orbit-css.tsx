"use client"

import { motion } from "framer-motion"

const techs = [
  { name: "OpenAI GPT-4", cat: "ai" },
  { name: "LangChain",    cat: "ai" },
  { name: "Claude AI",    cat: "ai" },
  { name: "Pinecone",     cat: "ai" },
  { name: "React",        cat: "fe" },
  { name: "Next.js",      cat: "fe" },
  { name: "TypeScript",   cat: "fe" },
  { name: "TailwindCSS",  cat: "fe" },
  { name: "Node.js",      cat: "be" },
  { name: "Python",       cat: "be" },
  { name: "PostgreSQL",   cat: "be" },
  { name: "FastAPI",      cat: "be" },
  { name: "AWS",          cat: "cloud" },
  { name: "Docker",       cat: "cloud" },
  { name: "Kubernetes",   cat: "cloud" },
  { name: "Vercel",       cat: "cloud" },
  { name: "Redis",        cat: "be" },
  { name: "Terraform",    cat: "cloud" },
  { name: "Whisper AI",   cat: "ai" },
  { name: "MongoDB",      cat: "be" },
  { name: "Make.com",     cat: "auto" },
  { name: "Zapier",       cat: "auto" },
  { name: "n8n",          cat: "auto" },
  { name: "GHL (GoHighLevel)", cat: "auto" },
  { name: "Asana",        cat: "auto" },
  { name: "Softr",        cat: "auto" },
  { name: "Webflow",      cat: "auto" },
]

const catColor: Record<string, string> = {
  ai:    "#a78bfa",
  fe:    "#60a5fa",
  be:    "#34d399",
  cloud: "#fbbf24",
  auto:  "#f472b6",
}

const RADIUS = 185

// Fibonacci sphere distribution — natural, even spacing
function fibonacciSphere(i: number, n: number) {
  const phi = Math.acos(-1 + (2 * i) / n)
  const theta = Math.sqrt(n * Math.PI) * phi
  return {
    x: RADIUS * Math.cos(theta) * Math.sin(phi),
    y: RADIUS * Math.sin(theta) * Math.sin(phi),
    z: RADIUS * Math.cos(phi),
  }
}

export function TechOrbitCSS() {
  return (
    <div className="relative w-full h-[280px] xs:h-[340px] sm:h-[450px] flex items-center justify-center overflow-hidden">
      <div 
        className="relative select-none shrink-0 origin-center scale-[0.62] xs:scale-[0.78] sm:scale-100" 
        style={{ width: 420, height: 420, perspective: "900px" }}
      >
        {/* Center glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 130, height: 130, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,90,200,0.35) 0%, transparent 70%)",
              filter: "blur(22px)",
            }}
          />
        </div>

        {/* Rotating tech sphere */}
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          style={{
            transformStyle: "preserve-3d",
            position: "absolute",
            inset: 0,
          }}
        >
          {techs.map((tech, i) => {
            const raw = fibonacciSphere(i, techs.length)
            // Round to 4 dp so server & client produce identical strings → no hydration error
            const x = Math.round(raw.x * 1e4) / 1e4
            const y = Math.round(raw.y * 1e4) / 1e4
            const z = Math.round(raw.z * 1e4) / 1e4
            const color = catColor[tech.cat]
            return (
              <div
                key={tech.name}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: `translate3d(${x}px, ${y}px, ${z}px) translateX(-50%) translateY(-50%)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  animate={{ rotateY: -360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span
                    className="whitespace-nowrap px-2.5 py-1 rounded-lg text-[11px] font-semibold block"
                    style={{
                      color: `${color}cc`,
                      background: `${color}12`,
                      border: `1px solid ${color}22`,
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {tech.name}
                  </span>
                </motion.div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
