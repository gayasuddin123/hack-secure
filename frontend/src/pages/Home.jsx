import { ArrowRight, Shield, Code, Users, Trophy, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[#0a0a0a]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(127,29,29,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(185,28,28,0.1),transparent_50%)]" />
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Registration Opening Soon
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              HACK
            </span>
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              {' '}SECURE
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl text-gray-500 mt-4 font-normal">
              2026
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
            National Level Web Innovation Hackathon
          </p>

          {/* Description */}
          <p className="text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Join the most anticipated hackathon of 2026. Innovate, collaborate, and compete 
            with the brightest minds across the nation for amazing prizes and opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-red-700 to-red-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 flex items-center gap-2 border border-red-500/30">
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link 
              to="/about"
              className="px-8 py-4 bg-[#111111] border border-gray-800 text-white font-semibold rounded-xl hover:bg-[#1a1a1a] hover:border-gray-700 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Event Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Calendar, label: 'Event Date', value: 'Coming Soon 2026' },
              { icon: MapPin, label: 'Venue', value: 'BBS Group of Institutions' },
              { icon: Trophy, label: 'Prize Pool', value: '₹50,000+' },
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-[#111111]/80 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-red-600/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-gray-500 text-sm mb-1">{item.label}</p>
                <p className="text-white font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-red-500 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Why Participate in
              </span>
              <span className="text-red-500"> Hack Secure?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Experience an unparalleled hackathon journey with industry experts, 
              amazing prizes, and networking opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Secure Innovation',
                description: 'Build secure, scalable web solutions with best practices'
              },
              {
                icon: Code,
                title: 'Learn & Grow',
                description: 'Workshops, mentorship, and hands-on learning experiences'
              },
              {
                icon: Users,
                title: 'Network',
                description: 'Connect with industry professionals and fellow developers'
              },
              {
                icon: Trophy,
                title: 'Win Prizes',
                description: 'Compete for cash prizes and exciting goodies'
              },
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-[#0a0a0a] border border-gray-800 rounded-2xl hover:border-red-600/30 hover:bg-[#0d0d0d] transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-red-600/20 to-red-900/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-red-600/30 group-hover:to-red-900/30 transition-all duration-300 border border-red-600/10">
                  <feature.icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-[#0a0a0a] to-red-900/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Hack Secure?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join hundreds of developers, designers, and innovators in the most exciting 
            hackathon of 2026. Registration opens soon!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-red-700 to-red-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 border border-red-500/30">
              Get Notified
            </button>
            <Link 
              to="/events"
              className="px-8 py-4 bg-[#111111] border border-gray-800 text-white font-semibold rounded-xl hover:bg-[#1a1a1a] hover:border-gray-700 transition-all duration-300"
            >
              View Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;