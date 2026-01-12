import React from 'react';
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 pt-16 pb-8 border-t border-gray-800 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Social */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Follow Me</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://www.facebook.com/dilshan.thanushka" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                                    <Facebook size={20} /> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/t_h_a_n_u_s_h_k_a_?igsh=bWJpaGE0MnR6NXYw" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                                    <Instagram size={20} /> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/dilshan-thotapaladeniya-9a23a2264/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                                    <Linkedin size={20} /> LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Dilshanthanu" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                                    <Github size={20} /> GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.fiverr.com/dilshan_thanu" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-5-1.75-5-3.25C6 7.9 7.1 7.1 8.5 7.1c1.4 0 2.5.8 2.5 2.15v.25M15.5 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
                                    </svg> Fiverr
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className=" col-span-1 lg:col-span-2">
                        <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Stay Updated</h4>
                        <p className="mb-4 text-gray-400">Subscribe for the latest news on Dilshan Thanushka's</p>
                        <form action="/subscribe" method="POST" className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email"
                                required
                                className="flex-1 bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-accent text-white"
                            />
                            <button type="submit" className="bg-[#ff6600] hover:bg-[#ff8533] text-white font-medium px-6 py-2 rounded-md transition-colors uppercase">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Email: <a href="mailto:dilshanthanushka98@gmail.com" className="hover:text-accent">dilshanthanushka98@gmail.com</a></li>
                            <li>Phone: +94 769743037</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()}  Dilshan Thanushka Portfolio. All rights reserved.</p>
                    <p className="mt-2 text-[#ff6600]">
                        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> | <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
