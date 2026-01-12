import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const Career = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    // Smooth out the progress
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const timeline = [
        {
            year: '2023',
            title: "Started Bachelor's Degree",
            company: "Informatics Institute of Technology",
            desc: "Began my academic journey in Computer Science, laying the strong foundation for my software engineering career.",
            icon: <GraduationCap size={24} />,
            current: false
        },
        {
            year: '2024',
            title: "Software Engineering Intern",
            company: "Informatics International Limited",
            desc: "Joined Informatics as an intern, gaining real-world experience in full-stack development and enterprise software solutions.",
            icon: <Briefcase size={24} />,
            current: false
        },
        {
            year: 'Present',
            title: "Software Engineering Intern",
            company: "Informatics International Limited",
            desc: "Currently working at Informatics, contributing to complex projects and further honing my skills in modern web technologies.",
            icon: <CodeIcon />,
            current: true
        }
    ];

    return (
        <section id="career" className="py-20 bg-background relative overflow-hidden" ref={ref}>
            {/* Background elements */}
            <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">My <span className="text-accent">Career Journey</span></h2>
                    <p className="text-gray-400">
                        The path I've taken to get to where I am today.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line Container */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-800 transform md:-translate-x-1/2 overflow-hidden rounded-full">
                        {/* Animated Filled Line */}
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="w-full h-full bg-accent origin-top"
                        />
                    </div>

                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[28px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-background border-4 border-gray-800 z-10 group-hover:border-accent transition-colors duration-300 shadow-xl">
                                    <div className={`w-full h-full rounded-full flex items-center justify-center ${item.current ? 'text-accent' : 'text-gray-400'}`}>
                                        {item.icon}
                                    </div>
                                    {item.current && (
                                        <span className="absolute w-full h-full rounded-full animate-ping bg-accent/20"></span>
                                    )}
                                </div>

                                {/* Content Spilter for Desktop Layout */}
                                <div className="hidden md:block md:w-1/2"></div>

                                {/* Content Card */}
                                <div className="ml-20 md:ml-0 md:w-1/2 md:px-10">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className={`bg-gray-800/40 p-6 rounded-2xl border border-gray-700 transition-all duration-300 relative cursor-pointer group hover:bg-gray-800/60 ${item.current ? 'border-accent/40 shadow-[0_0_30px_rgba(6,182,212,0.15)]' : 'hover:border-accent/50'}`}
                                    >

                                        {/* Arrow pointer for desktop */}
                                        <div className={`hidden md:block absolute top-[26px] w-4 h-4 bg-gray-800/40 border-t border-l border-gray-700 rotate-45 transform group-hover:bg-gray-800/60 transition-colors duration-300 ${index % 2 === 0 ? '-left-[9px] -border-r-0 -border-b-0' : '-right-[9px] border-t-0 border-l-0 border-r border-b'
                                            } ${(item.current && index % 2 === 0) ? 'border-l-accent/40 border-t-accent/40' : ''} ${(item.current && index % 2 !== 0) ? 'border-r-accent/40 border-b-accent/40' : ''}`}></div>

                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${item.current ? 'bg-accent text-black' : 'bg-gray-700 text-gray-300'}`}>
                                                {item.year}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold mb-1 text-white group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                                        <h4 className={`text-md font-medium mb-3 flex items-center gap-2 ${item.current ? 'text-accent' : 'text-primary'}`}>
                                            <Briefcase size={16} className="inline" /> {item.company}
                                        </h4>
                                        <p className="text-gray-400 leading-relaxed text-sm">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

export default Career;
