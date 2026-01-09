'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, X, Minus, Zap, Activity, Dumbbell } from 'lucide-react'

const features = [
  { name: 'Actively strengthens muscles', firefly: true, tens: false, traditional: true },
  { name: 'Targets specific muscle groups', firefly: true, tens: 'partial', traditional: true },
  { name: 'Can be used while seated/resting', firefly: true, tens: true, traditional: false },
  { name: 'Time efficient', firefly: true, tens: true, traditional: false },
  { name: 'Low joint impact', firefly: true, tens: true, traditional: false },
  { name: 'Individual Customizability', firefly: true, tens: 'partial', traditional: true },
]

const products = [
  { 
    name: 'Firefly EMS', 
    icon: Zap, 
    gradient: 'from-firefly-500 to-firefly-600',
    highlight: true,
  },
  { 
    name: 'TENS Therapy', 
    icon: Activity, 
    gradient: 'from-gray-500 to-gray-600',
    highlight: false,
  },
  { 
    name: 'Traditional Resistance Training', 
    icon: Dumbbell, 
    gradient: 'from-gray-600 to-gray-700',
    highlight: false,
  },
]

const productDescriptions = {
  firefly: [
    'Actively strengthens muscles',
    'Targets specific muscle groups',
    'Can be used while seated/resting',
    'Time efficient',
    'Low joint impact',
    'Individual Customizability',
  ],
  tens: [
    'Resists atrophy',
    'Limited targetting',
    'Can be used while seated/resting',
    'Time efficient',
    'Low joint impact',
    'Only basic adjustments',
  ],
  traditional: [
    'Actively strengthens muscles',
    'Targets specific muscle groups',
    'Requires active effort',
    'Requires longer workout sessions',
    'Can stress joints',
    'Individual customization',
  ],
}

function FeatureIcon({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="w-8 h-8 rounded-full bg-firefly-500/20 flex items-center justify-center">
        <Check className="w-4 h-4 text-firefly-400" />
      </div>
    )
  }
  if (value === 'partial') {
    return (
      <div className="w-8 h-8 rounded-full bg-firefly-400/20 flex items-center justify-center">
        <Minus className="w-4 h-4 text-firefly-300" />
      </div>
    )
  }
  return (
    <div className="w-8 h-8 rounded-full bg-firefly-900/30 flex items-center justify-center">
      <X className="w-4 h-4 text-firefly-700" />
    </div>
  )
}

export default function Comparison() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="specs" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 grid-overlay opacity-30" />
      
      {/* Decorative */}
      <div className="absolute -right-64 top-1/3 w-96 h-96 bg-firefly-600/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-firefly-950/50 border border-firefly-800/30 
                         text-sm font-medium text-firefly-400 mb-6">
            Specifications
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Why Choose <span className="gradient-text">EMS?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See below how a Firefly EMS sleeve provides better results faster than other alternatives.
          </p>
        </motion.div>

        {/* Comparison cards for mobile */}
        <div className="lg:hidden grid gap-6 mb-12">
          {/* Firefly Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="p-6 rounded-3xl glass-card border-2 border-firefly-500/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-firefly-500 to-firefly-600 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-firefly-400">Firefly EMS</h3>
            </div>
            <ul className="space-y-2">
              {productDescriptions.firefly.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-firefly-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* TENS Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-6 rounded-3xl glass-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white">TENS Therapy</h3>
            </div>
            <ul className="space-y-2">
              {productDescriptions.tens.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-400">
                  <span className="w-4 h-4 flex items-center justify-center">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Traditional Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-6 rounded-3xl glass-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white">Traditional Resistance Training</h3>
            </div>
            <ul className="space-y-2">
              {productDescriptions.traditional.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-400">
                  <span className="w-4 h-4 flex items-center justify-center">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Comparison table for desktop */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block overflow-x-auto rounded-3xl glass-card"
        >
          <table className="w-full min-w-[640px]">
            {/* Header */}
            <thead>
              <tr>
                <th className="p-6 text-left text-gray-400 font-medium border-b border-firefly-900/30">
                  Features
                </th>
                {products.map((product, index) => (
                  <th key={index} className={`p-6 text-center border-b border-firefly-900/30 
                    ${product.highlight ? 'bg-firefly-950/30' : ''}`}>
                    <div className="flex flex-col items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} 
                                    flex items-center justify-center`}>
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className={`font-display font-semibold ${product.highlight ? 'text-firefly-400' : 'text-white'}`}>
                        {product.name}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            
            {/* Body */}
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <td className="p-6 text-gray-300 font-medium border-b border-firefly-900/20
                               group-hover:bg-dark-800/30 transition-colors">
                    {feature.name}
                  </td>
                  <td className="p-6 text-center border-b border-firefly-900/20 bg-firefly-950/20
                               group-hover:bg-firefly-950/30 transition-colors">
                    <div className="flex justify-center">
                      <FeatureIcon value={feature.firefly} />
                    </div>
                  </td>
                  <td className="p-6 text-center border-b border-firefly-900/20
                               group-hover:bg-dark-800/30 transition-colors">
                    <div className="flex justify-center">
                      <FeatureIcon value={feature.tens} />
                    </div>
                  </td>
                  <td className="p-6 text-center border-b border-firefly-900/20
                               group-hover:bg-dark-800/30 transition-colors">
                    <div className="flex justify-center">
                      <FeatureIcon value={feature.traditional} />
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
