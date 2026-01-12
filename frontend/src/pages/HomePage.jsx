import { useState } from 'react';
import { 
  Shield, 
  Lock, 
  Code, 
  Brain, 
  Zap, 
  Users, 
  Trophy, 
  Briefcase,
  Target,
  Eye,
  Globe,
  Bot,
  ShieldCheck,
  Lightbulb,
  Sparkles,
  Cpu,
  Network,
  Layers,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Calendar,
  Clock
} from 'lucide-react';

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // FAQ Data
  const faqs = [
    {
      question: "Who can participate in Hack Secure 2026?",
      answer: "Students from any college or university across India can participate. Whether you're a beginner or an experienced developer, everyone is welcome to join this exciting hackathon."
    },
    {
      question: "What is the team size requirement?",
      answer: "Teams can have 2-4 members. Solo participation is not allowed to encourage collaboration and teamwork. You can form a team with students from different colleges."
    },
    {
      question: "What is the registration process?",
      answer: "Registrations will open soon. Once open, you can register through our website by filling out the registration form with your team details. A confirmation email will be sent after successful registration."
    },
    {
      question: "What skills are required to participate?",
      answer: "Basic knowledge of web development (HTML, CSS, JavaScript) and interest in AI/ML is recommended. However, the hackathon is designed to be beginner-friendly with mentorship support available."
    },
    {
      question: "Is Hack Secure 2026 beginner friendly?",
      answer: "Absolutely! We welcome participants of all skill levels. We'll have mentors, workshops, and resources to help beginners get started and learn throughout the event."
    },
    {
      question: "Will there be prizes for winners?",
      answer: "Yes! We have exciting prizes for top performers including cash prizes, internship opportunities, goodies, and certificates. Detailed prize information will be announced soon."
    }
  ];

  // Sponsor logos (placeholder)
  const sponsors = [
    "TechCorp", "InnovateLabs", "CodeBase", "AIVentures", 
    "SecureNet", "DataFlow", "CloudStack", "DevHub"
  ];

  // Features Data
  const innovationFeatures = [
    {
      icon: Globe,
      title: "Secure Web Development",
      description: "Build robust, secure web applications with modern security practices and frameworks."
    },
    {
      icon: Brain,
      title: "AI-Powered Applications",
      description: "Integrate cutting-edge AI and machine learning to create intelligent solutions."
    },
    {
      icon: ShieldCheck,
      title: "Ethical Hacking & Security",
      description: "Learn and apply ethical hacking techniques to identify and fix vulnerabilities."
    },
    {
      icon: Lightbulb,
      title: "Real-World Problem Solving",
      description: "Tackle genuine industry challenges with innovative technological solutions."
    }
  ];

  // Benefits Data
  const benefits = [
    {
      icon: Zap,
      title: "Skill Enhancement",
      description: "Level up your Web & AI development skills with hands-on experience."
    },
    {
      icon: Trophy,
      title: "Industry Challenges",
      description: "Work on real-world problems that matter to top tech companies."
    },
    {
      icon: Users,
      title: "Expert Networking",
      description: "Connect with industry professionals, mentors, and like-minded developers."
    },
    {
      icon: Briefcase,
      title: "Career Exposure",
      description: "Get noticed by recruiters and unlock internship opportunities."
    }
  ];

  // AI Features Data
  const aiFeatures = [
    {
      icon: Bot,
      title: "AI-Guided Problem Statements",
      description: "Receive intelligently crafted challenges tailored to your skill level."
    },
    {
      icon: Cpu,
      title: "Smart Evaluation Support",
      description: "AI-assisted code review and evaluation for fair, consistent judging."
    },
    {
      icon: Network,
      title: "AI Security Analysis",
      description: "Automated security vulnerability detection for your projects."
    },
    {
      icon: Layers,
      title: "Collaborative Tools",
      description: "AI-powered tools to enhance team collaboration and productivity."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-[#0a0a0a] overflow-hidden">
      
      {/* ==================== HERO SECTION ==================== */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-grid-pattern">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-red-500/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-500/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-red-500/15 rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Pre-title Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-400 text-sm font-medium">National Level Hackathon</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6 animate-glitch">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              WEB + AI
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              HACKATHON
            </span>
          </h1>

          {/* Subtitle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-500" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">HACK SECURE 2026</h2>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-500" />
          </div>

          {/* Animated Shield */}
          <div className="relative w-48 h-48 mx-auto mb-12 animate-float">
            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-3xl animate-pulse-glow" />
            <div className="relative w-full h-full flex items-center justify-center">
              <Shield className="w-32 h-32 text-red-500" strokeWidth={1} />
              <Lock className="absolute w-12 h-12 text-white" />
            </div>
          </div>

          {/* Event Details */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-300">
              <Calendar className="w-5 h-5 text-red-500" />
              <span>6-7 February 2026</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-red-500 rounded-full" />
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-5 h-5 text-red-500" />
              <span>BBS Group of Institutions, Prayagraj</span>
            </div>
          </div>

          {/* Highlight Text */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {["Strict Security", "Fair Play", "Pure Skill"].map((text, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-red-500" />
                <span className="text-gray-400 font-medium">{text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="group relative px-10 py-5 bg-gradient-to-r from-red-600 to-red-500 text-white text-lg font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/30 hover:scale-105">
            <span className="relative z-10 flex items-center gap-3">
              <Clock className="w-6 h-6" />
              Registrations Opening Soon
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-red-500/50" />
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id="about" className="relative py-32 bg-[#080808]">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-red-500 font-semibold tracking-wider uppercase">Discover</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4 mb-6">
              About <span className="text-red-500">Hack Secure 2026</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-transparent mx-auto" />
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Hack Secure 2026 is a <span className="text-white font-semibold">national-level Web + AI hackathon</span> organized 
              by <span className="text-red-400">Codevirus Security Pvt. Ltd.</span>, focusing on secure web innovation 
              and artificial intelligence. Join hundreds of talented developers in this ultimate 
              coding championship.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-red-500" />
                <span>Organized by Codevirus Security Pvt. Ltd.</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>BBS Group of Institutions, Prayagraj</span>
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission Card */}
            <div className="group relative p-8 bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-2xl border border-white/5 hover:border-red-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed">
                  To cultivate a generation of security-conscious developers who can build 
                  robust, AI-enhanced web solutions that address real-world challenges while 
                  maintaining the highest standards of cybersecurity.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative p-8 bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-2xl border border-white/5 hover:border-red-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-400 leading-relaxed">
                  To become India's premier hackathon platform where innovation meets security, 
                  inspiring participants to push boundaries and create transformative technology 
                  solutions for a safer digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INNOVATION FOCUS SECTION ==================== */}
      <section className="relative py-32 bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-red-500 font-semibold tracking-wider uppercase">Innovation</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4 mb-6">
              Where <span className="text-red-500">Web</span> Meets{' '}
              <span className="text-red-500">AI</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore the intersection of cutting-edge web technologies and artificial intelligence
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovationFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-2xl border border-white/5 hover:border-red-500/30 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="absolute -inset-px bg-gradient-to-br from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity rounded-2xl" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 group-hover:scale-110 transition-all">
                    <feature.icon className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY JOIN SECTION ==================== */}
      <section id="why-join" className="relative py-32 bg-[#080808]">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Illustration */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Animated Circles */}
                <div className="absolute inset-0 border-2 border-red-500/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-8 border-2 border-red-500/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                <div className="absolute inset-16 border-2 border-red-500/40 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
                
                {/* Center Shield */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-500/30 blur-3xl" />
                    <Shield className="relative w-32 h-32 text-red-500" strokeWidth={1} />
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#111] border border-red-500/20 rounded-xl flex items-center justify-center animate-float">
                  <Code className="w-6 h-6 text-red-500" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#111] border border-red-500/20 rounded-xl flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <Brain className="w-6 h-6 text-red-500" />
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#111] border border-red-500/20 rounded-xl flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <Lock className="w-6 h-6 text-red-500" />
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#111] border border-red-500/20 rounded-xl flex items-center justify-center animate-float" style={{ animationDelay: '3s' }}>
                  <Sparkles className="w-6 h-6 text-red-500" />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <span className="text-red-500 font-semibold tracking-wider uppercase">Benefits</span>
              <h2 className="text-4xl sm:text-5xl font-black mt-4 mb-6">
                Why Join <span className="text-red-500">Hack Secure 2026?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                Join thousands of developers in this ultimate hackathon experience. 
                Here's what makes Hack Secure 2026 unmissable:
              </p>

              {/* Benefit Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group p-5 bg-[#111] rounded-xl border border-white/5 hover:border-red-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-400">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-2">
                  Be Part of the Hack
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== AI FEATURES SECTION ==================== */}
      <section id="ai-features" className="relative py-32 bg-[#0a0a0a]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-red-500 font-semibold tracking-wider uppercase">Technology</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4 mb-6">
              AI-Enhanced <span className="text-red-500">Experience</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the future of hackathons with our AI-integrated features
            </p>
          </div>

          {/* AI Feature Cards - Glassmorphism */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 glass rounded-2xl hover:border-red-500/30 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Glow */}
                <div className="absolute -inset-px bg-gradient-to-br from-red-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-500/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-4 px-6 py-3 bg-[#111] rounded-full border border-white/5">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-red-400" />
                </div>
                <div className="w-8 h-8 rounded-full bg-red-500/30 flex items-center justify-center">
                  <Brain className="w-4 h-4 text-red-400" />
                </div>
                <div className="w-8 h-8 rounded-full bg-red-500/40 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-red-400" />
                </div>
              </div>
              <span className="text-gray-400 text-sm">Powered by Advanced AI</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SPONSORS SECTION ==================== */}
      <section id="sponsors" className="relative py-24 bg-[#080808] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-red-500 font-semibold tracking-wider uppercase">Partners</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-4 mb-6">
              Our <span className="text-red-500">Sponsors</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Proudly supported by industry leaders who believe in innovation
            </p>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#080808] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#080808] to-transparent z-10" />
          
          {/* Scrolling Content */}
          <div className="flex animate-scroll-left">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 px-12 py-8 bg-[#111] rounded-xl border border-white/5 hover:border-red-500/20 transition-colors"
              >
                <span className="text-2xl font-bold text-gray-600 hover:text-gray-400 transition-colors">
                  {sponsor}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Become Sponsor CTA */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
          <p className="text-gray-400 mb-4">Interested in sponsoring Hack Secure 2026?</p>
          <button className="px-6 py-3 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/10 transition-colors">
            Become a Sponsor
          </button>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section id="faq" className="relative py-32 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-red-500 font-semibold tracking-wider uppercase">Support</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4 mb-6">
              Frequently Asked <span className="text-red-500">Questions</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Got questions? We've got answers. Check out our FAQs below.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 ${
                  openFaq === index
                    ? 'bg-[#111] border-red-500/30'
                    : 'bg-[#0d0d0d] border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className={`font-semibold transition-colors ${
                    openFaq === index ? 'text-red-400' : 'text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-red-500 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" className="relative py-32 bg-[#080808]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-red-500 font-semibold tracking-wider uppercase">Get in Touch</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4 mb-6">
              Contact <span className="text-red-500">Us</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Have questions or need assistance? Reach out to us and we'll get back to you soon.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid gap-6">
                <div className="group p-6 bg-[#111] rounded-xl border border-white/5 hover:border-red-500/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-lg font-semibold">+91 9696029771</p>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-[#111] rounded-xl border border-white/5 hover:border-red-500/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-lg font-semibold">codevirussec7@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-[#111] rounded-xl border border-white/5 hover:border-red-500/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Venue</p>
                      <p className="text-lg font-semibold">BBS Group of Institutions, Prayagraj</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 bg-[#111] rounded-2xl border border-white/5">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-lg focus:border-red-500/50 focus:outline-none transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Your Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-lg focus:border-red-500/50 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-lg focus:border-red-500/50 focus:outline-none transition-colors"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-lg focus:border-red-500/50 focus:outline-none transition-colors resize-none"
                    placeholder="Your message here..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative py-24 bg-gradient-to-b from-[#080808] to-[#0a0a0a]">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/10 via-transparent to-transparent">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Ready to <span className="text-red-500">Hack</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of developers at India's most exciting Web + AI hackathon. 
              Show your skills, build something amazing, and win big!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:scale-105">
                Register Now
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;