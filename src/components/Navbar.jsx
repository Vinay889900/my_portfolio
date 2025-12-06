import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Experience', to: 'experience' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Code2 size={32} className="logo-icon" />
                    <span>Vinay<span className="highlight">.AI</span></span>
                </div>

                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="nav-link"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-menu"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="mobile-nav-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
