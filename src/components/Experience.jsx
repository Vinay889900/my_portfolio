import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import '../styles/Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: "Artificial Intelligence Intern",
            company: "Infosys Springboard",
            duration: "Oct 2024 - Dec 2024",
            description: [
                "Spearheaded the development of advanced RAG (Retrieval-Augmented Generation) systems, significantly improving the accuracy of information retrieval for internal knowledge bases.",
                "Designed and implemented scalable Large Language Model (LLM) applications, leveraging frameworks like LangChain and LlamaIndex to orchestrate complex AI workflows.",
                "Optimized vector database queries using FAISS and ChromaDB, reducing search latency by 40% and enhancing the responsiveness of AI-driven tools.",
                "Collaborated with cross-functional teams to deploy full-stack AI solutions on cloud platforms including AWS and Render, ensuring high availability and seamless integration."
            ]
        },
        {
            role: "Full Stack Developer Intern",
            company: "Cognifyz Technologies",
            duration: "Feb 2024 - Mar 2024",
            description: [
                "Architected and built robust MERN stack applications, integrating cutting-edge AI features to deliver personalized user experiences.",
                "Engineered responsive and intuitive user interfaces using React.js and Tailwind CSS, resulting in a 25% increase in user engagement metrics.",
                "Developed secure and efficient RESTful APIs with Node.js and Express, implementing JWT authentication and role-based access control.",
                "Managed end-to-end deployment pipelines using Vercel and Netlify, streamlining the release process and ensuring continuous delivery of new features."
            ]
        }
    ];

    return (
        <section className="experience-container" id="experience">
            <h2 className="section-title center">Experience</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                    >
                        <div className="timeline-content">
                            <div className="timeline-icon">
                                <Briefcase size={20} />
                            </div>
                            <h3>{exp.role}</h3>
                            <h4>{exp.company}</h4>
                            <span className="experience-duration">{exp.duration}</span>
                            <ul>
                                {exp.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
