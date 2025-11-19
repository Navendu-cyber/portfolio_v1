import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import CircuitBackground from './components/CircuitBackground';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-gray-200 selection:bg-neon-blue/30 selection:text-neon-blue relative transition-colors duration-300`}>
      <CircuitBackground isDark={isDark} />
      <ScrollProgress />
      
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;