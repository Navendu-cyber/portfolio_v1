import React from 'react';
import { ABOUT_CONTENT } from '../constants';
import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24 py-32 relative overflow-hidden bg-gray-100/50 dark:bg-black/20 transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
            {/* Terminal Window - Kept Dark for Aesthetic Consistency */}
            <div className="rounded-lg overflow-hidden bg-[#0c0c0c] border border-gray-300 dark:border-neon-blue/20 shadow-xl dark:shadow-[0_0_30px_rgba(0,240,255,0.05)] font-mono text-sm md:text-base">
                {/* Terminal Header */}
                <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="text-gray-500 text-xs flex items-center gap-2">
                        <Terminal size={12} className="text-neon-purple" />
                        <span>navendu@portfolio:~</span>
                    </div>
                    <div className="w-12"></div> {/* Spacer */}
                </div>

                {/* Terminal Body */}
                <div className="p-8 space-y-6 min-h-[200px]">
                    
                    <div className="pl-4 border-l border-neon-purple/30 space-y-4">
                        <p className="text-gray-300 leading-relaxed">
                            {ABOUT_CONTENT}
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                            <div className="bg-white/5 p-3 rounded border border-white/5 hover:border-neon-blue/30 transition-colors">
                                <span className="text-gray-500 text-xs block mb-1">CURRENT_STATUS</span>
                                <span className="text-neon-green">● ONLINE</span>
                            </div>
                            <div className="bg-white/5 p-3 rounded border border-white/5 hover:border-neon-blue/30 transition-colors">
                                <span className="text-gray-500 text-xs block mb-1">LOCATION</span>
                                <span className="text-neon-blue">Kerala, India</span>
                            </div>
                             <div className="bg-white/5 p-3 rounded border border-white/5 hover:border-neon-blue/30 transition-colors">
                                <span className="text-gray-500 text-xs block mb-1">ROLE</span>
                                <span className="text-neon-purple">Engineer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;