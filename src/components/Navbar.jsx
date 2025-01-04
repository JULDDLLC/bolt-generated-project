import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { to: '/', text: 'Home' },
    { to: '/services', text: 'Services' },
    { to: '/about', text: 'About' },
    { to: '/application', text: 'Application' },
    { to: '/contact', text: 'Contact' },
  ]

  return (
    <nav className="fixed w-full z-50 glass-effect">
      <div className="container">
        <div className="content-container">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mr-3 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">BB</span>
              </div>
              Bret's Bail Bonds
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-12">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-300 hover:text-white transition-colors text-lg"
                >
                  {link.text}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-effect"
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  )
}
