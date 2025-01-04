import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800">
      <div className="container py-16">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Bret's Bail Bonds</h3>
              <p className="text-gray-400 text-lg">Your Freedom Connection</p>
              <p className="text-gray-400">Serving all counties in Oklahoma</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/application" className="text-gray-400 hover:text-white transition-colors">
                    Bail Bond Application
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Know Your Rights E-book
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contact</h3>
              <p className="text-gray-400">Muskogee, Oklahoma</p>
              <a 
                href="tel:918-351-3276" 
                className="text-blue-400 hover:text-blue-300 text-lg font-semibold block"
              >
                (918) 351-3276
              </a>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Bret's Bail Bonds. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
