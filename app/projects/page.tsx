'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { AnimatedText } from '@/components/animated-text'

const projects = [
  {
    id: 1,
    title: 'AI Voice Banking System',
    category: 'Voice Agents',
    client: 'FinTech Startup',
    description: 'End-to-end voice banking platform handling customer inquiries, transactions, and support calls',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-19%20125319-gjmDYmmoglfgtOt1ndxTxRI6CIwH7x.png',
    tags: ['AI Voice', 'Banking', 'Automation', 'NLP'],
    results: ['40% reduction in support costs', '95% call satisfaction rate', '24/7 availability'],
  },
  {
    id: 2,
    title: 'Enterprise SaaS Platform',
    category: 'SaaS Development',
    client: 'Fortune 500 Company',
    description: 'Multi-tenant SaaS platform for enterprise resource planning with real-time analytics',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-19%20125345-VVoFZOJBxy3GjbS6jrtctqpjv0887m.png',
    tags: ['SaaS', 'Enterprise', 'Real-time', 'Analytics'],
    results: ['50+ enterprise clients', '$5M+ ARR', 'Industry-leading uptime'],
  },
  {
    id: 3,
    title: 'Workflow Automation Suite',
    category: 'Automation',
    client: 'Manufacturing Corp',
    description: 'Custom workflow automation connecting 12+ business tools for seamless operations',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-19%20125357-P0nALoqN9LGdvFwSMXwoh0J6QQ5lGD.png',
    tags: ['Automation', 'Integration', 'Workflow', 'API'],
    results: ['60% time savings', '0 manual errors', '10k+ workflows/month'],
  },
  {
    id: 4,
    title: 'Cloud Infrastructure Migration',
    category: 'Infrastructure',
    client: 'Tech Unicorn',
    description: 'Zero-downtime migration to Kubernetes with CI/CD pipelines and monitoring',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-19%20125319-gjmDYmmoglfgtOt1ndxTxRI6CIwH7x.png',
    tags: ['Kubernetes', 'DevOps', 'CI/CD', 'Cloud'],
    results: ['99.99% uptime', '50% cost reduction', '10x faster deployments'],
  },
]

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="container min-h-screen pt-32 pb-20 mx-auto">
      {/* Hero */}
      <section className="max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-400/40 bg-blue-500/10">
            <span className="text-xs font-bold tracking-[2px] uppercase text-blue-300">Portfolio</span>
          </div>
          <AnimatedText
            as="h1"
            className="font-display text-5xl md:text-6xl tracking-wider uppercase text-glow-lg mb-6"
          >
            Projects We&apos;ve Delivered
          </AnimatedText>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Transforming businesses through intelligent automation and cutting-edge technology
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-[1px] uppercase transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'border border-white/20 text-white/70 hover:border-white/40 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl border border-white/10 hover:border-white/30 bg-gradient-to-br from-white/5 to-white/[2%] hover:from-white/10 transition-all cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 group-hover:to-black/80 transition-all" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-600/80 backdrop-blur-sm">
                    <span className="text-xs font-bold uppercase tracking-[1px]">{project.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="text-sm text-blue-300 font-bold uppercase tracking-[1px] mb-2">
                    {project.client}
                  </div>
                  <h3 className="font-display text-2xl uppercase mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded bg-white/5 text-white/60 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="border-t border-white/10 pt-4 space-y-2">
                    {project.results.map((result) => (
                      <div key={result} className="flex items-start gap-2 text-sm text-white/70">
                        <span className="text-blue-400 font-bold mt-1">•</span>
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Testimonial Section */}
      <section className="max-w-4xl mx-auto mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[2%] mb-8">
            <p className="text-2xl text-white mb-6 italic leading-relaxed">
              &quot;DevTorque didn&apos;t just build our automation system—they transformed how our entire business operates. The quality of their work exceeded expectations.&quot;
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600/30 border border-blue-400/50" />
              <div className="text-left">
                <div className="font-bold">John Smith</div>
                <div className="text-sm text-white/60">CEO, Fortune 500 Company</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-[2px] transition-all"
          >
            Start Your Project Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </section>
    </div>
  )
}
