import React from 'react';
import { Mail, Linkedin, Download, MapPin, Github, Star, GraduationCap, FileText } from 'lucide-react';

const Hero = () => {
  const techStack = [
    { name: 'ReactJS', color: 'bg-primary-500' },
    { name: 'TypeScript', color: 'bg-primary-600' },
    { name: 'JavaScript', color: 'bg-warning-500' },
    { name: 'Node.js', color: 'bg-success-600' },
    { name: 'Docker', color: 'bg-blue-600' },
    { name: 'Python', color: 'bg-green-600' },
    { name: 'Java', color: 'bg-orange-600' },
    { name: 'Webpack', color: 'bg-blue-500' }
  ];

  const handleGetInTouch = () => {
    window.location.href = 'mailto:sandeep@example.com';
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/sandeep-gupta-0702661a1/', '_blank');
  };

  const handleGitHub = () => {
    window.open('https://github.com/sandepk?tab=repositories', '_blank');
  };

  const handleDownloadResume = () => {
    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sandeep_K_Gupta_Resume.pdf';
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-secondary-400 to-warning-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-accent-300 to-primary-300 rounded-full opacity-10 animate-pulse-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          
          {/* Main Profile Section */}
          <div className="w-full bg-white/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] animate-fade-in">
            
            {/* Profile Image */}
            <div className="flex justify-center mb-8 animate-slide-up">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  <img 
                    src="/profile-image.jpg" 
                    alt="Sandeep K Gupta - Senior Frontend Engineer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a placeholder if image doesn't load
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNNDAgMTYwQzQwIDEzNS4yIDYwLjIgMTE1IDg1IDExNUgxMTVDMTM5LjggMTE1IDE2MCAxMzUuMiAxNjAgMTYwVjE3NUg0MFYxNjBaIiBmaWxsPSIjOUNBM0FGIi8+Cjwvc3ZnPgo=';
                    }}
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 rounded-full opacity-20 animate-pulse"></div>
              </div>
            </div>
            
            {/* Profile Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent mb-4 animate-slide-up">
                Sandeep K Gupta
              </h1>
              <div className="flex items-center justify-center gap-2 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium text-lg flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Senior Frontend Engineer (SDE-2)
                </div>
              </div>
              <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                AI-focused senior frontend engineer with <span className="font-semibold text-primary-600">5+ years</span> of experience building scalable, performant web applications. Specialized in ReactJS, Next.js, TypeScript, and modern AI-powered development tools.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-success-50 border border-success-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <div className="w-12 h-12 bg-success-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-success-800 mb-2">5+ Years Experience</h3>
                <p className="text-success-700 text-sm">Frontend Development & AI Integration</p>
              </div>

              <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-primary-800 mb-2">Enterprise Solutions</h3>
                <p className="text-primary-700 text-sm">Scalable Web Applications</p>
              </div>

              <div className="bg-secondary-50 border border-secondary-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.5s' }}>
                <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-secondary-800 mb-2">IIT Kanpur Graduate</h3>
                <p className="text-secondary-700 text-sm">Engineering</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.map((tech, index) => (
                  <span
                    key={tech.name}
                    className={`${tech.color} text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default`}
                    style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <button
                onClick={handleGetInTouch}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </button>
              <button
                onClick={handleLinkedIn}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </button>
              <button
                onClick={handleGitHub}
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Github className="w-5 h-5" />
                GitHub Profile
              </button>
              <button
                onClick={handleDownloadResume}
                className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>
              <a
                href="#resume"
                className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <FileText className="w-5 h-5" />
                View Resume
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-gray-600 animate-slide-up" style={{ animationDelay: '0.9s' }}>
              <MapPin className="w-5 h-5" />
              <span>Available for Remote Opportunities Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;