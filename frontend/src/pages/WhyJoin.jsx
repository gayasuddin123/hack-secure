import { Award, Users, BookOpen, Briefcase, Rocket, Shield, Network, Gift } from 'lucide-react';

const WhyJoin = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Win Amazing Prizes',
      description: 'Compete for cash prizes worth ₹50,000+, exclusive goodies, and certificates of achievement.'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Get guidance from industry professionals, tech leaders, and experienced developers throughout the event.'
    },
    {
      icon: BookOpen,
      title: 'Learn New Skills',
      description: 'Participate in workshops, tech talks, and hands-on sessions to enhance your technical knowledge.'
    },
    {
      icon: Briefcase,
      title: 'Career Opportunities',
      description: 'Connect with potential employers, explore internship opportunities, and boost your career prospects.'
    },
    {
      icon: Rocket,
      title: 'Build Real Projects',
      description: 'Work on practical problems and create solutions that can make a real-world impact.'
    },
    {
      icon: Shield,
      title: 'Security Focus',
      description: 'Learn best practices in cybersecurity and build applications with security in mind from the start.'
    },
    {
      icon: Network,
      title: 'Network & Connect',
      description: 'Meet like-minded developers, form lasting connections, and expand your professional network.'
    },
    {
      icon: Gift,
      title: 'Swag & Goodies',
      description: 'Take home exclusive merchandise, stickers, and memorable souvenirs from the event.'
    },
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-sm font-medium mb-6">
              Benefits
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Why Join
              </span>
              <span className="text-red-500"> Hack Secure?</span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Discover the incredible benefits and opportunities that await you at India's premier security-focused hackathon.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 bg-[#0a0a0a] border border-gray-800 rounded-2xl hover:border-red-600/30 hover:transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-red-600/20 to-red-900/20 rounded-2xl flex items-center justify-center mb-4 group-hover:from-red-600/30 group-hover:to-red-900/30 transition-all duration-300 border border-red-600/10">
                  <benefit.icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Who Should
              </span>
              <span className="text-red-500"> Join?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Students',
                description: 'Engineering, BCA, MCA, and CS students looking to gain practical experience and showcase their skills.'
              },
              {
                title: 'Developers',
                description: 'Web developers, programmers, and coders eager to work on challenging problems and learn new technologies.'
              },
              {
                title: 'Innovators',
                description: 'Creative minds with ideas that can solve real-world problems and make a positive impact.'
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="p-8 bg-[#111111] border border-gray-800 rounded-2xl hover:border-red-600/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-600/20">
                  <span className="text-2xl font-bold text-red-500">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-8 md:p-12 bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-gray-800 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-900/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Ready to Make Your Mark?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Don't miss this opportunity to learn, build, and win. Register now and be part of Hack Secure 2026!
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-red-700 to-red-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 border border-red-500/30">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyJoin;