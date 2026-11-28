import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import BackToTopButton from '../components/common/BackToTopButton.jsx'
import PageBanner from '../components/common/PageBanner.jsx'
import prashantImage from '../assets/images/team.png'
import sagarImage from '../assets/images/team1.png'

const managementLayout = [
  {
    type: 'profile',
    name: 'Mr. Prashant R. Dandavate',
    experience: '44 Years of Experience',
    image: prashantImage,
  },
  {
    type: 'overview',
    title: 'Management',
    description: 'Behind every success story lies a robust foundation, serving as an inspiring force for others to emulate. In alignment with this narrative, Siddhi Constructions boasts a solid base of experts who lead the entire team toward new heights of success. Their wealth of knowledge, visionary approach, and unwavering commitment fortify the pillars of our success story for years to come. Let\'s introduce you to the leaders behind this remarkable journey:',
    contacts: [
      { label: '+9182384 33406', href: 'tel:+918238433406', type: 'phone' },
      { label: 'hr@siddhiconstructions.com', href: 'mailto:hr@siddhiconstructions.com', type: 'email' },
    ],
  },
  {
    type: 'profile',
    name: 'Mr. Sagar R. Dandavate',
    experience: '40 Years of Experience',
    image: sagarImage,
  },
]

const deskContent = [
  { text: 'Founded in 1987, Siddhi Constructions embodies the vision of conducting exemplary business and delivering top-notch construction. Led by Prashant Ramesh Dandavate and Sagar Ramesh Dandavate, industry experts with over 30+ years of experience, Siddhi Constructions stands as an award-winning construction firm. Rooted in the principles of value, safety, quality, and schedule, our company is committed to setting new standards in the construction industry.' },
  { label: 'Value:', text: 'Our value stems from a dedicated team and abundant resources. Carefully selected for their positive attitudes and capabilities, our local team shares a can-do attitude. Engaging Siddhi Constructions ensures a team that prioritizes your project, utilizing local resources for subcontractor prequalification. Our respectful and reciprocal relationships with subcontractors, suppliers, and city officials contribute to our commitment to value.' },
  { label: 'Safety:', text: 'Safety is paramount to us, reflecting our care for people and clients. Managed by a dedicated safety coordinator, our comprehensive safety program not only maintains an impeccable record but also aligns with owner requirements, resulting in lower insurance costs.' },
  { label: 'Quality:', text: 'We enforce daily monitoring to ensure the quality and adherence to plans of installed materials. Our qualified supervisors uphold rigorous quality control, minimizing replacements and facilitating successful inspections, ultimately saving time and money.' },
  { label: 'Schedule:', text: 'Recognizing the value of time, our well-defined schedule serves as a roadmap for the project. We meticulously coordinate delivery and inspection dates, tracking long-lead items to verify on-time delivery. Whether set by a fixed end date or cost-effective sequencing, our schedules align with efficient operations.' },
  { text: 'At Siddhi Constructions, we are dedicated to exemplifying excellence, innovation, and commitment in every construction endeavor.' },
]

function ManagementProfile({ profile }) {
  return (
    <article className="management-page__profile">
      <img src={profile.image} alt={profile.name} />
      <div className="management-page__profile-caption">
        <h2>{profile.name}</h2>
        <p>{profile.experience}</p>
      </div>
    </article>
  )
}

function ManagementOverview({ item }) {
  return (
    <section className="management-page__overview" aria-labelledby="management-title">
      <h2 id="management-title">{item.title}</h2>
      <p>{item.description}</p>
      <div className="management-page__contacts">
        {item.contacts.map((contact) => (
          <a key={contact.href} href={contact.href}>
            {contact.type === 'phone' ? (
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
            )}
            <span>{contact.label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default function ManagementPage() {
  return (
    <div className="page-shell management-page">
      <Header />
      <main>
        <PageBanner page="management" />
        <section className="management-page__content" aria-label="Siddhi Constructions leadership">
          <div className="management-page__leadership">
            {managementLayout.map((item) => (
              item.type === 'profile'
                ? <ManagementProfile key={item.name} profile={item} />
                : <ManagementOverview key={item.title} item={item} />
            ))}
          </div>
          <section className="management-page__desk" aria-labelledby="management-desk-title">
            <h2 id="management-desk-title">From the Management&apos;s Desk...</h2>
            {deskContent.map((paragraph, index) => (
              <p key={`${paragraph.label ?? 'paragraph'}-${index}`}>
                {paragraph.label && <strong>{paragraph.label} </strong>}
                {paragraph.text}
              </p>
            ))}
          </section>
        </section>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}
