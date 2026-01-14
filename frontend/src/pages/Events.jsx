import { Calendar, Clock, MapPin, Users, Trophy, Code, Presentation, Coffee } from 'lucide-react';

const Events = () => {
  const schedule = [
    {
      time: '08:00 AM',
      title: 'Registration & Check-in',
      description: 'Arrive, register, and get your welcome kit',
      icon: Users
    },
    {
      time: '09:30 AM',
      title: 'Opening Ceremony',
      description: 'Welcome address and problem statement reveal',
      icon: Presentation
    },
    {
      time: '10:30 AM',
      title: 'Hacking Begins',
      description: 'Start building your innovative solutions',
      icon: Code
    },
    {
      time: '01:00 PM',
      title: 'Lunch Break',
      description: 'Networking and refreshments',
      icon: Coffee
    },
    {
      time: '03:00 PM',
      title: 'Mentor Sessions',
      description: 'Get guidance from industry experts',
      icon: Users
    },
    {
      time: '10:30 AM (Next Day)',
      title: 'Submission Deadline',
      description: 'Final project submissions',
      icon: Clock
    },
    {
      time: '12:00 PM',
      title: 'Judging & Presentations',
      description: 'Demo your projects to the judges',
      icon: Presentation
    },
    {
      time: '03:00 PM',
      title: 'Awards Ceremony',
      description: 'Prize distribution and closing',
      icon: Trophy
    },
  ];

  const tracks = [
    {
      title: 'Web Security',
      description: 'Build secure web applications with modern security practices',
      color: 'from-red-600 to-red-700'
    },
    {
      title: 'FinTech Solutions',
      description: 'Innovative financial technology solutions',
      color: 'from-red-700 to-red-800'
    },
    {
      title: 'HealthTech',
      description: 'Technology solutions for healthcare challenges',
      color: 'from-red-800 to-red-900'
    },
    {
      title: 'Open Innovation',
      description: 'Any innovative idea that solves real-world problems',
      color: 'from-red-900 to-[#450a0a]'
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
              Events & Schedule
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Hackathon
              </span>
              <span className="text-red-500"> Events</span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              24 hours of non-stop innovation, learning, and collaboration. Here's what awaits you at Hack Secure 2026.
            </p>
          </div>

          {/* Event Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Calendar, label: 'Date', value: 'Coming Soon 2026' },
              { icon: Clock, label: 'Duration', value: '24 Hours' },
              { icon: MapPin, label: 'Venue', value: 'BBS Group of Institutions, Prayagraj' },
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-[#111111] border border-gray-800 rounded-2xl hover:border-red-600/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center group-hover:bg-red-600/20 transition-colors duration-300 border border-red-600/10">
                    <item.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-16 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Hackathon
              </span>
              <span className="text-red-500"> Tracks</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Choose your arena and build innovative solutions in these exciting tracks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((track, index) => (
              <div 
                key={index}
                className="relative p-6 bg-[#0a0a0a] border border-gray-800 rounded-2xl hover:border-red-600/30 transition-all duration-300 group overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-4 border border-red-600/10">
                    <Code className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{track.title}</h3>
                  <p className="text-gray-500 text-sm">{track.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Event
              </span>
              <span className="text-red-500"> Schedule</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A detailed timeline of activities during the hackathon.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-red-700 to-red-900" />

              {/* Timeline Items */}
              <div className="space-y-6">
                {schedule.map((item, index) => (
                  <div key={index} className="relative flex gap-6 group">
                    {/* Timeline Dot */}
                    <div className="relative z-10 w-16 flex-shrink-0 flex items-center justify-center">
                      <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-[#0a0a0a] group-hover:scale-125 transition-transform duration-300" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 bg-[#111111] border border-gray-800 rounded-2xl group-hover:border-red-600/30 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-red-600/10">
                          <item.icon className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                          <span className="text-red-500 text-sm font-medium">{item.time}</span>
                          <h4 className="text-white font-semibold mt-1">{item.title}</h4>
                          <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-16 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Prizes &
              </span>
              <span className="text-red-500"> Rewards</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { place: '1st', prize: '₹25,000', extras: ['Trophy', 'Certificates', 'Goodies'] },
              { place: '2nd', prize: '₹15,000', extras: ['Certificates', 'Goodies'] },
              { place: '3rd', prize: '₹10,000', extras: ['Certificates', 'Goodies'] },
            ].map((item, index) => (
              <div 
                key={index}
                className={`p-8 bg-[#0a0a0a] border rounded-2xl text-center transition-all duration-300 ${
                  index === 0 
                    ? 'border-red-500/50 hover:border-red-500 scale-105' 
                    : 'border-gray-800 hover:border-red-600/30'
                }`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  index === 0 ? 'bg-red-600/20' : 'bg-red-600/10'
                } border border-red-600/20`}>
                  <Trophy className={`w-8 h-8 ${index === 0 ? 'text-red-400' : 'text-red-500'}`} />
                </div>
                <p className="text-gray-500 text-sm mb-1">{item.place} Place</p>
                <p className="text-3xl font-bold text-white mb-4">{item.prize}</p>
                <div className="space-y-2">
                  {item.extras.map((extra, i) => (
                    <span key={i} className="block text-gray-500 text-sm">+ {extra}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;