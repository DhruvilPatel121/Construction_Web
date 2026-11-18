import { useRef, useEffect, useState } from 'react'
import heroVideo from '../../assets/videos/bann.mp4'
import heroPoster from '../../assets/images/hero-adani.png'

export default function HeroSection() {
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)
  const [soundLabel, setSoundLabel] = useState('Tap to Unmute')
  const [btnVisible, setBtnVisible] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        video.muted = true
        setIsMuted(true)
        video.play().catch(() => {})
      })
    }

    let scrollTriggered = false
    const handleFirstScroll = () => {
      if (scrollTriggered) return
      scrollTriggered = true
      window.removeEventListener('scroll', handleFirstScroll)

      if (video && video.muted) {
        video.muted = false
        video.volume = 1
        video.play().then(() => {
          setIsMuted(false)
          setSoundLabel('Sound On')
          setTimeout(() => setBtnVisible(false), 2200)
        }).catch(() => {
          video.muted = true
          setIsMuted(true)
          setSoundLabel('Tap to Unmute')
        })
      }
    }

    window.addEventListener('scroll', handleFirstScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleFirstScroll)
  }, [])

  const toggleSound = () => {
    const video = videoRef.current
    if (!video) return

    if (video.muted) {
      video.muted = false
      video.volume = 1
      setIsMuted(false)
      setSoundLabel('Sound On')
      setTimeout(() => setBtnVisible(false), 2200)
    } else {
      video.muted = true
      setIsMuted(true)
      setSoundLabel('Tap to Unmute')
      setBtnVisible(true)
    }
  }

  return (
    <section className="relative h-[76vh] min-h-[520px] w-full overflow-hidden bg-[#121417] max-[991px]:h-[50vh] max-[991px]:min-h-[360px] max-[767px]:h-[45vh] max-[767px]:min-h-[280px]" aria-label="Featured corporate video showcase">
      <div className="relative size-full overflow-hidden">
        <video
          ref={videoRef}
          id="banner-video-desktop"
          className="block size-full object-cover object-center"
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Video Sound Toggle Button matching reference site */}
        <button
          type="button"
          id="unmute-btn-desktop"
          className={`absolute top-6 right-7 z-[100] inline-flex items-center gap-2 rounded-[50px] border-[1.5px] border-white/30 bg-black/55 py-[9px] pr-[18px] pl-[14px] text-[13px] font-semibold text-white backdrop-blur-[10px] transition-[background,transform,opacity,visibility] duration-[250ms] ease-in-out hover:scale-[1.04] hover:bg-white/20 [animation:unmute-pulse_2.2s_ease-in-out_infinite] max-[767px]:top-3 max-[767px]:right-3 max-[767px]:py-[7px] max-[767px]:px-[13px] max-[767px]:text-[11.5px] ${!btnVisible ? 'pointer-events-none invisible opacity-0' : ''}`}
          onClick={toggleSound}
          title="Toggle Sound"
          aria-label="Toggle video sound"
        >
          <span className="inline-flex leading-none" id="sound-icon-desktop" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 5 6 9H3v6h3l5 4V5z" fill="currentColor" />
              {isMuted ? (
                <path d="M22 9l-6 6M16 9l6 6" />
              ) : (
                <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
              )}
            </svg>
          </span>
          <span id="sound-label-desktop">{soundLabel}</span>
        </button>
      </div>
    </section>
  )
}
