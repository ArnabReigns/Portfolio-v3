import React, { useEffect, useRef } from 'react'
import { animate, motion, stagger } from 'framer-motion';
import github from '/assets/git.svg';
import linkedIn from '/assets/li.svg';
import instagram from '/assets/igram.svg';
import Owl from '../../../components/Owl';

const Hero = () => {

  return (
    <div className="hero">

      <div className="left">
        <div className="content">

          <motion.h3 initial={{ opacity: 0 }} animate={{opacity: 1 }} transition={{ delay: 0.5, duration: 0.5}} >Full-Stack web & app developer</motion.h3>
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.5}} className='letmag'>Code with precision,<br /> design with purpose.</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 , duration: 0.5 }}>Pushing the boundaries of technology, one line of code at a time.</motion.p>

          <div className="btnCont" >
            <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.5}} >Connect With Me</motion.button>
            <div className="iconCont">
              <motion.a initial={{ x: -15, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.5}}  href="https://instagram.com/generic_binary" target='_black'><img  src={instagram} alt="" /></motion.a>
              <motion.a initial={{ x: -15, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.6 }}  href="https://www.linkedin.com/in/arnab-chatterjee-439259244/" target='_black'><img src={linkedIn} alt="" /></motion.a>
              <motion.a initial={{ x: -15, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.7 }}  href="https://github.com/ArnabReigns" target='_black'><img src={github} alt="" /></motion.a>
            </div>

          </div>

        </div>
      </div>
      <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale:1, opacity: 1 }} transition={{ delay: 1,duration:0.5,type:"tween" }} className="right">
        <Owl />
      </motion.div>
    </div>
  )
}

export default Hero