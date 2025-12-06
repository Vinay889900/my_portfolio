import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '30px',
                        right: '30px',
                        background: 'var(--color-primary)',
                        color: '#000',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 1000,
                        boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)'
                    }}
                    whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(0, 240, 255, 0.6)' }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ArrowUp size={24} strokeWidth={3} />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
