import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NavBarElement from '@/components/NavBarElement'
import Projects from '@/components/Projects'
import React from 'react'

const index = () => {
  return (
    <div>
      <Header />
      <NavBarElement />
      <About />
      <NavBarElement />
      <Projects />
      <Footer />
    </div>
  )
}

export default index
