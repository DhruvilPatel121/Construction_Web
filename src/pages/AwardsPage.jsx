import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import BackToTopButton from '../components/common/BackToTopButton.jsx'
import PageBanner from '../components/common/PageBanner.jsx'
import SiddhiDoubleLayerWipeReveal from '../components/animations/SiddhiDoubleLayerWipeReveal.jsx'
import awardGuardian from '../assets/images/bhupendra.jpeg'
import awardLegends from '../assets/images/award-gujarat.jpg'
import awardGreenBuilding from '../assets/images/award-igbc.jpg'

const bannerImage = 'https://www.siddhiconstructions.com/assets/images/bread/bread3.jpg'
const officialAssetBase = 'https://www.siddhiconstructions.com/assets/images'

const awards = [
  {
    title: 'The Guardian of City - 2022',
    presenter: 'GUJARAT GUARDIAN',
    year: '2022',
    description: "'The Guardian of City' Award given by leading daily newspaper of Gujarat - 'Gujarat Guardian' to Mr. Sagar Dandavate for recognizing his dedication & innovation with civil engineering projects executed by 'Siddhi Constructions'.",
    image: awardGuardian,
    imageAlt: 'The Guardian of City award presentation',
    imagePosition: 'right',
  },
  {
    title: 'ISO 9001-2015',
    presenter: 'BMS',
    year: '2019 - 2022',
    image: `${officialAssetBase}/certificates/bms.jpg`,
    imageAlt: 'ISO 9001-2015 certificate',
    imagePosition: 'left',
  },
  {
    title: 'CRISIL MSE-1',
    presenter: 'CRISIL',
    year: '2019-2020',
    image: `${officialAssetBase}/certificates/crisil.jpg`,
    imageAlt: 'CRISIL MSE-1 certificate',
    imagePosition: 'right',
  },
  {
    title: 'Legends of Surat 2018-19',
    presenter: 'GUJARAT MITRA',
    year: '2018',
    description: "Legends of Surat 2018' Award given by leading daily newspaper of Gujarat - 'Gujarat Mitra' to Mr. Prashant Dandavate for recognizing his hardwork & innovation with civil engineering projects executed by 'Siddhi Constructions'.",
    image: awardLegends,
    imageAlt: 'Legends of Surat award presentation',
    imagePosition: 'left',
  },
  {
    title: 'Green Building Award - GOLD',
    presenter: 'INDIAN GREEN BUILDING COUNCIL (IGBC) & CONFEDERATION OF INDIAN INDUSTRIES (CII)',
    year: '2018',
    description: "'IGBC Green New Buildings - Gold 2018' Award is given by 'Indian Green Building Council (IGBC) & Confederation of Indian Industries (CII)' for the construction project of 'The Surat District Co. Op. Bank Ltd. - Surat' Head Office Building at Surat.",
    image: awardGreenBuilding,
    imageAlt: 'Green Building Award recognition',
    imagePosition: 'right',
  },
  {
    title: 'Out Standing Concrete Structure of Surat',
    presenter: 'ICEA (SURAT) & ULTRA TECH',
    year: '2017-18',
    description: "Certificate of merit awarded to 'Siddhi Constructions' in recognition of being the civil contractor for the project 'FIONAA' at Udhna-Magdalla Road, Surat. Which has been conferred the 'The Institute of Civil Engineers & Architects-Surat' & 'Ultra Tech Award' for 'Out Standing Structure of Surat year 2017-18' in the category of Multi Dwelling Residential Unit.",
    image: `${officialAssetBase}/awards/ultraTech.jpg`,
    imageAlt: 'Outstanding Concrete Structure of Surat award',
    imagePosition: 'left',
  },
  {
    title: 'Rashtriya Nirman Ratan Award',
    presenter: 'ECONOMIC GROWTH SOCIETY OF INDIA',
    year: '2015',
    description: "The president & members of 'Economic Growth Society of India' presented 'Rashtriya Nirman Ratan Award' to Mr. Sagar Dandavate in recognition of sterling merit, excellence performance and outstanding contribution for the nation on the eve of national seminar on 31st January 2015 at Panaji, Goa.",
    image: `${officialAssetBase}/certificates/economic-removebg-preview.png`,
    imageAlt: 'Rashtriya Nirman Ratan Award certificate',
    imagePosition: 'right',
  },
  {
    title: 'SGCCI - Patron Member',
    presenter: 'SOUTH GUJARAT CHAMBER OF COMMERCE & INDUSTRIES - SURAT',
    year: '2010',
    description: "The president & members of 'Economic Growth Society of India' presented 'Rashtriya Nirman Ratan Award' to Mr. Sagar Dandavate in recognition of sterling merit, excellence performance and outstanding contribution for the nation on the eve of national seminar on 31st January 2015 at Panaji, Goa.",
    image: `${officialAssetBase}/certificates/sgcci.jpg`,
    imageAlt: 'SGCCI Patron Member certificate',
    imagePosition: 'left',
  },
  {
    title: 'Credai Member',
    presenter: 'Confederation of Real Estate Developers Association of India (CREDAI)',
    year: '2009',
    image: `${officialAssetBase}/certificates/credai.jpg`,
    imageAlt: 'Credai Member certificates',
    imagePosition: 'right',
  },
]

function AwardDetails({ award }) {
  return (
    <div className="awards-page__details">
      <h2>{award.title}</h2>
      <dl>
        <div>
          <dt>Award Given By :</dt>
          <dd>{award.presenter}</dd>
        </div>
        <div>
          <dt>Year :</dt>
          <dd>{award.year}</dd>
        </div>
        {award.description && (
          <div>
            <dt>Description :</dt>
            <dd>{award.description}</dd>
          </div>
        )}
      </dl>
    </div>
  )
}

export default function AwardsPage() {
  return (
    <div className="page-shell awards-page">
      <Header />
      <main>
        <PageBanner
          title="Awards"
          watermark="AWARDS"
          backgroundImage={bannerImage}
          breadcrumbs={[{ label: 'Home', href: '/home' }, { label: 'Awards', current: true }]}
        />

        <section className="awards-page__list" aria-label="Siddhi Constructions awards">
          {awards.map((award) => (
            <article
              className={`awards-page__card awards-page__card--image-${award.imagePosition}`}
              key={award.title}
            >
              <AwardDetails award={award} />
              <SiddhiDoubleLayerWipeReveal className="awards-page__media">
                <img src={award.image} alt={award.imageAlt} loading="lazy" />
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
