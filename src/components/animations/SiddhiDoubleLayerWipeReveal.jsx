import { useEffect, useRef, useState } from 'react'

function shouldSkipAnimation() {
  return (
    !('IntersectionObserver' in window) ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Reveals only its child media with Siddhi's approved red-to-black wipe.
 * Each instance observes and completes independently once per page visit.
 */
export default function SiddhiDoubleLayerWipeReveal({
  children,
  className = '',
  threshold = 0.35,
}) {
  const ref = useRef(null)
  const [hasRevealed, setHasRevealed] = useState(shouldSkipAnimation)

  useEffect(() => {
    const element = ref.current
    if (!element || hasRevealed) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setHasRevealed(true)
        observer.unobserve(entry.target)
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [hasRevealed, threshold])

  return (
    <div
      ref={ref}
      className={`siddhi-double-layer-wipe-reveal${hasRevealed ? ' is-revealed' : ''}${className ? ` ${className}` : ''}`}
    >
      {children}
      <span className="siddhi-double-layer-wipe-reveal__layer siddhi-double-layer-wipe-reveal__layer--red" aria-hidden="true" />
      <span className="siddhi-double-layer-wipe-reveal__layer siddhi-double-layer-wipe-reveal__layer--black" aria-hidden="true" />
    </div>
  )
}
