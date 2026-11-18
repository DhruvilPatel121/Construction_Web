import Reveal from '../common/Reveal.jsx'
import SectionLabel from '../common/SectionLabel.jsx'

import clientWaaree from '../../assets/images/client-hiraare.png'
import clientTata from '../../assets/images/client-tata.webp'
import clientAdaniSolar from '../../assets/images/client-adani-solar.webp'
import clientRajhans from '../../assets/images/client-rajhans.webp'
import clientAdani from '../../assets/images/client-adani.webp'
import clientReliance from '../../assets/images/client-reliance.webp'
import clientUtopia from '../../assets/images/ass.webp'
import clientEssar from '../../assets/images/client-essar.webp'
import clientAmul from '../../assets/images/client-amul.png'
import clientLt from '../../assets/images/client-lt.webp'
import clientGspc from '../../assets/images/client-gspc.webp'
import clientSmimer from '../../assets/images/client-smimer.webp'
import clientSmc from '../../assets/images/client-smc.webp'
import clientKamrej from '../../assets/images/client-kamrej.webp'
import clientBlackink from '../../assets/images/client-blackink.webp'
import clientDorf from '../../assets/images/client-dorf.webp'
import clientEssar2 from '../../assets/images/client-essar.webp'
import clientBhilosa from '../../assets/images/client-bhilosa.webp'
import contactBg from '../../assets/images/contact-background.webp'

const clientList = [
  { name: 'Waaree', logo: clientWaaree },
  { name: 'TATA Enterprise', logo: clientTata },
  { name: 'Adani Solar', logo: clientAdaniSolar },
  { name: 'Rajhans', logo: clientRajhans },
  { name: 'Adani', logo: clientAdani },
  { name: 'Reliance Energy', logo: clientReliance },
  { name: 'Avadh Utopia', logo: clientUtopia, wide: true },
  { name: 'Essar Steel', logo: clientEssar, wide: true },
  { name: 'Amul', logo: clientAmul },
  { name: 'Larsen & Toubro', logo: clientLt, wide: true },
  { name: 'GSPC', logo: clientGspc, wide: true },
  { name: 'SMIMER', logo: clientSmimer, wide: true },
  { name: 'Surat Municipal Corporation', logo: clientSmc, wide: true },
  { name: 'Kamrej', logo: clientKamrej, wide: true },
  { name: 'Black Ink Surat', logo: clientBlackink },
  { name: 'Dorf Ketal', logo: clientDorf, wide: true },
  { name: 'Essar Steel', logo: clientEssar2, wide: true },
  { name: 'Bhilosa Industries', logo: clientBhilosa, wide: true },
]

export default function ClientsSection() {
  return (
    <section className="rts-brand-area rts-section-gap section-paper" id="clients">
      <div className="site-container">
        {/* Clients Section Header */}
        <Reveal className="clients-title-between">
          <div className="title-left-align-five">
            <SectionLabel>Our Clients</SectionLabel>
            <h2 className="section-title">TRUSTED BY OUR CLIENTS</h2>
          </div>
          <a
            href="https://www.siddhiconstructions.com/our-clients"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            View More Clients
          </a>
        </Reveal>

        {/* 6-column grid of 18 client cards, 150px high as in the reference */}
        <div className="clients-logo-grid">
          {clientList.map((client, idx) => (
            <Reveal
              key={`${client.name}-${idx}`}
              delay={(idx % 6) * 35}
              className="client-brand-card"
            >
              <div className="client-logo-wrapper">
                <img
                  className={client.wide ? 'logo-wide' : undefined}
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Call to Action Banner (Ready to build with Surat's Trusted Experts?) */}
        <Reveal className="call-to-action-wrapper" delay={80} id="contact">
          <div
            className="call-to-action-card"
            style={{
              backgroundImage: `linear-gradient(rgba(20, 20, 22, 0.88), rgba(20, 20, 22, 0.94)), url(${contactBg})`,
            }}
          >
            <div className="cta-inner-content">
              <h2 className="cta-title">
                Ready to build with Surat’s Trusted{' '}
                <br className="cta-title-break" />
                Experts?
              </h2>
              <p className="cta-disc">
                Partner with a government-approved civil contractor that has been defining engineering
                excellence since 1986. From high-value industrial plants to premium residential
                hubs, our team is ready to turn your vision into a robust structural reality.
              </p>
              <a
                href="mailto:hr@siddhiconstructions.com"
                className="btn-primary cta-btn"
              >
                Contact Us
                <span className="btn-arrow-sym" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
