import { useState, useEffect } from 'react';
import logo from '../assets/hacksecurelogowithouttext.png'
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Shield, 
  Phone, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  ChevronUp
} from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Why Join', href: '#why-join' },
    { name: 'AI Features', href: '#ai-features' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-lg shadow-lg shadow-red-500/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group"
              onClick={() => scrollToTop()}
            >
              <div className="relative">
                 <img src={logo} alt="Logo" className="
                    h-40 w-20 object-contain
                    brightness-180 contrast-80
                    drop-shadow-[0_0_6px_rgba(255,0,0,0.35)]
                  "/>
                <div className="absolute inset-0 bg-red-500/10 blur-xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  HACK SECURE
                </span>
                <span className="text-xs text-red-500 tracking-widest">2026</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button className="relative px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                <span className="relative z-10">Register Soon</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-lg border-t border-white/10 transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg">
              Register Soon
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-12 h-12 text-red-500" />
                <div>
                  <h3 className="text-2xl font-bold">HACK SECURE 2026</h3>
                  <p className="text-red-500 text-sm">Web + AI Hackathon</p>
                </div>
              </div>
              <p className="text-gray-400 max-w-md mb-6">
                A national-level hackathon focusing on secure web innovation and artificial 
                intelligence. Join us for an unforgettable experience of coding, learning, 
                and innovation.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Twitter, href: '#' },
                  { icon: Instagram, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Github, href: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500/20 transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-red-500" />
                  <span>+91 9696029771</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-red-500" />
                  <span>codevirussec7@gmail.com</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-white/5 rounded-lg">
                <p className="text-sm text-gray-400">
                  <span className="text-white font-medium">Venue:</span><br />
                  BBS Group of Institutions, Prayagraj
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Hack Secure. All rights reserved. Organized by Codevirus Security Pvt. Ltd.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-red-500 transition-colors">Code of Conduct</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/25 transition-all duration-300 hover:bg-red-400 z-50 ${
          showScrollTop ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
        }`}
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Layout;