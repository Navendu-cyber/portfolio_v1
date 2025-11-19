import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../constants';
import { Award } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Achievements: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
         <motion.div 
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex items-center gap-4 mb-12"
         >
            <Award className="text-neon-blue" />
            <h2 className="text-2xl font-mono font-bold text-gray-900 dark:text-white">RECOGNITION & OUTREACH</h2>
         </motion.div>

         <motion.div 
           variants={containerVariants}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
           className="grid md:grid-cols-2 gap-8"
         >
            {ACHIEVEMENTS.map((ach, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="group relative bg-white dark:bg-dark-card border border-gray-200 dark:border-white/5 p-1 flex flex-col md:flex-row hover:border-neon-blue/30 transition-colors shadow-md dark:shadow-none"
              >
                  <div className="w-full md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                     <motion.img 
                       initial={{ filter: "grayscale(100%)" }}
                       whileInView={{ filter: "grayscale(0%)" }}
                       viewport={{ once: true, margin: "-50px" }}
                       transition={{ duration: 0.8 }}
                       src={ach.image} 
                       alt={ach.title} 
                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                     <div className="absolute inset-0 bg-neon-blue/10 mix-blend-overlay" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-center">
                      <span className="text-xs font-mono text-neon-cyan dark:text-neon-cyan text-neon-blue mb-2 block">{ach.organization}</span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{ach.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{ach.description}</p>
                  </div>
              </motion.div>
            ))}
         </motion.div>
      </div>
    </section>
  );
};

export default Achievements;