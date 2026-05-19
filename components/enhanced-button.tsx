'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface EnhancedButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  glowColor?: string
  target?: string
  rel?: string
}

const variants = {
  primary: 'bg-blue-600 hover:bg-blue-500 text-white',
  secondary: 'bg-purple-600 hover:bg-purple-500 text-white',
  outline: 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function EnhancedButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  glowColor = 'rgba(0, 102, 255, 0.3)',
  target,
  rel,
}: EnhancedButtonProps) {
  const baseClasses = `rounded-lg font-bold tracking-[1px] uppercase transition-all relative overflow-hidden ${
    variants[variant]
  } ${sizes[size]} ${className}`

  const content = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', damping: 8, stiffness: 120 }}
      className={`${baseClasses} inline-block`}
      style={{
        boxShadow: `0 0 20px ${glowColor}`,
      }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
        whileHover={{ opacity: 0.2, x: ['-100%', '100%'] }}
        transition={{ duration: 0.5 }}
      />

      {/* Content */}
      <span className="relative flex items-center gap-2">{children}</span>
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} target={target} rel={rel}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}
