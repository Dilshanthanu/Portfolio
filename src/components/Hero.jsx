import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Download, Mail } from "lucide-react";

const Hero = () => {
    const [text, setText] = useState("");
    const fullText = "HI I'M Dilshan Thanushka";
    const [roleIndex, setRoleIndex] = useState(0);

    const roles = [
        "Java Developer",
        "Frontend Developer",
        "UI/UX Developer",
        "Backend Developer",
    ];

    useEffect(() => {
        if (text.length < fullText.length) {
            const timeout = setTimeout(() => {
                setText(fullText.slice(0, text.length + 1));
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [text]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            {/* Background Gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
                <div className="order-2 md:order-1 text-center md:text-left">
                    <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tight min-h-[80px]">
                        {text}
                        <span className="animate-blink text-accent">|</span>
                    </h1>

                    <div className="text-xl sm:text-2xl font-semibold mb-6 flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-2 h-[40px] overflow-hidden">
                        <span className="text-gray-400">And I'M</span>
                        <motion.div
                            key={roleIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-accent"
                        >
                            {roles[roleIndex]}
                        </motion.div>
                    </div>

                    <p className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                        For the past year, I have been deeply involved in the field of UI/UX
                        design and development, honing my skills and gaining hands-on
                        experience in creating intuitive, user-centric digital interfaces
                        while also implementing development solutions to bring these designs
                        to life.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="./Docs/Dilshan Totapaladeniya cv 2.pdf"
                            target="_blank"
                            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            <Download size={20} />
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border border-accent/50 text-accent hover:bg-accent hover:text-black font-bold rounded-lg shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            <Mail size={20} />
                            Hire Me Now!
                        </a>
                    </div>

                    <div className="flex gap-6 mt-8 justify-center md:justify-start social-icons">
                        {[
                            { Icon: Facebook, link: "https://www.facebook.com/dilshan.thanushka" },
                            { Icon: Instagram, link: "https://www.instagram.com/t_h_a_n_u_s_h_k_a_?igsh=bWJpaGE0MnR6NXYw" },
                            { Icon: Linkedin, link: "https://www.linkedin.com/in/dilshan-thotapaladeniya-9a23a2264/" },
                            {
                                Icon: ({ size }) => (
                                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-5-1.75-5-3.25C6 7.9 7.1 7.1 8.5 7.1c1.4 0 2.5.8 2.5 2.15v.25M15.5 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
                                        <path d="M6 9h7" />
                                    </svg>
                                ),
                                link: "https://www.fiverr.com/dilshan_thanu"
                            }
                        ].map(({ Icon, link }, index) => (
                            <a
                                key={index}
                                href={link || "#"}
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 bg-gray-800/50 rounded-full text-gray-400 hover:text-accent hover:bg-gray-800 border border-transparent hover:border-accent/30 transition-all duration-300 transform hover:scale-110"
                            >
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center relative">
                    {/* Image Glow/Backdrop */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-[40px] opacity-40 animate-pulse"></div>
                        <img
                            src="./images/my1.png"
                            alt="Dilshan Thanushka"
                            className="relative w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-2xl border-2 border-gray-800/50 transform rotate-3 hover:rotate-0 transition-transform duration-500 z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
