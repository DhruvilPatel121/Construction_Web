import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function useCountUp(target) {
  const ref = useRef(null)
  const [hasStarted, setHasStarted] = useState(false)
  const [lineHeight, setLineHeight] = useState(null)

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const syncLineHeight = () => {
      const nextLineHeight = Number.parseFloat(window.getComputedStyle(element).lineHeight)
      if (Number.isFinite(nextLineHeight)) setLineHeight(nextLineHeight)
    }

    syncLineHeight()
    const observer = new ResizeObserver(syncLineHeight)
    observer.observe(element)
    window.addEventListener('resize', syncLineHeight)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', syncLineHeight)
    }
  }, [])

  useEffect(() => {
    const element = ref.current
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    if (!element || prefersReducedMotion || !('IntersectionObserver' in window)) {
      setHasStarted(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.unobserve(entry.target)
        setHasStarted(true)
      },
      { threshold: 0.5 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [target])

  return { ref, hasStarted, lineHeight }
}
