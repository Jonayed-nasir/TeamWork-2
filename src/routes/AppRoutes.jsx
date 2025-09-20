
import React from 'react'
import NavBar from '../layout/navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Footer from '../layout/footer/Footer'
import Home from '../pages/HomePage/Home'
import News from '../pages/NewsPage/News'
import Podcasts from '../pages/PodcastsPage/Podcasts'
import Resources from '../pages/ResourcesPage/Resources'
import Contact from '../pages/ContactPage/Contact'
function AppRoutes() {
  return (
    <div>
      {/* nav-bar */}
      <NavBar />
      {/* routes */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/News' element={<News/> } />
        <Route path='/Podcasts' element={<Podcasts/> } />
        <Route path='/Resources' element={<Resources/> } />
        <Route path='/Contact' element={<Contact/> } />

      </Routes>
      {/* footer */}
      <Footer />
    </div>
  )
}

export default AppRoutes
