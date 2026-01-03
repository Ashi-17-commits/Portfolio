import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Kolam-Chitra',
      description: 'A web application bridging traditional Kolam art with modern technology. Features AI-powered design generation, interactive practice canvas, educational gallery, and Firebase authentication. Built with Next.js and Google\'s Gemini AI.',
      tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Firebase', 'Genkit AI'],
      github: 'https://github.com/Ashi-17-commits/Kolam-Chitra',
      live: 'https://github.com/Ashi-17-commits/Kolam-Chitra',
      image: '🎨',
    },
    {
      title: 'Roll-a-Ball Game',
      description: 'My first platformer game built in Unity. A classic roll-a-ball game featuring smooth gameplay mechanics, shader effects, and interactive elements. Demonstrates game development skills with Unity engine.',
      tech: ['Unity', 'C#', 'ShaderLab', 'HLSL'],
      github: 'https://github.com/Ashi-17-commits/Roll-a-Ball-game',
      live: 'https://github.com/Ashi-17-commits/Roll-a-Ball-game',
      image: '🎮',
    },
    {
      title: 'CircuLite',
      description: 'A project showcasing expertise in circuit design and electronics. Features modern web interface for circuit visualization and simulation tools.',
      tech: ['React', 'JavaScript', 'HTML5', 'CSS3'],
      github: 'https://github.com/Ashi-17-commits/CircuLite',
      live: 'https://github.com/Ashi-17-commits/CircuLite',
      image: '⚡',
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
    hidden: { opacity: 0, y: 50 },
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
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-600 to-accent-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group glass rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-accent-500 to-purple-600 flex items-center justify-center text-6xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <span className="relative z-10">{project.image}</span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold font-poppins mb-3 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors font-medium group/link"
                    whileHover={{ x: 5 }}
                  >
                    <Github size={18} />
                    <span>Code</span>
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors font-medium group/link"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

