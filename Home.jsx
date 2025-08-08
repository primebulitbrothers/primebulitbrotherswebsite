import { Link } from 'react-router-dom'
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'

const Home = () => {
  const featuredServices = [
    {
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen into a modern, functional space that fits your lifestyle.',
      icon: '🍳',
      features: ['Custom Cabinets', 'Modern Appliances', 'Quality Craftsmanship']
    },
    {
      title: 'Custom Closets',
      description: 'Transform your closet into a modern, functional space that fits your lifestyle.',
      icon: '🧥',
      features: ['Custom Cabinets', 'Modern Appliances', 'Quality Craftsmanship']
    },
    {
      title: 'Custom Patios',
      description: 'Beautiful outdoor living spaces designed to enhance your home\'s value and lifestyle.',
      icon: '🏠',
      features: ['Custom Design', 'Premium Materials', 'Professional Installation']
    },
    {
      title: 'Walkways',
      description: 'Elegant pathways that guide visitors through your landscape with style and functionality.',
      icon: '🛤️',
      features: ['Durable Materials', 'Custom Patterns', 'Proper Drainage']
    },
    {
      title: 'Retaining Walls',
      description: 'Structural solutions that protect your property while adding visual appeal.',
      icon: '🧱',
      features: ['Structural Integrity', 'Aesthetic Design', 'Long-lasting']
    }
    
  ]

  const testimonials = [
    {
      name: 'Sean P. Diddy Combs',
      rating: 5,
      text: 'PrimeBulit Brothers transformed our backyard into a stunning outdoor living space. Professional, reliable, and exceptional quality!'
    },
    {
      name: 'Lebron James',
      rating: 5,
      text: 'Our kitchen remodel exceeded all expectations. The team was professional, clean, and delivered exactly what we envisioned.'
    },
    {
      name: 'Paryeet',
      rating: 5,
      text: 'The patio they built for us is absolutely beautiful. Great attention to detail and excellent customer service throughout.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section
      className="relative bg-cover bg-no-repeat bg-center text-gray-900"
      style={{ backgroundImage: "url('/images/kitchen.jpg')" }}
>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 ">
                Transform Your Home with
                <span className="block text-primary-200 text-white ">PrimeBulit Brothers</span>
              </h1>
              <p className="text-xl mb-8 text-white">
                Professional remodeling and landscaping services that bring your vision to life. 
                From custom patios to complete kitchen transformations, we deliver excellence in every project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quote" className="btn-primary inline-flex items-center space-x-2">
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-primary inline-flex items-center space-x-2">
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Why Choose PrimeBulit Brothers?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-200 text-white" />
                    <span>Clear Pricing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-200 text-white" />
                    <span>Mutiple Project Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-200 text-white" />
                    <span>Free Consultations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-200 text-white" />
                    <span>Warranty on All Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" >
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From remodeling to landscaping, we provide comprehensive solutions 
              to enhance your home's beauty and functionality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary inline-flex items-center space-x-2">
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Get your free consultation and quote today. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Get Free Quote
            </Link>
            <div className="flex items-center justify-center space-x-4 text-primary-100">
              <Phone className="w-5 h-5" />
              <span>(571) 992-9966</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 