import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Career from './components/Career';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Career />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
