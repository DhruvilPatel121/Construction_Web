import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'
import Reveal from '../common/Reveal.jsx'
import SectionLabel from '../common/SectionLabel.jsx'
import CountUp from '../animations/CountUp.jsx'

import 'swiper/css'
import 'swiper/css/navigation'

import awardAmitshah from '../../assets/images/award-amitshah.jpg'
import slide5 from '../../assets/images/slide5.jpeg'
import slide4 from '../../assets/images/slide4.jpeg'
import slide1 from '../../assets/images/slide1.JPG'
import abb from '../../assets/images/abb.jpeg'

import icon03 from '../../assets/images/03.svg'
import icon04 from '../../assets/images/04.svg'
import icon05 from '../../assets/images/05.svg'

const carouselImages = [awardAmitshah, slide5, slide4, slide1, abb]

const features = [
  {
    icon: icon03,
    title: 'End-to-End Construction Solutions',
    desc: 'Complete EPC services ensuring smooth execution from start to finish.',
  },
  {
    icon: icon04,
    title: '40+ Years of Legacy',
    desc: 'Building trust in Surat since 1986 with a commitment to quality.',
  },
  {
    icon: icon05,
    title: 'Expert Project Management',
    desc: 'Precision-driven PMC services for complex industrial and residential projects.',
  },
]

export default function AboutSection() {
  const swiperContainerRef = useRef(null)
  const prevBtnRef = useRef(null)
  const nextBtnRef = useRef(null)

  useEffect(() => {
    if (!swiperContainerRef.current) return

    const swiper = new Swiper(swiperContainerRef.current, {
      modules: [Navigation, Autoplay],
      slidesPerView: 1,
      speed: 700,
      loop: true,
      loopPreventsSliding: false, // arrow clicks are never swallowed while autoplay is mid-transition
      grabCursor: true,
      // The reference slider advances on its own with a horizontal slide
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        prevEl: prevBtnRef.current,
        nextEl: nextBtnRef.current,
      },
      observer: true,
      observeParents: true,
    })

    return () => {
      swiper.destroy(true, true)
    }
  }, [])

  return (
    <section className="about-section rts-section-gap section-paper" id="about">
      <div className="site-container">
        <div className="about-grid-wrapper">
          {/* Left Swiper Slider Column */}
          <div className="about-carousel-col">
            <Reveal className="about-carousel-container">
              <div className="about-image-slider">
                <div ref={swiperContainerRef} className="swiper about-swiper">
                  <div className="swiper-wrapper">
                    {carouselImages.map((img, idx) => (
                      <div className="swiper-slide" key={idx}>
                        <img
                          src={img}
                          alt={`Siddhi Constructions milestone ${idx + 1}`}
                          className="about-slide-img"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  ref={prevBtnRef}
                  type="button"
                  className="about-slider-nav about-nav-prev"
                  aria-label="Previous slide"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
                </button>
                <button
                  ref={nextBtnRef}
                  type="button"
                  className="about-slider-nav about-nav-next"
                  aria-label="Next slide"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Content Column */}
          <div className="about-content-col">
            <Reveal className="about-title-row">
              <div className="about-title-left">
                <SectionLabel>About our company</SectionLabel>
                <h2 className="section-title">
                  SIDDHI CONSTRUCTIONS<br />BUILDING EXCELLENCE 1986
                </h2>
              </div>
              <div className="experience-badge">
                <div className="experience-counter">
                  <span className="counter-number"><CountUp value={40} suffix="+" /></span>
                </div>
                <span className="experience-label">YEARS OF EXPERIENCE</span>
              </div>
            </Reveal>

            <div className="about-cards-wrapper">
              {/* Left text description card */}
              <Reveal className="about-desc-card" delay={60}>
                <p className="about-text">
                  Welcome to Siddhi Constructions, a leading name in the construction and project management sector. Established in 1986, our journey has been marked by passion, dedication, and a commitment to innovation. With a wealth of experience in effectively managing diverse construction projects, Siddhi Constructions has emerged as a trailblazer in constructing advanced with the future in mind.
                </p>
                <p className="about-text about-text-sub">
                  Join us on this journey of construction excellence.
                </p>
                <div className="about-btn-row">
                  <a
                    href="https://www.siddhiconstructions.com/about-us"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    About Company
                    <span className="btn-arrow-sym" aria-hidden="true">↗</span>
                  </a>
                </div>
              </Reveal>

              {/* Right highlights card */}
              <Reveal className="about-features-card" delay={120}>
                <div className="features-top-header">
                  <p>Providing The Best Factory Company Solutions:</p>
                </div>
                <div className="features-list">
                  {features.map((item) => (
                    <div className="feature-item" key={item.title}>
                      <div className="feature-icon-wrapper">
                        <img src={item.icon} alt="" className="feature-icon" />
                      </div>
                      <div className="feature-text">
                        <h4 className="feature-title">{item.title}</h4>
                        <p className="feature-desc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
