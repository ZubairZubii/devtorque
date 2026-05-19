'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Text, Billboard } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

const services = [
  { name: 'Voice Agents', icon: '🎤', angle: 0, color: '#00D4FF' },
  { name: 'SaaS Dev', icon: '⚙️', angle: Math.PI / 2.5, color: '#8B5CF6' },
  { name: 'Infrastructure', icon: '🏗️', angle: Math.PI, color: '#F59E0B' },
  { name: 'Automation', icon: '⚡', angle: (Math.PI * 3) / 2, color: '#10B981' },
  { name: 'CRM Systems', icon: '📊', angle: Math.PI * 1.8, color: '#EC4899' },
]

function ServiceOrb() {
  const groupRef = useRef<THREE.Group>(null)
  const { viewport, camera } = useThree()
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
      // Rotate based on scroll
      groupRef.current.rotation.x = scrollY * 0.0005
      groupRef.current.rotation.y += 0.002
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main sphere background */}
      <mesh>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshPhongMaterial
          color="#001a4d"
          emissive="#000033"
          wireframe={false}
          opacity={0.3}
          transparent
        />
      </mesh>

      {/* Glow ring */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[2.6, 0.15, 16, 100]} />
        <meshBasicMaterial color="#0066FF" emissive="#00D4FF" />
      </mesh>

      {/* Service nodes in orbit */}
      {services.map((service, index) => {
        const radius = 3.5
        const x = Math.cos(service.angle) * radius
        const z = Math.sin(service.angle) * radius
        const y = Math.sin(index * 0.3) * 0.5

        return (
          <group key={service.name} position={[x, y, z]}>
            {/* Service sphere */}
            <mesh>
              <sphereGeometry args={[0.4, 32, 32]} />
              <meshPhongMaterial
                color={service.color}
                emissive={service.color}
                emissiveIntensity={0.6}
              />
            </mesh>

            {/* Glow effect */}
            <mesh scale={1.3}>
              <sphereGeometry args={[0.4, 32, 32]} />
              <meshBasicMaterial
                color={service.color}
                opacity={0.15}
                transparent
              />
            </mesh>

            {/* Connection line to center */}
            <line position={[-x * 0.7, -y * 0.7, -z * 0.7]}>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  array={new Float32Array([0, 0, 0, x * 0.7, y * 0.7, z * 0.7])}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color={service.color} opacity={0.3} transparent />
            </line>

            {/* Billboard text */}
            <Billboard lockX lockY>
              <Text
                position={[0, 0.8, 0]}
                fontSize={0.3}
                color={service.color}
                anchorX="center"
                anchorY="middle"
                font="/fonts/Inter-Bold.ttf"
              >
                {service.name}
              </Text>
            </Billboard>
          </group>
        )
      })}
    </group>
  )
}

function GlobeController() {
  const controlsRef = useRef<any>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      if (controlsRef.current) {
        controlsRef.current.autoRotateSpeed = 2 + Math.abs(window.scrollY) * 0.01
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <ServiceOrb />
      <OrbitControls
        ref={controlsRef}
        autoRotate
        autoRotateSpeed={2}
        enableZoom={false}
        enablePan={false}
      />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#0066FF" />
    </>
  )
}

export function ServicesGlobe() {
  return (
    <motion.div
      className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-blue-950/20 to-transparent"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <GlobeController />
      </Canvas>

      {/* Service legend */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3 z-10">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: service.color }}
            />
            <span className="text-xs font-medium text-white/80">{service.name}</span>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute top-6 right-6 text-xs text-white/40 animate-pulse">
        Scroll to rotate
      </div>
    </motion.div>
  )
}
