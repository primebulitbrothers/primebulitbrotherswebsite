import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Get Quote', href: '/quote' }
  ]

  const services = [
    'Kitchen Remodeling',
    "Custom Closets",
    'Custom Patios',
    'Walkways',
    'Retaining Walls',
    'General Landscaping'
    
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: '(571) 992-9966',
      href: 'tel:5719929966'
    },
    {
      icon: Mail,
      text: 'primescapebrothers1@gmail.com',
      href: 'mailto:primescapebrothers1@gmail.com'
    },
    {
      icon: MapPin,
      text: '8460 Hessian Hill Ct, Bristow, VA 20136',
      href: '#'
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              {/* Logo Image - Replace src with your actual logo path */}
              <div className="flex-shrink-0">
                <img 
                  src="/images/logo.png" 
                  alt="PrimeScape Brothers Logo" 
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
              <div>
                <h3 className="text-xl font-bold">PrimeBulit Brothers</h3>
                <p className="text-sm text-gray-400">Remodeling & Landscaping</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Professional landscaping and kitchen remodeling services. 
              We transform your vision into reality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <contact.icon className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <a
                    href={contact.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2">Office Hours</h5>
              <p className="text-sm text-gray-300">Monday - Friday</p>
              <p className="text-sm text-gray-300">8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} PrimeBulit Brothers. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 