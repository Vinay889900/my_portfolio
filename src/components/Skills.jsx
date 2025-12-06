import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Brain, Cloud, Terminal, Layout, Globe, Server, Wrench } from 'lucide-react';
import '../styles/Skills.css';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('all');

    const categories = [
        { id: 'all', label: 'All Skills', icon: <Globe size={18} /> },
        { id: 'languages', label: 'Languages', icon: <Code2 size={18} /> },
        { id: 'frontend', label: 'Frontend', icon: <Layout size={18} /> },
        { id: 'backend', label: 'Backend', icon: <Server size={18} /> },
        { id: 'ai', label: 'AI & ML', icon: <Brain size={18} /> },
        { id: 'devops', label: 'DevOps', icon: <Cloud size={18} /> },
        { id: 'tools', label: 'Tools', icon: <Wrench size={18} /> },
    ];

    const skills = [
        // Programming Languages
        { name: "Python", category: "languages", level: 95, icon: "🐍" },
        { name: "Java", category: "languages", level: 90, icon: "☕" },
        { name: "JavaScript", category: "languages", level: 95, icon: "📜" },
        { name: "SQL", category: "languages", level: 88, icon: "🗄️" },

        // Frontend
        { name: "HTML", category: "frontend", level: 95, icon: "🌐" },
        { name: "CSS", category: "frontend", level: 90, icon: "🎨" },
        { name: "React.js", category: "frontend", level: 92, icon: "⚛️" },
        { name: "MERN Stack", category: "frontend", level: 90, icon: "🏗️" },
        { name: "Next.js", category: "frontend", level: 88, icon: "▲" },

        // Backend
        { name: "FastAPI", category: "backend", level: 92, icon: "⚡" },
        { name: "Node.js", category: "backend", level: 90, icon: "🟢" },
        { name: "Express.js", category: "backend", level: 88, icon: "🚂" },
        { name: "Spring Boot", category: "backend", level: 85, icon: "🍃" },

        // AI / ML
        { name: "Generative AI", category: "ai", level: 95, icon: "✨" },
        { name: "LLMs", category: "ai", level: 92, icon: "🧠" },
        { name: "LangChain", category: "ai", level: 90, icon: "🔗" },
        { name: "LangGraph", category: "ai", level: 88, icon: "🕸️" },
        { name: "NLP", category: "ai", level: 90, icon: "🗣️" },
        { name: "Computer Vision", category: "ai", level: 85, icon: "👁️" },
        { name: "TensorFlow", category: "ai", level: 88, icon: "📉" },
        { name: "Keras", category: "ai", level: 85, icon: "🤖" },
        { name: "Scikit-learn", category: "ai", level: 90, icon: "🔬" },
        { name: "HuggingFace", category: "ai", level: 92, icon: "🤗" },
        { name: "RAG", category: "ai", level: 90, icon: "📚" },
        { name: "FAISS", category: "ai", level: 88, icon: "🔍" },
        { name: "ChromaDB", category: "ai", level: 88, icon: "🌈" },
        { name: "Pinecone", category: "ai", level: 85, icon: "🌲" },
        { name: "LoRA Fine-Tuning", category: "ai", level: 85, icon: "🎯" },

        // DevOps / Cloud
        { name: "AWS", category: "devops", level: 85, icon: "☁️" },
        { name: "Render", category: "devops", level: 90, icon: "🚀" },
        { name: "Vercel", category: "devops", level: 92, icon: "▲" },
        { name: "Docker", category: "devops", level: 88, icon: "🐳" },
        { name: "CI/CD", category: "devops", level: 85, icon: "🔄" },

        // Tools
        { name: "VS Code", category: "tools", level: 95, icon: "📝" },
        { name: "GitHub", category: "tools", level: 95, icon: "🐙" },
        { name: "Postman", category: "tools", level: 90, icon: "🚀" },
        { name: "Linux", category: "tools", level: 85, icon: "🐧" },
        { name: "Jupyter", category: "tools", level: 92, icon: "📓" },
        { name: "Make", category: "tools", level: 80, icon: "🛠️" },
        { name: "Zapier", category: "tools", level: 85, icon: "⚡" },
        { name: "N8N", category: "tools", level: 85, icon: "🔄" },
        { name: "Claude", category: "tools", level: 90, icon: "🤖" },
        { name: "Replit", category: "tools", level: 88, icon: "💻" },
    ];

    const filteredSkills = activeTab === 'all'
        ? skills
        : skills.filter(skill => skill.category === activeTab);

    return (
        <section className="skills-container" id="skills">
            <div className="skills-wrapper">
                <div className="skills-header-section">
                    <h2 className="section-title center">Technical Arsenal</h2>
                    <p className="skills-subtitle">My weapons of choice for building the future.</p>
                </div>

                <div className="skills-tabs">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`skill-tab ${activeTab === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(cat.id)}
                        >
                            {cat.icon}
                            <span>{cat.label}</span>
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="skills-grid-new"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredSkills.map((skill, index) => (
                            <motion.div
                                layout
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="skill-card-new"
                            >
                                <div className="skill-icon-new">{skill.icon}</div>
                                <div className="skill-info-new">
                                    <h4>{skill.name}</h4>
                                    <div className="skill-bar-container">
                                        <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                                    </div>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
