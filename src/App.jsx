import HomePage from './pages/HomePage.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'
import AchievementsPage from './pages/AchievementsPage.jsx'
import './styles/site.css'

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  if (path === '/about-us') return <AboutUsPage />
  if (path === '/achievements') return <AchievementsPage />

  return <HomePage />
}

export default App
