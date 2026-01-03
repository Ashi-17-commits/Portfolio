import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold font-poppins text-center mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-accent-600 to-accent-400 mx-auto mb-12 rounded-full"
          />

          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Hi, I'm Sanskriti. I am a Mechanical and automation engineering student with a growing interest in technology and problem solving. I am currently exploring web development and computer science fundamentals while strengthening my core engineering concepts.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I enjoy learning through practical work and prefer building and improving things step by step rather than relying only on theory. I am curious about how technology can be applied to real-world problems and focus on creating simple and effective solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Along with technical skills, I value clarity, consistency, and good communication. I am continuously learning and working on improving my skills, and this portfolio reflects my learning journey and projects so far.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

