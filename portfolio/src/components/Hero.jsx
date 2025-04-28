import React from 'react'
import { styles } from '../styles'
import {ComputersCanvas} from './canvas'
import { MotionValue, motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='rounded-full w-5 h-5 bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi I&apos;m  
            <span className='text-[#915eff]'> Himmat</span>
          </h1>
          <p className={`${styles.heroSubText} mt2 text-white-100`}>I Am A Professional Frontend Developer. <br className='sm:flex hidden'/>Have Mastery In Angular.</p>
        </div>

      </div>
        <ComputersCanvas/>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2'>
            <motion.dev 
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType:'loop'
              }}
               className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero