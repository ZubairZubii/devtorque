'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Text, Billboard } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

const technologies = [
  { name: 'TypeScript', icon: '𝕿', angle: 0, color: '#3178C6' },
  { name: 'React', icon: '⚛', angle: Math.PI / 3, color: '#61DAFB' },
  { name: 'Next.js', icon: '▲', angle: (Math.PI * 2) / 3, color: '#FFFFFF' },
  { name: 'Python', icon: '🐍', angle: Math.PI, color: '#3776AB' },
  { name: 'PostgreSQL', icon: '🔵', angle: (Math.PI * 4) / 3, color: '#336791' },
  { name: 'AWS', icon: '☁', angle: (Math.PI * 5) / 3, color: '#FF9900' },
  { name: 'Docker', icon: '🐋', angle: Math.PI * 1.5, color: '#2496ED' },
  { name: 'Kubernetes', icon: '⚙', angle: Math.PI * 0.5, color: '#326CE5' },
]

function TechOrbParticles() {
  const groupRef = useRef<THREE.Group>(null)
  const { viewport } = useThree()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = scrollY * 0.0003
      groupRef.current.rotation.y += 0.0015
      groupRef.current.rotation.z = scrollY * 0.0001
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central glow */}
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color="#0066FF" emissive="#0066FF" emissiveIntensity={0.4} transparent opacity={0.1} />
      </mesh>

      {/* Main rotating torus */}
      <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.8, 0.12, 16, 100]} />
        <meshBasicMaterial color="#00D4FF" emissive="#00D4FF" />
      </mesh>

      {/* Secondary torus */}
      <mesh rotation={[-Math.PI / 3, -Math.PI / 4, Math.PI / 2]}>
        <torusGeometry args={[2.2, 0.08, 16, 100]} />
        <meshBasicMaterial color="#8B5CF6" emissive="#8B5CF6" opacity={0.6} transparent />
      </mesh>

      {/* Tech nodes */}
      {technologies.map((tech, index) => {
        const radius = 3.2
        const offsetY = Math.sin(index * 0.8) * 0.8
        const x = Math.cos(tech.angle) * radius
        const z = Math.sin(tech.angle) * radius
        const y = offsetY

        return (
          <group key={tech.name} position={[x, y, z]}>
            {/* Tech sphere */}
            <mesh>
              <sphereGeometry args={[0.35, 32, 32]} />
              <meshPhongMaterial
                color={tech.color}
                emissive={tech.color}
                emissiveIntensity={0.5}
                shininess={100}
              />
            </mesh>

            {/* Outer glow */}
            <mesh scale={1.4}>
              <sphereGeometry args={[0.35, 32, 32]} />
              <meshBasicMaterial
                color={tech.color}
                opacity={0.1}
                transparent
              />
            </mesh>

            {/* Pulsing ring */}
            <mesh scale={[1.2, 1.2, 0.1]}>
              <torusGeometry args={[0.35, 0.02, 16, 32]} />
              <meshBasicMaterial color={tech.color} opacity={0.4} transparent />
            </mesh>

            {/* Connection pulse */}
            <line position={[-x * 0.6, -y * 0.6, -z * 0.6]}>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  array={new Float32Array([0, 0, 0, x * 0.6, y * 0.6, z * 0.6])}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color={tech.color} opacity={0.4} transparent />
            </line>

            {/* Billboard text label */}
            <Billboard lockX lockY>
              <Text
                position={[0, 0.8, 0]}
                fontSize={0.25}
                color={tech.color}
                anchorX="center"
                anchorY="middle"
                font="/fonts/Inter-Bold.ttf"
              >
                {tech.name}
              </Text>
            </Billboard>
          </group>
        )
      })}
    </group>
  )
}

function TechGlobeController() {
  const controlsRef = useRef<any>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (controlsRef.current) {
        controlsRef.current.autoRotateSpeed = 1.5 + Math.abs(window.scrollY) * 0.008
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <TechOrbParticles />
      <OrbitControls
        ref={controlsRef}
        autoRotate
        autoRotateSpeed={1.5}
        enableZoom={false}
        enablePan={false}
      />
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 10]} intensity={0.6} color="#00D4FF" />
      <pointLight position={[-8, -8, 8]} intensity={0.4} color="#8B5CF6" />
      <pointLight position={[8, -8, -8]} intensity={0.3} color="#0066FF" />
    </>
  )
}

export function TechStackGlobe() {
  return (
    <motion.div
      className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-purple-950/20 via-blue-950/10 to-transparent"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }}>
        <TechGlobeController />
      </Canvas>

      {/* Legend Grid */}
      <div className="absolute bottom-6 left-6 right-6 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 backdrop-blur-sm transition-all"
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}` }}
              />
              <span className="text-xs font-medium text-white/80">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute top-6 right-6 text-xs text-white/40 animate-pulse">
        Scroll to spin
      </div>
    </motion.div>
  )
}
