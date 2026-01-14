import { Building2, Handshake, Star, Mail } from 'lucide-react';

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: 'Platinum Sponsors',
      description: 'Our premium partners driving innovation',
      sponsors: [
        { name: 'Coming Soon', placeholder: true },
        { name: 'Coming Soon', placeholder: true },
      ]
    },
    {
      tier: 'Gold Sponsors',
      description: 'Key supporters of Hack Secure 2026',
      sponsors: [
        { name: 'Coming Soon', placeholder: true },
        { name: 'Coming Soon', placeholder: true },
        { name: 'Coming Soon', placeholder: true },
      ]
    },
    {
      tier: 'Silver Sponsors',
      description: 'Valued contributors to our mission',
      sponsors: [
        { name: 'Coming Soon', placeholder: true },
        { name: 'Coming Soon', placeholder: true },
        { name: 'Coming Soon', placeholder: true },
        { name: 'Coming Soon', placeholder: true },
      ]
    },
  ];

  const benefits = [
    'Brand visibility to 500+ participants',
    'Logo placement on all event materials',
    'Social media promotion',
    'Opportunity to conduct tech talks',
    'Access to talented candidates',
    'Networking opportunities',
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-sm font-medium mb-6">
              Our Partners
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Our
              </span>
              <span className="text-red-500"> Sponsors</span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              We're grateful to our sponsors for making Hack Secure 2026 possible. Their support enables us to provide an exceptional experience for all participants.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="py-16 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tierIndex} className="mb-16 last:mb-0">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{tier.tier}</h2>
                <p className="text-gray-500">{tier.description}</p>
              </div>
              
              <div className={`grid gap-6 ${
                tierIndex === 0 ? 'md:grid-cols-2' : 
                tierIndex === 1 ? 'md:grid-cols-3' : 'md:grid-cols-4'
              }`}>
                {tier.sponsors.map((sponsor, index) => (
                  <div 
                    key={index}
                    className={`p-8 bg-[#0a0a0a] border border-gray-800 rounded-2xl hover:border-red-600/30 transition-all duration-300 flex items-center justify-center ${
                      tierIndex === 0 ? 'h-40' : tierIndex === 1 ? 'h-32' : 'h-28'
                    }`}
                  >
                    {sponsor.placeholder ? (
                      <div className="text-center">
                        <Building2 className="w-10 h-10 text-gray-700 mx-auto mb-2" />
                        <p className="text-gray-600 text-sm">{sponsor.name}</p>
                      </div>
                    ) : (
                      <span className="text-xl font-bold text-white">{sponsor.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Become a Sponsor */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-sm font-medium mb-6">
                Partner With Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Become a
                </span>
                <span className="text-red-500"> Sponsor</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Partner with Hack Secure 2026 and connect with over 500 talented developers, 
                designers, and innovators. Showcase your brand, recruit top talent, and 
                contribute to the developer community.
              </p>
              
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-3 h-3 text-red-500" />
                    </div>
                    <span className="text-gray-400">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="px-8 py-4 bg-gradient-to-r from-red-700 to-red-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 border border-red-500/30 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact for Sponsorship
              </button>
            </div>

            <div className="relative">
              <div className="p-8 bg-gradient-to-br from-[#111111] to-[#0d0d0d] border border-gray-800 rounded-3xl">
                <div className="text-center mb-8">
                  <Handshake className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Sponsorship Tiers</h3>
                  <p className="text-gray-500">Choose the tier that fits your goals</p>
                </div>

                <div className="space-y-4">
                  {[
                    { tier: 'Platinum', price: 'Contact Us', highlight: true },
                    { tier: 'Gold', price: 'Contact Us' },
                    { tier: 'Silver', price: 'Contact Us' },
                    { tier: 'Bronze', price: 'Contact Us' },
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-xl border ${
                        item.highlight 
                          ? 'bg-red-600/10 border-red-600/30' 
                          : 'bg-[#0a0a0a] border-gray-800'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-semibold ${item.highlight ? 'text-red-500' : 'text-white'}`}>
                          {item.tier}
                        </span>
                        <span className="text-gray-500 text-sm">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-32 h-32 bg-red-600/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-red-900/5 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;