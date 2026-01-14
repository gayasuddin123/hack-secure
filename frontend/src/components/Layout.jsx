import { useState, useEffect } from 'react';
import logo from '../assets/hacksecurelogowithouttext.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Why Join', href: '/why-join' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActiveLink = (href) => {
    return location.pathname === href;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-xl shadow-lg shadow-black/50 border-b border-red-900/20'
            : 'bg-gradient-to-b from-black/80 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="h-40 w-20 object-contain brightness-180 contrast-80 drop-shadow-[0_0_8px_rgba(220,38,38,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(220,38,38,0.6)] transition-all duration-300"
                />
                <div className="absolute inset-0 bg-red-600/10 blur-xl group-hover:bg-red-600/20 transition-all duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  HACK SECURE
                </span>
                <span className="text-xs text-red-500 tracking-widest font-medium">2026</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                    isActiveLink(link.href) 
                      ? 'text-red-500' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-red-600 to-red-400 transition-all duration-300 ${
                      isActiveLink(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} 
                  />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button className="relative px-6 py-3 bg-gradient-to-r from-red-700 to-red-600 text-white font-semibold rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 border border-red-500/30">
                <span className="relative z-10">Register Soon</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_70%)] transition-opacity duration-300" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/98 backdrop-blur-xl border-t border-red-900/20 transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActiveLink(link.href)
                    ? 'text-red-500 bg-red-500/10 border-l-2 border-red-500'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-red-700 to-red-600 text-white font-semibold rounded-lg border border-red-500/30 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300">
              Register Soon
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-red-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-600/10 rounded-xl border border-red-600/20">
                  <Shield className="w-10 h-10 text-red-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    HACK SECURE 2026
                  </h3>
                  <p className="text-red-500 text-sm font-medium">National Level Hackathon</p>
                </div>
              </div>
              <p className="text-gray-500 max-w-md mb-6 leading-relaxed">
                A national-level hackathon focusing on secure web innovation and cutting-edge 
                technology. Join us for an unforgettable experience of coding, learning, 
                and innovation.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Github, href: '#', label: 'GitHub' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-[#111111] border border-gray-800 flex items-center justify-center text-gray-500 hover:text-red-500 hover:border-red-600/30 hover:bg-red-600/10 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-500 hover:text-red-500 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-red-500 transition-colors duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-500 hover:text-gray-300 transition-colors duration-300">
                  <div className="p-2 bg-red-600/10 rounded-lg border border-red-600/20">
                    <Phone className="w-4 h-4 text-red-500" />
                  </div>
                  <span>+91 9696029771</span>
                </li>
                <li className="flex items-center gap-3 text-gray-500 hover:text-gray-300 transition-colors duration-300">
                  <div className="p-2 bg-red-600/10 rounded-lg border border-red-600/20">
                    <Mail className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-sm">codevirussec7@gmail.com</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-[#111111] rounded-xl border border-gray-800">
                <p className="text-sm text-gray-500">
                  <span className="text-white font-medium block mb-1">📍 Venue</span>
                  BBS Group of Institutions, Prayagraj
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              © 2026 Hack Secure. All rights reserved. Organized by Codevirus Security Pvt. Ltd.
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-red-500 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-red-500 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-red-500 transition-colors duration-300">Code of Conduct</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-red-700 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30 transition-all duration-300 hover:shadow-red-600/50 hover:scale-105 z-50 border border-red-500/30 ${
          showScrollTop ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Layout;