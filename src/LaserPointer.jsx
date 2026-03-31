import { useState, useEffect, useCallback, useRef } from 'react'
import { useEffect as useLayoutEffect } from 'react'

export default function LaserPointer({ active }) {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState([])
  const trailRef = useRef([])
  const rafRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const newPos = { x: e.clientX, y: e.clientY }
    setPosition(newPos)

    trailRef.current = [
      newPos,
      ...trailRef.current.slice(0, 5),
    ]
    setTrail([...trailRef.current])
  }, [])

  useEffect(() => {
    if (!active) return
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [active, handleMouseMove])

  if (!active) return null

  return (
    <div className="laser-overlay" aria-hidden="true">
      {/* Trail dots */}
      {trail.slice(1).map((pos, i) => (
        <div
          key={i}
          className="laser-trail"
          style={{
            left: pos.x,
            top: pos.y,
            opacity: 0.3 - i * 0.05,
            transform: `translate(-50%, -50%) scale(${1 - i * 0.15})`,
          }}
        />
      ))}
      {/* Main dot */}
      <div
        className="laser-dot"
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </div>
  )
}
