import React from 'react';
import { motion } from 'framer-motion';

const RevealText = ({ text, delay = 0, className = '' }) => {
    // Split text into words instead of characters for a smoother effect
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: delay }
        })
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100
            }
        }
    };

    return (
        <motion.div
            style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={className}
        >
            {words.map((word, index) => (
                <motion.span variants={child} key={index} style={{ marginRight: '0.25em' }}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default RevealText;
