import React, { useEffect } from 'react'
import Card from "../../../components/Card";
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';

const Skills = () => {

  const { ref, inView } = useInView({threshold:0.3,triggerOnce:true});

  return (
    <div className="skills">
      <div className="left">
        <Card>
          <h1>Languages</h1>
          <h3>Mastering the art of code, one language at a time</h3>
          <p>
          <span>Python</span> 
          <span>Javascript</span>
          <span>C++</span>
          <span>Java</span>
          <span>Dart</span>
          </p>
        </Card>
        <Card>
          <h1>Front-End</h1>
          <h3>Super Smooth Frontends are the first priority </h3>
          <p>
            <span>React</span>  
            <span>Scss</span> 
            <span>Tailwind</span>
            <span>Bootstrap</span>
            <span>Flutter</span>
          </p>
        </Card>
        <Card>
          <h1>Back-End</h1>
          <h3>backends are always important</h3>
          <p><span>Node</span> <span>Django</span><span>Firebase</span> <span>MongoDb</span><span>Postgres</span>
          </p>
        </Card>
      </div>

      <div className="right">
        <motion.div className="content" ref={ref} animate={{y:inView?0:40,opacity: inView ? 1 : 0}} transition={{duration:0.5,delay:0.3}}>
          <h3>About Me</h3>
          <h1 className='letmag'>Hello! I'm Arnab Chatterjee.</h1>
          <p className='darkMag'>
          Welcome! I'm a passionate full-stack app and web developer, dedicated to creating innovative digital solutions. Currently pursuing a B.Tech in Computer Science with a specialization in Artificial Intelligence and Machine Learning, I combine technical expertise with a drive for excellence. With a strong foundation in both front-end and back-end development, I deliver seamless user experiences and robust functionalities.
          <br /><br />
          Join me as I utilize my skills to create powerful, user-centric experiences. Together, let's bring your ideas to life and make an impact in this ever-evolving digital landscape.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills