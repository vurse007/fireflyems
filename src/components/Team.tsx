'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const team = [
  {
    name: 'Pranav Kolli',
    role: 'Team Lead',
    bio: 'Coordinating team efforts and driving project vision. Focused on delivering innovative solutions for muscle rehabilitation.',
    image: '/team/pranav.jpg',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Ayush Patel',
    role: 'Programming and Tool Development Lead',
    bio: 'Building the software systems and mobile applications that power the Firefly EMS experience.',
    image: '/team/ayush.jpg',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Calyx Yang',
    role: 'Mechanical Engineering Lead',
    bio: 'Designing and prototyping the physical EMS sleeve hardware for optimal comfort and effectiveness.',
    image: '/team/calyx.jpg',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    name: 'Adith Alagiri',
    role: 'Product Design and Implementation Lead',
    bio: 'Shaping user experience and ensuring seamless integration of design with functionality.',
    image: '/team/adith.jpg',
    gradient: 'from-purple-500 to-violet-500',
  },
]

export default function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="team" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-firefly-600/30 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-firefly-950/50 border border-firefly-800/30 
                         text-sm font-medium text-firefly-400 mb-6">
            About Us
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Meet the <span className="gradient-text">Team</span>
          </h2>
        </motion.div>

        {/* Team grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative p-6 rounded-3xl glass-card h-full
                            hover:-translate-y-2 transition-all duration-500">
                {/* Avatar Image */}
                <div className="relative mb-5 pt-2">
                  <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${member.gradient} p-0.5
                                shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden`}>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full rounded-2xl object-cover bg-dark-800"
                      onError={(e) => {
                        // Fallback to gradient background if image fails to load
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${member.gradient} 
                                opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-lg font-display font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-firefly-400 mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Border gradient */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${member.gradient} opacity-0 
                              group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
