import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import BackToTopButton from '../components/common/BackToTopButton.jsx'
import PageBanner from '../components/common/PageBanner.jsx'
import companyLogo from '../assets/images/company-logo.png'

const organizationBranches = [
  {
    director: 'Director Finance',
    departments: [
      {
        title: 'Finance & HR',
        roles: ['Accounts Head', 'Sr. Accounts / Taxation', 'HR Manager', 'Relationship Manager'],
      },
      {
        title: 'Purchase & Admin',
        roles: ['Purchase Manager', 'Store Keeper', 'Admin Manager', 'Admin Executive'],
      },
    ],
  },
  {
    director: 'Director Technical',
    departments: [
      {
        title: 'Technical Execution',
        roles: ['Head Tech Executive', 'Project Manager', 'Quality Control Officer', 'Safety Officer'],
      },
      {
        title: 'Tendering & Ops',
        roles: ['Head Tendering', 'Tendering Manager', 'Site Supervisor', 'Deputy Engineer'],
      },
    ],
  },
]

function OrganizationBranch({ branch }) {
  return (
    <section className="organization-chart__branch" aria-labelledby={`${branch.director.replaceAll(' ', '-').toLowerCase()}-title`}>
      <h2 id={`${branch.director.replaceAll(' ', '-').toLowerCase()}-title`}>{branch.director}</h2>
      <span className="organization-chart__connector" aria-hidden="true" />
      <div className="organization-chart__departments">
        {branch.departments.map((department) => (
          <section className="organization-chart__department" key={department.title} aria-labelledby={`${department.title.replaceAll(' ', '-').toLowerCase()}-title`}>
            <h3 id={`${department.title.replaceAll(' ', '-').toLowerCase()}-title`}>{department.title}</h3>
            <div className="organization-chart__roles">
              {department.roles.map((role) => (
                <button className="organization-chart__role" key={role} type="button">
                  {role}
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

export default function OrganizationChartPage() {
  return (
    <div className="page-shell organization-chart-page">
      <Header />
      <main>
        <PageBanner page="organizationChart" />
        <section className="organization-chart" aria-label="Siddhi Constructions organization chart">
          <header className="organization-chart__intro">
            <img src={companyLogo} alt="Siddhi Constructions" />
            <p>A robust foundation of experts leading the way since 1986.</p>
          </header>
          <div className="organization-chart__branches">
            {organizationBranches.map((branch) => (
              <OrganizationBranch key={branch.director} branch={branch} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}
