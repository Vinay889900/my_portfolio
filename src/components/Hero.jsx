import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero-container" id="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-name"
                    >
                        VINAY KUMAR UPPU
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hero-title"
                    >
                        AI Engineer | Full-Stack Developer | Generative AI Specialist
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="hero-tagline"
                    >
                        “Building Intelligent Systems with Generative AI, LLMs, RAG, and Full-Stack Engineering.”
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="hero-buttons"
                    >
                        <a href="/resume.pdf" download className="btn btn-primary">Download Resume</a>
                        <Link to="about" smooth={true} duration={500} className="btn btn-secondary">About Me</Link>
                        <Link to="projects" smooth={true} duration={500} className="btn btn-outline">View Projects</Link>
                        <Link to="contact" smooth={true} duration={500} className="btn btn-outline">Contact Me</Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-image-container"
                >
                    <img src="/profile.jpg" alt="Vinay Kumar Uppu" className="hero-profile-img" />
                </motion.div>
            </div>

            <div className="hero-background-effects">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>
        </section>
    );
};

export default Hero;
