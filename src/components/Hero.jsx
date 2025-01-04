import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
        }}
      />
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container relative z-10">
        <div className="content-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 text-blue-400 font-semibold text-xl"
            >
              Serving Oklahoma Since 2013
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Your Freedom
              <span className="block text-blue-400">Connection</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed text-gray-300 max-w-3xl">
              Since 2013 Bret's Bail bonds has provided fast and affordable bail bonding services for all counties in Oklahoma. When it comes to bonding a friend or family member out of jail, we understand the need for securing a speedy release for our customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/application"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-semibold text-center transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Start Application
              </Link>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 text-white px-10 py-4 rounded-lg text-lg font-semibold text-center transition-all transform hover:scale-105 hover:shadow-lg border border-gray-700"
              >
                Download Free E-book
              </a>
              <a
                href="tel:918-351-3276"
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg text-lg font-semibold text-center transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Call (918) 351-3276
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
