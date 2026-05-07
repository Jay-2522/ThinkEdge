import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Features() {
  const ref = useRef(null);
  
  // Track scroll for background/theme transition
  // "start start" offset guarantees the transition ONLY begins when the Black Hero section 
  // is completely off-screen. This forces the fade to be a FULL PAGE seamless crossfade!
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start start", "end end"] 
  });
  
  const bg = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ["#050505", "#F4F4F5", "#F4F4F5", "#050505"]);
  const textColor = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ["#ffffff", "#0A0A0A", "#0A0A0A", "#ffffff"]);
  const mutedText = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ["#a3a3a3", "#737373", "#737373", "#a3a3a3"]); 

  // Track scroll for parallax effects
  const { scrollYProgress: parallaxProgress } = useScroll({ 
    target: ref, 
    offset: ["start end", "end start"] 
  });
  const imgY = useTransform(parallaxProgress, [0, 1], ["-20%", "20%"]);
  const blockX = useTransform(parallaxProgress, [0, 1], ["-5%", "5%"]);

  return (
    <motion.section 
      id="methodology" 
      ref={ref} 
      style={{ backgroundColor: bg, color: textColor }}
      className="relative overflow-hidden"
    >
      {/* Top Space for Page Transition: 
          Since Hero is gone, user scrolls across this 80vh of empty space 
          while the *entire screen* seamlessly shifts from dark mode to light mode! */}
      <div className="h-[80vh] w-full" />

      {/* The Actual Methodolgy Content Area */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pb-10">
        <div className="mb-16">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight mb-6">
            Discover the <br/>
            <span className="text-blue-600">transformative impact.</span>
          </h2>
          <motion.p style={{ color: mutedText }} className="text-2xl md:text-3xl font-medium max-w-3xl tracking-tight transition-colors duration-0">
            Our analytics are a game-changer. They guide our teaching strategies by enabling data-driven decisions dynamically.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          
          <motion.div style={{ x: blockX }} className="md:col-span-8 bg-[#111] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-xl shadow-black/5 flex flex-col justify-end group">
            <motion.div style={{ y: imgY }} className="absolute inset-0 z-0 bg-neutral-200">
               <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1200&auto=format&fit=crop" className="w-full h-[140%] object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105" alt="Alumni" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <div className="relative z-20 text-white">
              <div className="inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4 border border-white/20">Alumni Success</div>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">Priya Sharma</h3>
              <p className="text-xl md:text-2xl text-neutral-300 font-medium tracking-tight">IIM Ahmedabad '26</p>
            </div>
          </motion.div>

          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-[#050505] text-white rounded-[2.5rem] p-8 relative overflow-hidden h-[300px] flex flex-col justify-between shadow-xl shadow-black/5 group border border-white/5">
              <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">Success Rate</div>
              <div className="text-8xl md:text-9xl font-bold tracking-tighter">98%</div>
              <div className="text-xl font-medium text-neutral-300 tracking-tight">Placement in Top Tier Intakes</div>
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowUpRight strokeWidth={1.5} className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </div>
            </div>

            <div className="bg-blue-600 text-white rounded-[2.5rem] p-8 relative overflow-hidden flex-1 flex flex-col justify-between shadow-xl shadow-blue-600/20 group">
               <div className="text-xs font-bold uppercase tracking-widest text-blue-200">Global Ranking</div>
               <div className="text-5xl md:text-6xl font-bold tracking-tighter">Top 1%</div>
               <div className="text-blue-100 font-medium text-lg leading-tight tracking-tight">Of specialized academies worldwide.</div>
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Space for Page Transition: 
          Allows space to fade back to dark perfectly before next section appears */}
      <div className="h-[80vh] w-full" />
    </motion.section>
  );
}
