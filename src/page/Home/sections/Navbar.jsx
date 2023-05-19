import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll';

const Navbar = () => {

  var appear = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  };


  return (

    <nav className='navbar'>

      <motion.div variants={appear} initial="hidden" animate="visible" transition={{ delay: 0.3, duration: 0.6 }} className="title">
        <h1><span>Arnab</span>Chatterjee</h1>
      </motion.div>

      <motion.div className="options">

        <Link to='skills' offset={-100} smooth={true} >
          <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }} >About</motion.a> 
        </Link>
      
        <Link to='experience' smooth={true} >
          <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.6 }} >Experience</motion.a> 
        </Link>
      
        <Link to='projects' smooth={true} >
          <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.7 }} >Projects</motion.a> 
      
        </Link>
        <Link to='contact' smooth={true} >
          <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.8 }} >Contact</motion.a> 
        </Link>
      
      </motion.div>


      <motion.div className="resume" variants={appear} initial="hidden" animate="visible" transition={{ delay: 1.4, duration: 0.2 }}>
        <button>resume</button>
      </motion.div>

    </nav>
  )
}

export default Navbar