import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Recommendations from './components/Recommendations';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Resume />
      <Recommendations />
      <Education />
      <Footer />
    </div>
  );
}

export default App;