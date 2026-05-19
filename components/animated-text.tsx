'use client'

import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

interface AnimatedTextProps {
  children: ReactNode
  as?: keyof JSX.IntrinsicElements
  className?: string
  animationType?: 'char-rotate' | 'glow' | 'stagger' | 'blur-reveal'
  delay?: number
  duration?: number
}

export function AnimatedText({
  children,
  as: Component = 'div',
  className = '',
  animationType = 'stagger',
  delay = 0,
  duration = 0.6,
}: AnimatedTextProps) {
  const text = typeof children === 'string' ? children : ''
  const words = text.split(' ')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  }

  const charVariants = {
    'char-rotate': {
      hidden: { rotateX: 90, opacity: 0 },
      visible: {
        rotateX: 0,
        opacity: 1,
        transition: { duration, ease: [0.23, 1, 0.32, 1] },
      },
    },
    glow: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration, ease: 'easeOut' },
      },
    },
    stagger: {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: duration * 0.8, ease: 'easeOut' },
      },
    },
    'blur-reveal': {
      hidden: { opacity: 0, filter: 'blur(10px)' },
      visible: {
        opacity: 1,
        filter: 'blur(0px)',
        transition: { duration, ease: 'easeOut' },
      },
    },
  }

  // Resolve dynamic Framer Motion element tag (e.g. motion.h1, motion.div)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionComponent = (motion as any)[Component] || motion.div

  const isBlockTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'p', 'section'].includes(Component as string)
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

  return (
    <MotionComponent
      className={`${defaultDisplay} ${cleanClassName}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {words.map((word, wIdx) => {
        const isGradientWord = gradientClasses.length > 0

        if (isGradientWord) {
          return (
            <span key={wIdx} className="inline-block whitespace-nowrap">
              <motion.span
                className={`inline-block ${gradientClasses}`}
                variants={charVariants[animationType]}
                style={{
                  transformStyle: animationType === 'char-rotate' ? 'preserve-3d' : undefined,
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

        const chars = word.split('')
        return (
          <span key={wIdx} className="inline-block whitespace-nowrap">
            {chars.map((char, cIdx) => (
              <motion.span
                key={`${char}-${cIdx}`}
                className="inline-block"
                variants={charVariants[animationType]}
                style={{
                  transformStyle: animationType === 'char-rotate' ? 'preserve-3d' : undefined,
                }}
              >
                {char}
              </motion.span>
            ))}
            {/* Add non-breaking space after word if it is not the last word */}
            {wIdx < words.length - 1 && (
              <span className="inline-block select-none" aria-hidden="true">
                &nbsp;
              </span>
            )}
          </span>
        )
      })}
    </MotionComponent>
  )
}

interface StaggeerdContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggeredContainer({
  children,
  className = '',
  staggerDelay = 0.1,
}: StaggeerdContainerProps) {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  )
}

interface HoverAnimatedTextProps {
  children: string
  className?: string
  hoverColor?: string
  glowIntensity?: 'light' | 'medium' | 'strong'
}

export function HoverAnimatedText({
  children,
  className = '',
  hoverColor = 'var(--dt-blue)',
  glowIntensity = 'medium',
}: HoverAnimatedTextProps) {
  const glowClass =
    glowIntensity === 'strong'
      ? 'text-glow-lg'
      : glowIntensity === 'light'
        ? 'opacity-75'
        : 'text-glow-lg'

  return (
    <motion.div
      className={`inline-block cursor-pointer ${glowClass} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{ color: hoverColor }}
    >
      {children}
    </motion.div>
  )
}
