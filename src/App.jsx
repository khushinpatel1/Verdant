import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import FluidBackground from './components/FluidBackground.jsx'
import SmoothScroll from './scroll/SmoothScroll.jsx'
import Studio from './pages/Studio.jsx'
import Garden from './pages/Garden.jsx'
import Emerald from './pages/Emerald.jsx'
import Ethos from './pages/Ethos.jsx'
import Team from './pages/Team.jsx'
import Profile from './pages/Profile.jsx'
import Vinita from './pages/Vinita.jsx'
import { useReveal } from './useReveal.js'

function Shell() {
  useReveal()

  return (
    <>
      <FluidBackground />
      <Nav />
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Studio />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/emerald" element={<Emerald />} />
          <Route path="/about" element={<Ethos />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:slug" element={<Profile />} />
        </Routes>
      </SmoothScroll>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Private, unlinked — Vinita's standalone page, outside the studio shell */}
        <Route path="/vinita" element={<Vinita />} />
        <Route path="/*" element={<Shell />} />
      </Routes>
    </BrowserRouter>
  )
}
