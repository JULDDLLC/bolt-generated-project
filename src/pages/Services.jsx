import { motion } from 'framer-motion'

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="w-full h-48 bg-gray-700 rounded-lg mb-4">
            <img 
              src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3" 
              alt="Bail Bonds"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Bail Bonds</h2>
          <p className="text-gray-300">Fast and reliable bail bond services available 24/7.</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="w-full h-48 bg-gray-700 rounded-lg mb-4">
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3" 
              alt="Consultation"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Free Consultation</h2>
          <p className="text-gray-300">Expert advice and guidance for your situation.</p>
        </div>
      </div>
    </motion.div>
  )
}
