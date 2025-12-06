import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X } from 'lucide-react';
import '../styles/RobotBuddy.css';

const RobotBuddy = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [hasPlayedIntro, setHasPlayedIntro] = useState(false);
    const messagesEndRef = useRef(null);

    const introScript = "Hello! I'm excited to introduce you to my friend Vinay. He is a talented Gen AI Developer and Full-Stack Engineer. Vinay specializes in building intelligent systems using Generative AI, Large Language Models, and RAG architectures. He has gained valuable experience interning at Infosys Springboard and Cognifyz Technologies, where he worked on advanced RAG chatbots and scalable AI solutions. His tech stack is impressive, featuring Python, React, Node.js, and powerful frameworks like LangChain. He's built some cool projects, including a hallucination-free RAG Chatbot and an AI-powered MERN app. Vinay is also a dedicated learner, having solved over 200 DSA problems. Feel free to check out his work below or grab his resume. I'll be here if you need anything!";

    useEffect(() => {
        // Auto-open and ATTEMPT to speak on mount
        if (!hasPlayedIntro) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                addMessage(introScript, 'bot');

                // Try to auto-speak
                speak(introScript);

                // FALLBACK: Add a one-time click listener to the window
                // If auto-play was blocked, the first click anywhere will trigger it
                const handleFirstInteraction = () => {
                    if (!window.speechSynthesis.speaking) {
                        speak(introScript);
                    }
                    // Clean up listeners immediately after first interaction
                    window.removeEventListener('click', handleFirstInteraction);
                    window.removeEventListener('keydown', handleFirstInteraction);
                    window.removeEventListener('scroll', handleFirstInteraction);
                };

                window.addEventListener('click', handleFirstInteraction);
                window.addEventListener('keydown', handleFirstInteraction);
                // Also try on scroll start
                window.addEventListener('scroll', handleFirstInteraction, { once: true });

                setHasPlayedIntro(true);
            }, 1000); // Small delay to ensure page load
            return () => clearTimeout(timer);
        }
    }, [hasPlayedIntro]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const speak = (text) => {
        if ('speechSynthesis' in window) {
            // Check if already speaking to prevent double-talk
            if (window.speechSynthesis.speaking && isSpeaking) return;

            window.speechSynthesis.cancel(); // Stop previous speech
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.pitch = 1.1;
            utterance.rate = 1.0; // Normal speed for clarity
            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);

            // Handle browser autoplay policy errors
            utterance.onerror = (e) => {
                console.warn("Speech synthesis error or blocked:", e);
                setIsSpeaking(false);
            };

            window.speechSynthesis.speak(utterance);
        }
    };

    const addMessage = (text, sender) => {
        setMessages(prev => [...prev, { text, sender }]);
    };

    const handleOptionClick = (option) => {
        addMessage(option.label, 'user');
        setTimeout(() => {
            const response = option.response;
            addMessage(response, 'bot');
            speak(response);
        }, 500);
    };

    const options = [
        {
            label: "🔊 Read Intro",
            response: introScript
        },
        {
            label: "Show Skills",
            response: "Vinay is a pro at Python, JavaScript, React, and FastAPI. He's also an expert in Generative AI, LLMs, and LangChain! Check out the Skills section for more."
        },
        {
            label: "Explain Projects",
            response: "He's built some amazing things! Like a RAG-based Chatbot, an AI-powered MERN app, and even fine-tuned LLaMA-2 models. Scroll down to Projects to see them in action!"
        },
        {
            label: "AI Experience?",
            response: "Vinay has interned at Infosys and Cognifyz, working on RAG systems, LLM fine-tuning, and full-stack AI tools. He's the real deal!"
        },
        {
            label: "Contact Info",
            response: "You can reach him at vinaykumar038123@gmail.com or check out his LinkedIn and GitHub links at the bottom of the page!"
        }
    ];

    return (
        <div className="robot-container">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="chat-window"
                    >
                        <div className="chat-header">
                            <div className="chat-title">
                                <Bot size={20} />
                                <span>AI Buddy</span>
                            </div>
                            <button onClick={() => {
                                setIsOpen(false);
                                window.speechSynthesis.cancel();
                            }} className="close-btn">
                                <X size={18} />
                            </button>
                        </div>

                        <div className="chat-messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.sender}`}>
                                    {msg.text}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="chat-options">
                            {options.map((opt, index) => (
                                <button key={index} onClick={() => handleOptionClick(opt)} className="option-btn">
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`robot-avatar ${isSpeaking ? 'speaking' : ''}`}
            >
                <Bot size={32} color="#fff" />
                <div className="pulse-ring"></div>
            </motion.button>
        </div>
    );
};

export default RobotBuddy;
