import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Curriculum() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  const programs = [
    { 
      id: 'CAT', title: "Ace CAT", desc: "Crack top B-schools with structured preparation, mock tests, and expert mentorship.", color: "bg-blue-500", glow: "from-blue-500", price: "₹45,999",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80&auto=format&fit=crop"
    },
    { 
      id: 'IPMAT', title: "Master IPMAT", desc: "Build strong aptitude, logical reasoning, and interview skills starting early.", color: "bg-violet-500", glow: "from-violet-500", price: "₹60,000",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80&auto=format&fit=crop"
    },
    { 
      id: 'CLAT', title: "Conquer CLAT", desc: "Master legal reasoning, general knowledge, and test strategies.", color: "bg-emerald-500", glow: "from-emerald-500", price: "₹35,000",
      image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80&auto=format&fit=crop"
    }
  ];

  return (
    <section ref={ref} className="h-[300vh] bg-[#050505] text-white relative">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Faint technical grid background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-5 opacity-10 pointer-events-none" />

        {/* Static Header Component positioned via Normal Flow to avoid overlapping! */}
        <div className="pt-24 md:pt-32 px-6 md:px-12 w-full relative z-20 shrink-0">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-2">Curriculum</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Academic Paths</h2>
        </div>

        {/* Content Area - Flex-1 takes remaining height */}
        <div className="flex-1 w-full relative flex items-center">
          <motion.div style={{ x }} className="flex w-[300vw] items-center relative z-10">
            {programs.map((prog) => (
              <div key={prog.id} className="w-[100vw] flex-shrink-0 flex items-center justify-center px-6 md:px-24">
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                  
                  {/* Text Side */}
                  <div className="flex flex-col items-start pr-0 md:pr-8">
                    <div className={`px-5 py-2 rounded-full text-xs font-bold mb-6 w-max ${prog.color} text-white tracking-widest uppercase`}>{prog.id}</div>
                    <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-none">
                      {prog.title}.
                    </h3>
                    <p className="text-xl md:text-2xl text-neutral-400 font-medium leading-tight tracking-tight mb-10">
                      {prog.desc}
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                      <button className="flex items-center gap-4 text-lg md:text-xl font-bold hover:text-white text-neutral-300 transition-colors group">
                        Explore Program 
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all shadow-xl">
                          <ArrowRight />
                        </div>
                      </button>
                      <div className="flex flex-col pl-0 sm:pl-8 sm:border-l border-white/10">
                        <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest mb-1">Starting at</span>
                        <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">{prog.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual Card Side */}
                  <div className="w-full aspect-square md:aspect-[4/5] bg-[#111] rounded-[3rem] border border-white/10 p-2 overflow-hidden shadow-2xl relative group">
                    <div className={`absolute inset-0 opacity-40 transition-transform duration-1000 group-hover:scale-125 bg-gradient-to-br ${prog.glow} to-transparent blur-[80px] pointer-events-none z-0`} />
                    
                    <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative z-10 border border-white/5">
                      <img 
                        src={prog.image} 
                        alt={prog.title} 
                        className="w-full h-full object-cover opacity-80 mix-blend-screen group-hover:scale-105 transition-transform duration-1000" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                      
                      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                        <div>
                          <div className="text-4xl font-bold tracking-tighter mb-1 text-white">500+</div>
                          <div className="text-sm font-bold uppercase tracking-widest text-neutral-400">Top Admits</div>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                          <ArrowRight className="w-5 h-5 -rotate-45" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
