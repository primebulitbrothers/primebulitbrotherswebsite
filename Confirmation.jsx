import { Link } from 'react-router-dom'
import { CheckCircle, Phone, Mail, Clock, ArrowLeft } from 'lucide-react'

const Confirmation = () => {
  const nextSteps = [
    {
      icon: Clock,
      title: 'Within 24 Hours',
      description: 'We\'ll review your project details and contact you to schedule a consultation.'
    },
    {
      icon: Phone,
      title: 'Free Consultation',
      description: 'We\'ll meet at your property to discuss your vision and provide a detailed quote.'
    },
    {
      icon: CheckCircle,
      title: 'Project Planning',
      description: 'Once approved, we\'ll create detailed plans and schedule your project.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Success Message */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 text-center mb-8">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary-600" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Thank You for Your Quote Request!
              </h1>
              
              <p className="text-xl text-gray-600 mb-6">
                We've received your project details and our team is excited to work with you. 
                You'll hear from us within 24 hours to schedule your free consultation.
              </p>
              
              <div className="bg-primary-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {nextSteps.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/" className="btn-primary inline-flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </Link>
                <Link to="/services" className="btn-secondary">
                  View Our Services
                </Link>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Have Questions?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri 8AM-6PM</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600">primescapebrothers1@gmail.com</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday</p>
                  <p className="text-sm text-gray-500">8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Confirmation 