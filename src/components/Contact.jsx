import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section className="contact-container" id="contact">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="contact-content"
            >
                <h2 className="section-title center">Get In Touch</h2>
                <p className="contact-subtitle">Feel free to reach out for collaborations or just a friendly hello</p>

                <div className="contact-links">
                    <a href="mailto:vinaykumar038123@gmail.com" className="contact-item">
                        <div className="icon-box"><Mail /></div>
                        <span>vinaykumar038123@gmail.com</span>
                    </a>

                    <a href="tel:+919949933912" className="contact-item">
                        <div className="icon-box"><Phone /></div>
                        <span>+91-9949933912</span>
                    </a>

                    <a href="https://linkedin.com/in/vinay-kumar-819252291" target="_blank" rel="noopener noreferrer" className="contact-item">
                        <div className="icon-box"><Linkedin /></div>
                        <span>LinkedIn Profile</span>
                    </a>

                    <a href="https://github.com/Vinay889900" target="_blank" rel="noopener noreferrer" className="contact-item">
                        <div className="icon-box"><Github /></div>
                        <span>GitHub Profile</span>
                    </a>
                </div>
            </motion.div>

            <footer className="footer">
                <p>© {new Date().getFullYear()} Vinay Kumar Uppu. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
