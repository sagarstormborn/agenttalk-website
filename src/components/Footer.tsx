import React from 'react';
import { Link } from 'react-router-dom';
import { 
  EnvelopeIcon, 
  CalendarIcon,
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Demo', href: '/demo' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Integrations', href: '/integrations' },
      { name: 'Security', href: '/security' },
    ],
    developers: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/docs#api' },
      { name: 'SDKs', href: '/integrations#sdks' },
      { name: 'Protocol Spec', href: '/protocol' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Customers', href: '/customers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/about#careers' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Service', href: '/legal/terms' },
      { name: 'Cookie Policy', href: '/legal/cookies' },
      { name: 'Security', href: '/security' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="AgentTalk" className="w-8 h-8" />
              <span className="text-xl font-bold text-white">AgentTalk</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              The transaction layer for AI agents. Standardized discovery, escrowed payments, 
              and secure execution for autonomous agent-to-agent workflows.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                <a 
                  href="mailto:codesageml@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  codesageml@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <CalendarIcon className="h-5 w-5 text-gray-400" />
                <a 
                  href="https://calendly.com/agenttalk/demo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Book a Demo
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-400" />
                <a 
                  href="/contact" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Request Pilot
                </a>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Developers
            </h3>
            <ul className="space-y-3">
              {footerLinks.developers.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-2">Stay updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest updates on AgentTalk protocol, new features, and pilot opportunities.
            </p>
            <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
              <input
                id="newsletter-email"
                type="email"
                name="newsletter-email"
                placeholder="Enter your email"
                autoComplete="email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-teal-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-teal-700 transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} AgentTalk. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Social media links removed - not set up yet */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 