import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, Github, Linkedin, Youtube, FileText, Instagram } from 'lucide-react';
// import resumeUrl from '../src/resume.pdf'; // Removed import

const Contact: React.FC = () => {
   return (
      <section id="contact" className="scroll-mt-24 py-24 relative bg-gray-100 dark:bg-black/40 transition-colors duration-300">
         <div className="max-w-4xl mx-auto px-6 text-center">

            <div className="inline-block p-3 border border-neon-blue/20 rounded-full mb-8 bg-white dark:bg-transparent">
               <Mail className="text-neon-blue" size={32} />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
               Let's Build the Future.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-xl mx-auto">
               Open for collaborations on Mobile Apps, Embedded Systems, and AI integrations.
            </p>

            {/* Resume Button - Moved to top */}
            <a
               href="/resume.pdf"
               download="Navendu_Resume.pdf"
               className="inline-flex px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan text-black font-bold rounded hover:opacity-90 transition-opacity items-center gap-2 mx-auto mb-12 shadow-lg shadow-neon-blue/20"
            >
               <FileText size={20} />
               DOWNLOAD RESUME
            </a>

            <div className="grid md:grid-cols-2 gap-6 mb-12 text-left max-w-2xl mx-auto">
               <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-neon-blue/40 transition-all group shadow-sm dark:shadow-none">
                  <div className="p-2 bg-gray-100 dark:bg-black rounded-full group-hover:text-neon-blue text-gray-500 dark:text-gray-400 transition-colors shrink-0">
                     <Mail size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                     <span className="text-xs text-gray-500 uppercase tracking-wider block">Email</span>
                     <span className="text-gray-900 dark:text-white font-mono truncate block">{CONTACT_INFO.email}</span>
                  </div>
               </a>

               <a href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-neon-green/40 transition-all group shadow-sm dark:shadow-none">
                  <div className="p-2 bg-gray-100 dark:bg-black rounded-full group-hover:text-neon-green text-gray-500 dark:text-gray-400 transition-colors shrink-0">
                     <Phone size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                     <span className="text-xs text-gray-500 uppercase tracking-wider block">WhatsApp</span>
                     <span className="text-gray-900 dark:text-white font-mono truncate block">{CONTACT_INFO.phone}</span>
                  </div>
               </a>
            </div>

            <div className="flex justify-center gap-6 mb-12">
               <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:scale-110 transition-transform"><Github /></a>
               <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:scale-110 transition-transform"><Linkedin /></a>
               {CONTACT_INFO.youtube && <a href={CONTACT_INFO.youtube} target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-white hover:scale-110 transition-transform"><Youtube /></a>}
               {CONTACT_INFO.instagram && <a href={CONTACT_INFO.instagram} target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-white hover:scale-110 transition-transform"><Instagram /></a>}
            </div>

         </div>

         <footer className="mt-20 text-center border-t border-gray-200 dark:border-white/5 pt-8">
            <p className="text-gray-500 dark:text-gray-600 text-xs font-mono">
               404: COPYRIGHT NOT FOUND. BUT THE COFFEE WAS REAL. ☕
            </p>
         </footer>
      </section>
   );
};

export default Contact;