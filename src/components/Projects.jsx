import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Server, Ticket, Home, Smartphone } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Book Store API',
            desc: 'A robust RESTful API for managing bookstore inventory and user authentication securely using Spring Boot. Implements JWT auth and full CRUD operations.',
            tech: ['Java', 'Spring Boot', 'JWT', 'MySQL'],
            link: 'https://github.com/Dilshanthanu/Book-Store-API',
            icon: <Server size={32} />
        },
        {
            title: 'Event Ticketing System',
            desc: 'Real-time simulation of a ticketing system handling concurrent producer-consumer transactions. Features a CLI for management and a React dashboard for visualization.',
            tech: ['Java', 'Multithreading', 'React', 'TypeScript'],
            link: 'https://github.com/Dilshanthanu/Real-Time-Event-Ticketing-System',
            icon: <Ticket size={32} />
        },
        {
            title: 'Home Quest',
            desc: 'Modern property discovery platform with advanced search and filtering capabilities. Built with React for a seamless, interactive user experience.',
            tech: ['React', 'JavaScript', 'CSS3', 'Vite'],
            link: 'https://github.com/Dilshanthanu/Home-Quest',
            icon: <Home size={32} />
        },
        {
            title: 'Android Portfolio',
            desc: 'A suite of native Android applications including "Dice Game" and "MovieMate" built with Kotlin, demonstrating MVVM architecture and mobile UI best practices.',
            tech: ['Kotlin', 'Android SDK', 'MVVM', 'Mobile'],
            link: 'https://github.com/Dilshanthanu',
            icon: <Smartphone size={32} />
        }
    ];

    return (
        <section id="projects" className="py-20 bg-background relative">
            <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Featured <span className="text-accent">Projects</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Explore some of my recent work, ranging from backend systems to mobile applications.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700 hover:border-accent/50 transition-all duration-300 group hover:transform hover:-translate-y-2"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-300">
                                    {project.icon}
                                </div>
                                <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <ExternalLink size={20} />
                                </a>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">{project.desc}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-900 rounded-full text-xs font-medium text-gray-300 border border-gray-700">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/Dilshanthanu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 rounded-full hover:border-accent hover:text-accent transition-all duration-300">
                        <Github size={20} /> View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
