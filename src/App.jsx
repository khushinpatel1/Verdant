import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Studio from './pages/Studio.jsx'
import Garden from './pages/Garden.jsx'
import Emerald from './pages/Emerald.jsx'
import Ethos from './pages/Ethos.jsx'
import Team from './pages/Team.jsx'
import Profile from './pages/Profile.jsx'
import { useReveal } from './useReveal.js'

function Shell() {
  const { pathname } = useLocation()
  useReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Studio />} />
        <Route path="/garden" element={<Garden />} />
        <Route path="/emerald" element={<Emerald />} />
        <Route path="/about" element={<Ethos />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:slug" element={<Profile />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}
