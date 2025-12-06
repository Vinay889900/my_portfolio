import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "RAG-Based Chatbot",
            description: "Built a Retrieval-Augmented Generation system with vector search + embeddings. Integrated LangChain for pipeline orchestration & OpenAI for accurate responses. Reduced hallucinations and improved precision across queries.",
            tech: ["LangChain", "LLMs", "FAISS", "OpenAI"],
            link: "https://huggingface.co/spaces/vinay9900/rag_pdf_chatbot",
            github: "https://github.com/Vinay889900/RAG_BASED_CHATBOT"
        },
        {
            title: "AI Powered MERN Application",
            description: "Developed a full-stack AI platform using React, Node.js, MongoDB. Integrated ultra-fast inference using Groq API for real-time chatbot & content generation. Deployed using Vercel & Render with secure API routing.",
            tech: ["React", "Node.js", "DeepSeek R1", "Groq API"],
            link: null,
            github: "https://github.com/Vinay889900/mern_gen_ai_project"
        },
        {
            title: "AI Content Writer",
            description: "Designed multi-step workflow: keyword extraction → title → outline → article. SEO-optimized, fast, responsive UI. Deployed serverless on Vercel (frontend) and Render (backend).",
            tech: ["React", "Node.js", "Gemini API"],
            link: null,
            github: "https://github.com/Vinay889900/ai_content_writer_backend"
        },
        {
            title: "Fine-Tuning LLaMA-2 Using LoRA",
            description: "Implemented LoRA fine-tuning on LLaMA-2 7B/13B using PEFT + BitsAndBytes. 4-bit quantization reduced GPU requirements by 70–90%. Delivered a custom domain-optimized LLM that runs efficiently on a single GPU.",
            tech: ["LLaMA-2", "LoRA", "PEFT", "BitsAndBytes"],
            link: null,
            github: "https://github.com/Vinay889900/finetuning_llm"
        }
    ];

    return (
        <section className="projects-container" id="projects">
            <h2 className="section-title center">Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="project-card"
                    >
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="tech-badge">{t}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer"><Github size={20} /> Code</a>
                                {project.link && (
                                    <a href={project.link} className="project-link demo-link" target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /> Demo</a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
