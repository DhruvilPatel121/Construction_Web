import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'
import AchievementsPage from './pages/AchievementsPage.jsx'
import AwardsPage from './pages/AwardsPage.jsx'
import './styles/site.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
