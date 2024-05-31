"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-3xl md:text-4xl lg:text-5xl text-white font-medium mt-10 md:mt-20 mb-6 text-center'
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex items-center justify-center'
      >
        <SparklesIcon className='text-yellow-300 h-8 w-8 mr-2' />
        <span className='text-sm md:text-base text-gray-300'>
          Explore my skills and projects below
        </span>
      </motion.div>
    </div>
  )
}

export default SkillText
