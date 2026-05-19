"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Text } from "@react-three/drei"
import * as THREE from "three"

const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "OpenAI", color: "#00A67E" },
  { name: "AWS", color: "#FF9900" },
  { name: "Docker", color: "#2496ED" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Redis", color: "#DC382D" },
  { name: "GraphQL", color: "#E10098" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "Terraform", color: "#7B42BC" },
  { name: "Vercel", color: "#ffffff" },
  { name: "Stripe", color: "#635BFF" },
  { name: "Twilio", color: "#F22F46" },
  { name: "LangChain", color: "#1C3C3C" },
  { name: "Supabase", color: "#3ECF8E" },
  { name: "Firebase", color: "#FFCA28" },
]

function TechNode({ position, name, color, index }: { 
  position: [number, number, number]
  name: string
  color: string
  index: number 
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <mesh ref={meshRef}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial 
            color={color} 
            emissive={color}
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </group>
    </Float>
  )
}

function TechSphere() {
  const groupRef = useRef<THREE.Group>(null)
  
  const positions = useMemo(() => {
    return techStack.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / techStack.length)
      const theta = Math.sqrt(techStack.length * Math.PI) * phi
      const radius = 2.5
      return [
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      ] as [number, number, number]
    })
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {techStack.map((tech, i) => (
        <TechNode
          key={tech.name}
          position={positions[i]}
          name={tech.name}
          color={tech.color}
          index={i}
        />
      ))}
      {/* Central core */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#0066FF"
          emissive="#0066FF"
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  )
}

export default function TechOrbit({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0066FF" />
        <TechSphere />
      </Canvas>
    </div>
  )
}
