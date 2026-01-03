import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Award, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      type: 'experience',
      title: 'GenAI Intern',
      company: 'GenAI Internship Program',
      period: '2024 - 2025',
      description: 'Completed a comprehensive 6-week internship focused on Generative AI technologies. Gained hands-on experience with AI models, machine learning frameworks, and AI application development.',
      achievements: [
        'Worked on cutting-edge generative AI projects',
        'Developed practical AI solutions and applications',
        'Enhanced skills in machine learning and AI development',
      ],
    },
    {
      type: 'achievement',
      title: 'Industrial Ideathon\'25 - 2nd Runner Up',
      organization: 'Industrial Ideathon 2025',
      period: '2025',
      description: 'Secured 2nd runner-up position in the Industrial Ideathon 2025, showcasing innovative problem-solving and technical expertise.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-600 to-accent-400 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 to-purple-500 hidden md:block" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-12"
          >
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-accent-500 rounded-full border-4 border-white dark:border-gray-900 hidden md:block z-10" />

                <div className="glass rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                      {item.type === 'experience' ? (
                        <Briefcase className="text-accent-600 dark:text-accent-400" size={24} />
                      ) : (
                        <Award className="text-accent-600 dark:text-accent-400" size={24} />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold font-poppins text-gray-800 dark:text-gray-200">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar size={16} />
                          <span>{item.period}</span>
                        </div>
                      </div>
                      <p className="text-accent-600 dark:text-accent-400 font-medium mb-3">
                        {item.company || item.organization}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.achievements && (
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-accent-500 mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

