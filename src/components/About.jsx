import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Reference motion to satisfy some linters that don't detect JSX usage
void motion;

const About = () => {
    // Animation for image and text
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    // Local state to toggle expanded content for accessibility and interaction
    const [expanded, setExpanded] = useState(false);

    return (
        <section id="about" className="py-20 bg-[#0a0f1c] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="relative group flex justify-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-xl blur opacity-25 group-hover:opacity-60 transition duration-500"></div>

                        <img
                            src="./images/my2.png"
                            alt="About Me"
                            className="relative w-80 lg:w-96 rounded-xl shadow-2xl border border-gray-800 z-10 transform transition duration-500 group-hover:scale-105"
                        />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{ ...fadeIn, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            About <span className="text-accent">Me</span>
                        </h2>

                        <div className="space-y-4 text-gray-400 leading-relaxed text-base sm:text-lg">
                            <p>
                                I am a passionate <strong>Full Stack Developer</strong> with a strong foundation in both backend and frontend technologies.
                                I specialize in building scalable web applications and creating interactive user experiences.
                            </p>
                        </div>

                        <AnimatePresence>
                            {expanded && (
                                <motion.div
                                    id="about-expanded"
                                    role="region"
                                    aria-label="More about me"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.36 }}
                                    className="mt-4 space-y-4 text-gray-400 leading-relaxed text-base sm:text-lg overflow-hidden"
                                >
                                    <p>
                                        Currently pursuing my degree at Informatics International Limited, I work with <span className="text-white font-semibold">Java Spring Boot</span>
                                        for backend services and <span className="text-white font-semibold">React</span> for building responsive, accessible frontends.
                                    </p>

                                    <p>
                                        My experience spans the entire development lifecycle—from designing robust RESTful APIs for bookstore management systems to
                                        engineering real-time event ticketing platforms using multithreading concepts and efficient data structures. I enjoy
                                        collaborating on open-source projects and continuously learning new tools.
                                    </p>

                                    <p>
                                        Outside web development, I have built native Android apps with Kotlin and explored modern UI patterns and architecture.
                                        I’m always eager to take on challenging projects and contribute meaningful, well-tested code.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>


                        <div className="mt-8">
                            <button
                                onClick={() => setExpanded((s) => !s)}
                                aria-expanded={"" + !!expanded}
                                aria-controls="about-expanded"
                                className="px-8 py-3 rounded-full border border-accent text-accent font-medium hover:bg-accent hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/60"
                            >
                                {expanded ? 'Show Less' : 'Read More'}
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
