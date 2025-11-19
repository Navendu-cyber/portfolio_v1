import React from 'react';
import { motion } from 'framer-motion';

const CircuitBackground: React.FC<{ isDark?: boolean }> = ({ isDark = true }) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Static Grid */}
      <div className={`absolute inset-0 bg-[size:4rem_4rem] transition-opacity duration-300 ${isDark
          ? "bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"
          : "bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] opacity-20"
        }`}></div>

      {/* Animated Traces */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="trace-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Vertical Lines */}
        <motion.line
          x1="10%" y1="0" x2="10%" y2="100%"
          stroke="url(#trace-grad)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 0 }}
        />
        <motion.line
          x1="90%" y1="100%" x2="90%" y2="0"
          stroke="url(#trace-grad)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 2 }}
        />

        {/* Horizontal Lines */}
        <motion.path
          d="M0 200 H 300 L 350 250 H 1000"
          fill="transparent"
          stroke={isDark ? "#00F0FF" : "#0ea5e9"}
          strokeWidth="1"
          strokeDasharray="10 20"
          strokeOpacity="0.2"
          animate={{ strokeDashoffset: [0, -100] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M1000 600 H 600 L 550 550 H 0"
          fill="transparent"
          stroke={isDark ? "#00FF9D" : "#22c55e"}
          strokeWidth="1"
          strokeDasharray="10 20"
          strokeOpacity="0.2"
          animate={{ strokeDashoffset: [0, 100] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
};

export default CircuitBackground;