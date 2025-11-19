import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project, ProjectCategory } from '../types';
import { Github, MonitorPlay, X, ChevronRight, Terminal, Lock } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <motion.div
      layoutId={`card-container-${project.id}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className="group relative bg-white dark:bg-dark-card border border-gray-200 dark:border-white/5 hover:border-neon-blue/50 overflow-hidden flex flex-col h-full cursor-pointer rounded-xl transition-colors duration-300 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,240,255,0.15)] dark:shadow-none dark:hover:shadow-[0_20px_40px_-15px_rgba(0,240,255,0.1)]"
    >
      {/* Image Area */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark-card to-transparent z-10 opacity-80" />
        <motion.img
          layoutId={`card-image-${project.id}`}
          src={project.imageUrl}
          alt={project.title}
          initial={{ filter: "grayscale(100%)" }}
          whileInView={{ filter: "grayscale(0%)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 z-20">
          <span className="px-2 py-1 bg-white/80 dark:bg-black/60 border border-gray-300 dark:border-neon-blue/30 text-[10px] font-mono text-gray-800 dark:text-neon-blue rounded backdrop-blur-md shadow-sm">
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow z-20 relative">
        <motion.h3 
          layoutId={`card-title-${project.id}`}
          className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-neon-blue transition-colors"
        >
          {project.title}
        </motion.h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 3).map(tech => (
            <span key={tech} className="text-xs font-mono text-gray-600 dark:text-gray-500 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded border border-transparent group-hover:border-neon-blue/10 transition-colors">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
             <span className="text-xs font-mono text-gray-600 dark:text-gray-500 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded">+{project.techStack.length - 3}</span>
          )}
        </div>

        {/* Actions / Terminal Footer */}
        <div className="mt-auto border-t border-gray-200 dark:border-white/10 pt-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-neon-blue opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
             <span className="text-[10px] font-mono font-bold tracking-widest uppercase">View Details</span>
             <ChevronRight size={14} />
          </div>
          <div className="flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
             <Terminal size={14} className="text-gray-400 dark:text-neon-blue" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        layoutId={`card-container-${project.id}`}
        className="w-full max-w-3xl max-h-[90vh] bg-white dark:bg-dark-card border border-gray-300 dark:border-neon-blue/50 rounded-lg overflow-hidden flex flex-col shadow-2xl dark:shadow-[0_0_50px_rgba(0,240,255,0.1)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Locking Grid Animation Overlay */}
        <motion.div 
          className="absolute inset-0 z-50 flex flex-col pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { delay: 0.5, duration: 0.2 } }}
        >
           {/* Top Half */}
           <motion.div 
             className="flex-1 bg-black border-b border-neon-blue/50 relative"
             initial={{ y: 0 }}
             animate={{ y: "-100%", transition: { delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
           >
              <div className="absolute bottom-2 left-4 text-[10px] font-mono text-neon-blue/50">SECURE_ACCESS_REQUESTED</div>
           </motion.div>
           
           {/* Bottom Half */}
           <motion.div 
             className="flex-1 bg-black border-t border-neon-blue/50 relative"
             initial={{ y: 0 }}
             animate={{ y: "100%", transition: { delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
           >
              <div className="absolute top-2 right-4 text-[10px] font-mono text-neon-blue/50">DECRYPTING_MODULE...</div>
           </motion.div>

           {/* Center Lock */}
           <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neon-blue bg-black p-2 rounded-full border border-neon-blue/30 z-10"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0, transition: { duration: 0.2 } }}
           >
              <Lock size={24} />
           </motion.div>
        </motion.div>

        {/* Close Button */}
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 bg-black/50 hover:bg-neon-blue hover:text-black text-white rounded-full transition-colors border border-white/10"
        >
            <X size={20} />
        </button>

        {/* Header Image */}
        <div className="relative h-64 shrink-0">
            <motion.img 
                layoutId={`card-image-${project.id}`}
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark-card via-white/50 dark:via-dark-card/50 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
                <motion.h2 
                    layoutId={`card-title-${project.id}`}
                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
                >
                    {project.title}
                </motion.h2>
                <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-neon-blue/10 border border-neon-blue/30 text-xs font-mono text-neon-blue rounded">
                        {project.status}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs font-mono text-gray-600 dark:text-gray-400 rounded">
                        {project.category}
                    </span>
                </div>
            </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8 no-scrollbar flex-1">
            <div className="grid md:grid-cols-3 gap-8">
                {/* Main Description */}
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <h3 className="text-lg font-mono text-neon-blue mb-3 flex items-center gap-2">
                            <Terminal size={16} /> SYSTEM_LOG
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {project.longDescription || project.description}
                        </p>
                    </div>

                    {project.features && (
                        <div>
                            <h3 className="text-lg font-mono text-neon-blue mb-3 flex items-center gap-2">
                                <ChevronRight size={16} /> FEATURES
                            </h3>
                            <ul className="space-y-2">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-green shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <div>
                        <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map(tech => (
                                <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm text-gray-700 dark:text-gray-300 rounded hover:border-neon-blue/30 hover:text-neon-blue transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Links</h4>
                        <div className="flex flex-col gap-3">
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-neon-blue transition-colors">
                                    <Github size={18} />
                                    <span className="text-sm">View Code</span>
                                </a>
                            )}
                            {project.demoUrl && (
                                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-neon-blue transition-colors">
                                    <MonitorPlay size={18} />
                                    <span className="text-sm">Live Demo</span>
                                </a>
                            )}
                            {!project.githubUrl && !project.demoUrl && (
                                <span className="text-sm text-gray-500 italic">No public links available</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sort projects: Software first, then Hardware
  const sortedProjects = [
    ...PROJECTS.filter(p => p.category === ProjectCategory.SOFTWARE),
    ...PROJECTS.filter(p => p.category === ProjectCategory.HARDWARE)
  ];

  return (
    <section id="projects" className="scroll-mt-24 py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
            <h2 className="text-3xl font-mono font-bold text-gray-900 dark:text-white mb-4">PROJECT_LOGS</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
                A collection of software applications and embedded systems engineered for performance and real-world utility. Click on any project to inspect the architecture.
            </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={() => setSelectedProject(project)} 
                />
            ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;