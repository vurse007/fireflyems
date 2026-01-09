'use client'

import { ArrowUp } from 'lucide-react'

const footerLinks = [
  { name: 'Benefits', href: '#benefits' },
  { name: 'Specifications', href: '#specs' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 grid-overlay opacity-20" />
      
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-firefly-600/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3">
            {/* Replace this image with your logo */}
            <img 
              src="/logo.png" 
              alt="Firefly Logo" 
              className="w-10 h-10 rounded-xl object-contain"
            />
            <span className="text-2xl font-display font-bold tracking-tight text-white">
              Firefly
            </span>
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-firefly-400 transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-firefly-400 transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-firefly-900/30 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Firefly EMS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
