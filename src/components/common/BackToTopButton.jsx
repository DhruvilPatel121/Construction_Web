import { useEffect, useRef, useState } from 'react'

const CIRCUMFERENCE = 307.919

export default function ScrollProgressButton() {
  const [isVisible, setIsVisible] = useState(false)
  const circleRef = useRef(null)
  const isVisibleRef = useRef(false)

  useEffect(() => {
    let frameId = 0

    const updateProgress = () => {
      frameId = 0
      const { scrollHeight, clientHeight } = document.documentElement
      const scrollableHeight = scrollHeight - clientHeight
      const progress = scrollableHeight > 0
        ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight))
        : 0

      circleRef.current?.setAttribute(
        'stroke-dashoffset',
        String(CIRCUMFERENCE * (1 - progress)),
      )

      const nextIsVisible = window.scrollY > 200
      if (nextIsVisible !== isVisibleRef.current) {
        isVisibleRef.current = nextIsVisible
        setIsVisible(nextIsVisible)
      }
    }

    const requestUpdate = () => {
      if (!frameId) frameId = requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      cancelAnimationFrame(frameId)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={`group fixed right-7 bottom-7 z-[9999] block size-12 cursor-pointer rounded-full bg-white shadow-[0_4px_18px_rgba(0,0,0,0.15)] transition-[opacity,visibility,transform] duration-[250ms] ease-linear ${isVisible ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-[15px] opacity-0'}`}
      onClick={scrollToTop}
      role="button"
      tabIndex={0}
      aria-label="Scroll back to top"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') scrollToTop()
      }}
    >
      <svg className="size-full" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path
          ref={circleRef}
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          strokeDasharray={`${CIRCUMFERENCE}, ${CIRCUMFERENCE}`}
          strokeDashoffset={CIRCUMFERENCE}
          className="fill-none stroke-[var(--color-primary)] [stroke-width:4px] [will-change:stroke-dashoffset]"
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center text-[var(--color-primary)] transition-transform duration-200 ease-out group-hover:-translate-y-0.5" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </span>
    </div>
  )
}
