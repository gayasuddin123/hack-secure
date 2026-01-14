import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is Hack Secure 2026?',
      answer: 'Hack Secure 2026 is a national-level hackathon focused on web innovation and cybersecurity. It brings together developers, designers, and innovators to build secure, scalable solutions over 24 hours.'
    },
    {
      question: 'Who can participate?',
      answer: 'The hackathon is open to all students, developers, and tech enthusiasts. Whether you\'re a beginner or an experienced developer, you\'re welcome to join and learn.'
    },
    {
      question: 'What is the team size?',
      answer: 'Teams can consist of 2-4 members. You can either form your own team or join as an individual, and we\'ll help you find teammates during the team formation session.'
    },
    {
      question: 'Is there a registration fee?',
      answer: 'Registration details and fees will be announced soon. Follow our social media channels for the latest updates on registration.'
    },
    {
      question: 'What should I bring?',
      answer: 'Bring your laptop, charger, any hardware you might need for your project, and your enthusiasm! We\'ll provide food, refreshments, and a great hacking environment.'
    },
    {
      question: 'Will food be provided?',
      answer: 'Yes! We\'ll provide meals, snacks, and beverages throughout the 24-hour event to keep you energized and focused.'
    },
    {
      question: 'What are the judging criteria?',
      answer: 'Projects will be judged based on innovation, technical complexity, security implementation, practicality, and presentation quality.'
    },
    {
      question: 'Can I start working on my project before the hackathon?',
      answer: 'No, all coding must be done during the hackathon. However, you can come with ideas and do preliminary research beforehand.'
    },
    {
      question: 'What technologies can I use?',
      answer: 'You\'re free to use any programming language, framework, or technology stack. We encourage using modern web technologies and following security best practices.'
    },
    {
      question: 'Will there be mentors available?',
      answer: 'Yes! We\'ll have industry experts and mentors available throughout the event to help you with technical challenges and guide your project development.'
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
              Got Questions?
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Frequently Asked
              </span>
              <span className="text-red-500"> Questions</span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Find answers to common questions about Hack Secure 2026. Can't find what you're looking for? Feel free to contact us!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#050505]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-[#0a0a0a] border-red-600/30' 
                    : 'bg-[#0a0a0a] border-gray-800 hover:border-gray-700'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      openIndex === index ? 'bg-red-600/20' : 'bg-gray-800'
                    }`}>
                      <HelpCircle className={`w-5 h-5 ${openIndex === index ? 'text-red-500' : 'text-gray-500'}`} />
                    </div>
                    <span className={`font-medium transition-colors duration-300 ${
                      openIndex === index ? 'text-white' : 'text-gray-300'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-red-500' : ''
                  }`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="px-6 pb-6 pl-20">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-8 md:p-12 bg-gradient-to-br from-[#111111] to-[#0d0d0d] border border-gray-800 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <MessageCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Still Have Questions?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help. Reach out to us and we'll get back to you as soon as possible.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-red-700 to-red-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 border border-red-500/30">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;