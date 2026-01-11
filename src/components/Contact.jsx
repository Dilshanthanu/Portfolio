import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Original fetch logic
        fetch('http://localhost:5000/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                alert('Message sent!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(error => {
                console.error('Error:', error);
                // ALERT FOR USER CHECK
                alert('This feature requires a backend running at localhost:5000. For now, this is a UI demo.');
            });
    };

    return (
        <section id="contact" className="py-20 relative bg-[#0a0f1c]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                        Contact <span className="text-accent">Info</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        <p className="text-gray-400 mb-6 text-lg">
                            I’m always excited to collaborate on new projects or discuss design ideas. Feel free to reach out through any of the following channels:
                        </p>

                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 flex items-center gap-4 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                            <div className="p-3 bg-accent/10 rounded-full text-accent shadow-sm shadow-accent/20">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">Email</h4>
                                <p className="text-gray-400">dilshanthanushka98@gmail.com</p>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 flex items-center gap-4 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                            <div className="p-3 bg-accent/10 rounded-full text-accent shadow-sm shadow-accent/20">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">Phone</h4>
                                <p className="text-gray-400">+94 769743037</p>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 flex items-center gap-4 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                            <div className="p-3 bg-accent/10 rounded-full text-accent shadow-sm shadow-accent/20">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">Address</h4>
                                <p className="text-gray-400">No 29, Thannahena Jambughapitiya</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm shadow-xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-accent text-black font-bold py-3 rounded-lg hover:bg-cyan-400 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/30"
                            >
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
