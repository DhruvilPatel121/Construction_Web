import { useState } from 'react'
import Reveal from '../common/Reveal.jsx'
import SectionLabel from '../common/SectionLabel.jsx'

// Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react'

// Swiper styles
import 'swiper/css'

import awardGujarat from '../../assets/images/award-gujarat.jpg'
import awardCongress from '../../assets/images/award-congress.jpg'
import awardAmitshah from '../../assets/images/award-amitshah.jpg'
import awardBhupendra from '../../assets/images/bhupendra.jpeg'
import awardIgbc from '../../assets/images/award-igbc.jpg'

const awardsHref = 'https://www.siddhiconstructions.com/awards'

// Order taken from the reference recording
const awardsList = [
  { title: 'Green Building Award - Gold', image: awardIgbc, href: awardsHref },
  { title: 'The Guardian Of City 2022', image: awardBhupendra, href: awardsHref },
  { title: 'Legends Of Surat 2018-19', image: awardGujarat, href: awardsHref },
  { title: 'Green Building Congress 2018', image: awardCongress, href: awardsHref },
  { title: 'Shri Amitbhai Shah 2016', image: awardAmitshah, href: awardsHref },
]

export default function AwardsSection() {
  const [swiper, setSwiper] = useState(null)

  return (
    <section className="awards-section" id="awards">
      <div className="site-container">
        <Reveal className="awards-heading">
          <SectionLabel className="awards-label">Our Awards & Recognition</SectionLabel>
          <h2 className="awards-title">We are proud of being</h2>
        </Reveal>

        <div className="awards-slider">
          <button
            type="button"
            className="slider-arrow-btn awards-prev"
            aria-label="Previous award"
            onClick={() => swiper?.slidePrev()}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
          </button>

          <div className="awards-swiper-wrap">
            <Swiper
              onSwiper={setSwiper}
              spaceBetween={30}
              slidesPerView={1}
              loop
              loopPreventsSliding={false}
              speed={600}
              grabCursor
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="awards-swiper"
            >
              {awardsList.map((award, idx) => (
                <SwiperSlide key={`${award.title}-${idx}`}>
                  <article className="awards-card">
                    <a
                      href={award.href}
                      target="_blank"
                      rel="noreferrer"
                      className="awards-card-media"
                    >
                      <img className="awards-card-image" src={award.image} alt={award.title} loading="lazy" />
                    </a>
                    <div className="awards-card-caption">
                      <h5 className="awards-card-title">{award.title}</h5>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            type="button"
            className="slider-arrow-btn awards-next"
            aria-label="Next award"
            onClick={() => swiper?.slideNext()}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
