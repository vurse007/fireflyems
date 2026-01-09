'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { TrendingUp, Shield, Dumbbell, Lock } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    stat: 15,
    suffix: '%',
    title: 'Boost Muscle Function',
    description: 'Users on EMS therapy experience a 15% improvement in muscle function after 5-6 weeks.',
    color: 'from-[#c96344] to-[#a04530]',
    delay: 0,
  },
  {
    icon: Shield,
    stat: 17,
    suffix: '%',
    title: 'Fight Injury',
    description: 'Long-term EMS therapy preserves 17% more muscle mass in injured muscles.',
    color: 'from-[#d97556] to-[#b5503a]',
    delay: 0.1,
  },
  {
    icon: Dumbbell,
    stat: 60,
    suffix: '%',
    title: 'Build Muscle Strength',
    description: 'Users see a 60% increase in muscle strength when EMS therapy is incorporated into exercise.',
    color: 'from-[#c9836a] to-[#a45540]',
    delay: 0.2,
  },
  {
    icon: Lock,
    stat: 40,
    suffix: '%',
    title: 'Prevent Atrophy',
    description: 'Patients experience a 40% reduction in muscular atrophy during periods of immobilization with EMS therapy.',
    color: 'from-[#b5704f] to-[#7a3f30]',
    delay: 0.3,
  },
]

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState(0)
  
  useEffect(() => {
    if (inView) {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps
      const increment = value / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, stepDuration)
      
      return () => clearInterval(timer)
    }
  }, [inView, value])
  
  return (
    <span className="stat-value">
      {displayValue}{suffix}
    </span>
  )
}

export default function Benefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="benefits" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 grid-overlay opacity-40" />
      
      {/* Decorative gradients */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-firefly-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-firefly-600/5 rounded-full blur-3xl" />

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
            Benefits
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Key <span className="gradient-text">Benefits</span>
          </h2>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: benefit.delay }}
              className="group relative p-8 rounded-3xl glass-card overflow-hidden
                        hover:-translate-y-1 transition-transform duration-500"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 
                            group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative flex gap-6">
                {/* Icon */}
                <div className={`shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} 
                              flex items-center justify-center shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-display font-bold text-white">
                      <AnimatedCounter value={benefit.stat} suffix={benefit.suffix} inView={inView} />
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-firefly-500 to-firefly-400"
                initial={{ width: 0 }}
                animate={inView ? { width: `${benefit.stat}%` } : { width: 0 }}
                transition={{ duration: 1.5, delay: benefit.delay + 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
