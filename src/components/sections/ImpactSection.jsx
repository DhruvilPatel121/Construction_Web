import CountUp from '../animations/CountUp.jsx'
import Reveal from '../common/Reveal.jsx'
import SectionLabel from '../common/SectionLabel.jsx'

import icon06 from '../../assets/images/06.svg'
import iconBuilding from '../../assets/images/building-address.png'
import icon08 from '../../assets/images/08.svg'
import iconResource from '../../assets/images/resource-allocation.png'
import impactBg from '../../assets/images/impact-background.webp'

const stats = [
  {
    icon: icon06,
    value: 150,
    suffix: '+',
    label: 'Professional Technocrats',
  },
  {
    icon: iconBuilding,
    value: 350,
    suffix: '+',
    label: 'Landmark Projects',
  },
  {
    icon: icon08,
    value: 150,
    suffix: '+',
    label: 'Prestigious Clients',
  },
  {
    icon: iconResource,
    value: 2500,
    suffix: '+',
    label: 'Constraction Human Resource',
  },
]

export default function ImpactSection() {
  return (
    <section
      className="impact-section"
      id="impact"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(28, 28, 30, 0.7) 0%, rgba(28, 28, 30, 0.96) 70%, #1c1c1e 100%), url(${impactBg})`,
      }}
    >
      <div className="site-container">
        <Reveal className="impact-heading">
          <div className="impact-title">
            <SectionLabel className="impact-label">About our company</SectionLabel>
            <h2 className="impact-title-heading">
              We’re The Leader In <br />
              Construction Industry
            </h2>
          </div>
        </Reveal>

        <div className="impact-stats">
          {stats.map((item, idx) => (
            <Reveal
              key={item.label}
              delay={idx * 60}
              className="impact-stat"
            >
              <div className="impact-stat-icon">
                <img src={item.icon} alt="" />
              </div>
              <div className="counter-wrapper">
                <h2 className="impact-stat-value">
                  <CountUp value={item.value} suffix={item.suffix} />
                </h2>
                <span className="impact-stat-label">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
