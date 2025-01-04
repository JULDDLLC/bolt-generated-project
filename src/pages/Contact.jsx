import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <p className="flex items-center">
              <span className="font-bold mr-2">Address:</span>
              Muskogee, Oklahoma
            </p>
            <p className="flex items-center">
              <span className="font-bold mr-2">Phone:</span>
              <a href="tel:918-351-3276" className="text-blue-400 hover:text-blue-300">
                918-351-3276
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
