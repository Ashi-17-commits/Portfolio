import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
            © {currentYear} Portfolio. Made with
            <Heart size={16} className="text-red-500 fill-current" />
            using React & Tailwind CSS
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="#home"
              className="text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            >
              Back to Top
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

