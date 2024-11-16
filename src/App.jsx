import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Dashboard from './components/Dashboard';
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Use GSAP for smooth scroll animations when navigating to sections
  useEffect(() => {
    gsap.to('body', { opacity: 1, duration: 1 });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      });
    });
  }, []);

  return (
    <div className="App bg-dark-theme text-gray-200 overflow-hidden">
      {/* Navbar at the top */}
      <Navbar />

      {/* Different sections of the portfolio */}
      <main>
        <Home />
        <Dashboard />
        <Skills />
        <Testimonials />
        <About />
        <Contact />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
