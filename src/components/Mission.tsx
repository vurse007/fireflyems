'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Users, Activity } from 'lucide-react'

const stats = [
  { value: '50%', label: 'of individuals 80+ affected by sarcopenia' },
  { value: '2%', label: 'daily muscle loss during ICU admission' },
  { value: '51%', label: 'of male patients in long-term care affected' },
]

export default function Mission() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="mission" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 grid-overlay opacity-30" />
      
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-firefly-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-firefly-600/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-firefly-950/50 border border-firefly-800/30 
                         text-sm font-medium text-firefly-400 mb-6">
            Our Mission
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-8">
            Combating <span className="gradient-text">Sarcopenia</span>
          </h2>
        </motion.div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative p-8 sm:p-12 rounded-3xl glass-card">
            <div className="absolute top-0 left-8 w-1 h-full bg-gradient-to-b from-firefly-500 to-transparent rounded-full" />
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed pl-6">
              Our mission is to combat sarcopenia and muscular atrophy by using electromyostimulation (EMS) 
              technology to preserve and restore muscle function in elderly, immobilized, and critically ill patients. 
              By delivering controlled electrical signals that activate muscles even during periods of rest, we aim 
              to slow muscle degeneration, reduce functional decline, and improve quality of life.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed pl-6 mt-6">
            Through an accessible and convenient EMS-powered sleeve, we seek to revolutionize the way patients receive physical therapy in a new way that is more effective, convenient, and seamlessly integrated into daily life.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center p-6 rounded-2xl glass-card"
            >
              <div className="text-4xl sm:text-5xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Target groups */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: Users, title: 'Elderly Patients', description: 'Individuals experiencing age-related muscle loss and sarcopenia' },
            { icon: Heart, title: 'ICU Patients', description: 'Critically ill patients at risk of rapid muscle atrophy during bed rest' },
            { icon: Activity, title: 'Long-Term Care', description: 'Residents in nursing homes and rehabilitation facilities' },
          ].map((group, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-2xl glass-card">
              <div className="w-12 h-12 rounded-xl bg-firefly-600/20 border border-firefly-600/30 
                            flex items-center justify-center shrink-0">
                <group.icon className="w-6 h-6 text-firefly-400" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-white mb-1">
                  {group.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {group.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
