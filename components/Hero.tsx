import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HERO_CONTENT } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-36 pb-12 md:pt-0 md:pb-0">

      <motion.div
        style={{ opacity, scale }}
        className="max-w-7xl w-full mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10"
      >

        {/* Text Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/5 mb-6 mx-auto md:mx-0">
              <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
              <span className="text-xs font-mono text-neon-blue tracking-widest">SYSTEM ONLINE</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Hi, I’m <span className="text-neon-blue">Navendu</span>.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-200 dark:to-gray-500 text-2xl md:text-4xl block mt-2 font-light">
                Flutter Developer & <br />Embedded Systems Engineer
              </span>
            </h1>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg leading-relaxed mx-auto md:mx-0">
              {HERO_CONTENT.subtext}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 bg-neon-blue/10 border border-neon-blue text-neon-blue font-mono hover:bg-neon-blue hover:text-black transition-all duration-300 flex items-center gap-2 group rounded"
              >
                VIEW PROJECTS
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300 font-mono hover:border-gray-900 dark:hover:border-white/30 hover:text-black dark:hover:text-white transition-all rounded"
              >
                CONTACT ME
              </a>
            </div>
          </motion.div>
        </div>

        {/* Visual / Portrait - Restored Photo Space */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            {/* Abstract Background Glow */}
            <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-[80px] animate-pulse" />

            {/* Photo Container with Tech styling */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 dark:border-white/5 shadow-2xl group">
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-neon-blue/50 rounded-tr-xl z-20 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-neon-blue/20" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-neon-blue/50 rounded-bl-xl z-20 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-neon-blue/20" />

              {/* Image Place Holder - Replace src with your actual photo */}
              <div className="w-full h-full bg-gray-200 dark:bg-gray-800 relative">
                <img
                  src="/profile.jpg"
                  alt="Navendu"
                  className="w-full h-full object-cover opacity-100 mix-blend-normal transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/10 to-transparent pointer-events-none" />

                {/* Scanline effect over photo */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
              </div>
            </div>

          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 opacity-60"
      >
        <span className="text-[10px] font-mono tracking-[0.2em]">SCROLL</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;