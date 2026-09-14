import { useState, useEffect } from 'react'

export function useFloorCounter() {
  const [floor, setFloor] = useState(1)

  useEffect(() => {
    let direction = 1
    const id = setInterval(() => {
      setFloor(prev => {
        const next = prev + direction
        if (next >= 20) direction = -1
        if (next <= 1)  direction =  1
        return next
      })
    }, 650)
    return () => clearInterval(id)
  }, [])

  return String(floor).padStart(2, '0')
}
