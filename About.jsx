import { Link } from 'react-router-dom'
import { Users, Award, Shield, Clock, CheckCircle } from 'lucide-react'

const About = () => {
  const teamMembers = [
    {
      name: 'Tanveer Singh',
      role: 'Co-Founder',
      experience: 'Professional Project Experience',
      description: 'Mr.Singh brings creative vision to every project, specializing in landscape and kitchen design.'
    },
    {
      name: 'Sam',
      role: 'Operations Manager',
      experience: 'Professional Project Experience',
      description: 'Mike ensures every project meets our high standards of quality and customer satisfaction.'
    },
    {
      name: 'Gunveer Singh',
      role: 'Co-Founder',
      experience: 'Professional Project Experience',
      description: 'Mr.Singh brings creative vision to every project, specializing in landscape and kitchen design.'
    }
  ]

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, no matter the size or complexity.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Honest pricing, transparent communication, and reliable service you can trust.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We listen, understand, and deliver on your vision.'
    },
    {
      icon: Clock,
      title: 'Timeliness',
      description: 'We respect your time and complete projects on schedule, every time.'
    }
  ]

  const stats = [
    { number: '25+', label: 'Projects Completed' },
    { number: '100%', label: 'Integrity in Work' },
    { number: '100%', label: 'Customer Satisfaction' },
    { number: '24hr', label: 'Response Time' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About PrimeBulit Brothers
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            We've been transforming homes and landscapes across the region, 
            delivering exceptional quality and customer satisfaction on every project.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
              Founded by brothers Gunveer and Tanveer Singh, PrimeScape Brothers began with a clear mission:
              to transform both outdoor and indoor spaces into beautiful, functional environments that inspire and 
              improve lives.
              </p>
              <p className="text-lg text-gray-600 mb-6">
              Starting with landscaping and later expanding into kitchen and closet remodeling, we are dedicated to making a positive change in 
              every project we take on. Our work is guided by a commitment to detail, quality craftsmanship,
              and creating spaces that truly reflect our clients’ vision.
              </p>
              <p className="text-lg text-gray-600">
              Today, we are proud to have built lasting relationships based on trust, quality, and exceptional service.
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-center">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-3">{member.experience} experience</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose PrimeBulit Brothers?
            </h2>
            <p className="text-xl text-primary-100">
              We're committed to delivering exceptional results on every project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity in Work</h3>
              <p className="text-primary-100">
               Ensures high quality work for your peace of mind.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Guarantee</h3>
              <p className="text-primary-100">
                We stand behind our work with comprehensive warranties on all projects.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">On-Time Delivery</h3>
              <p className="text-primary-100">
                We respect your time and complete projects on schedule, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how we can bring your vision to life.
          </p>
          <Link to="/quote" className="btn-primary inline-flex items-center space-x-2">
            <span>Get Free Quote</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About 