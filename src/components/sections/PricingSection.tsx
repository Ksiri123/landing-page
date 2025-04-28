import React from 'react';
import { Check } from 'lucide-react';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({ 
  name, 
  price, 
  description, 
  features,
  isPopular = false 
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border ${isPopular ? 'border-blue-200 ring-2 ring-blue-500' : 'border-gray-200'} p-8 relative`}>
      {isPopular && (
        <div className="absolute top-0 right-0 -mt-4 -mr-4">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-lg font-medium text-gray-900">{name}</h3>
      <p className="mt-4 text-sm text-gray-500">{description}</p>
      <p className="mt-8">
        <span className="text-4xl font-extrabold text-gray-900">{price}</span>
        {price !== 'Free' && <span className="text-base font-medium text-gray-500">/month</span>}
      </p>
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <Check className="h-5 w-5 text-green-500" />
            </div>
            <p className="ml-3 text-sm text-gray-500">{feature}</p>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <a
          href="#"
          className={`block w-full rounded-md px-4 py-2 text-center text-sm font-semibold ${
            isPopular
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
          } transition-colors duration-200`}
        >
          {isPopular ? 'Start your trial' : 'Get started'}
        </a>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const pricingTiers = [
    {
      name: 'Hobby',
      price: 'Free',
      description: 'All the basics for personal projects or learning.',
      features: [
        'Up to 3 projects',
        '1GB of storage',
        'Basic analytics',
        'Community support'
      ]
    },
    {
      name: 'Pro',
      price: '$29',
      description: 'Everything you need for small teams and serious projects.',
      features: [
        'Unlimited projects',
        '10GB of storage',
        'Advanced analytics',
        'Priority support',
        'Custom domains',
        'Team collaboration'
      ],
      isPopular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      description: 'Advanced features for organizations with complex needs.',
      features: [
        'Everything in Pro',
        'Unlimited storage',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security',
        'SLA guarantees'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the perfect plan for your needs. Always know what you'll pay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              isPopular={tier.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;