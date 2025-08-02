import React, { useState } from 'react';
import { Download, FileText, Eye, Mail, Phone, MapPin, Calendar, Github } from 'lucide-react';

const Resume = () => {
  const [selectedFormat, setSelectedFormat] = useState('pdf');

  const handleDownloadResume = (format: string) => {
    const link = document.createElement('a');
    link.href = `/resume.${format}`;
    link.download = `Sandeep_K_Gupta_Resume.${format}`;
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreviewResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent mb-6">
            Resume
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download my professional resume in your preferred format or preview it online.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Resume Preview Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Resume Summary</h3>
                <p className="text-gray-600 text-sm">Professional overview</p>
              </div>
            </div>

            {/* Resume Summary */}
            <div className="space-y-4">
              {/* Professional Summary */}
              <div>
                <h4 className="text-base font-semibold text-gray-800 mb-2">Professional Summary</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  AI-focused Senior Frontend Engineer with 5+ years of experience building scalable, 
                  performant web applications. Specialized in ReactJS, Next.js, TypeScript, and modern 
                  development tools with proven track record of delivering production-grade features.
                </p>
              </div>

              {/* Contact Info */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-base font-semibold text-gray-800 mb-2">Contact</h4>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91-8210900726</span>
                </div>
              </div>

              {/* Key Stats */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-base font-semibold text-gray-800 mb-3">Key Highlights</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="text-sm font-bold text-blue-600">5+</div>
                    <div className="text-xs text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-sm font-bold text-green-600">15%</div>
                    <div className="text-xs text-gray-600">YoY Growth</div>
                  </div>
                </div>
              </div>

              {/* Preview Notice */}
              <div className="border-t border-gray-200 pt-4">
                <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                  <div className="flex items-center justify-center gap-2 text-blue-800 mb-1">
                    <Eye className="w-3 h-3" />
                    <span className="text-xs font-medium">Resume Preview</span>
                  </div>
                  <p className="text-xs text-blue-700">Download for complete details</p>
                </div>
              </div>
            </div>

            {/* Preview Button */}
            <button
              onClick={handlePreviewResume}
              className="w-full mt-4 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg"
            >
              <Eye className="w-4 h-4" />
              Preview Full Resume
            </button>
          </div>

          {/* Download Options */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-success-100 to-accent-100 rounded-xl flex items-center justify-center shadow-lg">
                <Download className="w-6 h-6 text-success-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Download Resume</h3>
                <p className="text-gray-600 text-sm">Choose your preferred format</p>
              </div>
            </div>

            {/* Format Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Format
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'pdf', label: 'PDF', desc: 'Best for printing', icon: '📄' },
                  { value: 'docx', label: 'DOCX', desc: 'Editable format', icon: '📝' }
                ].map((format) => (
                  <button
                    key={format.value}
                    onClick={() => setSelectedFormat(format.value)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                      selectedFormat === format.value
                        ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-secondary-50 text-primary-700 shadow-lg'
                        : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-xl mb-1">{format.icon}</div>
                    <div className="font-semibold text-sm">{format.label}</div>
                    <div className="text-xs text-gray-500">{format.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={() => handleDownloadResume(selectedFormat)}
              className="w-full bg-gradient-to-r from-success-600 to-accent-600 hover:from-success-700 hover:to-accent-700 text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 transform"
            >
              <Download className="w-5 h-5" />
              Download Resume ({selectedFormat.toUpperCase()})
            </button>

            {/* Additional Info */}
            <div className="mt-8 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <span className="text-lg">✨</span>
                Resume Features
              </h4>
              <ul className="text-sm text-blue-700 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Professional formatting and layout
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Updated with latest experience
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Optimized for ATS systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Print-friendly design
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary-600 mb-2">99.26%</div>
            <div className="text-gray-600">JEE Advanced Percentile</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-600 mb-2">IIT</div>
            <div className="text-gray-600">Kanpur Graduate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 