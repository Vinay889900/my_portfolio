import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <span>Vinay<span className="highlight">.AI</span></span>
                </div>
                <p className="footer-tagline">Building the future with Artificial Intelligence.</p>

                <div className="social-links">
                    <a href="https://github.com/Vinay889900" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/vinay-kumar-819252291" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:vinaykumar038123@gmail.com" className="social-icon">
                        <Mail size={20} />
                    </a>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Vinay Kumar Uppu. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
