import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, 
  author, 
  role, 
  company, 
  avatar,
  rating = 5 
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
      <div className="flex items-center mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
        ))}
      </div>
      <blockquote className="text-gray-600 mb-6 flex-grow">
        "{quote}"
      </blockquote>
      <div className="flex items-center mt-auto">
        <img
          src={avatar}
          alt={author}
          className="h-10 w-10 rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-medium text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "This platform has completely transformed how we build and deploy our applications. The speed and reliability are unmatched.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechNova",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The developer experience is incredible. Our team's productivity has increased by 40% since we started using this platform.",
      author: "Michael Chen",
      role: "Lead Developer",
      company: "Quantum Software",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "I've never seen a more intuitive and powerful set of tools. It's changed how I think about building web applications.",
      author: "Emily Rodriguez",
      role: "Product Manager",
      company: "Innovate Inc",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Loved by thousands of developers
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what our users have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;