import React from 'react';
import { Zap, Shield, BarChart, RefreshCw, Tablet, Code } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <div className="w-12 h-12 bg-blue-100 rounded-lg text-blue-600 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Lightning Fast',
      description: 'Optimized for speed with intelligent caching and minimal bundle sizes.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Rock-Solid Security',
      description: 'Enterprise-level security features to keep your data and users safe.'
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Powerful Analytics',
      description: 'Gain insights with comprehensive analytics and reporting tools.'
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: 'Continuous Updates',
      description: 'Stay ahead with automatic updates and new features.'
    },
    {
      icon: <Tablet className="h-6 w-6" />,
      title: 'Responsive Design',
      description: 'Beautiful on any device with adaptive layouts and components.'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Developer Friendly',
      description: 'Clean APIs, extensive documentation, and powerful developer tools.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-gray-600">
            Our platform provides all the tools and features you need to build exceptional experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;