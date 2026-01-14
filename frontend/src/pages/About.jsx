import { Target, Eye, Award, Users, Clock, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                About
              </span>
              <span className="text-red-500"> Hack Secure</span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Hack Secure 2026 is a national-level hackathon organized by Codevirus Security Pvt. Ltd., 
              bringing together the brightest minds to innovate, collaborate, and create secure web solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 bg-[#0a0a0a] border border-gray-800 rounded-2xl hover:border-red-600/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-900/20 rounded-2xl flex items-center justify-center mb-6 border border-red-600/10">
                <Target className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To foster innovation and cybersecurity awareness among students and young developers 
                by providing a platform where they can learn, build, and showcase their skills in 
                creating secure web applications and solutions.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 bg-[#0a0a0a] border border-gray-800 rounded-2xl hover:border-red-600/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-900/20 rounded-2xl flex items-center justify-center mb-6 border border-red-600/10">
                <Eye className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To become the leading platform for cybersecurity-focused hackathons in India, 
                nurturing the next generation of security-conscious developers who will build 
                a safer digital future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '500+', label: 'Expected Participants' },
              { value: '24', label: 'Hours of Hacking' },
              { value: '₹50K+', label: 'Prize Pool' },
              { value: '20+', label: 'Industry Mentors' },
            ].map((stat, index) => (
              <div 
                key={index}
                className="p-6 bg-[#111111] border border-gray-800 rounded-2xl text-center hover:border-red-600/30 transition-all duration-300"
              >
                <p className="text-3xl md:text-4xl font-bold text-red-500 mb-2">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                What We
              </span>
              <span className="text-red-500"> Offer</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A comprehensive hackathon experience designed to challenge, inspire, and reward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: 'Exciting Prizes',
                description: 'Win cash prizes, goodies, internship opportunities, and certificates'
              },
              {
                icon: Users,
                title: 'Expert Mentorship',
                description: 'Get guidance from industry professionals and tech leaders'
              },
              {
                icon: Clock,
                title: '24-Hour Challenge',
                description: 'Intense coding session with food, refreshments, and networking'
              },
              {
                icon: Zap,
                title: 'Hands-on Workshops',
                description: 'Learn new technologies and security practices'
              },
              {
                icon: Target,
                title: 'Real-World Problems',
                description: 'Solve actual industry challenges with practical impact'
              },
              {
                icon: Eye,
                title: 'Industry Exposure',
                description: 'Connect with sponsors and potential employers'
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-[#0a0a0a] border border-gray-800 rounded-2xl hover:border-red-600/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors duration-300 border border-red-600/10">
                  <item.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizer Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#111111] to-[#0d0d0d] border border-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Organized by Codevirus Security Pvt. Ltd.
              </h2>
              <p className="text-gray-400 max-w-3xl leading-relaxed mb-6">
                Codevirus Security is a leading cybersecurity company dedicated to protecting 
                digital assets and educating the next generation of security professionals. 
                With years of experience in the industry, we bring you a hackathon that 
                combines innovation with security best practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-lg text-red-500 text-sm">
                  Cybersecurity Experts
                </span>
                <span className="px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-lg text-red-500 text-sm">
                  Industry Leaders
                </span>
                <span className="px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-lg text-red-500 text-sm">
                  Innovation Focused
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;