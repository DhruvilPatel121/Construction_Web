import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import BackToTopButton from '../components/common/BackToTopButton.jsx'
import PageBanner from '../components/common/PageBanner.jsx'

const assetBase = 'https://www.siddhiconstructions.com/assets/images'

const qualityObjectives = [
  {
    title: 'Adherence to Specifications:',
    text: 'Our primary commitment is to consistently deliver products that align with set specifications, contractual agreements, and comply with regulatory and statutory requirements. This ensures that each project meets the highest standards of quality.',
  },
  {
    title: 'Enhanced Customer Satisfaction:',
    text: 'We strive for enhanced customer satisfaction by not only meeting but surpassing expectations. Achieving this involves a dual focus on cost-effectiveness and the timely completion of projects, contributing to a positive and seamless experience for our clients.',
  },
  {
    title: 'Staff Motivation and Training:',
    text: 'Recognizing our people as valuable assets, we are dedicated to motivating and training our staff continually. This ongoing process is designed to elevate their skill sets and contribute to the continuous improvement of our quality standards.',
  },
  {
    title: 'Procedural Excellence:',
    text: 'We are committed to staying abreast of international best practices in Quality Management. This commitment involves regularly updating and implementing procedures that align with and often exceed International Quality Management Standards.',
  },
]

const certificates = [
  {
    src: `${assetBase}/certificates/bms.jpg`,
    alt: 'ISO 9001 certificate from BMS',
  },
  {
    src: `${assetBase}/certificates/crisil.jpg`,
    alt: 'CRISIL MSE rating certificate',
  },
  {
    src: `${assetBase}/certificates/iso.png`,
    alt: 'ISO 9001, ISO 14001, and ISO 45001 certificates',
  },
]

export default function QualityAssurancePage() {
  return (
    <div className="page-shell quality-assurance-page">
      <Header />
      <main>
        <PageBanner
          title="Quality"
          watermark="QUALITY"
          backgroundImage={`${assetBase}/bread/bread1.jpg`}
          breadcrumbs={[
            { label: 'Home', href: '/home' },
            { label: 'Quality', current: true },
          ]}
        />

        <section className="quality-assurance-page__content" aria-labelledby="quality-assurance-title">
          <h2 id="quality-assurance-title">Quality Assurance</h2>
          <p>
            At Siddhi Constructions, our unwavering commitment to quality is aimed at elevating customer satisfaction by delivering top-notch products within stipulated timelines, all while fostering a safe working environment. We dedicate ourselves to continual improvement across all facets of our business, guided by the following quality objectives:
          </p>
          <ul>
            {qualityObjectives.map((objective) => (
              <li key={objective.title}>
                <strong>{objective.title}</strong> {objective.text}
              </li>
            ))}
          </ul>
          <p className="quality-assurance-page__statement">
            At Siddhi Constructions, quality is not just a benchmark, it&apos;s a journey of perpetual improvement, ensuring that our clients receive nothing but the best in every project we undertake.
          </p>

          <div className="quality-assurance-page__gallery" aria-label="Quality certificates">
            {certificates.map((certificate) => (
              <figure key={certificate.src}>
                <img src={certificate.src} alt={certificate.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}
