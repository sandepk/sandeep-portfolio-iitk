import React from 'react';
import { Github, ExternalLink, Star, GitBranch, Calendar } from 'lucide-react';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Canva AI Generated Text',
      description: 'AI-powered text generation integration with Canva, featuring advanced text processing and creative automation.',
      tech: ['TypeScript', 'AI/ML', 'Canva API'],
      github: 'https://github.com/sandepk/canva-ai-generated-text-sandeep',
      live: null,
      stars: 0,
      forks: 0,
      language: 'TypeScript',
      updated: 'Jul 27, 2025'
    },
    {
      title: 'Canva AI Backend',
      description: 'Backend service for Canva AI integration, handling data processing and API management.',
      tech: ['JavaScript', 'Node.js', 'API Development'],
      github: 'https://github.com/sandepk/canva-ai-backend-sandeep',
      live: null,
      stars: 0,
      forks: 0,
      language: 'JavaScript',
      updated: 'Jul 25, 2025'
    },
    {
      title: 'React Breadcrumb Component',
      description: 'Customizable breadcrumb navigation component for React applications with advanced routing support.',
      tech: ['React', 'JavaScript', 'UI Components'],
      github: 'https://github.com/sandepk/react-breadcrum',
      live: null,
      stars: 0,
      forks: 0,
      language: 'JavaScript',
      updated: 'Jun 29, 2025'
    },
    {
      title: 'Infinite Scrolling Implementation',
      description: 'High-performance infinite scrolling component with optimized rendering and memory management.',
      tech: ['React', 'JavaScript', 'Performance'],
      github: 'https://github.com/sandepk/infinite-scrolling',
      live: null,
      stars: 0,
      forks: 0,
      language: 'JavaScript',
      updated: 'Jun 29, 2025'
    },
    {
      title: 'Docker & Jenkins CI/CD',
      description: 'Complete CI/CD pipeline setup with Docker containers and Jenkins automation for deployment.',
      tech: ['Docker', 'Jenkins', 'CI/CD', 'DevOps'],
      github: 'https://github.com/sandepk/sandeep-jenkins',
      live: null,
      stars: 0,
      forks: 0,
      language: 'Dockerfile',
      updated: 'Jun 26, 2025'
    },
    {
      title: 'Python Docker Applications',
      description: 'Containerized Python applications with Docker for scalable deployment and development.',
      tech: ['Python', 'Docker', 'Containerization'],
      github: 'https://github.com/sandepk/docker-sandeep',
      live: null,
      stars: 0,
      forks: 0,
      language: 'Python',
      updated: 'Jun 26, 2025'
    }
  ];

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'TypeScript': 'bg-blue-600',
      'JavaScript': 'bg-yellow-500',
      'Python': 'bg-green-600',
      'Java': 'bg-orange-600',
      'Dockerfile': 'bg-blue-500',
      'HTML': 'bg-red-500',
      'C++': 'bg-pink-600'
    };
    return colors[language] || 'bg-gray-600';
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work, featuring full-stack applications, AI integrations, and modern web development solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.updated}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitBranch className="w-4 h-4" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-600 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Language Badge */}
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></div>
                <span className="text-sm text-gray-600">{project.language}</span>
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/sandepk?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 