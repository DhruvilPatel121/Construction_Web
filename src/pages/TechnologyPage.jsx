import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import BackToTopButton from '../components/common/BackToTopButton.jsx'
import PageBanner from '../components/common/PageBanner.jsx'


const informationTools = [
  {
    title: 'Online CCTV Monitoring',
    description: 'Real-time monitoring at all project locations enhances safety, security, and site management.',
  },
  {
    title: 'MS Project Integration',
    description: 'Advanced project management software facilitates precise scheduling, resource allocation, and progress tracking.',
  },
  {
    title: 'High-Speed Internet Connectivity',
    description: 'A robust Internet infrastructure ensures smooth communication and instant access to critical information.',
  },
]

const projectControlTools = [
  {
    title: 'Purchase Control',
    description: 'Authorization-based approval for requisitions and purchase orders enhances procurement accuracy and oversight.',
  },
  {
    title: 'Equipment Management',
    description: 'Online material reconciliation tools provide real-time insights into equipment and material usage, ensuring efficient resource management.',
  },
  {
    title: 'Timely Data Reporting',
    description: 'Automated data collection reduces manual effort, providing up-to-date information for swift and informed decision-making.',
  },
  {
    title: 'Remote Access and Data Retrieval',
    description: 'Easy access to data for remote projects facilitates smooth project management and operational efficiency.',
  },
]

const departmentSystems = [
  {
    title: 'Future Planning and Diversification',
    description: 'Technology aids in data-driven decision-making, supporting our strategic growth initiatives.',
  },
  {
    title: 'Tendering and Estimation',
    description: 'Accurate estimation tools and historical data analysis improve bid competitiveness and accuracy.',
  },
  {
    title: 'Project Monitoring and Coordination',
    description: 'Integrated systems facilitate seamless coordination across project phases, ensuring timely and high-quality delivery.',
  },
  {
    title: 'Project Execution',
    description: 'Real-time execution tracking allows for dynamic adjustments to work schedules and resource deployment.',
  },
  {
    title: 'Material Management',
    description: 'Inventory management systems optimize material procurement, minimize waste, and enhance resource utilization.',
  },
  {
    title: 'Billing and Accounting',
    description: 'Digital accounting systems ensure transparent, accurate, and timely financial management.',
  },
]

function TechnologyCard({ title, description }) {
  return (
    <article className="technology-page__card">
      <h3>{title}</h3>
      <span className="technology-page__rule" aria-hidden="true" />
      <p>{description}</p>
    </article>
  )
}

function TechnologySection({ title, description, cards, compact = false }) {
  return (
    <section className="technology-page__section">
      <h2>{title}</h2>
      <p className="technology-page__intro">{description}</p>
      <div className={`technology-page__grid${compact ? ' technology-page__grid--compact' : ''}`}>
        {cards.map((card) => (
          <TechnologyCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  )
}

export default function TechnologyPage() {
  return (
    <div className="page-shell technology-page">
      <Header />
      <main>
        <PageBanner page="technology" />

        <div className="technology-page__content">
          <TechnologySection
            title="Empowering Projects with Information Flow"
            description={'We believe that "Information is power," and the success of any project depends on the seamless flow of data. At Siddhi Constructions, we leverage cutting-edge technology to ensure efficiency, accuracy, and timely decision-making. All our project sites are equipped with state-of-the-art tools, including:'}
            cards={informationTools}
          />

          <section className="technology-page__section technology-page__mivan">
            <h2>Innovative Construction Techniques: Mivan Technology</h2>
            <p className="technology-page__intro">
              In addition to digital innovations, Siddhi Constructions also employs advanced construction methodologies like Aluminium Shuttering - Mivan Technology. This cutting-edge formwork system allows for faster construction cycles, higher structural quality, and better finishing standards. Mivan Technology enhances project efficiency, reduces labor costs, and ensures timely completion, making it ideal for large-scale and high-rise developments.
            </p>
          </section>

          <TechnologySection
            title="Technological Advancements for Enhanced Project Control"
            description="Our integrated technological solutions streamline operations and provide enhanced control over every aspect of our projects. The key advantages include:"
            cards={projectControlTools}
            compact
          />

          <TechnologySection
            title="Integrated IT Systems Across Key Departments"
            description="Our advanced IT infrastructure supports and enhances the operations of various departments, aligning every aspect of our business with our strategic objectives:"
            cards={departmentSystems}
            compact
          />

          <section className="technology-page__commitment">
            <h2>Commitment to Continuous Innovation</h2>
            <p>
              Siddhi Constructions is dedicated to investing in the latest technologies and continuously refining our processes. By embracing advanced construction techniques like Mivan Technology and integrating state-of-the-art digital tools, we empower our teams to work smarter, reduce costs, and deliver projects that exceed client expectations in terms of quality, safety, and efficiency.
            </p>
            <p>
              Explore how Siddhi Constructions&apos; technology-driven approach redefines excellence in the civil engineering industry, setting us apart as a leader in innovative and high-performance project delivery.
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}
