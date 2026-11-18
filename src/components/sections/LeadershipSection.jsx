import Reveal from '../common/Reveal.jsx'
import teamImgPrashant from '../../assets/images/team.png'
import teamImgSagar from '../../assets/images/team1.png'

export default function LeadershipSection() {
  return (
    <section className="leadership-section rts-section-gap section-paper" id="leadership">
      <div className="site-container">
        <Reveal className="leadership-header-center">
          <h2 className="section-title text-center">Meet Our Leadership</h2>
        </Reveal>

        <Reveal className="leadership-layout-row" delay={60}>
          {/* Leader 1: Mr. Prashant R. Dandavate */}
          <div className="leader-card-box">
            <div className="leader-photo-wrap">
              <img
                src={teamImgPrashant}
                alt="Mr. Prashant R. Dandavate"
                className="leader-img"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="leader-red-badge">
              <h4 className="leader-name">Mr. Prashant R. Dandavate</h4>
              <p className="leader-exp">44 Years of Experience</p>
            </div>
          </div>

          {/* Center Story/Management Copy */}
          <div className="leadership-center-story">
            <h3 className="story-title">Management</h3>
            <p className="story-text">
              Behind every success story lies a robust foundation, serving as an inspiring force for others to emulate. In alignment with this narrative, Siddhi Constructions boasts a solid base of experts who lead the entire team toward new heights of success. Their wealth of knowledge, visionary approach, and unwavering commitment fortify the pillars of our success story for years to come. Let's introduce you to the leaders behind this remarkable journey:
            </p>
            <a
              href="https://www.siddhiconstructions.com/management"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Read more
              <span className="btn-arrow-sym" aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Leader 2: Mr. Sagar R. Dandavate */}
          <div className="leader-card-box">
            <div className="leader-photo-wrap">
              <img
                src={teamImgSagar}
                alt="Mr. Sagar R. Dandavate"
                className="leader-img"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="leader-red-badge">
              <h4 className="leader-name">Mr. Sagar R. Dandavate</h4>
              <p className="leader-exp">40 Years of Experience</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
