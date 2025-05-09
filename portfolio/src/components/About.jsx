import { motion } from 'framer-motion'
import React from 'react'
import { styles } from '../styles'
import {fadeIn,textVariant} from '../utils/motion'
import { services } from '../constants'
import { Tilt } from 'react-tilt'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon})=>{
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
        variants={fadeIn('right','spring',0.5 * index,0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex  justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn('','',0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a frontend developer with More than 1.6 years of experience as an Angular Developer, specializing in creating captivating user interfaces. While I have a basic understanding of backend technologies like Node.js, Express, and MongoDB, my proficiency lies in frontend development. My skill set includes React, Angular, Redux, JavaScript, HTML, CSS, SCSS, and a passion for solving complex web development challenges. I thrive in collaborative team environments and am ready to contribute my expertise to deliver outstanding user experiences for your web projects.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About,'about') 