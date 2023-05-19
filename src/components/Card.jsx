import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Card = ({children}) => {
    const { ref, inView } = useInView({threshold:0.3,triggerOnce:true});
    return (
        <motion.div ref={ref} animate={{x:inView?0:-40,opacity: inView ? 1 : 0}} transition={{duration:0.5,delay:0.3}}>
            <Tilt className='Tilt' glareEnable={true} tiltMaxAngleX={10}
                tiltMaxAngleY={10} perspective={1000}
                glareColor={"#323439"}>
                
                <div className='cardCont'>
                    {children} 
                </div>
            </Tilt>
        </motion.div>
    )
}

export default Card