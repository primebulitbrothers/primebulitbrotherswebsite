import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            {/* Logo Image - Replace src with your actual logo path */}
            <div className="flex-shrink-0">
              <img 
                src="/images/logo.png" 
                alt="PrimeBulit Brothers Logo" 
                className="h-12 w-auto"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              {/* Fallback Text Logo */}
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center hidden">
                <span className="text-white font-bold text-xl">P</span>
              </div>
            </div>
            
            {/* Company Name */}
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">PrimeBulit Brothers</h1>
              <p className="text-xs text-gray-600">Remodeling & Landscaping</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/quote"
              className="btn-primary flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Get Free Quote</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/quote"
              className="btn-primary inline-flex items-center space-x-2 mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="w-4 h-4" />
              <span>Get Free Quote</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 