import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Layout, Database, Globe, Cpu, Smartphone } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'Frontend Development',
            desc: 'Building responsive, interactive, and high-performance user interfaces using modern frameworks like React and Next.js. I focus on creating seamless experiences that look great on any device.',
            icon: <Layout size={32} />,
            color: 'from-blue-400 to-cyan-300'
        },
        {
            title: 'Backend Development',
            desc: 'Designing robust and scalable server-side architectures with Node.js and Spring Boot. I ensure your applications are secure, efficient, and capable of handling complex business logic.',
            icon: <Server size={32} />,
            color: 'from-green-400 to-emerald-300'
        },
        {
            title: 'Full Stack Web Solutions',
            desc: 'Delivering end-to-end web solutions from concept to deployment. I integrate frontend elegance with backend power to build complete, production-ready applications tailored to your needs.',
            icon: <Globe size={32} />,
            color: 'from-purple-400 to-pink-300'
        },
        {
            title: 'Mobile App Development',
            desc: 'Developing seamless cross-platform and native mobile applications using React Native, Swift, and Android. I build performant apps that work beautifully on iOS and Android.',
            icon: <Smartphone size={32} />,
            color: 'from-orange-400 to-red-400'
        }
    ];

    return (
        <section id="services" className="py-20 bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">My <span className="text-accent">Services</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I offer a comprehensive range of web development services to bring your digital ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ service, index }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            className="group relative bg-gray-800/40 p-8 rounded-2xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-colors duration-300"
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.15), transparent 40%)`,
                }}
            />

            {/* Hover Gradient Background (Existing but refined) */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

            <div className="relative z-10">
                <div className="p-3 bg-accent/10 rounded-xl text-accent w-fit mb-6 group-hover:bg-accent group-hover:text-black transition-colors duration-300 shadow-lg shadow-accent/5">
                    {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.desc}
                </p>
            </div>
        </motion.div>
    );
};

export default Services;
