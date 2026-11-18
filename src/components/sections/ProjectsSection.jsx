import { useState, useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import Reveal from '../common/Reveal.jsx'

import 'swiper/css'
import 'swiper/css/navigation'

// Commercial project images
import projectApmcElevated from '../../assets/images/project-apmc-elevated.jpeg'
import projectApmc from '../../assets/images/project-apmc.jpg'
import projectJ9 from '../../assets/images/project-j9.jpg'
import projectSurana from '../../assets/images/project-surana.jpeg'
import projectSmimmer from '../../assets/images/project-smimmer.jpeg'
import mtmImg from '../../assets/images/6a632a7aaaac02.78465352.jpg'
import sardarImg from '../../assets/images/6a1fb01d0dccf5.08606385.jpg'
import snsInterioImg from '../../assets/images/6a6327d67b67a0.06461757.jpeg'
import snsPlatinaImg from '../../assets/images/6a3a305757ea99.68267622.jpg'

// Industrial
import projectTorrent from '../../assets/images/project-torrent.png'
import projectAmul from '../../assets/images/project-amul.png'

// Residential
import projectVitthal from '../../assets/images/project-vitthal.png'
import projectFiona from '../../assets/images/project-fiona.png'

// Developer
import projectDumbhal from '../../assets/images/project-dumbhal.jpg'
import projectAavishkar from '../../assets/images/project-aavishkar.webp'

// Ongoing
import projectWaaree from '../../assets/images/project-waaree-ongoing.png'
import projectHtc from '../../assets/images/project-htc.jpg'

const categories = [
  'Commercial & Institutional',
  'Industrial Construction',
  'Residential',
  'Developer',
  'Ongoing',
]

const projectData = {
  'Commercial & Institutional': [
    {
      title: 'APMC Elevated Vegetable Market',
      desc: 'Client: Agricultural Produce Market Committee (APMC) Location: Gujarat Project Type: Commercial Infrastructure / Elevated Vegetable Market',
      category: 'Commercial & Institutional',
      image: projectApmcElevated,
      href: 'https://www.siddhiconstructions.com/projects/apmc-elevated-vegetable-market',
    },
    {
      title: 'APMC Auction Ring',
      desc: 'Client: Agricultural Produce Market Committee (APMC) Location: Gujarat Project Type: Commercial Infrastructure / Agricultural Market Facility',
      category: 'Commercial & Institutional',
      image: projectApmc,
      href: 'https://www.siddhiconstructions.com/projects/apmc-auction-ring',
    },
    {
      title: 'J9 Commercial Building – Vesu',
      desc: 'Client: Private Developer Location: Vesu, Surat, Gujarat Project Type: Commercial Infrastructure',
      category: 'Commercial & Institutional',
      image: projectJ9,
      href: 'https://www.siddhiconstructions.com/projects/j9-commercial-building-vesu',
    },
    {
      title: 'Surana 101',
      desc: 'Project Location: Surat Client: Surana Group Project Name: Surana 101 Project Type: Premium Commercial Development C...',
      category: 'Commercial & Institutional',
      image: projectSurana,
      href: 'https://www.siddhiconstructions.com/projects/surana-101',
    },
    {
      title: 'Smimmer Hospital For Surat Municipal Corporation',
      desc: 'SMIMER Hospital (Surat Municipal Institute of Medical Education & Research) – Government Hospital Project C...',
      category: 'Commercial & Institutional',
      image: projectSmimmer,
      href: 'https://www.siddhiconstructions.com/projects/smimmer-hospital-for-surat-municipal-corporation',
    },
    {
      title: 'MTM',
      desc: 'Millennium Textile Market – Commercial Project Client: Millennium Textile Market Association / Developers',
      category: 'Commercial & Institutional',
      image: mtmImg,
      href: 'https://www.siddhiconstructions.com/projects/mtm',
    },
    {
      title: 'New Sardar Traders Market',
      desc: 'New Sardar Traders Market – Commercial Project Client: ... Location: Surat, Gujarat Project Type: Traders...',
      category: 'Commercial & Institutional',
      image: sardarImg,
      href: 'https://www.siddhiconstructions.com/projects/new-sardar-traders-market',
    },
    {
      title: 'SNS Interio',
      desc: 'SNS Interio – Commercial Business Hub Client: SNS Group Location: Bhatar Road, Surat, Gujarat Project Type: P...',
      category: 'Commercial & Institutional',
      image: snsInterioImg,
      href: 'https://www.siddhiconstructions.com/projects/sns-interio',
    },
    {
      title: 'SNS Platina',
      desc: 'SNS Platina – Commercial Complex Client: SNS Group Location: Surat, Gujarat Project Type: High-End Commercial...',
      category: 'Commercial & Institutional',
      image: snsPlatinaImg,
      href: 'https://www.siddhiconstructions.com/projects/sns-platina',
    },
  ],
  'Industrial Construction': [
    {
      title: 'Torrent Power – Althan',
      desc: 'Client: Althan Electricity Co. Ltd Location: Surat, Gujarat Project Type: Utility Infrastructure',
      category: 'Industrial Construction',
      image: projectTorrent,
      href: 'https://www.siddhiconstructions.com/projects/torrent-power-surat-electricity-co-ltd-althan',
    },
    {
      title: 'Amul Dairy Chiller Plant',
      desc: 'Client: Panchmahal District Co-operative Milk Producers’ Union Location: Gujarat Project Type: Industrial Construction',
      category: 'Industrial Construction',
      image: projectAmul,
      href: 'https://www.siddhiconstructions.com/projects/amul-dairy-panchamrut-dairy-chiller-plant-1-3-mld',
    },
  ],
  'Residential': [
    {
      title: 'Vitthal Bungalows – Bardoli',
      desc: 'Client: Private Developer Location: Bardoli, Gujarat Project Type: Residential Bungalows Development',
      category: 'Residential',
      image: projectVitthal,
      href: 'https://www.siddhiconstructions.com/projects/vitthal-bungalows-bardoli',
    },
    {
      title: 'Fiona – High Rise Residential Apartment',
      desc: 'Client: Private Developer Location: Vesu, Surat, Gujarat Project Type: High Rise Residential Apartment',
      category: 'Residential',
      image: projectFiona,
      href: 'https://www.siddhiconstructions.com/projects/fiona-high-rise-residential-apartment',
    },
  ],
  'Developer': [
    {
      title: 'J9 Commercial Building – Vesu',
      desc: 'Client: Private Developer Location: Vesu, Surat, Gujarat Project Type: Commercial Infrastructure',
      category: 'Developer',
      image: projectJ9,
      href: 'https://www.siddhiconstructions.com/projects/j9-commercial-building-vesu',
    },
    {
      title: 'Dumbhal Redevelopment Project',
      desc: 'Client: Surat Municipal Corporation Location: Dumbhal, Surat Project Type: Residential & Commercial Redevelopment',
      category: 'Developer',
      image: projectDumbhal,
      href: 'https://www.siddhiconstructions.com/projects/dumbhal-redevelopment-project-under-ppp-dumbhal-surat-area',
    },
    {
      title: 'Aavishkar Corporation',
      desc: 'Client: Aavishkar Corporation Location: Surat, Gujarat Project Type: Residential Development',
      category: 'Developer',
      image: projectAavishkar,
      href: 'https://www.siddhiconstructions.com/projects/aavishkar-corporation',
    },
  ],
  'Ongoing': [
    {
      title: 'Waaree Influent Water Tank',
      desc: 'Client: Waaree Group Location: Gujarat Project Type: Industrial Water Infrastructure',
      category: 'ForthComing',
      image: projectWaaree,
      href: 'https://www.siddhiconstructions.com/projects/waaree-influent-water-tank',
    },
    {
      title: 'HTC – 3 The Business Park',
      desc: 'Client: Private Developer Location: Surat, Gujarat Project Type: Commercial Development',
      category: 'ForthComing',
      image: projectHtc,
      href: 'https://www.siddhiconstructions.com/projects/htc-3-the-business-park',
    },
  ],
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState(categories[0])
  const currentList = projectData[activeTab] || []

  const swiperContainerRef = useRef(null)
  const prevBtnRef = useRef(null)
  const nextBtnRef = useRef(null)
  const swiperInstanceRef = useRef(null)

  useEffect(() => {
    if (!swiperContainerRef.current) return

    swiperInstanceRef.current = new Swiper(swiperContainerRef.current, {
      modules: [Navigation],
      spaceBetween: 20,
      slidesPerView: 1,
      speed: 500,
      grabCursor: true,
      navigation: {
        prevEl: prevBtnRef.current,
        nextEl: nextBtnRef.current,
        disabledClass: 'swiper-button-disabled',
        lockClass: 'swiper-button-lock',
      },
      breakpoints: {
        900: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    })

    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true)
      }
    }
  }, [activeTab])

  return (
    <section className="projects-section rts-section-gap section-paper" id="projects">
      <div className="site-container">
        <Reveal className="projects-header-center">
          <h2 className="section-title text-center">Explore Recent Projects</h2>
          <p className="section-subtitle text-center">
            Explore our recent projects that reflect our commitment to quality, innovation, and
            timely delivery—each crafted with precision, attention to detail, and a vision to create
            enduring, inspiring spaces.
          </p>
        </Reveal>

        {/* Category Tabs */}
        <div className="project-category-tabs" role="tablist" aria-label="Project categories">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeTab === cat}
              className={`project-tab-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Swiper Projects Carousel Container */}
        <div className="projects-slider-wrapper" role="tabpanel">
          <button
            ref={prevBtnRef}
            type="button"
            className="slider-arrow-btn project-prev-btn"
            aria-label="Previous project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
          </button>

          <div className="projects-swiper-container">
            <div ref={swiperContainerRef} className="swiper projects-swiper">
              <div className="swiper-wrapper">
                {currentList.map((project, idx) => (
                  <div className="swiper-slide" key={`${project.title}-${idx}`}>
                    <article className="single-offer-inner">
                      <a href={project.href} target="_blank" rel="noreferrer" className="project-thumbnail">
                        <img src={project.image} alt={project.title} loading="lazy" />
                      </a>
                      <div className="project-content-area">
                        <div className="project-content-top">
                          <a href={project.href} target="_blank" rel="noreferrer" className="project-title-link">
                            <h4 className="project-title">{project.title}</h4>
                          </a>
                          <p className="project-disc">{project.desc}</p>
                        </div>
                        <div className="project-meta-bottom">
                          <span className="project-tag">{project.category}</span>
                          <a href={project.href} target="_blank" rel="noreferrer" className="btn-primary read-more-btn">
                            Read More
                            <span className="btn-arrow-sym" aria-hidden="true">↗</span>
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            ref={nextBtnRef}
            type="button"
            className="slider-arrow-btn project-next-btn"
            aria-label="Next project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
