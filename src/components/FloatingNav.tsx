import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BookOpen, Clock, Users, Flame, ChevronRight, X } from 'lucide-react';

export default function FloatingNav() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Stories', href: '#success-stories' },
    { name: 'Blog', href: '#blog' },
    { name: 'Apply', href: '#enrolment' }
  ];

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredNode(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredNode(null);
    }, 200); // Small delay allows the mouse to travel to the overlay
  };

  const programsData = [
    {
      title: "CAT Preparation",
      icon: Flame,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      borderColor: "group-hover:border-blue-500/50",
      desc: "Comprehensive coaching, analytics, and mentorship for IIM admissions.",
      batches: ["Target 2024 (Crash)", "Target 2025 (Comprehensive)", "Weekend Pro"]
    },
    {
      title: "IPMAT Strategy",
      icon: BookOpen,
      color: "text-violet-500",
      bg: "bg-violet-500/10",
      borderColor: "group-hover:border-violet-500/50",
      desc: "5-year integrated program mastery for IIM Indore & Rohtak.",
      batches: ["Foundation 2026", "Target 2025", "Interview Prep Modules"]
    },
    {
      title: "CLAT Excellence",
      icon: Users,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      borderColor: "group-hover:border-emerald-500/50",
      desc: "Top-tier NLU entrance coaching engineered by legal experts.",
      batches: ["Droppers Batch", "Target 2026", "Legal Reasoning Mod"]
    }
  ];

  return (
    <>
      {/* Mega Menu Full-Screen Overlay */}
      <AnimatePresence>
        {hoveredNode === 'Programs' && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[45] bg-[#0A0A0A]/95 backdrop-blur-3xl overflow-hidden flex flex-col pointer-events-auto"
            onClick={() => setHoveredNode(null)}
          >
            {/* Background Accent Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/5 blur-[120px] pointer-events-none rounded-full" />
            
            <button 
              onClick={(e) => { e.stopPropagation(); setHoveredNode(null); }}
              className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 rounded-full transition-all hover:scale-105 z-[60] group shadow-2xl"
              aria-label="Close menu"
            >
              <X strokeWidth={2} className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>
            
            <div 
              className="p-8 md:p-16 flex-1 overflow-y-auto w-full max-w-7xl mx-auto flex flex-col justify-center relative z-10"
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside content from closing
              onMouseEnter={() => handleMouseEnter('Programs')}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
                <div>
                  <span className="inline-block bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">Explore Tracks</span>
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">Academic Programs</h2>
                  <p className="text-xl text-neutral-400 font-medium max-w-xl">Select a specialized track to discover available batches, interactive curriculum, and expert mentorship.</p>
                </div>
                <a href="#programs" className="bg-white text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-transform group shadow-xl shadow-white/10">
                  View All Details <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {programsData.map((prog, idx) => (
                  <motion.a
                    href="#programs"
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1, duration: 0.5, ease: "easeOut" }}
                    className={`group bg-[#111111] hover:bg-[#151515] border border-white/5 ${prog.borderColor} transition-colors duration-500 rounded-[2.5rem] p-8 md:p-10 flex flex-col relative overflow-hidden`}
                  >
                    <div className="mb-8">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-500 ${prog.bg} ${prog.color}`}>
                        <prog.icon strokeWidth={1.5} className="w-7 h-7" />
                      </div>
                      <h3 className="text-3xl font-bold text-white tracking-tight mb-3 flex items-center justify-between">
                        {prog.title}
                        <ChevronRight className="w-6 h-6 text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </h3>
                      <p className="text-neutral-400 font-medium leading-relaxed">{prog.desc}</p>
                    </div>
                    
                    <div className="mt-auto space-y-4 pt-8 border-t border-white/10">
                      <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block">Upcoming Batches</span>
                      <div className="flex flex-col gap-3">
                        {prog.batches.map(batch => (
                          <div key={batch} className="flex items-center gap-3 text-base font-semibold text-neutral-300 group-hover:text-white transition-colors bg-white/5 rounded-xl px-4 py-3 border border-white/5">
                            <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
                            {batch}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Pill Nav */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, delay: 0.5 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
      >
        {/* Invisible exact-size bridge to prevent hover loss when traversing up */}
        <div 
          className="absolute bottom-full left-0 right-0 h-16 bg-transparent" 
          onMouseEnter={() => handleMouseEnter('Programs')}
          onMouseLeave={handleMouseLeave}
        />

        <nav className="bg-[#111111]/90 backdrop-blur-3xl p-2 rounded-full flex gap-1 shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10 text-white relative z-50 transition-colors">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
              className={`px-6 py-3 text-sm font-bold rounded-full transition-all tracking-tight ${
                hoveredNode === link.name ? 'bg-white text-black' : 'text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </motion.div>
    </>
  );
}
