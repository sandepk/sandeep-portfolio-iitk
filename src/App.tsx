import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Recommendations from './components/Recommendations';
import Education from './components/Education';
import CanvaProject from './components/CanvaProject';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Performance optimization: Preload critical resources
    const preloadImages = () => {
      const imageUrls = [
        '/profile-image.jpg',
        // Add other critical images here
      ];
      
      imageUrls.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = url;
        document.head.appendChild(link);
      });
    };

    preloadImages();
  }, []);

                return (
                <div className="min-h-screen">
                  <Hero />
                  <Resume />
                  <Recommendations />
                  <Projects />
                  <Education />
                  <CanvaProject />
                  <Footer />
                </div>
              );
}

export default App;