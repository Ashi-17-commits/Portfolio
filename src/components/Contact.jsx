import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, Mail, Linkedin, Github, MessageSquare } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:your-email@gmail.com',
      color: 'hover:text-red-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sanskriti-thakur-3428ba324',
      color: 'hover:text-blue-500',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Ashi-17-commits',
      color: 'hover:text-gray-700 dark:hover:text-gray-300',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-600 to-accent-400 mx-auto rounded-full mb-4" />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold font-poppins mb-6 text-gray-800 dark:text-gray-200 flex items-center gap-3">
                  <MessageSquare className="text-accent-600 dark:text-accent-400" size={28} />
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-gray-100"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-gray-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-gray-100"
                      placeholder="Your message..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={20} />
                    Send Message
                  </motion.button>

                  {status === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-600 dark:text-green-400 text-center font-medium"
                    >
                      Message sent successfully!
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex flex-col justify-center">
              <div className="glass rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold font-poppins mb-6 text-gray-800 dark:text-gray-200">
                  Connect With Me
                </h3>

                <div className="space-y-4 mb-8">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ${social.color} transition-all group`}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <social.icon
                        size={24}
                        className="text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform"
                      />
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Prefer email? Drop me a line at:
                  </p>
                  <a
                    href="mailto:sanskriti17may@gmail.com"
                    className="text-accent-600 dark:text-accent-400 font-medium hover:underline"
                  >
                    sanskriti17may@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

