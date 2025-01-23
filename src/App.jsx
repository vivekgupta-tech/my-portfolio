import React, { useEffect } from 'react'
import Navbar from './portfolio/Navbar'
import Home from './portfolio/Home'
import Experience from './portfolio/Experience'
import Skills from './portfolio/Skills'
import Projects from './portfolio/projects'
import Contact from './portfolio/Contact'
import Aos from  "aos";
import "aos/dist/aos.css"

function App() {
	useEffect(() => {
		Aos.init();
	}, [])
  return (
	<>
	<Navbar />
	<Home />
	<Experience />
	<Skills />
	<Projects />
	<Contact/>
	</>
  )
}

export default App

