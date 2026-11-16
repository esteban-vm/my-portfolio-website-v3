'use client'

import { useTheme } from '@teispace/next-themes'
import { useEffect, useRef } from 'react'

interface ParticlesProps {
  quantity?: number
  className?: string
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
}

export function Particles({ quantity = 120, className }: ParticlesProps) {
  const { theme } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frameId: number
    const particles: Particle[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', resize)
    resize()

    for (let i = 0; i < quantity; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    const render = () => {
      if (!canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = theme === 'dark' ? '#ededed' : '#171717'

      for (const particle of particles) {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 1.4, 0, Math.PI * 2)
        ctx.fill()
      }

      frameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frameId)
    }
  }, [quantity, theme])

  return <canvas className={className} ref={canvasRef} />
}
