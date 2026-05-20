"use client"
import { useEffect, useState, useRef } from "react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>[]{}?!"

interface Props {
  text: string
  className?: string
  delay?: number  // ms before scramble starts
  speed?: number  // ms per iteration (lower = faster)
}

export function TextScramble({ text, className, delay = 0, speed = 30 }: Props) {
  const [output, setOutput] = useState("")
  const frame = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    let iteration = 0
    let timer: ReturnType<typeof setTimeout>

    const scramble = () => {
      setOutput(
        text.split("").map((char, i) => {
          if (char === " ") return " "
          if (i < iteration) return text[i]
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        }).join("")
      )
      if (iteration < text.length) {
        iteration += 0.6
        frame.current = setTimeout(scramble, speed)
      } else {
        setOutput(text)
      }
    }

    timer = setTimeout(() => scramble(), delay)
    return () => {
      clearTimeout(timer)
      if (frame.current) clearTimeout(frame.current)
    }
  }, [text, delay, speed])

  return <span className={className}>{output || text}</span>
}
