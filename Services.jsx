import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'

const Services = () => {
  const services = [ 
    {
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen into a modern, functional space that fits your lifestyle.',
      icon: '🍳',
      features: ['Custom Cabinets', 'Modern Appliances', 'Quality Craftsmanship'],
      benefits: ['Increased home value', 'Low maintenance', 'Modern Kitchen Space']
    },
      {
        title: 'Custom Closets',
        description: 'Create modern closet space that is functional and beautiful',
        icon: '🚪',
        features: ['Modern Look', 'Quality Craftsmanship', 'Functional Space' ],
        benefits: ['Increased home value']

      },
    {
      title: 'Custom Patios',
      description: 'Create beautiful outdoor living spaces that enhance your home\'s value and provide the perfect setting for entertaining and relaxation.',
      icon: '🏠',
      features: [
        'Custom design consultation',
        'Premium materials selection',
        'Professional installation',
        'Drainage solutions',
        'Lighting options',
        'Maintenance guidance'
      ],
      benefits: ['Increased home value', 'Outdoor entertainment space', 'Low maintenance', 'Year-round enjoyment']
    },
    {
      title: 'Walkways',
      description: 'Elegant pathways that guide visitors through your landscape while adding visual appeal and improving accessibility.',
      icon: '🛤️',
      features: [
        'Custom pattern design',
        'Durable materials',
        'Proper drainage systems',
        'Non-slip surfaces',
        'ADA compliance options',
        'Landscape integration'
      ],
      benefits: ['Improved accessibility', 'Enhanced curb appeal', 'Durable construction', 'Easy maintenance']
    },
    {
      title: 'Retaining Walls',
      description: 'Structural solutions that protect your property from erosion while adding visual interest and creating usable space.',
      icon: '🧱',
      features: [
        'Structural engineering',
        'Aesthetic design options',
        'Drainage systems',
        'Quality materials',
        'Professional installation',
        'Long-term stability'
      ],
      benefits: ['Erosion control', 'Additional usable space', 'Property protection', 'Increased property value']
    },
    {
      title: 'General Landscaping',
      description: 'Comprehensive landscape design and maintenance services to create and maintain beautiful outdoor environments.',
      icon: '🌿',
      features: [
        'Landscape design',
        'Plant selection',
        'Irrigation systems',
        'Seasonal maintenance',
        'Garden installation',
        'Tree and shrub care'
      ],
      benefits: ['Year-round beauty', 'Increased property value', 'Environmental benefits', 'Professional maintenance']
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We meet to discuss your vision, budget, and timeline for the project.'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Our team creates detailed plans and provides you with a comprehensive quote.'
    },
    {
      step: '03',
      title: 'Project Execution',
      description: 'We begin construction with regular updates and quality control throughout.'
    },
    {
      step: '04',
      title: 'Final Inspection',
      description: 'We conduct a thorough final inspection and provide maintenance guidance.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding ">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Professional Services
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            From kitchen remodeling to landscaping, we provide comprehensive solutions 
            to enhance your home's beauty, functionality, and value.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What We Include:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                          <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 ">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              We make your project simple and stress-free with our proven process
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our team is ready to bring your vision to life.
          </p>
          <Link to="/quote" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center space-x-2">
            <span>Get Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services 