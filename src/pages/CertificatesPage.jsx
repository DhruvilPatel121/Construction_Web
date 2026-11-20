import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import BackToTopButton from '../components/common/BackToTopButton.jsx'
import PageBanner from '../components/common/PageBanner.jsx'
import SiddhiDoubleLayerWipeReveal from '../components/animations/SiddhiDoubleLayerWipeReveal.jsx'

const bannerImage = 'https://www.siddhiconstructions.com/assets/images/bread/bread3.jpg'
const certificateAssetBase = 'https://www.siddhiconstructions.com/assets/images/certificates'

const certificates = [
  {
    title: 'ISO 45001-2018',
    presenter: 'Occupational Health & Safety Management System',
    year: '2024 - 2027',
    image: `${certificateAssetBase}/iso-2018.jpeg`,
    imageAlt: 'ISO 45001-2018 certificate',
  },
  {
    title: 'ISO 9001:2015',
    presenter: 'Quality Management System',
    year: '2024-2027',
    image: `${certificateAssetBase}/iso-2015.jpeg`,
    imageAlt: 'ISO 9001:2015 certificate',
  },
  {
    title: 'ISO 14001:2015',
    presenter: 'Environmental Management System',
    year: '2024-2027',
    image: `${certificateAssetBase}/iso-200.jpeg`,
    imageAlt: 'ISO 14001:2015 certificate',
  },
]

function CertificateDetails({ certificate }) {
  return (
    <div className="awards-page__details">
      <h2>{certificate.title}</h2>
      <dl>
        <div>
          <dt>Award Given By :</dt>
          <dd>{certificate.presenter}</dd>
        </div>
        <div>
          <dt>Year :</dt>
          <dd>{certificate.year}</dd>
        </div>
      </dl>
    </div>
  )
}

export default function CertificatesPage() {
  return (
    <div className="page-shell awards-page certificates-page">
      <Header />
      <main>
        <PageBanner
          title="Certificates"
          watermark="CERTIFICATES"
          backgroundImage={bannerImage}
          breadcrumbs={[{ label: 'Home', href: '/home' }, { label: 'Certificates', current: true }]}
        />

        <section className="awards-page__list" aria-label="Siddhi Constructions certificates">
          {certificates.map((certificate, index) => (
            <article
              className={`awards-page__card${index % 2 === 0 ? ' awards-page__card--image-left' : ''}`}
              key={certificate.title}
            >
              <CertificateDetails certificate={certificate} />
              <SiddhiDoubleLayerWipeReveal className="awards-page__media">
                <img src={certificate.image} alt={certificate.imageAlt} loading="lazy" />
              </SiddhiDoubleLayerWipeReveal>
            </article>
          ))}
        </section>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}
