import { motion } from 'motion/react';

const facultyList = [
  { name: "Dr. Arvind Sharma", role: "Head of Quantitative Aptitude", desc: "15+ years simplifying complex mathematics.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" },
  { name: "Meera Reddy", role: "Verbal Ability Expert", desc: "Oxford alumni with a focus on critical reading.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
  { name: "Siddharth Jain", role: "Logical Reasoning & DI", desc: "Data scientist turned educator and puzzle master.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" },
  { name: "Priya Menon", role: "Legal Reasoning (CLAT)", desc: "Ex-Corporate Lawyer bringing real-world logic.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" },
  { name: "Rahul Deshmukh", role: "Higher Mathematics", desc: "Expert in rapid calculation frameworks.", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop" }
];

// Duplicate for infinite seamless loop
const duplicatedFaculty = [...facultyList, ...facultyList, ...facultyList];

export default function Faculty() {
  return (
    <section className="py-32 bg-[#050505] text-white overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-center">
          World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Faculty.</span>
        </h2>
        <p className="text-xl text-neutral-400 font-medium tracking-tight text-center max-w-2xl mx-auto">
          Learn from industry veterans, academic scholars, and top-tier professionals.
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Left/Right Fades for seamless looping effect */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20" />

        {/* Infinite Scrolling Track */}
        <motion.div 
          className="flex gap-6 whitespace-nowrap pl-6 hover:[animation-play-state:paused]"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {duplicatedFaculty.map((person, idx) => (
            <div 
              key={idx} 
              className="w-72 md:w-80 shrink-0 bg-[#111111] rounded-3xl p-6 border border-white/10 flex flex-col items-center text-center shadow-xl hover:bg-[#1a1a1a] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-white/10 shadow-lg">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-1">{person.name}</h3>
              <div className="text-xs font-bold uppercase tracking-widest text-[#4b8dec] mb-3">{person.role}</div>
              <p className="text-sm text-neutral-400 font-medium whitespace-normal w-full leading-relaxed">
                {person.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
