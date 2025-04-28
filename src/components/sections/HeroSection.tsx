import React from 'react';
import { ArrowRight, Code, BookOpen, Terminal, Blocks } from 'lucide-react';

const ResourceCard: React.FC<{
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}> = ({ href, icon, title, description, details }) => (
  <a href={href} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all group">
    <div className="flex items-start space-x-3">
      <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <ul className="text-xs text-gray-500 list-disc list-inside">
          {details.slice(0, 2).map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  </a>
);

const HeroSection: React.FC = () => {
  const resources = [
    {
      href: '#docs',
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      title: 'Documentation',
      description: 'Comprehensive guides and examples',
      details: [
        'Getting started guides',
        'Best practices',
        'Architecture overview',
        'Performance tips'
      ]
    },
    {
      href: '#api',
      icon: <Terminal className="h-6 w-6 text-blue-600" />,
      title: 'API Reference',
      description: 'Complete API documentation',
      details: [
        'REST API endpoints',
        'Authentication',
        'Rate limits',
        'SDK references'
      ]
    },
    {
      href: '#guides',
      icon: <Code className="h-6 w-6 text-blue-600" />,
      title: 'Guides',
      description: 'Learn through examples',
      details: [
        'Video tutorials',
        'Code samples',
        'Integration guides',
        'Use cases'
      ]
    },
    {
      href: '#components',
      icon: <Blocks className="h-6 w-6 text-blue-600" />,
      title: 'Components',
      description: 'Ready-to-use UI components',
      details: [
        'Component library',
        'Design system',
        'Customization',
        'Accessibility'
      ]
    }
  ];

  return (
    <div className="relative isolate overflow-hidden pt-14">
      {/* Background gradient */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Your application, <span className="text-blue-600">supercharged</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Build beautiful, high-performance applications with our modern framework. Get started in minutes and deploy anywhere.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
              >
                Get started for free
              </a>
              <a href="#features" className="group text-base font-semibold leading-6 text-gray-900 flex items-center">
                Learn more <ArrowRight className="ml-2 h-4 w-4 text-gray-500 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative mx-auto border border-gray-200 bg-white rounded-xl shadow-2xl md:ml-auto">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Dashboard Preview"
                className="rounded-t-xl w-full"
              />
              <div className="grid grid-cols-2 gap-4 p-6 bg-gray-50 rounded-b-xl">
                {resources.map((resource, index) => (
                  <ResourceCard key={index} {...resource} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;