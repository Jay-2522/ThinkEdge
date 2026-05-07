import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-32 bg-[#f4f4f5] text-black overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-4xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] text-[#1d4ed8] mb-8"
          >
            transformative impact.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-neutral-400 leading-snug max-w-2xl"
          >
            Our analytics are a game-changer. They guide our teaching strategies by enabling data-driven decisions dynamically.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full min-h-[600px]">
          
          {/* Main Large Image Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 relative rounded-[2.5rem] overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop" 
              alt="Alumni Success" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 flex flex-col items-start text-white">
              <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                Alumni Success
              </span>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">Priya Sharma</h3>
              <p className="text-xl md:text-2xl font-medium text-white/80">IIM Ahmedabad '26</p>
            </div>
          </motion.div>

          {/* Right Side Stacked Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Success Rate Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 bg-[#0a0a0a] rounded-[2.5rem] p-10 flex flex-col justify-between text-white relative group cursor-pointer overflow-hidden"
            >
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors z-10">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-6">Success Rate</span>
                <span className="text-7xl md:text-[6rem] font-bold tracking-tighter leading-none mb-6 block">98%</span>
              </div>
              <p className="text-xl text-neutral-300 font-medium tracking-tight relative z-10">
                Placement in Top Tier Intakes
              </p>
            </motion.div>

            {/* Global Ranking Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1 bg-[#1d4ed8] rounded-[2.5rem] p-10 flex flex-col justify-between text-white relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-white/70 block mb-6">Global Ranking</span>
                <span className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6 block">Top 1%</span>
              </div>
              <p className="text-xl text-white/90 font-medium tracking-tight relative z-10">
                Of specialized academies worldwide.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
