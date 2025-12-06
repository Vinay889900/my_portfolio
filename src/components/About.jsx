import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Code, Users } from 'lucide-react';
import RevealText from './RevealText';
import '../styles/About.css';

import aiRobotImg from '../assets/ai_robot.png';

const About = () => {
    const stats = [
        { icon: <Code size={24} />, value: "10+", label: "Projects Built" },
        { icon: <Award size={24} />, value: "5+", label: "Certifications" },
        { icon: <Briefcase size={24} />, value: "200+", label: "DSA Problems Solved" },
        { icon: <Users size={24} />, value: "24/7", label: "Committed Learner" }
    ];

    return (
        <section className="about-container" id="about">
            <div className="about-wrapper">
                <motion.div
                    className="about-image-section"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="about-image-card">
                        <div className="about-image-glow"></div>
                        <img
                            src={aiRobotImg}
                            alt="AI Robot"
                            className="about-profile-img"
                        />
                        <div className="about-badge">
                            <span className="badge-icon">🚀</span>
                            <span className="badge-text">Available for Hire</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="about-content-section"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">About Me</h2>
                    <h3 className="about-subtitle">Building the Future with <span className="highlight">Artificial Intelligence</span></h3>

                    <div className="about-description">
                        <RevealText
                            text="I am an AI Engineer and Full-Stack Developer passionate about building intelligent, scalable applications. My expertise lies in Generative AI, LLMs, and modern web technologies. I don't just write code; I craft solutions that solve real-world problems."
                            delay={0.2}
                        />
                        <br />
                        <RevealText
                            text="With a strong foundation in both research and engineering, I bridge the gap between theoretical AI models and production-ready applications. I am constantly learning and evolving with the tech landscape."
                            delay={0.4}
                        />
                    </div>

                    <div className="about-stats">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stat-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + (index * 0.1) }}
                                viewport={{ once: true }}
                            >
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-info">
                                    <span className="stat-value">{stat.value}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
