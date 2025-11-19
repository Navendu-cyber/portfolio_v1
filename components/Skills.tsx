import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { LucideIcon } from 'lucide-react';

const SkillCard: React.FC<{
  title: string;
  icon: LucideIcon;
  items: string[];
  color: 'blue' | 'amber' | 'cyan';
  index: number;
}> = ({ title, icon: Icon, items, color, index }) => {
  const colorStyles = {
    blue: { bg: 'bg-neon-blue', shadow: 'shadow-[0_0_8px_rgba(0,240,255,0.6)]', border: 'group-hover:border-neon-blue/30', text: 'text-neon-blue' },
    amber: { bg: 'bg-neon-amber', shadow: 'shadow-[0_0_8px_rgba(255,183,0,0.6)]', border: 'group-hover:border-neon-amber/30', text: 'text-neon-amber' },
    cyan: { bg: 'bg-neon-green', shadow: 'shadow-[0_0_8px_rgba(0,255,157,0.6)]', border: 'group-hover:border-neon-green/30', text: 'text-neon-green' },
  };

  const currentStyle = colorStyles[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className={`group relative bg-white dark:bg-dark-card/50 border border-gray-200 dark:border-white/5 p-6 overflow-hidden ${currentStyle.border} transition-all duration-300 shadow-sm dark:shadow-none`}
    >
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent via-transparent to-gray-200/50 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2 rounded bg-gray-100 dark:bg-white/5 ${currentStyle.text} group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={24} />
        </div>
        <h3 className="font-mono font-bold text-lg text-gray-800 dark:text-gray-200 tracking-tight">{title}</h3>
      </div>

      <div className="space-y-3">
        {items.map((skill, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`w-1.5 h-1.5 rounded-full ${currentStyle.bg} ${currentStyle.shadow}`} />
            <span className="text-sm text-gray-600 dark:text-gray-400 font-light group-hover:text-black dark:group-hover:text-gray-200 transition-colors">
              {skill}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Scanline Deco */}
      <div className={`absolute bottom-0 left-0 h-0.5 w-0 ${currentStyle.bg} group-hover:w-full transition-all duration-700 ease-out`} />
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-24 py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-3xl font-mono font-bold text-gray-900 dark:text-white">SKILLS I BUILD WITH</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-neon-blue/50 to-transparent" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SKILLS.map((group, index) => (
            <SkillCard
              key={group.title}
              index={index}
              title={group.title}
              icon={group.icon}
              items={group.skills}
              color={index === 0 ? 'blue' : index === 1 ? 'amber' : 'cyan'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;