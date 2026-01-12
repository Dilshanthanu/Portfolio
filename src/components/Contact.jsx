import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_lwmj2x7',        
        'template_v50x9kb',       
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'zUvf-Zkolqhw7OHTV'          
      )
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to send message. Please try again.');
      })
      .finally(() => {
        setLoading(false);
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
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="text-gray-400 mb-6 text-lg">
              I’m always excited to collaborate on new projects or discuss design ideas.
            </p>

            <InfoCard icon={<Mail />} title="Email" value="dilshanthanushka98@gmail.com" />
            <InfoCard icon={<Phone />} title="Phone" value="+94 769743037" />
            <InfoCard icon={<MapPin />} title="Address" value="No 29, Thannahena Jambughapitiya" />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input label="Name" name="name" value={formData.name} onChange={handleChange} />
              <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
              <Textarea label="Message" name="message" value={formData.message} onChange={handleChange} />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-400 transition"
              >
                {loading ? 'Sending...' : <>
                  <Send size={18} /> Send Message
                </>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* Small reusable components */
const InfoCard = ({ icon, title, value }) => (
  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 flex items-center gap-4">
    <div className="p-3 bg-accent/10 rounded-full text-accent">{icon}</div>
    <div>
      <h4 className="font-bold text-white">{title}</h4>
      <p className="text-gray-400">{value}</p>
    </div>
  </div>
);

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm text-gray-400 mb-2">{label}</label>
    <input
      {...props}
      required
      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-accent outline-none"
    />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div>
    <label className="block text-sm text-gray-400 mb-2">{label}</label>
    <textarea
      {...props}
      rows="4"
      required
      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-accent outline-none"
    />
  </div>
);

export default Contact;
