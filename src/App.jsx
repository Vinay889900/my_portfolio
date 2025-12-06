import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import RobotBuddy from './components/RobotBuddy';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Background3D from './components/Background3D';

function App() {
    return (
        <div className="app-container">
            <Background3D />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
            <RobotBuddy />
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default App;
