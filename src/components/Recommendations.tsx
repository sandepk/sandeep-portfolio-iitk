import React from 'react';
import { Quote, Star, Linkedin } from 'lucide-react';

const Recommendations = () => {
  const recommendations = [
    {
      id: 1,
      name: 'Rahul Gautam',
      title: 'Senior Principal Engineer',
      company: 'Apollo 24|7',
      content: 'Sandeep was an essential part of the Apollo Insurance frontend development, driving key features and ensuring high-quality, maintainable code using React.js and Next.js. His dedication and ability to deliver under tight deadlines were critical to the successful launch of the project within six months. Sandeep consistently showed strong ownership, technical expertise, and a proactive approach that made a real difference to the team\'s success. I highly recommend him for any frontend engineering role.',
      rating: 5
    },
    {
      id: 2,
      name: 'Piyush Upadhyay',
      title: 'Principal Software Engineer',
      company: 'Apollo 24|7',
      content: 'Sandeep is reliable and detail-oriented, with a clear and structured approach to his work. He balances technical depth with big-picture thinking, consistently improving team output. I would gladly work with him again.',
      rating: 5
    },
    {
      id: 3,
      name: 'Amit Kumar',
      title: 'Senior Software Engineer',
      company: 'QuinStreet Software Pvt. Ltd.',
      content: 'Sandeep demonstrated exceptional technical skills and leadership during our collaboration. His expertise in React and modern frontend technologies significantly improved our development velocity. He consistently delivered high-quality code and mentored junior developers effectively.',
      rating: 5
    },
    {
      id: 4,
      name: 'Sampat Kumar',
      title: 'Technical Lead',
      company: 'Securiti Sciences Pvt. Ltd.',
      content: 'Sandeep is a highly skilled frontend developer with excellent problem-solving abilities. His attention to detail and commitment to code quality helped us maintain high standards. He consistently delivered features on time and was always willing to help team members.',
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="recommendations" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent mb-6">
            Professional Recommendations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Endorsements from senior colleagues and industry professionals who have directly worked with me on critical projects.
          </p>
        </div>

        {/* Recommendations Grid - First 3 Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.slice(1, 4).map((recommendation, index) => (
            <div
              key={recommendation.id}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Quote Icon and Stars */}
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex items-center gap-1">
                  {renderStars(recommendation.rating)}
                </div>
              </div>

              {/* Recommendation Content */}
              <div className="flex-1 mb-6">
                <p className="text-gray-700 leading-relaxed text-sm italic">
                  "{recommendation.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-base">
                      {recommendation.name}
                    </h4>
                    <p className="text-gray-600 text-sm font-medium">
                      {recommendation.title}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {recommendation.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rahul Gautam's Recommendation - Centered Below */}
        <div className="flex justify-center mt-12">
                      <div
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full max-w-md"
              style={{ animationDelay: '0.2s' }}
            >
            {/* Quote Icon and Stars */}
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-primary-600" />
              </div>
              <div className="flex items-center gap-1">
                {renderStars(recommendations[0].rating)}
              </div>
            </div>

            {/* Recommendation Content */}
            <div className="flex-1 mb-6">
              <p className="text-gray-700 leading-relaxed text-sm italic">
                "{recommendations[0].content}"
              </p>
            </div>

            {/* Author Info */}
            <div className="border-t border-gray-100 pt-4 mt-auto">
              <div className="flex items-center">
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-base">
                    {recommendations[0].name}
                  </h4>
                  <p className="text-gray-600 text-sm font-medium">
                    {recommendations[0].title}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {recommendations[0].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-white/95 to-blue-50/50 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/30 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Want to see more recommendations?
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Connect with me on LinkedIn to view all my professional endorsements, recommendations, and detailed feedback from colleagues across different companies.
            </p>
            <a
              href="https://www.linkedin.com/in/sandeep-gupta-0702661a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Linkedin className="w-6 h-6" />
              View All Recommendations on LinkedIn
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-3">5.0</div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary-600 mb-3">5+</div>
            <div className="text-gray-600 font-medium">Total Recommendations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-600 mb-3">100%</div>
            <div className="text-gray-600 font-medium">Positive Feedback</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations; 