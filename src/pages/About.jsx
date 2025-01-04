import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="mb-8">
          <div className="w-full h-64 bg-gray-700 rounded-lg mb-4">
            <img 
              src="https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3" 
              alt="Bret Todd"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Bret Todd</h2>
          <p className="text-gray-300 mb-4">
            Since 2013, we've been serving Oklahoma with reliable and professional bail bond services.
            Our commitment to helping families in difficult times has made us a trusted name in the industry.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
