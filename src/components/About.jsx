import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    // Animation for image and text
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="about" className="py-20 bg-dark relative overflow-hidden">
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
                        {/* Using a fallback placeholder if image fails, but should work since we moved it */}
                        <img
                            src="./images/my2.jpg"
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
                                Currently pursuing my degree at Informatics International Limited, I specialize in building scalable web applications using
                                <span className="text-white font-semibold"> Java Spring Boot</span> and creating interactive user experiences with
                                <span className="text-white font-semibold"> React</span>.
                            </p>
                            <p>
                                My experience spans across the entire development lifecycle—from designing robust RESTful APIs for bookstore management
                                systems to engineering real-time event ticketing platforms using complex multithreading concepts. I thrive on solving
                                real-world problems through clean, efficient code.
                            </p>
                            <p>
                                Beyond the web, I have hands-on experience in <strong>Mobile Development</strong>, building native Android apps with Kotlin
                                that demonstrate modern UI principles and architecture. I am always eager to learn new tools and contribute to
                                innovative projects.
                            </p>
                        </div>


                        <div className="mt-8">
                            <button className="px-8 py-3 rounded-full border border-accent text-accent font-medium hover:bg-accent hover:text-black transition-all duration-300">
                                Read More
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
