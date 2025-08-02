import React from 'react';
import { GraduationCap, Award, Star, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-indigo-400 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-purple-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main IIT Kanpur Card */}
        <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
          
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          {/* Header Section with Profile and Institution Info */}
          <div className="relative z-10 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
              {/* Profile Section */}
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full animate-gradient bg-[length:200%_200%] p-1">
                    <div className="bg-white rounded-full p-1">
                      <img
                        src="https://bucket-sandepk.s3.eu-north-1.amazonaws.com/sandeep.jpg"
                        alt="Sandeep K Gupta"
                        className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shadow-lg"
                      />
                    </div>
                  </div>
                  {/* Graduation Cap Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-3 shadow-lg border-2 border-white">
                    <GraduationCap className="w-6 h-6 text-yellow-800" />
                  </div>
                </div>
              </div>

              {/* Institution Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  IIT Kanpur
                </h1>
                <p className="text-blue-100 text-xl mb-3">
                  Indian Institute of Technology
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-300 font-medium">Distinguished Alumni</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-blue-200">
                  <MapPin className="w-4 h-4" />
                  <span>Kanpur, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Campus Image Section */}
          <div className="relative mb-8 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
              alt="IIT Kanpur Campus"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Premier Technical Institute of India</h3>
              <p className="text-blue-100">Excellence in Engineering Education</p>
            </div>
          </div>

          {/* Degree Information */}
          <div className="text-center text-white space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Bachelor of Technology
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Engineering
            </p>
            
            {/* Achievement Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-300 px-4 py-2 rounded-full font-medium flex items-center gap-2">
                <Star className="w-4 h-4 fill-current" />
                Excellence in Engineering
              </div>
              <div className="bg-blue-400/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 px-4 py-2 rounded-full font-medium">
                Class of 2019
              </div>
              <div className="bg-purple-400/20 backdrop-blur-sm border border-purple-400/30 text-purple-200 px-4 py-2 rounded-full font-medium">
                B.Tech Engineering
              </div>
            </div>

            {/* Description */}
            <p className="text-blue-100 max-w-3xl mx-auto leading-relaxed text-lg">
              Graduated from one of India's most prestigious technical institutions with a strong foundation in engineering principles, 
              problem-solving methodologies, and analytical thinking. The rigorous curriculum and world-class 
              faculty at IIT Kanpur provided an exceptional learning environment that shaped my technical expertise and professional development.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">4 Years</div>
                <div className="text-blue-200">Engineering Program</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">Top 1%</div>
                <div className="text-blue-200">Engineering Institutes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">2019</div>
                <div className="text-blue-200">Graduation Year</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="mt-8 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/30">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Academic Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              IIT Kanpur is renowned for its cutting-edge research, innovative curriculum, and exceptional faculty. 
              The institution has consistently ranked among the top engineering colleges in India and has produced 
              leaders in technology, entrepreneurship, and academia worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;