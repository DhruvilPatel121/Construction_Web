<<<<<<< HEAD
import AppRoutes from './routes/AppRoutes.jsx'
import './styles/site.css'

function App() {
  return <AppRoutes />
=======
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
>>>>>>> 2562ddf9ad316e87a3cbefe05ee67f23eaac7372
}

export default App
