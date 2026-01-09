'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Smartphone, Settings, TrendingUp, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Smartphone,
    title: 'Get Started',
    description: 'With our intuitive setup, you\'re up and running in minutes.',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Customize and Configure',
    description: 'Adapt Firefly to your specific requirements and preferences.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Track Your Progress',
    description: 'Make informed decisions to exceed your goals.',
  },
]

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-overlay opacity-30" />
      
      {/* Decorative line */}
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
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Map Your <span className="gradient-text">Success</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 
                        bg-gradient-to-r from-firefly-600/50 via-firefly-500/50 to-firefly-600/50" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative p-8 rounded-3xl glass-card h-full
                              hover:-translate-y-2 transition-transform duration-500">
                  {/* Step number */}
                  <div className="relative mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-firefly-500 to-firefly-600 
                                  flex items-center justify-center shadow-lg
                                  group-hover:shadow-[0_0_30px_rgba(201,99,68,0.3)] transition-shadow duration-500">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-dark-900 border border-firefly-600/50
                                  flex items-center justify-center">
                      <span className="text-xs font-bold text-firefly-400">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow indicator for non-last items */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-20 -right-4 w-8 h-8 items-center justify-center z-10">
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="w-5 h-5 text-firefly-500" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Discover More
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
