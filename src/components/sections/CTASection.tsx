import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-blue-100 mb-10">
            Join thousands of developers building better applications faster.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition-colors duration-200"
            >
              Start your free trial
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-md border border-blue-400 hover:bg-blue-800 transition-colors duration-200"
            >
              Schedule a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;