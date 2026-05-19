"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function EarthCore() {
  const coreRef = useRef<THREE.Mesh>(null)
  const gridCoarseRef = useRef<THREE.Mesh>(null)
  const gridFineRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (coreRef.current) coreRef.current.rotation.y += 0.0005
    if (gridCoarseRef.current) gridCoarseRef.current.rotation.y += 0.0005
    if (gridFineRef.current) gridFineRef.current.rotation.y += 0.0005
  })

  return (
    <group>
      {/* Dark ocean base sphere */}
      <Sphere ref={coreRef} args={[2, 64, 64]}>
        <meshPhongMaterial
          color="#040d1c"
          emissive="#001040"
          emissiveIntensity={0.6}
          shininess={120}
          specular={new THREE.Color("#0044ff")}
        />
      </Sphere>

      {/* Coarse geographic-style grid */}
      <Sphere ref={gridCoarseRef} args={[2.01, 36, 18]}>
        <meshBasicMaterial
          color="#1166ee"
          wireframe
          transparent
          opacity={0.15}
        />
      </Sphere>

      {/* Fine geographic grid */}
      <Sphere ref={gridFineRef} args={[2.015, 72, 36]}>
        <meshBasicMaterial
          color="#0055cc"
          wireframe
          transparent
          opacity={0.05}
        />
      </Sphere>
    </group>
  )
}

function Atmosphere() {
  return (
    <>
      {/* Inner atmosphere haze */}
      <Sphere args={[2.12, 64, 64]}>
        <meshBasicMaterial
          color="#0055ff"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </Sphere>
      {/* Mid atmosphere */}
      <Sphere args={[2.35, 64, 64]}>
        <meshBasicMaterial
          color="#0033cc"
          transparent
          opacity={0.035}
          side={THREE.BackSide}
        />
      </Sphere>
      {/* Outer glow */}
      <Sphere args={[2.7, 64, 64]}>
        <meshBasicMaterial
          color="#001aaa"
          transparent
          opacity={0.018}
          side={THREE.BackSide}
        />
      </Sphere>
    </>
  )
}

function CityLights() {
  const groupRef = useRef<THREE.Group>(null)

  const lights = useMemo(() => {
    return Array.from({ length: 220 }, (_, i) => {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const r = 2.03
      return {
        position: [
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi),
        ] as [number, number, number],
        scale: 0.007 + Math.random() * 0.018,
        color: i % 6 === 0 ? "#00D4FF" : i % 4 === 0 ? "#8B5CF6" : i % 7 === 0 ? "#0066FF" : "#cce4ff",
        opacity: 0.4 + Math.random() * 0.6,
      }
    })
  }, [])

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.0005
  })

  return (
    <group ref={groupRef}>
      {lights.map((light, i) => (
        <mesh key={i} position={light.position}>
          <sphereGeometry args={[light.scale, 6, 6]} />
          <meshBasicMaterial color={light.color} transparent opacity={light.opacity} />
        </mesh>
      ))}
    </group>
  )
}

function SurfaceParticles() {
  const ref = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const count = 5500
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 2.04 + Math.random() * 0.15
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    return positions
  }, [])

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0004
  })

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#4488ff"
        size={0.016}
        sizeAttenuation
        depthWrite={false}
        opacity={0.65}
      />
    </Points>
  )
}

function OuterParticleCloud() {
  const ref = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const count = 2500
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 3.0 + Math.random() * 2.2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    return positions
  }, [])

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= 0.00025
      ref.current.rotation.x += 0.00008
    }
  })

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#1144aa"
        size={0.011}
        sizeAttenuation
        depthWrite={false}
        opacity={0.35}
      />
    </Points>
  )
}

function OrbitRings() {
  const ring1 = useRef<THREE.Mesh>(null)
  const ring2 = useRef<THREE.Mesh>(null)
  const ring3 = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ring1.current) {
      ring1.current.rotation.x = Math.PI / 2.2
      ring1.current.rotation.z = t * 0.18
    }
    if (ring2.current) {
      ring2.current.rotation.x = Math.PI / 3.5
      ring2.current.rotation.y = -t * 0.14
    }
    if (ring3.current) {
      ring3.current.rotation.x = Math.PI / 5.5
      ring3.current.rotation.z = t * 0.09
    }
  })

  return (
    <group>
      <mesh ref={ring1}>
        <torusGeometry args={[2.75, 0.008, 16, 256]} />
        <meshBasicMaterial color="#0066FF" transparent opacity={0.55} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[3.15, 0.006, 16, 256]} />
        <meshBasicMaterial color="#00D4FF" transparent opacity={0.32} />
      </mesh>
      <mesh ref={ring3}>
        <torusGeometry args={[3.5, 0.005, 16, 256]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.22} />
      </mesh>
    </group>
  )
}

function DataNodes() {
  const groupRef = useRef<THREE.Group>(null)

  const nodes = useMemo(() => {
    const positions: [number, number, number][] = [
      [1.85, 0.75, 0.95], [-1.65, 1.15, 0.85], [0.65, 1.95, -1.05],
      [-1.95, -0.65, 0.85], [1.25, -1.75, 0.75], [0.95, 0.75, 1.95],
      [-0.75, -1.85, -1.05], [1.95, 0.35, -0.95], [-1.15, 1.55, -1.45],
      [0.45, -0.95, -2.1], [2.05, -0.75, 0.55], [-1.55, -1.35, 1.05],
    ]
    const colors = ["#00D4FF", "#0066FF", "#8B5CF6", "#00D4FF", "#0066FF", "#b0d0ff"]
    return positions.map((pos, i) => ({
      position: pos,
      size: 0.042 + Math.random() * 0.038,
      color: colors[i % colors.length],
    }))
  }, [])

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.0005
  })

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[node.size, 12, 12]} />
          <meshBasicMaterial color={node.color} />
        </mesh>
      ))}
    </group>
  )
}

export default function Globe3D({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 42 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.12} />
        <pointLight position={[8, 6, 8]} intensity={3.5} color="#0044ff" />
        <pointLight position={[-8, -4, -6]} intensity={1.5} color="#5533aa" />
        <pointLight position={[4, -8, 4]} intensity={1.0} color="#00aaff" />
        <pointLight position={[0, 8, -4]} intensity={0.6} color="#ffffff" />
        <EarthCore />
        <Atmosphere />
        <CityLights />
        <SurfaceParticles />
        <OuterParticleCloud />
        <OrbitRings />
        <DataNodes />
      </Canvas>
    </div>
  )
}
