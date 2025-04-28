import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Github, BookOpen, Terminal, Code } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and examples',
      details: [
        'Getting started guides',
        'Best practices',
        'Architecture overview',
        'Performance tips'
      ],
      icon: <BookOpen className="h-5 w-5 text-blue-600" />,
      href: '#documentation'
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation',
      details: [
        'REST API endpoints',
        'Authentication',
        'Rate limits',
        'SDK references'
      ],
      icon: <Terminal className="h-5 w-5 text-blue-600" />,
      href: '#api'
    },
    {
      title: 'Tutorials',
      description: 'Learn through examples',
      details: [
        'Video tutorials',
        'Code samples',
        'Integration guides',
        'Use cases'
      ],
      icon: <Code className="h-5 w-5 text-blue-600" />,
      href: '#tutorials'
    }
  ];

  return (
    <header
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-blue-600 font-bold text-2xl flex items-center">
              <Github className="h-8 w-8 mr-2" />
              <span>Saasify</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              Pricing
            </a>
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                <div className="p-2">
                  {resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.href}
                      className="flex items-start p-4 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-shrink-0 mt-1">{resource.icon}</div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">{resource.title}</p>
                        <p className="text-sm text-gray-500 mb-2">{resource.description}</p>
                        <ul className="text-xs text-gray-500 list-disc list-inside">
                          {resource.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors mr-6">
              Sign in
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#pricing" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <details className="text-gray-600">
                <summary className="cursor-pointer">Resources</summary>
                <div className="mt-4 ml-4 space-y-6">
                  {resources.map((resource, index) => (
                    <div key={index} className="space-y-2">
                      <a
                        href={resource.href}
                        className="flex items-center text-gray-900 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {resource.icon}
                        <span className="ml-2">{resource.title}</span>
                      </a>
                      <p className="text-sm text-gray-500">{resource.description}</p>
                      <ul className="text-sm text-gray-500 list-disc list-inside pl-2">
                        {resource.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>
              <div className="pt-4 flex flex-col space-y-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Sign in
                </a>
                <a
                  href="#"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;