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
        className="text-[24px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-20 text-shadow-custom text-center"
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
