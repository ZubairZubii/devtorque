'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface HoverRevealProps {
  children: ReactNode
  revealText?: string
  className?: string
  glowColor?: string
}

export function HoverReveal({
  children,
  revealText = 'Hover me',
  className = '',
  glowColor = 'rgba(0, 102, 255, 0.4)',
}: HoverRevealProps) {
  return (
    <motion.div
      className={`relative group overflow-hidden rounded-lg ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Main content */}
      <div className="relative z-10">{children}</div>

      {/* Hover overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        style={{ boxShadow: `inset 0 0 40px ${glowColor}` }}
      >
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-white font-bold text-sm uppercase tracking-[2px]"
        >
          {revealText}
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

interface BounceOnScrollProps {
  children: ReactNode
  className?: string
}

export function BounceOnScroll({ children, className = '' }: BounceOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        type: 'spring',
        damping: 8,
        stiffness: 120,
        duration: 0.6,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxProps {
  children: ReactNode
  offset?: number
  className?: string
}

export function Parallax({ children, offset = 50, className = '' }: ParallaxProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      whileInView={{ y: offset }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

interface CountUpProps {
  target: number
  suffix?: string
  prefix?: string
  className?: string
}

export function CountUp({ target, suffix = '', prefix = '', className = '' }: CountUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
      onViewportEnter={() => {
        // Count up animation with canvas or library can be added here
      }}
    >
      {prefix}
      {target}
      {suffix}
    </motion.div>
  )
}
