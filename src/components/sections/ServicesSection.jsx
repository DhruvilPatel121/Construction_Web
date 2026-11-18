import Reveal from '../common/Reveal.jsx'
import SectionLabel from '../common/SectionLabel.jsx'
import serviceBg from '../../assets/images/service-background.webp'
import icon11 from '../../assets/images/11.svg'
import icon12 from '../../assets/images/12.svg'
import icon13 from '../../assets/images/13.svg'
import icon14 from '../../assets/images/14.svg'

const services = [
  {
    icon: icon11,
    title: 'Civil Engineering & Project Management (PMC)',
    description: 'Civil Engineering & Project Management (PMC) involves the planning, design, execution, and supervision of construction projects to ensure quality, safety, and efficiency at every stage.',
  },
  {
    icon: icon12,
    title: 'EPC Services',
    description: 'EPC Services (Engineering, Procurement, and Construction) provide end-to-end project delivery, covering design, material procurement, and construction to ensure efficient, cost-effective, and timely completion.',
  },
  {
    icon: icon13,
    title: 'Construction & Infrastructure Contracting',
    description: 'Construction & Infrastructure Contracting involves executing residential, commercial, and infrastructure projects—covering planning, resource management and timely delivery to required standards.',
  },
  {
    icon: icon14,
    title: 'Real Estate & Organizing',
    description: 'Real Estate & Organizing involves property development, management, and transaction services along with efficient planning and coordination of real estate projects to ensure smooth execution and optimal value.',
  },
]

export default function ServicesSection() {
  return (
    <section className="services-section-five" id="services">
      <div className="services-container-full">
        <div className="services-main-layout">
          {/* Left Column Services */}
          <div className="services-column">
            <Reveal className="service-card border-bottom" delay={0}>
              <div className="service-card-header">
                <div className="service-icon-box">
                  <img src={services[0].icon} alt="" />
                </div>
                <h4 className="service-title">{services[0].title}</h4>
              </div>
              <p className="service-disc">{services[0].description}</p>
            </Reveal>

            <Reveal className="service-card" delay={60}>
              <div className="service-card-header">
                <div className="service-icon-box">
                  <img src={services[1].icon} alt="" />
                </div>
                <h4 className="service-title">{services[1].title}</h4>
              </div>
              <p className="service-disc">{services[1].description}</p>
            </Reveal>
          </div>

          {/* Center Callout Banner with background */}
          <Reveal className="services-center-banner" delay={80}>
            <div className="center-banner-bg" style={{ backgroundImage: `url(${serviceBg})` }}>
              <div className="center-banner-overlay" />
              <div className="center-banner-content">
                <SectionLabel className="center-banner-label">Service we provide</SectionLabel>
                <h2 className="center-banner-title">
                  WE’RE THE LEADER IN<br />THE INDUSTRY
                </h2>
                <p className="center-banner-text">
                  With a legacy of excellence since 1986, Siddhi Constructions provides high-value civil engineering and infrastructure solutions in Surat, Gujarat.
                </p>
                <a href="#contact" className="btn-primary center-contact-btn">
                  Contact Us
                  <span className="btn-arrow-sym" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Column Services */}
          <div className="services-column">
            <Reveal className="service-card border-bottom" delay={100}>
              <div className="service-card-header">
                <div className="service-icon-box">
                  <img src={services[2].icon} alt="" />
                </div>
                <h4 className="service-title">{services[2].title}</h4>
              </div>
              <p className="service-disc">{services[2].description}</p>
            </Reveal>

            <Reveal className="service-card" delay={140}>
              <div className="service-card-header">
                <div className="service-icon-box">
                  <img src={services[3].icon} alt="" />
                </div>
                <h4 className="service-title">{services[3].title}</h4>
              </div>
              <p className="service-disc">{services[3].description}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
