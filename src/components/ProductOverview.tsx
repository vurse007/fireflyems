'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ProductOverview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="product" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-firefly-600/30 to-transparent" />
      <div className="absolute -left-64 top-1/2 w-96 h-96 bg-firefly-600/10 rounded-full blur-3xl" />
      <div className="absolute -right-64 bottom-1/4 w-96 h-96 bg-firefly-600/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-8">
            An all-new recovery sleeve
            <br />
            <span className="gradient-text">powered by EMS technology.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Electromyostimulation (EMS) technology jumpstarts muscle recovery by activating deep muscle fibers, 
            boosting blood flow and flushing out fatigue faster than rest alone. Recover smarter, train harder, 
            and get back to peak performance in less time.
          </p>
        </motion.div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Glow effect behind image */}
          <div className="absolute inset-0 bg-gradient-to-r from-firefly-600/20 via-firefly-500/30 to-firefly-600/20 
                          rounded-3xl blur-2xl transform scale-105" />
          
          {/* Image container */}
          <div className="relative rounded-3xl overflow-hidden border border-firefly-600/30 
                          bg-gradient-to-br from-dark-700/50 to-dark-800/50 backdrop-blur-sm
                          shadow-2xl shadow-firefly-600/10">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-firefly-500/10 via-transparent to-firefly-600/10 pointer-events-none" />
            
            {/* The actual image */}
            <img 
              src="/product/ems-sleeve.png" 
              alt="Firefly EMS Sleeve"
              className="w-full h-auto min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] object-cover object-center"
              onError={(e) => {
                // Show placeholder styling if image fails
                e.currentTarget.style.display = 'none'
                const parent = e.currentTarget.parentElement
                if (parent) {
                  parent.classList.add('flex', 'items-center', 'justify-center', 'min-h-[400px]', 'lg:min-h-[500px]')
                  const placeholder = document.createElement('div')
                  placeholder.className = 'text-center p-8'
                  placeholder.innerHTML = `
                    <div class="w-24 h-24 mx-auto mb-6 rounded-2xl bg-firefly-600/20 flex items-center justify-center">
                      <svg class="w-12 h-12 text-firefly-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p class="text-gray-400 text-lg font-medium">EMS Sleeve Image</p>
                    <p class="text-gray-500 text-sm mt-2">Replace /product/ems-sleeve.png</p>
                  `
                  parent.appendChild(placeholder)
                }
              }}
            />
          </div>

          {/* Corner accents */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-firefly-500 rounded-tl-lg" />
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-firefly-500 rounded-tr-lg" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-firefly-500 rounded-bl-lg" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-firefly-500 rounded-br-lg" />
        </motion.div>
      </div>
    </section>
  )
}
