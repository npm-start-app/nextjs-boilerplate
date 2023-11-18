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
      <NavBarElement index={1} image={'./static/web/pAbout.png'} scrollYParam={300}/>
      <About />
      <NavBarElement index={2} image={'./static/web/pProjects.png'} scrollYParam={2400}/>
      <Projects />
      <Footer />
    </div>
  )
}

export default index
