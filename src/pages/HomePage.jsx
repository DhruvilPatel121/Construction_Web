import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import BackToTopButton from '../components/common/BackToTopButton.jsx'
import AboutSection from '../components/sections/AboutSection.jsx'
import AwardsSection from '../components/sections/AwardsSection.jsx'
import ClientsSection from '../components/sections/ClientsSection.jsx'
import HeroSection from '../components/sections/HeroSection.jsx'
import ImpactSection from '../components/sections/ImpactSection.jsx'
import LeadershipSection from '../components/sections/LeadershipSection.jsx'
import ProjectsSection from '../components/sections/ProjectsSection.jsx'
import ServicesSection from '../components/sections/ServicesSection.jsx'

export default function HomePage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <LeadershipSection />
        <ImpactSection />
        <AwardsSection />
        <ClientsSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}
