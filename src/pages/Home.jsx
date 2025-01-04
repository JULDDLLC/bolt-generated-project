import Hero from '../components/Hero'
import { motion } from 'framer-motion'

export default function Home() {
  const features = [
    {
      title: "24/7 Availability",
      description: "We're here whenever you need us, day or night, ensuring immediate assistance in critical situations.",
      icon: "🕒"
    },
    {
      title: "Fast Service",
      description: "Quick response times and efficient processing to help secure the fastest possible release.",
      icon: "⚡"
    },
    {
      title: "Experienced Team",
      description: "A decade of expertise serving Oklahoma with professional and reliable bail bond services.",
      icon: "👥"
    }
  ]

  return (
    <div className="pt-20">
      <Hero />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="py-24 bg-gray-800/50"
      >
        <div className="container">
          <div className="content-container">
            <h2 className="text-4xl font-bold mb-16 text-center">Why Choose <span className="text-blue-400">Bret's Bail Bonds</span>?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
