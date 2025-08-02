import React from 'react';
import { ExternalLink, Code, Zap, Palette } from 'lucide-react';

const CanvaProject = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Interactive AI Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience my latest AI-powered project - a Canva-inspired text generation tool built with modern web technologies.
          </p>
        </div>

        {/* Project Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">AI-Powered</h3>
            <p className="text-gray-600 text-sm">Advanced text generation using cutting-edge AI models</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Modern Tech Stack</h3>
            <p className="text-gray-600 text-sm">Built with React, TypeScript, and deployed on Vercel</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">User-Friendly</h3>
            <p className="text-gray-600 text-sm">Intuitive interface with real-time interaction</p>
          </div>
        </div>

        {/* Interactive Project Frame */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
          {/* Frame Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Canva AI Text Generator</h3>
                <p className="text-purple-100 text-sm">Live Demo - Interactive Experience</p>
              </div>
            </div>
            <a
              href="https://canva-ai-generated-text-sandeep.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              Open Full Screen
            </a>
          </div>

          {/* Interactive Iframe */}
          <div className="relative">
            <iframe
              src="https://canva-ai-generated-text-sandeep.vercel.app/"
              title="Canva AI Text Generator - Interactive Demo"
              className="w-full h-[600px] border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
            
            {/* Loading Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600 font-medium">Loading Interactive Project...</p>
                <p className="text-gray-500 text-sm mt-2">Please wait while the application loads</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Project Features</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">AI-powered text generation</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Real-time user interaction</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Responsive design</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Modern UI/UX</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Vercel deployment</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Technical Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-lg p-3">
                <div className="font-semibold text-purple-700 text-sm">Frontend</div>
                <div className="text-gray-600 text-sm">React, TypeScript</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="font-semibold text-blue-700 text-sm">Styling</div>
                <div className="text-gray-600 text-sm">Tailwind CSS</div>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <div className="font-semibold text-green-700 text-sm">Deployment</div>
                <div className="text-gray-600 text-sm">Vercel</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-3">
                <div className="font-semibold text-orange-700 text-sm">AI Integration</div>
                <div className="text-gray-600 text-sm">OpenAI API</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="https://canva-ai-generated-text-sandeep.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <ExternalLink className="w-6 h-6" />
            Explore Full Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default CanvaProject; 