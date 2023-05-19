import React from 'react'
import Navbar from '../Home/sections/Navbar';
import Hero from '../Home/sections/Hero';
import Skills from '../Home/sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Archived from './sections/Archived';

import { Link, animateScroll as scroll } from "react-scroll";
import Footer from './sections/Footer';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Skills/>
        {/* <Experience/> */}
        <Projects/>
        <Archived/>
        <Footer/>

    </div>
  )
}

export default Home