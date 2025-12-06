import React from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, delay = 0, className = '' }) => {
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay }
        })
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200
            }
        }
    };

    return (
        <motion.div
            style={{ overflow: 'hidden', display: 'inline-block' }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={className}
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default TypewriterText;
