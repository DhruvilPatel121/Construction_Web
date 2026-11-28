import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import BackToTopButton from '../components/common/BackToTopButton.jsx'
import PageBanner from '../components/common/PageBanner.jsx'

const assetCards = [
  {
    title: 'Construction Machinery',
    description: 'Our fleet of construction machinery stands as a symbol of efficiency and precision. From earthmoving equipment to high-capacity cranes, we deploy the latest models that guarantee optimal performance, ensuring projects are executed seamlessly.',
  },
  {
    title: 'Plants and Facilities',
    description: 'Siddhi Constructions boasts advanced plants and facilities that adhere to the highest industry standards. Our concrete batching plants, asphalt plants, and other specialized facilities contribute to the production of materials with uncompromised quality.',
  },
  {
    title: 'Modern Equipments',
    description: 'Equipped with a range of modern tools and equipments, we enhance productivity and accuracy on construction sites. Our inventory includes the latest surveying instruments, material testing equipment, and more, enabling us to maintain.',
  },
  {
    title: 'Cutting-Edge Tools',
    description: 'From power tools to specialized instruments, Siddhi Constructions integrates cutting-edge tools into every aspect of our projects. These tools, backed by precision engineering, empower our skilled workforce to deliver exceptional results.',
  },
]

const machinery = [
  ['Boom Placer (36 mtr Boom)', 2],
  ['Tower Crane (60mtr Boom)', 2],
  ['Tower Crane (50mtr Boom)', 5],
  ['Batching Plant (CP - 60)', 2],
  ['Batching Plant (CP - 30)', 4],
  ['Batching Plant - CP - 18', 5],
  ['Batching Plant RM 1050', 12],
  ['Batching Plant RM 850', 15],
  ['Transit Concrete Carrying Equipment', 15],
  ['Concrete Pump', 12],
  ['Material Hoist (Lift) (upto 45mtr height)', 25],
  ['Excavator', 5],
  ['Dumpers / Truck', 6],
  ['Static Roller', 3],
  ['Vibro Roller', 3],
  ['Weight Bridge', 7],
  ['Power Generator (125 Kva)', 5],
  ['Power Generator (82.5 Kva)', 3],
  ['Power Generator (25 Kva)', 7],
  ['De-watering pumps (7 & 5 HP)', 15],
  ['Total Station', 10],
  ['Welding Machines', 25],
  ['Concrete Cube Testing Machine', 8],
]

export default function EquippedPage() {
  return (
    <div className="page-shell equipped-page">
      <Header />
      <main>
        <PageBanner page="equipped" />

        <section className="equipped-page__overview" aria-labelledby="equipped-overview-title">
          <h2 id="equipped-overview-title">Explore the Pinnacle of Construction Excellence with Siddhi Constructions</h2>
          <p>
            At Siddhi Constructions, we leverage cutting-edge construction machinery, plants, equipment, and tools to set new benchmarks in the industry. Our commitment to delivering top-notch quality in every project is reflected in the state-of-the-art technologies we employ. Here&apos;s a glimpse into our advanced construction arsenal.
          </p>
        </section>

        <section className="equipped-page__cards" aria-label="Equipment capabilities">
          {assetCards.map((card) => (
            <article className="equipped-page__card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </section>

        <section className="equipped-page__assets" aria-labelledby="equipment-assets-title">
          <span className="section-pre-title">Our Assets</span>
          <h2 id="equipment-assets-title">Machineries, Plants &amp; Equipments</h2>
          <div className="equipped-page__table-wrap">
            <table className="equipped-page__table">
              <thead>
                <tr>
                  <th scope="col">Sr. No.</th>
                  <th scope="col">Name of Machineries / Plants &amp; Equipments</th>
                  <th scope="col">Nos</th>
                </tr>
                <tr>
                  <th colSpan="3" scope="colgroup">General Machineries / Plants &amp; Equipments</th>
                </tr>
              </thead>
              <tbody>
                {machinery.map(([name, quantity], index) => (
                  <tr key={name}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}
