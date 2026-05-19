'use client'

import { motion } from "framer-motion"
import { useState } from "react"

interface WaveTextProps {
  children: string
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function WaveText({ children, className = "", as: Tag = "span" }: WaveTextProps) {
  const [hovered, setHovered] = useState(false)

  // Block-level elements should default to block display; inline elements to inline-block
  const isBlockTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'p', 'section'].includes(Tag as string)
  const defaultDisplay = className.includes("block") || className.includes("flex") || className.includes("inline") 
    ? "" 
    : (isBlockTag ? "block" : "inline-block")

  const classes = className.split(" ")
  const gradientClasses = classes.filter(c => 
    c.startsWith("bg-gradient-") || 
    c.startsWith("from-") || 
    c.startsWith("to-") || 
    c.startsWith("via-") || 
    c.includes("text-transparent") || 
    c.includes("bg-clip-text")
  ).join(" ")

  const cleanClassName = classes.filter(c => 
    !c.startsWith("bg-gradient-") && 
    !c.startsWith("from-") && 
    !c.startsWith("to-") && 
    !c.startsWith("via-") && 
    !c.includes("text-transparent") && 
    !c.includes("bg-clip-text")
  ).join(" ")

  const words = children.split(" ")
  let charIndex = 0

  return (
    // @ts-expect-error dynamic tag
    <Tag
      className={`${defaultDisplay} cursor-default ${cleanClassName}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {words.map((word, wIdx) => {
        const isGradientWord = gradientClasses.length > 0

        if (isGradientWord) {
          const currentIdx = charIndex++
          return (
            <span key={wIdx} className="inline-block whitespace-nowrap">
              <motion.span
                className={`inline-block origin-bottom ${gradientClasses}`}
                animate={
                  hovered
                    ? {
                        y: [-2, -10, 0],
                        rotateX: [0, 22, 0],
                        opacity: [1, 0.8, 1],
                      }
                    : { y: 0, rotateX: 0, opacity: 1 }
                }
                transition={{
                  duration: 0.5,
                  delay: hovered ? currentIdx * 0.024 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "400px",
                }}
              >
                {word}
              </motion.span>
              {wIdx < words.length - 1 && (
                <span className="inline-block select-none" aria-hidden="true">
                  &nbsp;
                </span>
              )}
            </span>
          )
        }

        const letters = word.split("")
        return (
          <span key={wIdx} className="inline-block whitespace-nowrap">
            {letters.map((char, lIdx) => {
              const currentIdx = charIndex++
              return (
                <motion.span
                  key={lIdx}
                  className="inline-block origin-bottom"
                  animate={
                    hovered
                      ? {
                          y: [-2, -10, 0],
                          rotateX: [0, 22, 0],
                          opacity: [1, 0.8, 1],
                        }
                      : { y: 0, rotateX: 0, opacity: 1 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: hovered ? currentIdx * 0.024 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "400px",
                    color: "inherit",
                  }}
                >
                  {char}
                </motion.span>
              )
            })}
            {/* Add non-breaking space if it's not the last word */}
            {wIdx < words.length - 1 && (
              <span className="inline-block select-none" aria-hidden="true">
                &nbsp;
              </span>
            )}
          </span>
        )
      })}
    </Tag>
  )
}
