import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const Checkpoint: React.FC<{ progress: any; position: number }> = ({ progress, position }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const unsubscribe = progress.on("change", (v: number) => {
      // Activate when scroll passes the position (converted to 0-1 range)
      setActive(v >= position / 100);
    });
    return () => unsubscribe();
  }, [progress, position]);

  return (
    <div 
      className="absolute -translate-x-1/2 left-1/2"
      style={{ top: `${position}%` }}
    >
      <motion.div 
        animate={{ 
          backgroundColor: active ? "#00F0FF" : "transparent", // neon-blue
          borderColor: active ? "#00F0FF" : "rgba(156, 163, 175, 0.3)",
          boxShadow: active ? "0 0 10px #00F0FF" : "none"
        }}
        transition={{ duration: 0.3 }}
        className="w-3 h-3 rounded-full border-2 bg-light-bg dark:bg-dark-bg relative z-10"
      />
      {/* Pulse effect when active */}
      {active && (
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: [0, 0.5, 0], scale: [1, 2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-neon-blue rounded-full -z-10"
        />
      )}
    </div>
  );
};

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Positions of checkpoints in percentage (approximate to sections)
  const checkpoints = [5, 20, 40, 60, 80, 95];

  return (
    <div className="fixed left-8 top-0 bottom-0 z-40 hidden xl:flex flex-col justify-center w-8 pointer-events-none">
      {/* Track Container */}
      <div className="relative h-[70vh] w-[2px] bg-gray-300 dark:bg-white/5 rounded-full mx-auto">
        
        {/* Filling Trace */}
        <motion.div 
          style={{ height: useTransform(pathLength, value => `${value * 100}%`) }}
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-neon-blue via-neon-cyan to-neon-purple shadow-[0_0_15px_rgba(0,240,255,0.6)]"
        />

        {/* Checkpoints */}
        {checkpoints.map((pos, idx) => (
          <Checkpoint key={idx} progress={pathLength} position={pos} />
        ))}

      </div>
    </div>
  );
};

export default ScrollProgress;