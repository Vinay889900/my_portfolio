import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import '../styles/Certifications.css';

const Certifications = () => {
    const certifications = [
        "Generative AI Professional — Oracle Verified Certification",
        "Generative AI Leader track - Google",
        "AI/ML/DL — Infosys",
        "Python — Skill India",
        "Full Stack Development — Udemy"
    ];

    return (
        <section className="certifications-container" id="certifications">
            <h2 className="section-title center">Certifications</h2>
            <div className="cert-grid">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="cert-card"
                    >
                        <Award className="cert-icon" size={30} />
                        <p>{cert}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
