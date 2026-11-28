import { useEffect, useRef, useState } from 'react'
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import BackToTopButton from '../components/common/BackToTopButton.jsx'
import PageBanner from '../components/common/PageBanner.jsx'

const assetBase = 'https://www.siddhiconstructions.com/assets/images'

const monumentalProjects = [
  {
    title: 'Surat International Exhibition & Convention Centre (SIECC)',
    description: 'Developed for The Southern Gujarat Chamber of Commerce and Industry, this project serves as a major hub for trade exhibitions and large-scale events in the region.',
    image: `${assetBase}/about/front_slider1.jpg`,
  },
  {
    title: 'SMIMER Hospital (Surat Municipal Institute)',
    description: 'A major public healthcare facility built for Surat Municipal Corporation, contributing significantly to medical infrastructure and Industry, this project serves as a major hub for trade exhibitions and large-scale events in the region.',
    image: `${assetBase}/about/smimmer.jpg`,
  },
  {
    title: 'Krushi Bazar (APMC Market Yard)',
    description: 'The Krushi Bazar (APMC Market Yard) is a large-scale agricultural trading infrastructure developed for the Agricultural Produce Market Committee (APMC). This project plays a vital role in strengthening the agricultural economy by providing a well-organized and modern marketplace for farmers, traders, and wholesalers.',
    image: `${assetBase}/about/KrishiBazaar1.JPG`,
  },
  {
    title: 'First CNG Station for GSPC',
    description: 'The First CNG Station for GSPC marks a significant milestone in the region’s transition toward cleaner and more sustainable energy solutions. Developed for Gujarat State Petroleum Corporation (GSPC), this project supports the growing demand for eco-friendly fuel alternatives in the transportation sector.',
    image: `${assetBase}/about/gspc.jpg`,
  },
  {
    title: 'Nirali Cancer & Multispeciality Hospital',
    description: 'A modern healthcare facility associated with the Larsen & Toubro Group and Nirali Memorial Medical Trust, enhancing specialized medical services.',
    image: `${assetBase}/about/nirali.jpeg`,
  },
]

const civicProjects = [
  {
    heading: 'Project Inaugurated by Hon’ble President of BJP & Home Minister Of India Shri Amitbhai Shah.',
    title: 'Head office of Surat District Co. Bank',
    description: 'And Also we take the pride in completing a Monumental project which were inaugurated by our Honourable President of BJP & Home Minister Of India Shri Amitbhai Shah.',
    image: `${assetBase}/about/bankk.jpg`,
  },
  {
    heading: 'Project Inaugurated by Hon’ble Chief Minister Vijay Rupani',
    title: 'BJP KARYALA (PANDIT DINDAYAL BHAVAN)',
    description: 'Indeed, a new segment requires high commitment, expertise, and ability to challenge the traditional path being followed for ages, yet we overcome above all challenges and stand out for what we believe in.',
    image: `${assetBase}/about/karyalay.jpg`,
  },
]

function useWipeReveal() {
  const ref = useRef(null)
  const [hasRevealed, setHasRevealed] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      setHasRevealed(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, hasRevealed }
}

function CivicProjectCard({ project }) {
  const { ref, hasRevealed } = useWipeReveal()

  return (
    <article
      ref={ref}
      className={`achievements-civic-card achievement-wipe-card${hasRevealed ? ' is-revealing' : ''}`}
    >
      <span className="achievement-wipe-card__layer achievement-wipe-card__layer--red" aria-hidden="true" />
      <span className="achievement-wipe-card__layer achievement-wipe-card__layer--black" aria-hidden="true" />
      <h2>{project.heading}</h2>
      <img src={project.image} alt={project.title} loading="lazy" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </article>
  )
}

export default function AchievementsPage() {
  return (
    <div className="page-shell achievements-page">
      <Header />
      <main>
        <PageBanner page="achievements" />

        <section className="achievements-rating" aria-labelledby="ratings-title">
          <div className="achievements-rating__grid">
            <img src={`${assetBase}/about/achivement.jpg`} alt="Inauguration pictures featuring dignitaries" />
            <div className="achievements-rating__copy">
              <p className="achievements-eyebrow">Achievements of Siddhi Constructions</p>
              <h2 id="ratings-title">Prestigious Ratings<br />&amp; Certifications</h2>
              <p>Siddhi Constructions is the first construction company of Surat which received the highest standard of rating by NSIC CRISIL as ‘MSE 1’ which stands for the highest financial growth &amp; growing company.</p>
              <p>The Company is certified with the ‘ISO 9001-2015’ Certificate by BMS Cert &amp; DAC which stands for the Quality Management System of the Company.</p>
            </div>
          </div>
        </section>

        <section className="achievements-monumental" aria-labelledby="monumental-title">
          <header className="achievements-monumental__header">
            <p className="achievements-eyebrow">About our Achievements</p>
            <h2 id="monumental-title">Monumental Projects Inaugurated by<br />Hon’ble Prime Minister Narendra Modi</h2>
          </header>
          <div className="achievements-project-list">
            {monumentalProjects.map((project, index) => (
              <article className={`achievements-project${index % 2 ? ' achievements-project--reverse' : ''}`} key={project.title}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="achievements-project__copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="achievements-monumental__note">We takes the pride of completed a Monumental project which was inaugurated by our Honourable Chief Minister Shri Vijaybhai Rupani.</p>
        </section>

        <section className="achievements-civic" aria-label="More inaugurated projects">
          <div className="achievements-civic__grid">
            {civicProjects.map((project) => (
              <CivicProjectCard project={project} key={project.title} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}
