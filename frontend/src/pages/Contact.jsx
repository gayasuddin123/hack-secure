import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9696029771',
      description: 'Available Mon-Sat, 10 AM - 6 PM'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'codevirussec7@gmail.com',
      description: 'We\'ll respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Venue',
      value: 'BBS Group of Institutions',
      description: 'Prayagraj, Uttar Pradesh'
    },
    {
      icon: Clock,
      title: 'Event Duration',
      value: '24 Hours',
      description: 'Non-stop hacking and innovation'
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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Contact
              </span>
              <span className="text-red-500"> Us</span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Have questions about Hack Secure 2026? We're here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-[#111111] border border-gray-800 rounded-2xl hover:border-red-600/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors duration-300 border border-red-600/10">
                  <item.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-red-500 font-medium mb-1">{item.value}</p>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="p-8 bg-[#0a0a0a] border border-gray-800 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-red-500" />
                <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
              </div>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#111111] border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-red-600/50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#111111] border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-red-600/50 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#111111] border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-red-600/50 transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#111111] border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-red-600/50 transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-red-700 to-red-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 border border-red-500/30 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map / Additional Info */}
            <div className="space-y-6">
              <div className="p-8 bg-[#0a0a0a] border border-gray-800 rounded-3xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Event Location</h3>
                  <p className="text-gray-400">
                    BBS Group of Institutions<br />
                    Prayagraj, Uttar Pradesh
                  </p>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#111111] to-[#0d0d0d] border border-gray-800 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-4">Organized By</h3>
                <p className="text-gray-400 mb-4">
                  <span className="text-red-500 font-semibold">Codevirus Security Pvt. Ltd.</span><br />
                  A leading cybersecurity company dedicated to protecting digital assets and educating the next generation of security professionals.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-lg text-red-500 text-sm">
                    Cybersecurity
                  </span>
                  <span className="px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-lg text-red-500 text-sm">
                    Web Security
                  </span>
                  <span className="px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-lg text-red-500 text-sm">
                    Innovation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;